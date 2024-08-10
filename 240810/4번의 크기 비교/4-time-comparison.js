let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let a = Number(input[0]);
let bcde = input[1].split(" ");
let b = Number(bcde[0]);
let c = Number(bcde[1]);
let d = Number(bcde[2]);
let e = Number(bcde[3]);

if (a>b) console.log(1);
else console.log(0);

if (a>c) console.log(1);
else console.log(0);

if (a>d) console.log(1);
else console.log(0);

if (a>e) console.log(1);
else console.log(0);