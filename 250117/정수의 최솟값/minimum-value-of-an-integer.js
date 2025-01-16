function findMin(a,b,c) {
    a = Number(a);
    b = Number(b);
    c = Number(c);

    if ( a>= b) {
        if (b <= c) return b;
        else return c;
    }

    else {
        if (a <= c) return a;
        else return c;
    }
}

const fs = require("fs");
let [a,b,c] = fs.readFileSync(0).toString().trim().split(" ");

console.log(findMin(a,b,c));
