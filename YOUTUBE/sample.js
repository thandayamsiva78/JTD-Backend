// const a= 10;
// console.log(a);
// console.log("Happy New Year !!");

const { requestAnimFrame } = require("chart.js/helpers");

// Modules 
// --> OS
// --> path
// --> FS
// --> HTTP

const  os = require('os'); // OS
const path = require('path') // Path
console.log(os.type());
 

console.log(os.version());

console.log(os.freemem());
console.log(os.cpus());

console.log(__dirname); // Directory Name
console.log(__filename);  // Current File

// console.log(path.basename(__filename));

console.log(path.parse(__filename));
