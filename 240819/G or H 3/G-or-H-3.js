const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [n,k] = input[0].split(" ").map(Number);
let arr = Array(10001).fill(0);
let max = 0;


for( let i = 1; i < n+1; i++ ) {
    let [pos, str] = input[i].split(" ");
    pos = Number(pos);

    if(str === "G") arr[pos] += 1;
    else arr[pos] += 2;
}

for(let i = 1; i < 10001 - k; i++) {
    let sum = 0;
    for(let j = i; j < i+k+1; j++) {
        sum += arr[j];
    }
    max = Math.max(sum,max);
}

console.log(max);