const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let startPoint = 1000;
let arr = Array(2001).fill(0);


for(let i = 1; i <= n; i++) {
    let [x, dir] = input[i].split(" ");
    x = Number(x);

    for(let j=0; j < x; j++) {
        if(dir === 'R') {
            arr[startPoint]++;
            startPoint++;
        }

        if(dir === 'L') {
            arr[startPoint - 1]++;
            startPoint--;
        }
    }
}

let cnt = 0;
for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 1) cnt++;
}

console.log(cnt);