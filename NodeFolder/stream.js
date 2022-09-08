/*4 tipe of streams
1. writeable  
2. readable
3. dublex
4. trasform
*/

//READ STREAM
const { createReadStream } = require('fs')

//where we reading
//highWaterMark --> 
//enconding --> read without buffer <...>
const stream = createReadStream("./folder/first.txt", {highWaterMark: 90000, encoding:"utf8"})

//in result we have the stream information
stream.on('data', (result) => {
    console.log(result)
})

