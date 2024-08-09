const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let nk = input[0].split(" ");
let n = Number(nk[0]);
let k = Number(nk[1]);
let arr = Array(n).fill(0);

for(let i = 1; i <= k; i++) {
    let  [a,b] = input[i].split(" ").map(Number);
    for(let j = a-1; j < b; j++) {
        arr[j] = arr[j] + 1;
    }
} 

console.log(Math.max(...arr));