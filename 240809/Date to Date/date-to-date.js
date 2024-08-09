const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let m1 = Number(input[0]);
let d1 = Number(input[1]);
let m2 = Number(input[2]);
let d2 = Number(input[3]);

const daysOfMonth = [0,31,28,31,30,31,30,31,31,30,31,30,31];

let cnt = 1;

while (true) {

    d1++;
    cnt++;

    if(d1 > daysOfMonth[m1]) {
        d1 = 1;
        m1++;
    }

    if(m1 === m2 && d1 === d2) {
        break;
    }


}

console.log(cnt);