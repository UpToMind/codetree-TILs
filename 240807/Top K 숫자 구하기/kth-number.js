function cmp (prev,cur) {
    return prev - cur;
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let nk = input[0].split(' ');
let n = Number(nk[0]);
let k = Number(nk[1]);

let arr = input[1].split(' ').map(Number);
arr.sort(cmp);

console.log(arr[k-1]);