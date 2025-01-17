

const express = require('express')
const PORT = 3003

const fs = require('fs')
const path = require('path');
console.log(__dirname);
const filePath = path.join(__dirname , 'data.json')

const app = express()

app.use(express.json())



const readData = ()=> {
    const data = fs.readFileSync(filePath , 'utf-8');
    return JSON.parse(data);
}


const writeData = ()=> {
    const data = fs.readFileSync(filePath , 'utf-8');
    return JSON.parse(data);

}



app.get('/items' , (req , res)=> {
    const items = readData();
    res.status(200).json(items)
})

app.post("/items" , (req , res)=> {
    const newItem = req.body;
    const items = readData();
    newItem.id = items.length ? items[items.length -1 ].id + 1 : 1;
    items.push(newItem);
    res.status(201).json(newItem);
})


app.put("/items/:id" , (req , res)=> {
    const id = parseInt(req.params.id);
    const updatedItem = req.body;
    const items = readData()
    const index = items.findIndex(i => i.id === id);
    items[index] = {...items[index] , ...updatedItem, id};
    writeData(items);
    res.status(200).json(items[index])
})

app.delete("/items/:id" , (req , res)=> {
    const id = parseInt(req.params.id);
    const items = readData();
    const index = items.findIndex(i => i.id === id);
    const deleteItem = items.splice(index , 1);
    writeData(items);
    res.status(200).json(deleteItem);
})


app.listen(PORT , ()=> {
    console.log(`Surever is Running Successfully PORT NO ${PORT}`);
})