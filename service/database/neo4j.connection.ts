import chalk from "chalk";
import { Query } from "cypher-query-builder";
import dotenv from "dotenv";
import neo4j, { Driver, Neo4jError, Record, RecordShape } from "neo4j-driver";
// import { withRetry } from '../util/errors.util';
import { ColorLogger } from "./utils/log.util";
import { withRetry } from "./utils/retries.util";

dotenv.config();

export class Neo4jConnection {
  private driver: Driver; // ways for code to interact with Database (neo4j no awareness of typescript, etc) driver gives us ability to write code js such that it can generate cypher to interact with neo4j

  private static connectionCache: {
    [key: string]: Neo4jConnection; // stores info to connect more quickly
  } = {};

  constructor(
    private uri: string,
    // private username?: string,
    // private password?: string,
    private database?: string // do we need this if we are only going to have 1 database (or database version)
  ) {
    // Neo4J Javascript Driver docs: 'https://neo4j.com/docs/javascript-manual/current/client-applications/'

    // does the driver need this specifically? of not: update this when we have auth
    // this.driver = neo4j.driver(this.uri, this.auth, {
      this.driver = neo4j.driver(this.uri, undefined, {
        maxConnectionLifetime: 3 * 60 * 1000, // 3 minutes
        // The server expiration is set at 60 minutes
      });
  }

  getInfo() {
    return {
      uri: this.uri,
      // username: this.username,
      database: this.database,
    };
  }

  getSession() {
    const options: { database?: string } = {};
    if (this.database) options.database = this.database;
    return this.driver.session(options);
  }

  // any is temporary for now as we migrate to using properly typed queries
  // Logger is required here to make sure we're always passing the right logger down
  // (e.g. using NullLogger instead of console in tests)
  async runQuery<T extends RecordShape>(query: Query, logger: Console) {
    // this is how we might get logging into our service logs
    const { query: cypher, params } = query.buildQueryObject();
    const colorLogger = new ColorLogger(logger, chalk.cyan);
    return colorLogger.perf(() => this.runRaw<T>(cypher, params), {
      header: "NEO4J",
      pre: ({ debug }) => {
        debug(query.interpolate());
      },
    });
  }

  // methods like writeRaw are our functions using functions from the Driver
  // wrapper we use to interact with neo4j (instead of using session.executeWrite everywhere)
  async writeRaw(cypher: string, params = {}) {
    // Write is only allowed for tests and seeds on Arch search (read only app)
    const session = this.getSession();
    try {
      return await session.executeWrite((tx) => tx.run(cypher, params));
    } finally {
      session.close();
    }
  }

  async runRaw<T extends RecordShape>(cypher: string, params = {}) {
    const session = this.getSession();
    try {
      return await withRetry(
        () => session.executeRead((tx) => tx.run<T>(cypher, params)),
        {
          // After about an hour, we often get an "Neo4jError: LDAP authorization info expired"
          // Our configuration should refresh the authentication more frequently than
          // the server expiration, but it's not and we still get the error.
          // Retrying the query should refresh the authentication token
          test: (e) => e instanceof Neo4jError && /LDAP/.test(e.message),
          maxRetries: 1,
        }
      );
    } finally {
      session.close();
    }
  }

  async streamRaw<T extends RecordShape>( // what is this for - not used in Arch Search
    // streams the data instead of waiting for it to return ?
    cypher: string,
    params = {},
    { onNext }: { onNext?: (record: Record<T>) => void } = {}
  ) {
    const session = this.getSession();
    return new Promise<void>((resolve, reject) => {
      session.executeRead((tx) =>
        tx.run<T>(cypher, params).subscribe({
          onNext,
          onCompleted: () => {
            session.close();
            resolve();
          },
          onError: (error) => {
            console.error(error);
            reject();
          },
        })
      );
    });
  }

  async close() {
    await this.driver.close();
    if (Neo4jConnection.connectionCache[this.cacheKey]) {
      delete Neo4jConnection.connectionCache[this.cacheKey];
    }
  }

  get cacheKey() {
    return Neo4jConnection.neo4jInstanceKey(this.uri, this.database);
  }

  // private get auth() {
  //   if (this.username && this.password) {
  //     return neo4j.auth.basic(this.username, this.password);
  //   }
  //   return undefined;
  // }

  // defines what we need to establish the connection -> specifically for parabola
  // static parabolaNeo4jInstance(databaseName = process.env.NEO4J_DATABASE) {
  static parabolaNeo4jInstance(databaseName: string) {
    // when nothing is defined we pass in line 8 in the seed.ts file (const parabolaDatabaseName)
    return this.connection(
      // bolt - connection protocol specifically for neo4j
      process.env.NEO4J_URI || "bolt://localhost:7687",
      // process.env.NEO4J_USERNAME,
      // process.env.NEO4J_PASSWORD,
      databaseName
    );
  }

  private static connection(
    uri: string,
    // username?: string,
    // password?: string,
    database?: string
  ) {
    // if we have already connected, use that existing connection, otherwise instantiate a new connection
    Neo4jConnection.connectionCache[this.neo4jInstanceKey(uri, database)] ??= // '??=' ==> nullish coalescing assignment operator -> if everything to left of oper is null, then assign it to whats to the right of the operator
      // new Neo4jConnection(uri, username, password, database);
      new Neo4jConnection(uri, database);


    return Neo4jConnection.connectionCache[
      this.neo4jInstanceKey(uri, database)
    ];
  }

  private static neo4jInstanceKey(uri: string, databaseName?: string) {
    return `${uri}:${databaseName}`;
  }
}
