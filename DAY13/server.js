// Dependencies and Setup

const express = require("express")
const {Client} = require("pg");


const client = new Client({
    user : 'postgres',
    host : 'localhost',
    database : "jtd_database",
    password : 'Sivat@88',
    port : 5432,
});


const app = express();
const PORT = 3003;


app.use(express.json());

app.get("/hello" , (req, res)=>{
    res.status(201).json({message : "Hello WORLD"})
})


app.get("/employees" , async(req , res)=>{
    await client.connect();
    const emeployee = await client.query("SELECT * FROM employeedetails");
    await client.end();
    res.status(200).json(emeployee.rows);
})

app.post("/employees" , async (req , res)=>{
    const newEmployee = req.body;
    await client.connect();
    const employee = await client.query(`INSERT INTO employeedetails (employeeid ,employeename , salary , hiredate ,departmentid , managerid) VALUES ( 7 ,'ramadevi' , '33000' ,'2020-01-14' ,'306' ,'19');`);
    await client.end();
    res.status(201).json(employee);
})

app.put("/employees/:id" , async (req , res)=>{
    const id = parseInt(req.params.id);
    const employee = req.body;
    await client.connect();
    const employees = await client.query("UPDATE employeedetails set employeename = 'Kanyakumari' WHERE employeeid = '7';");
    await client.end();
    res.status(200).json({message : "updated"});
});


app.delete("/employees/:id" ,async (req , res)=>{
    const id = parseInt(req.params.id);
    await client.connect();
    const deleteEmployee  = await client.query("delete from employeedetails where employeeid = 7;")
    await client.end();
    res.status(200).json(deleteEmployee);

})

app.listen(PORT , ()=>{
    console.log("Server is Running...");
})


