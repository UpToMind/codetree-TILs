const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = Array.from(Array(201), () => Array(201).fill(0));
let blueCnt = 0;

for(let i = 0; i < n; i++) {
    let [a,b,c,d] = input[i+1].split(" ").map(Number);
    a += 100; b += 100; c += 100; d += 100;

    let color = i % 2; // 빨간색이 0, 파란색이 1

    for(let j = a; j < c; j++) {
        for(let k = b; k < d; k++) {
            arr[j][k] = color;
        }
    }

}

for(let i = 0; i < 201; i++) {
    for(let j = 0; j < 201; j++) {
    if (arr[i][j] === 1) blueCnt++;
}
}

console.log(blueCnt);