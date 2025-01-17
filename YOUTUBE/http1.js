


// const http = require('http');
// const PORT = 5500
// const myServer = http.createServer((request , response)=> {
//     response.write("Server running successfully in port number 5500")

//     response.end()
// })

// myServer.listen(PORT)








// const http = require('http');
// const PORT = 6600
// const myServer = http.createServer((request , response)=>{
//     response.write("Surver Running Successfully Port Number 6600")

//     response.end()
// })


// myServer.listen(PORT)




const http = require('http');

const POST = 4500
const myServer = http.createServer((req , res)=> {
    res.write("Hi There Iam Siva")

    res.end()
})


myServer.listen(POST)