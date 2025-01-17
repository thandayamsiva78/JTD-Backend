

// const fs = require('fs')



// fs.readFile("example1.txt" ,"utf-8" , (err , res)=> {
//     if (err) {
//         console.log(err);
//     }else{
//         console.log(res);
//         console.log("File Read Successfully!!");
//     }
// })

// fs.appendFile("example1.txt" , "With 31 students" ,(err)=> {
//     console.log("Content Appended!!");
// })

// fs.mkdir("JTD BACKEND" ,(err)=> {
//     console.log("Directory Created Successfully!!");
// })

// fs.unlink("JTD BACKEND" , (err)=> {
//     console.log("Directory Deleted!!");
// })


// fs.writeFile("jtd.text" , "Hello , this is your file Content" , (err)=> {
//     console.log("File Created Successfully!!");
// })





const fs = require("fs");

fs.readFile("example.text" , "utf-8" , (err , res)=> {
    if (err){
        console.error("Error :" , err);
    }
    console.log(res);
    console.log("File Read SuccessFully");
})

fs.appendFile("example.text" , "Now Peer Session" , (err , res)=>{
    console.log('Context added Successfully');
})

fs.mkdir("JTD-BACK" , (err, res)=> {
    console.log("Folder Created");
})

fs.writeFile("text.text" , "New Content FIle" , (err , res)=> {
    console.log("New File Created");
})

fs.unlink("text.text" , (err)=> {
    console.log("FIle DELETED");
})