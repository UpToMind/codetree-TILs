const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let x = 0, y = 0;

for(let i = 0; i < n; i++) {
    let [dir, dis] = input[i+1].split(" ");
    dis = Number(dis);

    if (dir === 'E') {
        x += dis;
    } else if (dir === 'W') {
        x -= dis;
    } else if (dir === 'N') {
        y += dis;
    } else if (dir === 'S') {
        y -= dis;
    }

}

console.log(x,y);