const fs = require("fs");

let n = fs.readFileSync(0).toString();
n = Number(n);

console.log(`Your score is ${n} point.`);