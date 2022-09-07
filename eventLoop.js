/*EVENT LOOP
input output operation 
read the documentation 
js execute first immedial code and after execute callback
*/

/*xample
console.log("first")
setInterval(() => {
    console.log("insert")
}, 0)
console.log("second")
OUTPUT: first second insert (in this order)*/

/*
event loop was used beacuse js is single thread and we want similar multithread
with the promise we can simulate fake multithread
for setup we must use async, await and return new promise
*/ 

//NOT EFFICENTY
const {readFile} = require('fs')
readFile("./folder/first.txt", "utf8", (err, data) => {
    if(err){
        console.log(err)
    }else{
        console.log("result: "+data)
    }
})

//EFFICENTY WITH THEN AND CATCH + wrapping function
const getText = (path) => {
    //setup, the params(resolve, reject) are 2 function 
    return new Promise((resolve, reject)=>{
        readFile(path, "utf8", (err, data) => {
            if(err){
                reject(err) //insert value error
            }else{
                resolve(data) //insert value correct, that is like a return statement
            }
        })
    })
}

//with this method js wait the code's execution + wrapping function
getText("./folder/first.txt")
    .then((result) => {console.log(result)}) //.then was used to resolve the promise
    .catch((error) => {console.log(error)}) //.catch was used to take the error

//EFFICENTY WITH ASYNC AND AWAIT
const start = async () =>{
    //in this block the function try to make everything but when find an error enter in row 58
    try{
        //await the responce function
        const first = await getText("./folder/first.txt")
        const second = await getText("./folder/second.txt")
        console.log(first, second) //these here 2 promise resolved 
    }catch(error){
        console.log(error)
    }
}
start()

//EFFICENTY WITH THEN AND CATCH no wrapping function
const util = require("util")
//use this module and at the method promisify pass the function 
//we must taked at the function all param aren't a promise
const readFilePromise = util.promisify(readFile) 

const start2 = async () =>{
    //in this block the function try to make everything but when find an error enter in row 58
    try{
        //await the responce function
        //readFile("./folder/first.txt", "utf8", (err, data) => {})
        const first = await readFilePromise("./folder/first.txt", "utf8")
        const second = await readFilePromise("./folder/second.txt", "utf8")
        console.log(first, second) //these here 2 promise resolved 
    }catch(error){
        console.log(error)
    }
}
start2()


