const express = require("express")
const path = require("path")

const app = express()

//with this row we include every single resorce in one shot
app.use(express.static('./public'))

app.get('/', (req, res) => {
    //with this combo we can render a web page html whitout src
    res.sendFile(path.resolve(__dirname, './index.html'))
})

app.all('*', (req, res) => {
    res.status(404).send("error")
})

app.listen(5000, ()=>{
    console.log("server listeing on port 5000")
})


