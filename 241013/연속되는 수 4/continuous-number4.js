const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = input.slice(1,n+1).map(Number);

let cnt = 0, max = 0;
for(let i = 0; i < n; i++) {
    if( i >= 1 && arr[i] > arr[i-1]) {cnt++}
    else {cnt = 1;}

    max = Math.max(cnt,max);


}

console.log(max);