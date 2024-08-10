const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

if (a < b) {
    console.log(1,0);

} 

else {
    if(a == b){
        console.log(0,1);
    }

    else console.log(0,0);
}