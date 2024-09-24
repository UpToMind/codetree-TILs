function sum(n) {
    if(n == 2) return 2;
    if(n == 1) return 1;

    return n + sum(n-2);
}

const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

console.log(sum(n));