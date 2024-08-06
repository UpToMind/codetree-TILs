const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let p1 = input[0].split(' ');
let p2 = input[1].split(' ');
let p3 = input[2].split(' ');

let p1IsCold = p1[0], p1Temp = Number(p1[1]);
let p2IsCold = p2[0], p2Temp = Number(p2[1]);
let p3IsCold = p3[0], p3Temp = Number(p3[1]);

let count = 0;

if ((p1IsCold === 'Y' && p1Temp >= 37 )) {
    count += 1;
}

if ((p2IsCold === 'Y' && p2Temp >= 37 )) {
    count += 1;
}

if ((p3IsCold === 'Y' && p3Temp >= 37 )) {
    count += 1;
}

if (count >= 2) {
    console.log('E');
}

else {
    console.log('N');
}