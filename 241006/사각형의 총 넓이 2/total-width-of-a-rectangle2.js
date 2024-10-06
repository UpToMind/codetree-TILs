const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
const OFFSET = 100;
let arr = Array.from({length : 201}, () => Array(201).fill(0));

for(let i = 1; i <= n; i++) {
    let [x1,y1,x2,y2] = input[i].split(" ").map(Number);
    x1 += OFFSET;
    y1 += OFFSET;
    x2 += OFFSET;
    y2 += OFFSET;

    for(let j = x1; j < x2; j++) {
        for(let k = y1; k < y2; k++) {
            arr[j][k] = 1;
        }
    }
}

let cnt = 0;
for(let i = 0; i <201; i++) {
    for(let j = 0; j <201; j++) {
        if(arr[i][j] === 1) cnt++;
    }
}

console.log(cnt);