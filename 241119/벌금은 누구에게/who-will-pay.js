const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [n,m,k] = input[0].split(" ").map(Number);
let 벌칙 = [];

for(let i = 1; i < input.length; i++) {
    벌칙.push(Number(input[i]));
}

let students = Array(n+1).fill(0);
let ans = -1;
for(let i = 0; i < m; i++) {
    students[벌칙[i]]++;

    if(students[벌칙[i]] >= k){
        ans = 벌칙[i];
        break;
    }
}

console.log(ans);

