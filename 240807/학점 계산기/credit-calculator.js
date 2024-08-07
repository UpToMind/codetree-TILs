const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");
let sumGrade = 0;
let n = Number(arr[0]);
let grade = arr[1].split(" ").map(Number);

for ( let i = 0; i < n; i++ ) {
    sumGrade += grade[i];
}

let avgGrade = (sumGrade/n).toFixed(1);

if (avgGrade >= 4) {
    console.log(avgGrade);
    console.log("Perfect");
}

else if (avgGrade >= 3) {
    console.log(avgGrade);
    console.log("Good");
}

else {
    console.log(avgGrade);
    console.log("Poor");
}