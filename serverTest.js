//link : https://www.youtube.com/watch?v=Oe421EPjeBE&t=2996s
//execute by terminal(cmd) after we are in project folder, the sintax is >node nameFileServer.js
//ctrl+C interrupt the server

/*GLOBAL VARIABLE
node.js work with global variables
__dirname = path to current directory
__filename = filename
require = function to use modules with CommonJs
module = info about current module
process = info about env where the program is begin excuted  
*/

/*MODULES
we can executed one file but can split the code in different file called modules 
tanks the module we can incapsulate code with only share minimum
every file is a module 
if we print module, we see an expots field, that is a object use for insert what we want share with other modules

for share we must write:
1. module.exports = {what, we, want, share} if we share wariables
2. module.exports = functionNameVariable if we share variables  

with the function require() we can include information by other modules

when we include something in server.js if we want use that we must use the new name 
*/

const reqFun = require('./firstModule')
//in firstModule.js the function call Fun but now use reqFun because we use require
reqFun("gio") 

/*Alternative sintax*/
const datas = require('./secondModule')
//we reference at fields with variable's name in module
console.log(datas.items) 
console.log(datas.singlePerson)

/*DIFFERENT TYPES OF MODULES
1. os 
2. path
3. fs
4. http
*/



