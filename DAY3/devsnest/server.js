
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { error } = require('console');

const app = express();
const PORT = 3000;
const filePath = path.join(__dirname , "/data.json");
console.log(filePath);


app.use(express.json()); // instead of bodyparser

let users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
]


// CREATE
app.post('/users' , (req , res)=> {
    const {name , email } = req.body;
    const newUser = {
        id : users.length + 1,
        name :"Siva",
        email: "Siva@123.com",
    };
    users.push(newUser);
    res.status(201).json(newUser);
})

// READ
app.get('/users' , (req, res)=> {
    res.json(users);
})

// Fetch a single user ID
app.get("/users/:id" , (req , res)=> {
    const user = users.find( u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({error : "User not Found!"});
    }
    res.json(user);
})


//Update 

app.put('/users/:id' , (req , res)=> {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({error : "User not Found!"});
    }
    const {name , email} = req.body;
    user.name = name || user.name;
    user.email = email || user.email;

    res.json(user)
})


//DELETE

app.delete('/users/:id' , (req, res)=> {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1){
        return res.status(404).json({error : "User not Found!"});
    }
    users.splice(userIndex , 1);
    res.status(204).send("User Removed Successfully!")
})

app.listen(PORT , ()=> {
    console.log(`Server is running on Port ${PORT}`);
    
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

