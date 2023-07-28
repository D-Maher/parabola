CREATE (:Song {name: 'Hey Jude'})<-[:WROTE]-(:Person { name: 'Paul McCartney' })-[:IS_MEMBER_OF]->(:Group { name: 'The Beatles'})

CREATE (:Painting { name: 'Starry Night'})<-[:PAINTED]-(:Person {name: 'Van Gogh' })

CREATE (:Movie { name: 'Interstellar'})<-[:DIRECTED]-(:Person { name: 'Christopher Nolan' })

