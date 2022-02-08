// myModule is exporting a string value "Roman"
// module.exports = "Roman";

let count = 0;

const inc = () => ++count;
const dec = () => --count;

const getCount = () => count;

module.exports = {
    inc,
    dec,
    getCount
};