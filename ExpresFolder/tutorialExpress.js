//express is a framework to build web app
//npm install express --save --> for create 2 installation file

const express = require("express")
const app = express()

//List of method's express() 
//app.get --> request url with method post(default)
//app.post
//app.put
//app.delete
//app.all --> use to catch the error
//app.use --> include every src use the web pages
//app.listen --> create server + lissen port

app.get("/", (req, res)=>{
    res.status(200).send("new type creation of http sever") //res.write() + res.close()
})

app.get("/about", (req, res)=>{
    res.status(200).send("about page") //res.write() + res.close()
})

/*take 2 argoment
1. path
2. callback*/
app.all('*', (req, res)=>{
    console.log("here")
    res.status(404).send("not found :(")
})

app.listen(5000, ()=>{
    console.log("server lissening at port 5000") //execute in terminal's terminal  
})



