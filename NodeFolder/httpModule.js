//http module, use to interact with protocolo http

//SETUP MODULE
const http = require("http")
//create a server
//req --> request client, big object
//res --> responce request client 
const server = http.createServer((req, res) => {
    //with url we can create a different root
    if (req.url == '/'){
        res.write('<h1>welcome to the home page</h1>') //write at screen
    }else{
        res.write('another page') //write at screen
    }
    res.end('i can write') //close responsive
})
/*
the different between write() and end()
write --> whrite the string on webpage and server execute new row
end --> whrite the string on webpage and close
if at row 10 we are going to use end() row 14 will not execute
*/

//port server
server.listen(5000)
