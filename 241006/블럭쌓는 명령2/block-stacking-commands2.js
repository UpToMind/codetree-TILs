const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let [n,k] = input[0].split(" ").map(Number);
let arr = Array(n+1).fill(0);

for(let i = 1; i <= k; i++ ) {
    let [a,b] = input[i].split(" ").map(Number);
    for(let i = a; i <= b; i++) {
        arr[i]++;
    }
}

console.log(Math.max(...arr));