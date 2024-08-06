const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);

if (a >= 100) {
    console.log("vapor");
}

else if(a >= 0) {
    console.log("water");
}

else {
    console.log("ice");
}