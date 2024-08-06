const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let min = Math.min(a,b,c);

if (a === min) {
    if (a === b && b === c){
        console.log(1,1);
    }
    else {
        console.log(1,0)
    }
}

else {
    if (a === b && b === c){
        console.log(0,1);
    }
    else {
        console.log(0,0)
    }
}