const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let N = Number(input[0]);
let arr = [];

for(let i = 0; i < N; i++) {
    arr.push(Number(input[i+1]));
}

let max = 0,cnt = 0;
for(let i = 0; i < N; i++) {

    if(i >=1 && arr[i-1] === arr[i]) {
        cnt++;
    } else {
        cnt = 1;
    }

    max = Math.max(max,cnt);
}

console.log(max);