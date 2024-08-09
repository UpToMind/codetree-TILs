const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
let d = Number(input[3]);

console.log((60*c + d) - (60*a + b));