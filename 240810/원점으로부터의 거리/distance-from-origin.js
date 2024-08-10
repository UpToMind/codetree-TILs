class Distance {
    constructor (x,y,n) {
        this.x = x;
        this.y = y;
        this.n = n;
    }
}

function cmp(p,c) {
    let dp = Math.abs(p.x) + Math.abs(p.y);
    let dc = Math.abs(c.x) + Math.abs(c.y);

    if (dp == dc) {
        return p.n - c.n;
    }

    else {
        return dp - dc;
    }
}


const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let distances = Array(n).fill(new Distance);


for(let i = 0; i < n; i++){
    let [x,y] = input[i+1].split(" ");
    distances[i] = new Distance( Number(x), Number(y),i+1);
}

distances.sort(cmp);

for(let i= 0; i< n; i++) {
    console.log(distances[i].n);
}