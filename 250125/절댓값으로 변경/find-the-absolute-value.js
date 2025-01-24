const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

function toAbsolute(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = -arr[i];
        }
    }
};

toAbsolute(arr);

for(let i = 0; i < n; i++) {
    process.stdout.write (arr[i] + " ");
}

