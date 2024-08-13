const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = input.slice(1).map(Number);
let maxCnt = 1;
let currentCnt = 1;

for(let i = 1; i < n; i++) {
    if(arr[i-1] === arr[i]) {
        currentCnt++;
    }
    else {
        maxCnt = Math.max(maxCnt, currentCnt);
        currentCnt = 1;
    }

}

maxCnt = Math.max(maxCnt, currentCnt);

console.log(maxCnt);