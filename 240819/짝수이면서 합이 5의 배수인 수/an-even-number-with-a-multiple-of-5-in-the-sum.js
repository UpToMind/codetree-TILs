const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

function isMagicNum(n) {
    return n % 2 == 0 && (parseInt(n / 10) + (n % 10)) % 5 == 0;
}

if(isMagicNum(n)) console.log("Yes");
else console.log("No");