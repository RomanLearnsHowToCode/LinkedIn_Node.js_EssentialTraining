//CP will equal require, child underscore process. So all of the commands that I have just executed are synchronous.
//They run once, spit out some data, and then the process ends.
const cp = require("child_process");

//execute website (doesn't work for me)
cp.exec("open http://www.linkedin.com/learning");
// can execute new terminal (doesn't work for me)
cp.exec("open -a Terminal .");
// exec can run another node command in this case readStream
cp.exec("node readStream", (err, data, stderr) => {
    if(err){
        throw err;
    }
    console.log(data);
});