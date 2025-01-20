function swap(a,b) {
    [a,b] = [b,a];
    console.log(a,b);
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
swap(input[0],input[1]);