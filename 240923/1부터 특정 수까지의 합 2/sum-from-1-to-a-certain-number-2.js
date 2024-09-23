const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

function recursiveSum(n) {
    if(n === 1) return 1;

    return recursiveSum(n-1) + n;
}

console.log(recursiveSum(n));