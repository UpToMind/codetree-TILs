const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [n,k] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);
let max = 0;

for(let i = 0; i < n-k+1; i++) {
    let sum = 0;
    for(let j=i; j < i+k; j++) {
        sum += arr[j];
    }
    max = Math.max(sum,max);
}

console.log(max);