const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);

if (a === 5 ) {
    console.log('A');
}

if ((a % 2 )=== 0 ) {
    console.log('B');
}