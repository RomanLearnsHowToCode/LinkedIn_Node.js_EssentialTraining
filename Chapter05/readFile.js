//
const fs = require("fs");

//synchronously, it will be blocking
/*const text = fs.readFileSync("./assets/Readme.md", "utf-8");
console.log(text);*/

//async
fs.readFile("./assets/Readme.md", "utf-8", (err, text) => {
    if(err){
        console.log(`An error has occured: ${err.message}`);
        process.exit();
    }
    console.log("file contents read");
    console.log(text);
});

//async
fs.readFile("./assets/alex.jpg", (err, img) => {
    if(err){
        console.log(`An error has occured: ${err.message}`);
        process.exit();
    }
    console.log("file contents read");
    console.log(img);
});

//async
/* - error handling, there is no alex.jpeg file
fs.readFile("./assets/alex.jpeg", (err, img) => {
    if(err){
        console.log(`An error has occured: ${err.message}`);
        process.exit();
    }
    console.log("file contents read");
    console.log(img);
});
*/