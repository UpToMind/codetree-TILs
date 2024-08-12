const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("").map(Number);
let n = 0;
let binary = [];

for(let i = 0; i < input.length; i++) {
    n = 2 * n + input[i];
}

n = n * 17;

while(true) {
    if(n<2) {
        binary.push(n);
        break;
    }

    binary.push(n % 2);
    n = Math.floor(n / 2);

}

console.log(binary.reverse().join(""));