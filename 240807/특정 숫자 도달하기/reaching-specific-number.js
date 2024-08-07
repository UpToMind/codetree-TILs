const fs = require("fs");
let arr =  fs.readFileSync(0).toString().trim().split(" ");
let sumVal = 0,cnt = 0;
arr = arr.map(e => Number(e));


for (let elem of arr) {

    if (elem < 250) {
        cnt++;
        sumVal += elem;
    }
    else {
        break;
    }

}

console.log(sumVal,(sumVal/cnt).toFixed(1));