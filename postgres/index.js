const { Client } = require("pg");

const client = new Client({
  user: "postgres", // Replace with your PostgreSQL username
  host: "localhost",
  database: "jtd_database", // Ensure this matches the database name
  password: "Sivat@88", // Your PostgreSQL password
  port: 5432, // Default PostgreSQL port
});

const runningQueries = async () => {
  try {
    await client.connect(); // Connect to the database
    const res = await client.query("SELECT * FROM Users;"); // Query the Users table
    console.log(res.rows); // Log the result rows to the console
  } catch (err) {
    console.error("Database connection error:", err);
  } finally {
    await client.end(); // Close the connection
  }
};

runningQueries();



// const { Client } = require("pg");
// const client = new Client({
//   user: "postgres",
//   host: "localhost",
//   database: "jtd_database",
//   password: "Sivat@88",
//   port: "5432",
// });

// const runningQueries = async () => {
//   // try {
//   await client.connect();
//   const res = await client.query("SELECT * FROM Users;");
//   console.log(res.rows);
//   // } catch (err) {
//   //   console.error("Database connection error:", err);
//   // } finally {
//   //   await client.end();
//   // }
// };
// runningQueries();



