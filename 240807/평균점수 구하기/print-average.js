const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let sumScore = 0;

for ( let i = 0; i < 8; i++ ) {
    sumScore += arr[i];
}

console.log((sumScore/8).toFixed(1));