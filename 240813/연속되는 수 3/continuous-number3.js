const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = input.slice(1).map(Number);
let currentCnt = 1;
let maxCnt = 1;


for (let i = 1; i < n; i++) {
    if((arr[i-1] < 0 && arr[i] < 0) || (arr[i-1] > 0 && arr[i] > 0)) {
        currentCnt++;
    }

    else {
        maxCnt = Math.max(maxCnt, currentCnt);
        currentCnt = 1;
    }
}

maxCnt = Math.max(maxCnt, currentCnt);

console.log(maxCnt);