const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(":");

let hours = Number(input[0]);
let minutes = Number(input[1]);

hours = (hours + 1) % 24;

console.log(`${hours}:${minutes}`);