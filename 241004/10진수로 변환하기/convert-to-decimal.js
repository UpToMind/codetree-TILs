const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("").map(Number);
let num = 0;

for(let i = 0; i < input.length; i++){
    num = num*2 + input[i];
}

console.log(num);