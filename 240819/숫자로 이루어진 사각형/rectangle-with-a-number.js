function printSquare(n) {
    let num = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(num > 8) num = 0;
            num++;
            process.stdout.write(`${num} `);
        }
        process.stdout.write(`\n`);
        if(num > 9) num = 0;
    }
}

const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

printSquare(n);