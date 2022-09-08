const http = require("http")

const server = http.createServer()

//managment event request
server.on('request', (req, res) => {
    res.end("welcome")
})

server.listen(5000)