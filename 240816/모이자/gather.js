const INT_MAX = Number.MAX_SAFE_INTEGER;
const INT_MIN = Number.MIN_SAFE_INTEGER;

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let house = input[1].split(" ").map(Number);
let min = INT_MAX;

for (let i = 0; i < n; i++) {
    let sum = 0;
    for(let j = 0; j < n; j++) {
        sum += Math.abs(j-i) * house[j];
    }
    min = Math.min(min, sum);
}

console.log(min);