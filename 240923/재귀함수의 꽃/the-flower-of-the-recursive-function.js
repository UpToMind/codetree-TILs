function f(a, t, l) {
    if (t >= l) {
        return;
    }
    process.stdout.write(a[t] + " ");
    f(a, t + 1, l);
    process.stdout.write(a[t] + " ");
}

let a = Array(5).fill(0);
for (let i = 1; i <= 5; i++) {
    a[i-1] = 6 - i;
}
let n = 5;
f(a, 0, n);