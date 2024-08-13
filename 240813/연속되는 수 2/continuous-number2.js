const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let cnt = 0;

for(let i = 0; i < n-1; i++) {
    if( i === 1 | Number(input[i+1]) !== Number(input[i+2])) {
        cnt++;
    }
}

console.log(cnt);