function printStars(n) {
    if(n == 0) return;

    printStars(n-1);
    for(let i = 0; i < n; i++){
        process.stdout.write("*");
    }
    console.log();
    
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

printStars(Number(input));