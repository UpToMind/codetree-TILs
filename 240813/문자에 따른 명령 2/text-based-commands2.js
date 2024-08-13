const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("");
let dirNum = 3;
let dx = [1,0,-1,0], dy = [0,-1,0,1];
let x = 0, y = 0;

for(let i = 0; i < input.length; i++) {
    if(input[i] === 'R') {
        dirNum = (dirNum + 1) % 4;
    }

    else if (input[i] === 'L') {
        dirNum = (dirNum + 3) % 4;
    }

    else {
        x = x + dx[dirNum];
        y = y + dy[dirNum];
    }
}

console.log(x,y);