// Define endpoints for user registration and login.

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../db");



const router = express.Router();
const JWT_SECRET = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJTb2Z0d2FyZSZNb3ZpZSIsIm5hbWUiOiJTaXZhIiwiaWF0IjoxNTE2MjM5MDIyfQ.OqL3H9k42SxBkMN_dywcATcpnvXGBOiCpe-Q_WcYA5w";

router.post("/register" , async (req, res)=>{
    const {username , password , role } = req.body;

    if (!username || !password || !role){
        return res.status(400).json({message : "Missing fields"});
    }
    try {
        const hashedPassword = await bcrypt.hash(password , 10);
        const result = await pool.query(
            "INSERT INTO users (username , password , role) VALUES ($1 , $2 ,$3) RETURNING id",
            [username , hashedPassword , role]
        );
        res.status(201).json({message : "user registered" ,userId : result.rows[0].id})
    }catch (error){
        if (error.code === "23505"){
            res.status(400).json({message : "Username already exists"});
        }else{
            res.status(500).json({message : "Internal server error"});
        }
    }
});



// User login

router.post("/login" , async(req ,res)=>{
    const {username , password} = req.body;
    if (!username || !password){
        return res.status(400).json({message : "Missing field"});
    }

    try {
        const result = await pool.query("SELECT * FROM users WHERE username = $1" ,[username]);
        if (result.rows.length === 0){
            return res.status(401).json({message : "Invalid credentials"});
        }
        const user = result.rows[0];
        const passwordMatch = await bcrypt.compare(password , user.password );
        if (!passwordMatch){
            return res.status(401).json({message : "Invalid credentials"});
        }

        const token = jwt.sign({useId :user.id , role : user.role} , JWT_SECRET ,{expiresIn : "1h"});
        res.json({token});
    
    }catch (error){
        res.status(500).json({message : "Internal server error"});
    }
})


// Assuming you have already set up the pool to interact with your database

// Get All Users (only for authenticated users)
router.get("/users", async (req, res) => {
    try {
      // Ensure the user is authenticated by checking the token
      const token = req.headers["authorization"];
      if (!token) {
        return res.status(401).json({ message: "No token provided" });
      }
  
      // Verify the token and extract user information
      const decoded = jwt.verify(token.split(" ")[1], JWT_SECRET);
      if (!decoded) {
        return res.status(401).json({ message: "Unauthorized" });
      }
  
      // Query the database to get all users (excluding password)
      const result = await pool.query("SELECT id, username, role FROM users");
      if (result.rows.length === 0) {
        return res.status(404).json({ message: "No users found" });
      }
  
      res.status(200).json({ users: result.rows });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  

module.exports = router;