const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let cnt = 0;
let arr = Array.from(Array(2001),() => Array(2001).fill(0));

for(let i = 0; i < 3; i++){
    let [a,b,c,d] = input[i].split(" ").map(Number);
    a += 1000; b += 1000; c += 1000; d += 1000;

    if (i === 2) {
        for(let j =a; j<c; j++) {
            for(let k = b; k<d; k++) {
                arr[j][k] -= 1;
            }
        }
    }

    else {
        for(let j =a; j<c; j++) {
            for(let k = b; k<d; k++) {
                arr[j][k] += 1;
            }
        }
    }

}


for (let i = 0; i < 2001; i++) {
    for(let j = 0; j < 2001; j++) {
        if(arr[i][j] === 1) cnt++;
    }
}

console.log(cnt);