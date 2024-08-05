const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('.');

let year = Number(input[0]);
let month = Number(input[1]);
let day = Number(input[2]);

console.log(`${month}-${day}-${year}`);