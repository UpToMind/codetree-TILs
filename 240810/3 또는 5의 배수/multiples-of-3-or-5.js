const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input);

if(a%3 == 0) console.log("YES");
else console.log("NO");

if(a%5 == 0) console.log("YES");
else console.log("NO");