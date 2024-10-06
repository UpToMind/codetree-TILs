const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = [];
let cnt = 0;

for(let i = 0; i < n; i++) {
    arr.push(Number(input[i+1]));
}

for(let i = 0; i < arr.length; i++) {
    if(i === 0 || arr[i] !== arr[i-1]) {
        cnt++;
    }
}

console.log(cnt);