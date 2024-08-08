const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

class Dynamite {
    constructor(code, color, second) {
        this.code = code;
        this.color = color;
        this.second = second;
    }
}

const d = new Dynamite(input[0], input[1], Number(input[2]));

console.log(`code : ${d.code}`);
console.log(`color : ${d.color}`);
console.log(`second : ${d.second}`);