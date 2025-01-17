

const http =  require('http')
const PORT = 9001
const fs = require('fs')
const path = require('path');

console.log(__dirname);

const filePath = "/home/siva/Desktop/JTD BACKEND/DAY3/data.js"


// function readData() {
//     const data = fs.readFile("/data.js" , "utf-8");
//     return JSON.parse(data)
    
// }


// function writeData(data){

// }


const myServer = http.createServer((req , res)=> {
    fs.readFile(filePath , "utf-8" , (err , data)=>{
        if (err){
            console.log(err);
            res.writeHead(500 , {"content-type" : "text/plain"})
            res.end("Internal Server Error")
        }else{
            res.writeHead(200 , {"content-type" : "application/json"})
            res.end(data)
        }
    })
})

myServer.listen(PORT ,()=> {
    console.log("Server Running on Port No 9001");
})