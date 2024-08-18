function printSomething (n) {
    for (let i =0; i < n; i++) {
        process.stdout.write("12345^&*()_\n");
    }
}

const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

printSomething(n);