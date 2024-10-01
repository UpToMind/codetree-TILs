const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [m1, d1, m2, d2] = input[0].split(" ").map(Number);
const a = input[1];
const sevenDays = ['Mon', 'Tue','Wed','Thu','Fri','Sat','Sun'];
const index = sevenDays.indexOf(a);

function totalNumOfDays(m,d) {
    const days = [0,31,29,31,30,31,30,31,31,30,31,30,31];
    let totalDays = 0;

    for(let i = 1; i < m; i++) {
        totalDays += days[i];
    }

    totalDays += d;
    return totalDays;

}

let diff = totalNumOfDays(m2, d2) - totalNumOfDays(m1, d1);

if( diff % 7 < index){
    console.log(parseInt(diff / 7) );
} else {
    console.log(parseInt(diff / 7) + 1);
}