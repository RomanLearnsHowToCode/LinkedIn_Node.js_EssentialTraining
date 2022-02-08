const fs = require("fs");

console.log("type something..");
// This will read the data you stdin, and it will return the lenght of the data
/*
process.stdin.on("data", data => {
    console.log(`I read ${data.length - 1} characters of text`);
});
*/

// readStream can create a read, which will provide us with the amount of chatacters etc..
let fileTxt ="";
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "utf-8");
readStream.on("data", data => {
    console.log(`I read ${data.length - 1} characters of text`);
    fileTxt += data;
});

readStream.once("data", data => {
    console.log(data);
});

readStream.on("end", () => {
    console.log("finished reading file");
    console.log(`in total I read ${fileTxt.length - 1 } characters of text`);
});