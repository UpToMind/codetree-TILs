const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("");
let arr = [...input];
arr.sort();

let sortedArr = arr.join("");
console.log(sortedArr);