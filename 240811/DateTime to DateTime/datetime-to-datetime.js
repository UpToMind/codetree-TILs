const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
let cnt = 0;

if(a == 11 && b <= 11 && c < 11) console.log(-1);
else {
    while(true) {
        if(a == 11 && b == 11 && c == 11) break;

        cnt++;
        c--;

        if(c == -1) {
            c = 59;
            b--;

            if(b == -1) {
                b = 23;
                
            }
            if(b == 0) {
                a--;
            }

        }

    }
}

console.log(cnt);