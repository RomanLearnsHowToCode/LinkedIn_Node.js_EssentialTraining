//require fs module
const fs = require("fs");
//this will rename the directory
//fs.renameSync("./storage-files", "./storage");

//this will unlick (delete) each file in directory ./storage
fs.readdirSync("./storage").forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`);
});

// we are not allowed to delete folder which contains files
fs.rmdir("./storage", err => {
    if(err){
        throw err;
    }

    console.log("./storage directory removed");

});