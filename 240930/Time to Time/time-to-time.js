const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

console.log(input[2]*60 + input[3] - input[0]*60 - input[1]);