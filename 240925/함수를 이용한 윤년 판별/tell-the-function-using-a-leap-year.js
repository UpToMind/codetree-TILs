const fs = require("fs");
let y = Number(fs.readFileSync(0).toString().trim());

function isYoon(year) {
    if (year % 100 === 0 && year % 400 !== 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }

    return false;
}

console.log(isYoon(y));