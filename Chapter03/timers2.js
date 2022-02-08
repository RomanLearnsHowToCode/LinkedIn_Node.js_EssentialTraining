// asynchronous code achieved by timer
const waitTime = 5000;
console.log(`Setting a ${waitTime / 1000} second delay`);

// we are also clearing the interval here, which means that it will ends it
const timerFinished = () => {
    clearInterval(interval);
    console.log("done");
} 

setTimeout(timerFinished, waitTime);

/*
So what is happening here.. we have set varible waitTime to 3000ms which is 3 seconds
We set timerFinished function to write into console done, after set timer has finished
Then we have set timeout, which takes two arguments, function to run after timer run outs and the time variable, in this case waitTime
This application ran 3 second asynchronous
*/


// interval
const waitInterval = 500; // half of a second
let currentTime = 0;

// like this we will achieve a "percentiege loader" which will always stay on same line
const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime/waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`)
    
};

const interval = setInterval(incTime, waitInterval);