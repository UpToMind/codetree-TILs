const fs = require("fs");

let a = fs.readFileSync(0).toString();

console.log(a*2+3);