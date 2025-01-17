console.log("Hello WOrld!"); 


// http --> Create a Server
// fs --> used to Handle / interact with files
// os  --> Provide information about the OS
// path --> file path


const http = require('http');

const PORT = 9000
const myServer = http.createServer((request , response)=> {
        response.writeHead(200 , {'content-type' : 'text/plain'})
        response.write("Surever Running Successfully in Port No 9000")
        
        response.end()
})

myServer.listen(PORT)