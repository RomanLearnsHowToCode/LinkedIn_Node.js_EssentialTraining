// stdin and out are streams
/*
process.stdin
process.stdout
*/

process.stdout.write("Hello ");
process.stdout.write("World \n\n\n");

// ask questions
const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preffered programming language?"
];

// ask function, but this is SYNCHRONOUS..
const ask = (i = 0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
};

ask();

//data = you type anything to keyboard and press enter, this is not ASYNCHRONOUS
/*
process.stdin.on('data', data => {
    process.stdout.write(`\n\n ${data.toString().trim()} \n\n`);
    process.exit(); // exit the process
});
*/

const answers = [];
process.stdin.on('data', data => {
    answers.push(data.toString().trim())

    // this is nice, so we will ask question, we will push this answer to answers array, 
    // (so it's one) then we will ask if the answers array is bigger, if not, then use the lenght of answers as an index of question to ask()
    if(answers.length < questions.length){
        ask(answers.length);
    } else {
        process.exit();
    }
});

// process listener on exit which will fire when process.exit();
process.on('exit', () => {
    const [name, activity, lang] = answers;
    console.log(`
    
    Thank you for your answers.

    Go ${activity} ${name} you can write ${lang} code later.
    
    `)
});