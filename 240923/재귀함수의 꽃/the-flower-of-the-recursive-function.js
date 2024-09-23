function f(a, t, l) {
    if (t >= l) {
        return;
    }
    process.stdout.write(a[t] + " ");
    f(a, t + 1, l);
    process.stdout.write(a[t] + " ");
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let n = Number(input);
let a = Array(5).fill(0);
for (let i = 1; i <= n; i++) {
    a[i-1] = 6 - i;
}

f(a, 0, n);