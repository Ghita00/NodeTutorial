//npm init --> create module
//npm install -save express mongodb body-parser --> install all tools necessary
//npm install --save-dev nodemon --> module
//npm run dev --> run server in deveplop

//include all tools
const express = require("express")
const MongoClient = require("mongodb").MongoClient
const bodyParser = require("body-parser")

//code
const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({express: true}))

require("./routes")(app, {})
app.listen(port, ()=>{
    console.log("lissening port "+port)
})
