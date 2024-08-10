const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let b = Number(input[1]);
let result = [];
let num = "";

while (true) {
    if(n < b) {
        result.push(n);
        break;
    }

    result.push(n % b);
    n = Math.floor(n / b);

}

for(let i = result.length-1 ; i >= 0; i--) {
    num += result[i];
}

console.log(num);