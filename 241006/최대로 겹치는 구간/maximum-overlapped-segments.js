const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
const OFFSET = 100;
let n = Number(input[0]);
let arr = Array(201).fill(0);

for(let i = 0; i < n; i++) {
    let [x1, x2] = input[i+1].split(" ").map(Number);
    x1 = x1 + OFFSET;
    x2 = x2 + OFFSET;

    for(let i = x1; i < x2; i++) {
        arr[i]++;
    }

}

console.log(Math.max(...arr));