const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let [n,m] = input[0].split(" ").map(Number);

let arrA = Array(1000001).fill(0);
let cnt = 1;
for(let i = 1; i <= n; i++) {
    let [v,t] = input[i].split(" ").map(Number);

    for(let j = 0; j < t; j++){
        arrA[cnt] = arrA[cnt-1] + v;
        cnt++;
    }

}


let arrB = Array(1000001).fill(0);
cnt = 1;
for(let i = n+1; i <= n+m; i++) {
    let [v,t] = input[i].split(" ").map(Number);

    for(let j = 0; j < t; j++){
        arrB[cnt] = arrB[cnt-1] + v;
        cnt++;
    }

}

let changes = 0;
let prevLeader = '';  // 빈 문자열로 초기화

for(let i = 1; i < cnt; i++) {
    if(arrA[i] > arrB[i]) {
        // A가 선두일 때
        if(prevLeader === 'B') {  // 이전 선두가 B였을 때만 카운트
            changes++;
        }
        prevLeader = 'A';
    } else if(arrB[i] > arrA[i]) {
        // B가 선두일 때
        if(prevLeader === 'A') {  // 이전 선두가 A였을 때만 카운트
            changes++;
        }
        prevLeader = 'B';
    }
    // 같은 경우는 선두 변화가 없으므로 무시
}

console.log(changes);