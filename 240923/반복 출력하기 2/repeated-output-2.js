function helloWorld(n) {
    if(n == 0) return;

    helloWorld(n-1);
    process.stdout.write("HelloWorld\n");
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

helloWorld(Number(input));