// Create Artist nodes if they do not already exist
MERGE (paul:Artist {name: 'Paul McCartney'})
MERGE (dave:Artist {name: 'Dave Grohl'})
MERGE (bey:Artist {name: 'Beyonce Knowles Carter'})
MERGE (ek:Artist {name: 'Emily King'})
MERGE (curt:Artist {name: 'Curt Cobain'})

// "free-floating" Artist nodes
MERGE (:Artist { name: 'John Lennon' })
MERGE (:Artist { name: 'Vincent Van Gogh' })
MERGE (:Artist { name: 'Pablo Picasso' })
MERGE (:Artist { name: 'Leonardo Da Vinci' })
MERGE (:Artist { name: 'Miles Davis' })
MERGE (:Artist { name: 'John Coltrane' })
MERGE (:Artist { name: 'Charlie Parker' })
MERGE (:Artist { name: 'Duke Ellington' })

// Create Band nodes if they do not already exist
MERGE (theBeatles:Band { name: 'The Beatles' })
MERGE (nirvana:Band { name: 'Nirvana' })
MERGE (fooFighters:Band { name: 'Foo Fighters' })
MERGE (destinysChild:Band { name: "Destiny's Child" })

// "free-floating" Band nodes
MERGE (:Band { name: 'Miles Davis Quintet' })
MERGE (:Band { name: 'John Coltrane Quartet' })
MERGE (:Band { name: 'Queen' })
MERGE (:Band { name: 'The Doors' })

// Create Music Genre nodes if they do not already exist
MERGE (country:Genre { type: 'Country' })
MERGE (rnb:Genre { type: 'R&B' })
MERGE (rock:Genre { type: 'Rock' })
MERGE (alt:Genre { type: 'Alternative' })

// Establish :MEMBER_OF relationships between Arist and Band nodes if they are not already established
MERGE (paul)-[:MEMBER_OF]->(theBeatles)
MERGE (curt)-[:MEMBER_OF]->(nirvana)
MERGE (dave)-[:MEMBER_OF]->(nirvana)
MERGE (dave)-[:MEMBER_OF]->(fooFighters)
MERGE (bey)-[:MEMBER_OF]->(destinysChild)

// Establish :PLAYER_OF relationships between Arist and Genre nodes if they are not already established
MERGE (bey)-[:PLAYER_OF]->(country)
MERGE (ek)-[:PLAYER_OF]->(rnb)
MERGE (dave)-[:PLAYER_OF]->(rock)
MERGE (dave)-[:PLAYER_OF]->(alt)
MERGE (curt)-[:PLAYER_OF]->(alt)

