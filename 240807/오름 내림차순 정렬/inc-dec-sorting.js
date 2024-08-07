function cmp1(prev,cur) {
    return prev - cur;
}

function cmp2(prev,cur) {
    return cur - prev;
}


const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

console.log(arr.sort(cmp1).join(" "));
console.log(arr.sort(cmp2).join(" "));