const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// arr.sort((a,b) => a-b);
for(let i = 0; i < n; i++) {

    //인덱스는 짝수일때마다
    if (i % 2 === 0) {
        let sortedArr = arr.slice(0,i+1);
        sortedArr.sort((a,b) => a-b);
        process.stdout.write(`${sortedArr[i/2]} `);
    }
}