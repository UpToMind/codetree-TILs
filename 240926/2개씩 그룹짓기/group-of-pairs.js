const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
arr.sort((a,b) => a-b);
let max = -Infinity;

for(let i = 0; i < n; i++){
    let sum = arr[i] + arr[2*n-1-i];
    if(sum > max) max = sum;
}

console.log(max);