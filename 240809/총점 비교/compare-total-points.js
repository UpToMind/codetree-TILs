class Student {
    constructor(name, kor, eng, math) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
}

function cmp (prev,cur) {
    return ((prev.kor + prev.eng + prev.math) - (cur.kor + cur.eng + cur.math));
}


const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
const students = [];

for (let i = 0; i < n; i++) {
    let [name, kor, eng, math] = input[i+1].split(" ");
    students.push(new Student(name, Number(kor), Number(eng), Number(math)));
}

students.sort(cmp);

for (let i =0; i < n; i++) {
    console.log(students[i].name,students[i].kor,students[i].eng,students[i].math);
}