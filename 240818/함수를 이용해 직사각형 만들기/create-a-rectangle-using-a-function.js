function printOne(n,m) {
    
    for(let i = 0; i < n; i++) {
        let str = "";

        for(let j = 0; j < m; j++) {
            str += "1";
        }
        console.log(str);
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

printOne(input[0],input[1]);