const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let result = a;

while( a < b ) {
    if(a%2 != 0) {
        a *= 2;
        result += " " + a;
    }
    else {
        a += 3;
        result += " " + a;
    }
    
}

console.log(result);