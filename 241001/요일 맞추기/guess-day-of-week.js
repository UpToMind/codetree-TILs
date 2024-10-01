const fs = require("fs");
const [m1, d1, m2, d2] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function numOfDays(m,d) {
    let daysOfMonth = [0,31,28,31,30,31,30,31,31,30,31,30,31];
    let totalDays = 0;

    for(let i = 1; i < m; i++) {
        totalDays += daysOfMonth[i];
    }

    totalDays += d;
    return totalDays;

}

let diff = numOfDays(m2,d2) - numOfDays(m1,d1);
while(diff < 0) {
    diff += 7;
}


const sevenDaysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(sevenDaysOfWeek[diff % 7]);