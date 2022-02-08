//spawn
const cp = require("child_process");

// asynchronous app, can "spawn or summon another node app"
const questionApp = cp.spawn("node", ["questions.js"]);

//we can also answer all the questions to the running app
questionApp.stdin.write("Roman \n");
questionApp.stdin.write("Brighton \n");
questionApp.stdin.write("Code better \n");

questionApp.stdout.on("data", data => {
    console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
    console.log(`questionApp process exited`);
});