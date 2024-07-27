const fs = require("fs");
let input = fs.readFileSync(0).toString().split('\n');
let ab = input[0].split(' ');

let a = Number(ab[0]);
let b = Number(ab[1]);
let c = Number(input[1]);

console.log(a,b,c);