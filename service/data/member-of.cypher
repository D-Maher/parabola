// Create Artist nodes if they do not already exist
MERGE (paul:Artist {name: 'Paul McCartney'})
MERGE (dave:Artist {name: 'Dave Grohl'})

// Create Band nodes if they do not already exist
MERGE (theBeatles:Band { name: 'The Beatles' })
MERGE (nirvana:Band { name: 'Nirvana' })
MERGE (fooFighters:Band { name: 'Foo Fighters' })

// Establish :MEMBER_OF relationships between Arist and Band nodes if they are not already established
MERGE (paul)-[:MEMBER_OF]->(theBeatles)
MERGE (dave)-[:MEMBER_OF]->(nirvana)
MERGE (dave)-[:MEMBER_OF]->(fooFighters)

