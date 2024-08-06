const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);

if(n >= 80) {
    console.log("pass");
}

else {
    console.log(80-n,"more score");
}