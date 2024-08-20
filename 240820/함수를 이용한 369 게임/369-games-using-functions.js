const fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function isThreeNum(a,b) {
    let cnt = 0;

    for (let i = a; i <= b; i++) {
        if( i % 3 == 0 || ['3', '6', '9'].some(digit => String(i).includes(digit))) {
            cnt++;
        }
    }
    return cnt;
}

console.log(isThreeNum(a,b));