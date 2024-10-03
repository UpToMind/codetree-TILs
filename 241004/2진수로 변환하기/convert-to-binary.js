const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let n = Number(input);
let digits = [];

while(true) {
    if( n < 2 ) {
        digits.push(n);
        break;
    }

    digits.push(n % 2);
    n = Math.floor( n / 2);
}

let binaryNumber = '';
for( let i = digits.length - 1; i >= 0; i--) {
    binaryNumber += digits[i];
}

console.log(binaryNumber);