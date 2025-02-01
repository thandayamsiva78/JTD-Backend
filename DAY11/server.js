
// server.js:

// Primary purpose: User authentication and role-based access control using PostgreSQL.
// Includes:
// User registration (/register) with hashed passwords.
// User login (/login) with JWT-based token generation.
// Middleware for authentication (authenticateToken) and authorization (authorizeRole).
// Example secured routes: /admin (admin-only), /user.



const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/auth", authRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Backend App!");
});

module.exports = app;
