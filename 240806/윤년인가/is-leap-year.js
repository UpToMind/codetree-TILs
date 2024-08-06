const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let year = Number(input[0]);

if ((year % 4) !== 0 || ((year % 100 === 0)&&(year % 400 !== 0))) {
    console.log("false");
}

else {
    console.log("true");
}