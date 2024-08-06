const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let a = input[0].split(' ');
let b = input[1].split(' ');

let aMath = Number(a[0]);
let aEng = Number(a[1]);

let bMath = Number(b[0]);
let bEng = Number(b[1]);

if (aMath > bMath) {
    console.log('A');
}

else if (aMath < bMath) {
    console.log('B');
}

else {
    if (aEng > bEng) {
        console.log('A');
    }

    else if (aEng < bEng) {
        console.log('B');
    }

}