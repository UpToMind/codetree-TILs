const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let dx = [0,1,0,-1];
let dy = [1,0,-1,0];
let arr = [];

// 2차원 배열 받기
for(let i=1; i <= n; i++) {
    const row = input[i].split(' ').map(Number);
    arr.push(row);
}

// 인접한 1의 개수를 세는 함수
function countAdjacentOnes(x, y) {
    let count = 0;
    
    // 상하좌우 체크
    for(let i=0; i<4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        
        // 격자 범위 내에 있고 값이 1인 경우
        if(nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] === 1) {
            count++;
        }
    }
    
    return count;
}

// 조건을 만족하는 위치의 개수 세기
let result = 0;
for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
        // 각 위치에서 인접한 1의 개수가 3개 이상인지 확인
        if(countAdjacentOnes(i, j) >= 3) {
            result++;
        }
    }
}

console.log(result);


