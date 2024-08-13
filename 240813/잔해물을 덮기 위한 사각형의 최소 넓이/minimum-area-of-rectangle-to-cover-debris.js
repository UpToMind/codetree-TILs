const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr = Array.from(Array(2001), () => Array(2001).fill(0));
let mini=2001, maxi = 0;
let minj=2001, maxj = 0;

for(let i = 0; i < 2; i++) {
    let [a,b,c,d] = input[i].split(" ").map(Number);
    a += 1000; b += 1000; c += 1000; d += 1000;

    let id = 0;
    if( i === 0 ) id = 1;
    else id = -1;

    for(let j = a; j < c; j++) {
        for(let k = b; k < d; k++) {
            arr[j][k] = id;
        }
    }

}

for(let i = 0; i < 2001; i++) {
    for(let j = 0; j < 2001; j++) {
        if(arr[i][j] === 1) {
            mini = Math.min(mini, i);
            maxi = Math.max(maxi, i);
            minj = Math.min(minj, j);
            maxj = Math.max(maxj, j);
        }
}
}

console.log((maxi - mini + 1) * (maxj - minj + 1));