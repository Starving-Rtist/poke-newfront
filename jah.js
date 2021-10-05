let faveMovies = ['Inception', 'Magnolia', ['Back To The Future', 'Back To The Future II', 'Back To The Future III'],['Toy Story', 'Toy Story 2', 'Toy Story 3', 'Toy Story 4']]

flattenedArray = faveMovies.flat() // depth is not specified

flatWithDepth = faveMovies.flat(2) // depth of 2 is mentioned so we get complete flat array

console.log(flattenedArray)

console.log(flatWithDepth)