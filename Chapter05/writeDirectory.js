//this will create a directory
const fs = require("fs");

//if we will run this file twice, it will throw and error, because this directory already exists
if (fs.existsSync("storage-files")) {
    console.log("Already exists");
} else {
    fs.mkdir("storage-files", err => {
        if(eff){
            throw err;
        }
        console.log("directory created");
    });
}