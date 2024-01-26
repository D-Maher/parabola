import dotenv from "dotenv";
import path from "path";
import { exit } from "process";
import TestDatabase from "../database/neo4j.database";

dotenv.config();

const parabolaDatabaseName = process.env.NEO4J_DATABASE || "parabola";

async function seedDatabase() {
  const abbvieDatabase = new TestDatabase(parabolaDatabaseName);
  try {
    console.info(`Creating and/or cleaning ${parabolaDatabaseName}`);
    await abbvieDatabase.createDatabase();
    // whats a sleeker way to say -> look into the data directory and seed all cypher files
    const filenames = ["artists.cypher"];
    console.info(`Seeding ${parabolaDatabaseName}`);
    await abbvieDatabase.seedAll(
      filenames.map(
        (filename) => path.join(__dirname, "..", "data", filename) // '../src/data/<filename>'
      )
    );
    console.info(`Database '${parabolaDatabaseName}' seeded`);
  } finally {
    await abbvieDatabase.close();
  }
}

if (process.env.NODE_ENV === "production") {
  console.error("Cannot seed data in production mode");
  exit(1);
}

console.info(`NEO4J_URI=${process.env.NEO4J_URI}`);
const { hostname } = new URL(process.env.NEO4J_URI!); // Will throw error if undefined
const validHosts = ["localhost", "neo4j"];
if (!validHosts.includes(hostname)) {
  console.error(`You can only seed data if your NEO4J_URI is on ${validHosts}`);
  exit(1);
}

// Using promise because:
// > Top-level 'await' expressions are only allowed when the 'module' option
// > is set to 'esnext' or 'system', and the 'target' option is set to 'es2017'
// > or higher
seedDatabase()
  .then(() => {
    console.info("Done");
    exit(0);
  })
  .catch((e) => {
    console.error(e);
    exit(1);
  });
