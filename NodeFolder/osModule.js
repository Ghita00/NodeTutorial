//os modules, interact with operation system

const os = require("os")

//info about current user
const user = os.userInfo()  
console.log(user)

//system uptime in seconds
console.log('System uptime is ' + os.uptime())

//different operation about os module
//for all read documentation
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs)