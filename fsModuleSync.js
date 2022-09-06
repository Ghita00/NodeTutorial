//use to interact with file system Sync!

const {readFileSync, writeFileSync} = require('fs')

//OPEN IN READ
//function witch that we must read specificaly 1)path 2)codific
const first = readFileSync("./folder/first.txt","utf8")
const second = readFileSync("./folder/second.txt","utf8")

console.log(first)
console.log(second)

//OPEN IN WRITE
//if the file exist the content is overwrite but if the file not exist the file was created 
writeFileSync("./folder/first.txt", "now write that") //overwrite
writeFileSync("./folder/resorce/newfile.txt", "this file was created by code :)") //created and write

console.log(readFileSync("./folder/first.txt","utf8"))
console.log(readFileSync("./folder/resorce/newfile.txt","utf8"))
