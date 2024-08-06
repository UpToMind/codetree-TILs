const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);

if ((a % 2) === 0 ) {
    a = a/2;
}

if((a % 2) !== 0 ) {
    a = (a+1)/2;
}

console.log(a);