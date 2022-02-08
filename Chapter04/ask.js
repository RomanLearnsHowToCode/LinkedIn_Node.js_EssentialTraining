// included module
const readline = require("readline");

// readline createinterface takes two parameters, input parameter which will be supplied by process.stdin and output with process.stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//question is again included in readline module, this takes two parameters, question and the answer
rl.question("How do you like Node? ", answer => {
    console.log(`Your answer: ${answer}`);
})