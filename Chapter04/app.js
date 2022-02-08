//const name = require("./myModule");
//we have "imported" myModule and used it's exported value of Roman as a parameter of name
//console.log(name);

/*
const counter = require("./myModule");

counter.inc();
counter.inc();
counter.inc();

console.log("The counter is " + counter.getCount());
*/
//we can deconstruct

const {inc, dec, getCount} = require("./myModule");

inc();
inc();
inc();
dec();

console.log("The counter is " + getCount());