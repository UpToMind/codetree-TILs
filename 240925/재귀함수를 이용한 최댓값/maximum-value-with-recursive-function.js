const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

function maxVal(n) {
    if(n === 0) {
        return arr[0];
    }

    return Math.max(maxVal(n-1),arr[n]);
}

console.log(maxVal(n-1));