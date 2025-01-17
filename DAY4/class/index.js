

const express = require("express")
const PORT = 4005
const fs = require("fs")
const { json } = require("stream/consumers")
const path = require("path")
const filePath = path.join(__dirname , "data1.json")
const app = express()

app.use(express.json())


function readData () {
    const data  = fs.readFileSync(filePath)
    return JSON.parse(data)
}
// console.log(readData());

function writeData (data) {
    fs.writeFileSync(filePath, JSON.stringify(data , null , 2))
    
}

app.get("/hello" , (req , res)=>{
    res.status(201).json({message : "Heloo World"})
})

app.get("/users" , (req , res)=> {
    // res.send(200 , ({message : "Surver is Running"}))
    const users = readData()
    res.status(200).json(users)
})

// find user

app.get("/users/:id" , (req , res)=>{
    const id = parseInt(req.params.id)
    const users = readData()
    const index = users.findIndex(i=> i.id === id)

    if (index === -1){
        res.status(404).json({message : "User not Found!"});
    } else{
        res.status(201).json({message : "User Found" , user : users[index]})
    }
})

app.post("/users" , (req , res)=>{
    const newItem = req.body
    const users = readData()
    newItem.id = users.length ? users[users.length -1 ].id + 1 : 1;
    users.push(newItem)
    writeData(users)
    // res.writeHead(200 , ({"content-type" : "application/json"}))
    // res.end(JSON.stringify(user))
    res.status(201).json({message : "Item added successfully" , users})
})

// app.put("/users/:id" , (req, res)=> {
//     const updatedUser = req.body
//     const id = parseInt(req.params.id)
//     const users = readData()
//     const userIndex = users.findIndex((i => i.id === id));
//     if (userIndex === -1) {
//         res.status(404 , ({message : "User is Not found!"}))
//     }
//     users[userIndex].department = "COMPUTER";
//     writeData(users)
//     res.status(200).json({message : "User updated successfully" , user : users[userIndex]})
// })


app.put("/users/:id" , (req ,res)=>{
    const id = parseInt(req.params.id)
    const updatedItem = req.body;
    const users = readData();
    const index = users.findIndex(i => i.id === id)
    users[index] = {...users[index] , ...updatedItem, id}
    writeData(users)
    res.status(200).json(users[index])
})

app.delete("/users/:id" , (req , res)=>{
    const updatedUser = req.body
    const id = parseInt(req.params.id)
    const users = readData()
    const userIndex = users.findIndex((i => i.id === id));
    if (userIndex === -1) {
        res.status(404 , ({message : "User is Not found!"}))
    }
    users.splice(userIndex , 1);
    writeData(users)
    res.status(200).json({message : "User Deleted Successfully" , user : users[userIndex]})

})



app.listen(PORT , ()=>{
    console.log("Propert of JTD & Surver is Running...");
})