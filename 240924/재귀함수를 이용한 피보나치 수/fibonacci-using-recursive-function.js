function fibo(n) {
    if(n <= 2) {
        return 1;
    }

    return fibo(n-1) + fibo(n-2);
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);

console.log(fibo(n));