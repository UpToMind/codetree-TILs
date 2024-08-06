const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(' ');

let a = Number(n[0]);
let b = Number(n[1]);

let result = parseInt(a/b) + ".";

a %= b;
for (let i=0; i<20;i++){
    a *= 10;
    result += parseInt(a/b);

    a %= b;

}

console.log(result);