const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let h = (a === 100) ? 0 : 1;

if (h === 0) {
    console.log("pass");
}
else {
    console.log('failure');
}