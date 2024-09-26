const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let arr1 = [...input[0]];
let arr2 = [...input[1]];
arr1.sort(); arr2.sort();

if(arr1.join("") == arr2.join("")) console.log("Yes");
else console.log("No");