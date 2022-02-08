//we can read content of directory
//synchronously.. javascript would stop everything it does etc..

const fs = require("fs");
console.log("started reading files");

//synchr.
//const files = fs.readdirSync("./assets");

//asynchr
fs.readdir("./assets", (err, files) => {
    if(err){
        throw err;
    }
    console.log("complete");
    console.log(files);
});

/* - this is used only for synchr
console.log("complete");
console.log(files);
*/