function splitBy2(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            arr[i] = arr[i] / 2;
        }
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let arr = [];
let n = Number(input[0]);

for(let i = 0; i < n; i++) {
    arr.push(Number(input[1].split(' ')[i]));
}

splitBy2(arr);
for(let i = 0; i < n; i++) {
    process.stdout.write(arr[i]+" ");
}