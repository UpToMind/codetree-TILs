function printOrderedNum(n) {
    if(n == 0) return;

    printOrderedNum(n-1);
    process.stdout.write(n + " ");
}

function printReverseOrderedNum(n) {
    if(n == 0) return;

    process.stdout.write(n + " ");
    printReverseOrderedNum(n-1);

}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

printOrderedNum(Number(input));
console.log();
printReverseOrderedNum(Number(input));