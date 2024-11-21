const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let currPos = [0,0];
let dx = [1,0,-1,0], dy = [0,-1,0,1];


for(let i = 1; i <= n; i++){
    let [dir,dis] = input[i].split(" ");
    dis = Number(dis);

    for(let j = 0; j < dis; j++ ){
        if(dir === 'E') {
        currPos[0] += dx[0];
        currPos[1] += dy[0];
    }

    if(dir === 'S') {
        currPos[0] += dx[1];
        currPos[1] += dy[1];
    }

    if(dir === 'W') {
        currPos[0] += dx[2];
        currPos[1] += dy[2];
    }

    if(dir === 'N') {
        currPos[0] += dx[3];
        currPos[1] += dy[3];
    }
    }
    
}

console.log(currPos[0],currPos[1]);