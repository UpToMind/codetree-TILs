const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("-");

let num1 = Number(input[0]);
let num2 = Number(input[1]);

console.log(`${num1}${num2}`)