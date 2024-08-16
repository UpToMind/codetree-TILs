const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let cnt = 0;

for ( let i = 0; i < n-2; i++ ) {

    for ( let j = i + 1; j < n-1; j++ ) {
        for( let k = j + 1; k < n; k++) {
            if(arr[i] <= arr[j] && arr[j] <= arr[k]) {
                cnt++;
            }
        }
    }
}

console.log(cnt);