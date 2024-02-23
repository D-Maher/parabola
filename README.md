# parabola
A playground app for learning about Neo4j and Apollo

## Set Up
   - clone the repo:
      - `git clone git@github.com:D-Maher/parabola.git`
   - install dependencies:
      - `npm install`
   - spin up the Neo4j container:
     - `docker compose up neo4j`
   - visit the Neo4j Browser: http://localhost:7474/browser/

## Commands:
   - Seed the database: `npm run seed`
   - Shut down the Neo4j container: `docker compose down`

## Neo4j Browser
 - http://localhost:7474/browser/

## Notes:
Image - the template(instructions) for the container
Container - the actual environment running

## Resources:
 - https://hub.docker.com/_/neo4j/
 - Image we are using on Arch: https://hub.docker.com/layers/library/neo4j/4.3.17-enterprise/images/sha256-5eae67d3e00386c1c1070937843b1d7b4ac0ab8e63505d098d13c48df672286a?context=explore
 - https://neo4j.com/docs/operations-manual/current/introduction/#:~:text=There%20are%20two%20editions%20of,%2C%20clustering%2C%20and%20failover%20capabilities.
 - https://medium.com/@faaizhussain/neo4j-4-0-docker-compose-9bead6634c8
 - Volumes:
    - https://docs.docker.com/storage/volumes/
    - https://docs.docker.com/compose/compose-file/compose-file-v3/#volumes
    - compose: https://docs.docker.com/compose/compose-file/07-volumes/
 - Neo4j Driver: https://github.com/neo4j/neo4j-javascript-driver

- APOC - lodash for neo4j cypher : https://neo4j.com/labs/apoc/
- BOLT: https://neo4j.com/docs/bolt/current/bolt/
      https://neo4j.com/docs/bolt/current/bolt/handshake/
         From Chat Gpt:
            When it is mentioned that Bolt is stateful unlike HTTP, it means that Bolt protocol maintains a continuous and persistent connection between the client and the server, allowing them to exchange data in a stateful manner. In contrast, HTTP is stateless, where each request is independent of any previous or future requests.

            Being stateful in Bolt protocol enables the server to maintain information about the client's session or context throughout multiple requests, eliminating the need to resend certain data with each request. This can result in improved performance and reduced overhead
            Database Transactions: Bolt is commonly used for communication between client applications and databases like Neo4j. In a transaction, multiple queries or operations are performed as part of a single logical unit of work. With Bolt being stateful, the server can maintain the transactional context and keep track of the progress, allowing the client to commit or rollback the transaction without the need to resend all the queries.
