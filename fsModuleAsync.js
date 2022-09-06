//use to interact with file system Async!
//we must use that tecnice when have button(the callback)
//most important, in this method the different operation was maked in different order as we wrote then
//we can use the Promise  


const {readFile, writeFile} = require('fs')

//OPEN IN READ
/*
1. path
2. codific
3. anonymus function, first param if there are errors, second param for result
*/
readFile("./folder/first.txt","UTF8", (err, res) => {
    if(err){
        console.log(err)
    }else{
        console.log(res)
    }
    second = readFile("./folder/first.txt","UTF8", (err, res) => {
        if(err){
            console.log(err)
        }else{
            console.log(res)
        }
    })
    console.log(res) //that is undefined why res is only in scope of anonymus function
    console.log(second)
})

//OPEN IN WRITE
/*
1. path file or where we want create a new file
2. how we want write
3. anonymus function, first param if there are errors, second param for result
*/
writeFile("./folder/first.txt","last write", (err, res) => {
    if(res){
        console.log(err)
    }else{
        console.log(res)
    }
})

readFile("./folder/first.txt","UTF8", (err, res) => {
    if(err){
        console.log(err)
    }else{
        console.log(res)
    }
})