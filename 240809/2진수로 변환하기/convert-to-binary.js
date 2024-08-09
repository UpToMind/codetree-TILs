const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let digit = [];

while (true) {
    if(n<2) {
        digit.push(n);
        break;
    }

    digit.push(n%2);
    n = Math.floor(n/2);
}

let binary = '';
for(let i = digit.length-1; i >= 0; i--) {
    binary += digit[i];
}

console.log(binary);