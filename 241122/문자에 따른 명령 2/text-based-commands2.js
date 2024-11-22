const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("");
const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];
let startingPoint = [0,0];
let dirNum = 3;

for(let i=0; i < input.length; i++) {
    if(input[i] === "L"){
        dirNum = (dirNum +3) % 4;
    }

    else if (input[i] === "R") {
        dirNum = (dirNum + 1) % 4;
    }

    else if (input[i] === "F") {
        startingPoint[0] += dx[dirNum];
        startingPoint[1] += dy[dirNum];
    }
}

console.log(startingPoint[0], startingPoint[1]);
