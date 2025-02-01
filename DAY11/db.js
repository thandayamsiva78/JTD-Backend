

const {Pool} = require("pg");

const pool = new Pool({
    user : "postgres",
    host : "localhost",
    database :"jtd_database",
    password : "Sivat@88",
    port : 5432,
});

module.exports = pool;
