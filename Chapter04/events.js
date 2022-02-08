//event emitter (raise custom events)
const events = require("events");
const emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
});

// asynchronous events, they are handeled when they occur
emitter.emit("customEvent", "Hello World", "Computer");
emitter.emit("customEvent", "That's pretty cool huh?", "Alex");

//this process is waiting for an input
process.stdin.on("data", data => {
    const input = data.toString().trim();
    //if the input equals to exit, then the if statement will trigger
    if(input === "exit") {
        emitter.emit("customEvent", "GoodBye!", "process");
        process.exit();
    }
    //terminal customEvent with input
    emitter.emit("customEvent", input, "terminal");
});