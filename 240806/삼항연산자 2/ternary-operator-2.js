const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let str = (a===1) ? "t" : "f";

console.log(str);