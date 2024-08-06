// 입력 및 변수 선언
let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let a = input[0].split(" ");
let b = input[1].split(" ");

let aMath = Number(a[0]);
let aEng = Number(a[1]);
let bMath = Number(b[0]);
let bEng = Number(b[1]);

if (aMath > bMath && aEng > bEng) {
    console.log(1);
}

else {
    console.log(0);
}