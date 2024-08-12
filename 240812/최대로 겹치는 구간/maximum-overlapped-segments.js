const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = Array(200).fill(0);

for(let i = 0; i < n; i++) {
    let [a,b] = input[i+1].split(" ").map(Number);
    a += 100; b += 100;
    for(let j = a; j < b; j++) {
        arr[j]++;
    }

}

console.log(Math.max(...arr));