const { requestAnimFrame } = require("chart.js/helpers");

// Fs Module

//--> readFile
//--> 


const fs = require('fs');
// readFile take 3 arguements (fileaname , language , callbackfunction(arr , data))
fs.readFile("demo.text" , "utf-8", ((error , data)=> {
    if (error){
        console.log(error);
    }else{
        console.log(data);
    }
}))


fs.writeFile("example.html" , "utf-8" ,((err , data)=> {
    if (data){
        console.log(err);
    }
    else{
        console.log("File Crated Successfully!");
    }
}))

// file name update

fs.rename("example.html" , "example1.html" ,((err , data)=> {
    if (data){
        console.log(err);
    }
    else{
        console.log("File Modified Successfully!");
    }
}))


const contentSample = "Iam Creating Dynamic content";
fs.writeFile("example.html" , contentSample ,((err)=>{
    if (err) {
        console.log(err);
    }
    console.log("File Content is Created");
}))


// Delete mothod


fs.unlink("example1.html" ,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("File Deleted SuccessFully!");
})

// Rename 

fs.rename("http.js" , "http1.js" , ()=> {
    console.log("File Rename Successfully");
})