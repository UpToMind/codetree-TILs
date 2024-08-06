const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let q = parseInt(a / b);
let r = a % b;

console.log(`${q}...${r}`);