const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let ab = input[0].split(" ");
let a = Number(ab[0]);
let b = Number(ab[1]);
let n = input[1].split("").map(Number);
let num = 0;
let arr = [];


for (let i =0; i < n.length; i++) {
    num = num * a + n[i];
}

while(true) {
    if(num < b) {
        arr.push(num);
        break;
    }

    arr.push(num%b);
    num = Math.floor(num/b);
}

console.log(arr.reverse().join(""));