//event-driven programming with Heavily
const eventEmitter = require("events")

//istance of class
const customEmitter = new eventEmitter()

//when event triggered
//all params I recive we put on the anonymus function
customEmitter.on('responce', (name, age) => {
    console.log("data recive:" + name + " " + age)
})
//if I send params but the anonyms haven't params they are ignored
customEmitter.on('responce', () => {
    console.log("another event")
})

//trig all event responce before this row
customEmitter.emit('responce', "giorgio", 22)
