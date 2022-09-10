const express = require("express")
const app = express()
//include data json by another file
//the name it's the same of data.json
const {people} = require("./data") 

app.get("/", (req, res) => {
    //return a json file --> list of dictionary 
    /*res.json([
        {
            name: "giorgio", 
            age: "22"
        },{
            name: "romina", 
            age: "22"
        }
    ])*/
    //return a json file 
    //res.json(people)
    res.send("<h1>Home</h1><a href=/api/people>People</a>")
})

//this tecquiche for view the json file in another page 
app.get("/api/people", (req, res)=>{
    //function for modify every element of array
    const newPeople = people.map((people)=>{
        const {id, name, surname} = people
        return {id, name, surname}
    })
    res.json(newPeople)
})

//param cutom in url ==> :nameParam
//every time we use :name we have an param 
app.get("/api/people/:PersonID", (req, res) => {
    //console.log(req)
    //console.log(req.params)
    const {PersonID} = req.params
    //find an element in array
    const singlePerson = people.find(p => 
        //console.log(p.id == PersonID)    
        p.id == PersonID
    )
    if(singlePerson == undefined){
        res.status(404).send("error page :(")
    }
    res.json(singlePerson)
})

app.get("/api/v1/query", (req, res) =>{
    //domain.url?query --> after ? is a query, that is a dictionary
    //with & we can combine different query
    console.log(req.query)
    const {search, all} = req.query
    let sortedPeolple = [...people]
   
    if(search){
        let result
        for(let i = 0; i < sortedPeolple.length; i++){
            if(sortedPeolple[i].id == search)
                result = sortedPeolple[i]
        }
        res.status(200).send(result)
    }
    if(all){
        res.json(sortedPeolple)
    }
    
})

app.listen(5000, ()=>{
    console.log("server on and listening port 5000")
})
