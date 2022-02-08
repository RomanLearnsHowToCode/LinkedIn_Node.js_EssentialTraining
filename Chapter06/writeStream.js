//
const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/myFile.txt", "utf-8");
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "utf-8");

process.stdout.write("Hello");
process.stdout.write(" world \n");

readStream.on("data", data => {
    writeStream.write(data);
});

process.stdin.on("data", data => {
    writeStream.write(data);
});

//This will write data striaght into provided file, in this case writeStream
process.stdin.pipe(writeStream);
//This will essentially copy data from readStream to writeStream
readStream.pipe(writeStream);

//console.log(`File ${writeStream} has been created`);