//fs module contain tools to manipulate files and data
const fs = require("fs");

// this will rename file colors.json to colorData.json
//fs.renameSync("./assets/colors.json", "./assets/colorData.json");

fs.rename("./assets/notes.md", "./storage-files/notes.md", err => {
    if(err){
        throw err;
    }
});
fs.rename("./assets/Readme.md", "./storage-files/Readme.md", err => {
    if(err){
        throw err;
    }
});

/*
setTimeout(() => {
    //unlinkSync would delete the file!
    fs.unlinkSync("./assets/alex.jpg");
}, 4000);
*/