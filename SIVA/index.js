const express = require('express');
const app = express();

app.use(express.json());

let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// CREATE
app.post('/users', (req, res) => {
  const user = { id: users.length + 1, ...req.body };
  const userName = "Siva"
  users.push(user);
  users.push(userName)
  res.status(201).json(user);
});

// READ
app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

// UPDATE
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  Object.assign(user, req.body);
  res.json(user);
});

// DELETE
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(3000, () => console.log('Server running on port 3000'));



const http = require('http');
const PORT = 3222
const myServer = http.createServer((req , res)=> {
    res.write("Server is Running Successfully!")
    res.end()
})

myServer.listen(PORT , ()=> {
    console.log("Surever Running....");
})
