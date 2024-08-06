const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let mon = Number(input[0]);

if (mon % 2 === 1) {
    console.log(31);
}

else {
    if(mon === 2) {
        console.log(28);
    }

    else {
        console.log(30);
    }
}