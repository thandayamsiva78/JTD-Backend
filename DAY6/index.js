const {Client} = require("pg");

const client = new Client({
    user : "postgres",
    host : "localhost",
    database : "jtd_database",
    password : "Sivat@88",
    port : 5432
})

const runQuires  = async ()=> {
    try {
        await client.connect();
        // await client.query(
        //     "INSERT INTO students (name , course , medium ) VALUES ('Markondeyulu' ,'bzc' ,'telugu');"
        // );
        const result = await client.query("SELECT * FROM students;");
        console.log("Students Table :" , result.rows);

    } catch (error) {
        console.error("Error Executing queries" , error);
    } finally {
        await client.end();
    }
}

runQuires();