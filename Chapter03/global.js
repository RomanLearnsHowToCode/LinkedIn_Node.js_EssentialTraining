const path  = require("path");


// this will log dirname and filename of the file
console.log("Global script is running");
console.log(__dirname);
console.log(__filename);
// this will take the __filename value from require path
console.log("Template literals")
console.log(`The file name is ${path.basename(__filename)}`);