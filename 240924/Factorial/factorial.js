function factorial(n) {
    if(n < 2) return 1;

    return n * factorial(n-1);
}

const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

console.log(factorial(n));