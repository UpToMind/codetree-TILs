const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);

let a = input.slice(1, 1 + n).map(line => line.split(" "));
let b = input.slice(1 + n).map(line => line.split(" "));

let posA = 0, posB = 0;
let time = 0;
let meetTime = -1;

let idxA = 0, idxB = 0;
let moveA = a.length > 0 ? Number(a[0][1]) : 0;
let moveB = b.length > 0 ? Number(b[0][1]) : 0;

while (idxA < n || idxB < m) {
    time++;

    // A의 움직임 처리
    if (idxA < n) {
        if (a[idxA][0] === 'L') posA -= 1;
        else posA += 1;
        moveA -= 1;
        if (moveA === 0 && idxA + 1 < n) {
            idxA++;
            moveA = Number(a[idxA][1]);
        }
    }

    // B의 움직임 처리
    if (idxB < m) {
        if (b[idxB][0] === 'L') posB -= 1;
        else posB += 1;
        moveB -= 1;
        if (moveB === 0 && idxB + 1 < m) {
            idxB++;
            moveB = Number(b[idxB][1]);
        }
    }

    // A와 B가 만나는지 확인
    if (posA === posB) {
        meetTime = time;
        break;
    }
}

console.log(meetTime);