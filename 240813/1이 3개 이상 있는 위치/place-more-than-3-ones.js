function inRange(x,y,n) {
    return x >= 0 && x < n && y >= 0 && y < n;
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = Array.from(Array(n),()=>Array(n).fill(0));
let dx = [-1,1,0,0], dy = [0,0,-1,1];
let count = 0;

for(let i = 0; i < n; i++) {
   arr[i] = input[i+1].split(" ").map(Number);
}

for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        let adjacentOnes = 0;
        for(let k = 0; k < n; k++) {
            let ni = i + dx[k];
            let nj = j + dy[k];
            if (inRange(ni, nj, n) && arr[ni][nj] === 1) {
                adjacentOnes++;
            }
        }
        if (adjacentOnes >= 3) {
            count++;
        }
    }
}

console.log(count);