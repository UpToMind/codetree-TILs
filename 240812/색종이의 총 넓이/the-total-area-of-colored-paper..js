const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);
let cnt = 0;
let arr = Array.from(Array(201), () => Array(201).fill(0));

for(let i = 0; i < n; i++ ){
    let [a,b] = input[i+1].split(" ").map(Number);
    a += 100; b += 100;
    for(let j=a; j < a+8; j++) {
        for(let k=b; k < b+8; k++) {
            arr[j][k] += 1;
        }
    }
}

for(let i = 0; i < 201; i++) {
    for(let j = 0; j < 201; j++) {
        if(arr[i][j] !== 0) cnt++;
    }
}

console.log(cnt);