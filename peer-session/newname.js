

const fs = require('fs')

// it will take 3 arguements (filepath , language , callbackFunction)

fs.readFile("text.text" , "utf-8" , (err, res)=>{
    if (err){
        console.log(err);
    }
    console.log(res);
    console.log("File read Successfully!");
})

const content = "Iam created Dynamic content"
fs.writeFile("text.text" , content , (err , res)=>{
    console.log(res);
} )

fs.mkdir("JTD-FIle" , (err , res)=> {
    console.log("FIle created");
})

fs.unlink("text.text" , ()=> {
    console.log("Folder Deleted");
})


fs.rename("page.js" , "newname.js", (err , res)=> {
    console.log("changed");
})
