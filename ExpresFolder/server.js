const http = require("http")
const {readFileSync} = require('fs')

const server = http.createServer((req, res) => {
    console.log("server on")  
    //console.log(req.method) //give the method
    console.log(req.url) //give the url after domain 
    
    //resorce to render 
    const home = readFileSync("./index.html")
    const style = readFileSync("./style.css")

    //view html
    if(req.url == '/'){
        res.writeHead(200, {"content-type":"text/html"})
        //with this method we can create the web page step by step
        //every when we must request resorce at server(src) we must read file 
        
        //render 2 times
        res.write(home)
        res.write(home)
        res.end() //VERY IMPORTANT INSERT THIS BECAUSE NOT WORK
    }

    //view css
    if(req.url == '/style.css'){
        res.writeHead(200, {"content-type":"text/css"})
        res.write(style)
        res.end() //VERY IMPORTANT INSERT THIS BECAUSE NOT WORK
    }
    //ecc like other js, img ....
    

    //different type of view informations for different tipe of exit
    
})

server.listen(5000)