const path = require('path');
//print the path 
console.log(path.sep)

//union different path between
const filepath = path.join("/folder","resorce","text.txt")
console.log(filepath)

//retun last element of path
const base = path.basename(filepath)
console.log(base)

//absolute path and resolve make join with another path
const absolute = path.resolve(__dirname)
const absoluteJoin = path.resolve(__dirname, "folder","resorce","text.txt")
console.log(absolute)
console.log(absoluteJoin)
