//node.js can also append values
const fs = require("fs");
const colorData = require("./assets/colors.json");

// this will create and append colours from colors.json, appendFile will save new additions into existing file if used multiple times
colorData.colorList.forEach(c => {
    fs.appendFile("./storage-files/colors.md", `${c.color}: ${c.hex} \n`, err => {
        if(err){
           throw err; 
        }
    });
});