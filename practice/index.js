

const { error } = require('console')
const http = require('http')
const PORT = 5003



const students = [
    {
        id: 1,
        name: "Siva",
        collge: "GDC",
        age: 22
    },
    {
        id: 2,
        name: "Naveen",
        collge: "GDC",
        age: 23
    }
]

const myServer = http.createServer((req, res) => {
    // res.write("Surver is Running...")
    // res.end()

    const method = req.method
    const url = req.url

    if (method === "GET" && url === "/students"){
        res.writeHead(200 , {"content-type" : "application/json"})
        res.end(JSON.stringify(students))
    }
    else if (method === "POST" && url === "/students"){
        const newUser = {
            id : students.length + 1,
            name : "New Student",
            collge : "New College",
            age : 20,
        }
        students.push(newUser)
        res.writeHead(200 , {"content-type" : "application.json"})
        res.end(JSON.stringify(students))
            
    }
    else if (method === "PUT" && url.startsWith("/students/")){
        const id = parseInt(url.split("/")[2]);
        const user = students.find((u => u.id === id));

        if (!user) {
            res.writeHead(404 , {"content-type" : "application/json"});
            res.end(JSON.stringify({error : "User Not Found!"}));
            return;
        }

        user.name = "Selvam";
        user.collge = "GDC";
        user.age = 24;
        res.writeHead(200 , {"content-type" : "application/json"});
        res.end(JSON.stringify(students));

        // let body = "";
        // req.on("data" , (chunk)=>{
        //     body += chunk.toString();
        // });

        // req.on("end" , ()=> {
        //     const updatedData = body;
        //     user.name = updatedData.name || user.name;
        //     user.collge = updatedData.collge || user.collge;
        //     user.age = updatedData.age || user.age;

        //     res.writeHead(200 , {"content-type" : "application/json"});
        //     res.end(JSON.stringify(user));
        // })

        
    }
    else if (method === "DELETE" && url.startsWith("/students/")){
        const id = parseInt(url.split('/')[2]);
        const userIndex = students.findIndex((u => u.id === id));

        if (userIndex === -1){
            res.writeHead(404 , {"content-type":"application/json"});
            res.end(JSON.stringify({error : "Data Not Found!"}));
            return;
        }

        students.splice(userIndex , 1);
        res.writeHead(204 , {"content-type" : "application/json"});
        res.end(JSON.stringify("User Removed Successfully.."));
    }
})



myServer.listen(PORT, () => {
    console.log(`Surver is Running port ${PORT}`);
})











// // importing Modules

// const http = require('http') // used create a server
// const fs = require('fs') // File system module for reading /writing files.
// const path = require('path') // handling the file paths


// //Difing the Constants

// const PORT = 2000 // server listens on port 2000
// const filePath = path.join(__dirname , "data.json");
// console.log(filePath) // Path to data.json where data is stored.


// // file reading and writing functions..

// function readData() {
//     const data = fs.readFileSync(filePath , "utf-8");
//     return data ? JSON.parse(data)  : [];
// }

// function writeData(data){
//     fs.writeFileSync(filePath , JSON.stringify(data));
// }

// // Request Handling..
// const myServer = http.createServer((req , res)=>{
//     const method = req.method
//     const url = req.url
//     // Routes...
//     if (method === "GET" && url === "/hello" ) {
//         res.writeHead(200 , {'content-type': 'text/plain'});
//         res.end("hello World..");
//     }
//     else if (method === 'POST' && url === '/items') {
//         let body = '';
//         req.on('data', chunk => (body += chunk));
//         req.on('end', () => {
//             const newItem = JSON.parse(body);
//             const items = readData();

//             newItem.id = items.length ? items[items.length - 1].id + 1 : 1; // Auto-increment ID
//             items.push(newItem);
//             writeData(items);

//             res.writeHead(201, { 'Content-Type': 'application/json' });
//             res.end(JSON.stringify(newItem));
//         });
//     }
// } )

// myServer.listen(PORT , ()=>{
//     console.log(`Server is Running Successfully on Port ${PORT}`)
// } )

