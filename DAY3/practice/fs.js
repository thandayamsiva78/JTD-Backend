

const fs = require('fs')



fs.readFile("example1.txt" ,"utf-8" , (err , res)=> {
    if (err) {
        console.log(err);
    }else{
        console.log(res);
        console.log("File Read Successfully!!");
    }
})

fs.appendFile("example1.txt" , "With 31 students" ,(err)=> {
    console.log("Content Appended!!");
})

fs.mkdir("JTD BACKEND" ,(err)=> {
    console.log("Directory Created Successfully!!");
})

fs.unlink("JTD BACKEND" , (err)=> {
    console.log("Directory Deleted!!");
})


fs.writeFile("jtd.text" , "Hello , this is your file Content" , (err)=> {
    console.log("File Created Successfully!!");
})

