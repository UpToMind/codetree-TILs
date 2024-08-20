function cmp(p,c) {
    return p - c;
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arrA = input[1].trim().split(" ").map(Number);
let arrB = input[2].trim().split(" ").map(Number);

arrA.sort(cmp);
arrB.sort(cmp);

let cnt = 0;
for(let i = 0; i < n; i++) {
    if(arrA[i] === arrB[i]) cnt++;
}

if(cnt === n) console.log("Yes");
else console.log("No");