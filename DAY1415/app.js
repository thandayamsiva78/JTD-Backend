const exp = require("constants");
const express = require("express");
const path = require("path");
const {Client} = require("pg");
const { title } = require("process");
const { data } = require("react-router-dom");


const client = new Client ({
    user : "postgres",
    host : "localhost",
    database : "jtd_database",
    password : "Sivat@88",
    port : 5432,
});

const app = express();

app.set('view engine' , 'ejs');
app.use(express.static(path.join(__dirname , 'public')));
app.set('views' , path.join(__dirname , 'views'));

app.locals.title = "JTD BACKEND"

app.get("/" , (req , res)=> {
    const data = {
        title_test : "Home Page" , 
        message : "Welcome to EJS Rendering!"
    };

    console.log(data);
    res.render('index' , data)
})


app.get("/about" , (req, res)=>{
    const data = {
        title : "About Page",
        description : "This is the example of EJS rendering in Express.",
        values : [1,2,3,4,5],
        }
    console.log(data);
    res.render('about' , data);
});


app.get('/items' , async(req , res)=>{
    await client.connect();
    const items = await client.query("SELECT * from students");
    await client.end()
    console.log(items.rows);
    res.render('items' ,{"items" : items.rows})
})

const PORT = 3000;
app.listen(PORT , ()=>{
    console.log("Property Of JTD...");
});