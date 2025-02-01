

const jwt = require("jsonwebtoken");
const JWT_SECRET = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJTb2Z0d2FyZSZNb3ZpZSIsIm5hbWUiOiJTaXZhIiwiaWF0IjoxNTE2MjM5MDIyfQ.OqL3H9k42SxBkMN_dywcATcpnvXGBOiCpe-Q_WcYA5w";


// authenticate token

const authenticateToken = (req,res ,next)=>{
    const authHeader = req.headers["authorization"];;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token){
        return res.status(401).json({message : "No token provided"});
    }

    jwt.verify(token , JWT_SECRET ,(err ,user)=>{
        if (err){
            return res.status(403).json({message : "Invalid token"});
        }
        req.user = user;
        next();
    })
}

// Authorize specific roles

const authorizeRole = (role)=> (req ,res, next)=>{
    if (req.user.role !== role){
        return res.status(403).json({message : 'Access forbidden: Insufficient permissions' })
    }
    next();
}

module.exports = {authenticateToken , authorizeRole};