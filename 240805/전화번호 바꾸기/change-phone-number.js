const fs = require("fs");
let callNum = fs.readFileSync(0).toString().trim().split("-");

let x = callNum[1];
let y = callNum[2];

console.log(`010-${y}-${x}`);