

const { error } = require("console")
const http = require("http")
const PORT = 6003

const students = [
    {
        id: 1,
        name: "Siva",
        college: "GDC"
    },
    {
        id: 2,
        name: "Rajesh",
        college: "GDC"
    }
]


const myServer = http.createServer((req, res) => {
    // res.write("Server is Running..")
    // res.end()

    const method = req.method
    const url = req.url

    if (method === "GET" && url === "/students"){
        res.writeHead(200 , {"content-type" : "application.json"})
        res.end(JSON.stringify(students))
    }
    else if (method === "POST" && url  === "/students"){
        const newUSer = {
            id : students.length + 1,
            name : "New Student",
            college : "New College"
        }
        students.push(newUSer)
        res.writeHead(200 ,{"content-type" : "application.json"})
        res.end(JSON.stringify(students))
    }

    else if (method === "PUT" && url.startsWith("/students/")){
        const id = parseInt(url.split("/")[2]);
        const user = students.find((u => u.id === id))

        if (!user){
            res.writeHead(404 ,{"content-type" : "application.json"})
            res.end(JSON.stringify({ error : "User not Found!"}))
        }
        user.name = "Selvam";
        user.college = "KKC";
        res.writeHead(200 , {"content-type" : "applicati0on.json"})
        res.end(JSON.stringify(students))
    }
    else if (method === "DELETE" && url.startsWith("/students/")){
        const id = parseInt(url.split("/")[2]);
        const userIndex = students.findIndex((u => u.id === id))

        if (userIndex === -1){
            res.writeHead(404 ,{"content-type" : "application.json"})
            res.end(JSON.stringify({ error : "User not Found!"}))
            return;
        }
        students.splice(id , 1);
        res.writeHead(204 ,{"content-type" : "application.json"});
        res.end();

    }
})

myServer.listen(PORT, () => {
    console.log(`Server is Running PORT no ${PORT}`);
})