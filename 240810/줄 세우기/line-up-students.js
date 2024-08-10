class Student {
    constructor(h,w,n) {
        this.h = h;
        this.w = w;
        this.n = n;
    }
}

function cmp(prev, cur) {
    if(prev.h == cur.h) {
        if(prev.w == prev.h){
            return prev.n - cur.n;
        }

        else {
            return cur.w - prev.w;
        }
    }

    else return cur.h - prev.h;

}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let students = Array(n).fill( new Student() );


for (let i = 0; i < n; i++) {
    let [h,w] = input[i+1].split(" ");
    students[i] = new Student(Number(h),Number(w),i+1);
}

students.sort(cmp);

for (let i =0; i < n; i++) {
    console.log(students[i].h, students[i].w, students[i].n);
}