const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);

function operation(a,b) {
    if(a >= b) {
        a = a + 25;
        b = b * 2;
        return [a,b];
    }

    else {
        b = b + 25;
        a = a * 2;
        return [a,b];
    }
}

console.log(operation(a,b)[0], operation(a,b)[1]);
