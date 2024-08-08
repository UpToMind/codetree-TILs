const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

class Yowan {
    constructor(code, score) {
        this.code = code;
        this.score = score;
    }
}

let yowans = Array(5).fill(new Yowan());
for (let i =0; i<5; i++) {
    let [code,score] = input[i].split(" ");
    yowans[i] = new Yowan(code, Number(score));
}

yowans.sort((prev, cur) => (prev.score - cur.score));

console.log(yowans[0].code, yowans[0].score);