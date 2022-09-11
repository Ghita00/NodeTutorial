module.exports = function(app, db){
    app.post("/notes", (req, res) => {
        //we will create the node here
        console.log(req.body)
        res.send("hello")
    })
}