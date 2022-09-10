const express = require("express")
const app = express()

//that is a Middlware --> req => middlware(do something) => res
//information about req
//next will use to go at the req
//the function take the params req, res in app.get("/")
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear();
    console.log(method, url, time)
    next() //go at req
}

//first sintax --> only page have the Middlware was applicated
app.get('/', logger ,(req, res) =>{
    res.send("home")
})

app.get('/about', (req, res) =>{
    res.send("about")
})

//second sintax --> every middlware was applicated at all pages
app.use({logger})
app.get('/', logger ,(req, res) =>{
    res.send("home")
})

app.get('/about', (req, res) =>{
    res.send("about")
})

app.listen(5000, ()=>{
    console.log("server on and listening port 5000")
})
