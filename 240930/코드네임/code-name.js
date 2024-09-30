const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

class Yowan {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}

let yowans = Array(5).fill(new Yowan);

for(let i = 0; i < 5; i++) {
    let [name, score] = input[i].split(" ");
    yowans[i] = new Yowan(name, Number(score));
}

yowans.sort((a,b) => a.score - b.score );

console.log(yowans[0].name, yowans[0].score);