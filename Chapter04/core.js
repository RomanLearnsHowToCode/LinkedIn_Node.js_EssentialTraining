// core modules - require, with require we are building modules

const path = require("path");

const dirUploads = path.join(__dirname, "www", "files", "uploads");

console.log(dirUploads);

// Another module util (require("util")) can log for us filename etc.. but log is actually depreciated
const util = require("util");
util.log( path.basename(__filename) );
util.log(" ^ The name of the current file");

// v8 module and it's getHeapStatistics, which will log for us our memory usage..
const v8 = require("v8");
util.log(v8.getHeapStatistics());


//we can destructure only variables we need from those modules such as:
console.log("Logging destructed utils")
const { log } = require("util");
const { getHeapSnapshot } = require("v8");

log(getHeapSnapshot());