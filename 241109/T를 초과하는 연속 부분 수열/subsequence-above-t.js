const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [n,t] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let maxCnt = 0;
let cnt = 0;

for(let i = 0; i < n; i++) {
    if (arr[i] > t) {
        cnt++;
        maxCnt = Math.max(maxCnt, cnt);
    } else {
        cnt = 0;
    }
}

console.log(maxCnt);