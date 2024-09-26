const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let [n,k,t] = input[0].split(" ");
n = Number(n);
k = Number(k);

let arr = [];
let cnt = 0;

for(let i = 0; i < n; i++) {
    arr.push(input[i+1]);
}
arr.sort();

for(let i = 0; i< n; i++) {
    if(arr[i].startsWith(t)) cnt++;
    if(cnt == k) {
        console.log(arr[i]);
        break;
        
        }
}