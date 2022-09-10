const express = require("express")
const app = express()
//get method
let{people} = require("./data")

app.get("/api/people",(req, res) =>{
    res.status(200).json(people)
})

//post method
//by the html form to create

app.listen(5000, ()=>{
    console.log("server on and listening port 5000")
})
