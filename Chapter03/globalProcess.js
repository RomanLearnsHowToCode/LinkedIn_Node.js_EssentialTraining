// process object can be accessed globally and contain inforation of current process
console.log(process.pid); // process information (id)
console.log(process.versions.node); // version of node running this process

// it is an array, as we write terminal command node globalProcess.js are two arguments
console.log(process.argv);

// since we can treat it as a array, we can do also array destruction
// the command: node globalProcesses.js Roman L will use these two arguments (after , , firstName and lastName)
const[,,firstName, lastName] = process.argv; // command node globalProcesses Roman L
console.log(`Your name is ${firstName} ${lastName}`);

// flags
console.log("Flags");

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting");
const user = grab("--user");
// running: node globalProcesses.js --user Roman --greeting "Hidely Hoe" we can put flags into any order..
console.log(`${greeting} ${user}`);