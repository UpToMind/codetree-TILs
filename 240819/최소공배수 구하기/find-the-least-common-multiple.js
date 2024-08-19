const fs = require("fs");
let [n,m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let max = Math.max(n,m);
let result = 1;
let cnt = 1;

for(let i = 1; i <= max; i++) {
    if(n % i == 0 && m % i == 0) {
        result = i;
    }
}

while(true) {
    if((result * cnt) % n === 0 &&(result * cnt) % m === 0) break;
    cnt++;
}

console.log(result*cnt);