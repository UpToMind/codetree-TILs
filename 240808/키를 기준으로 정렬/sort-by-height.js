class Student {
    constructor(name, height, bodyweight) {
        this.name = name;
        this.height = height;
        this.bodyweight = bodyweight;
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
const students = [];

for(let i = 0; i < n; i++) {
    let [name, height, bodyweight] = input[i+1].split(" ");
    height = Number(height);
    bodyweight = Number(bodyweight);
    students.push(new Student(name, height, bodyweight));
}

students.sort((prev,cur) => prev.height - cur.height);

for(let i = 0; i < n; i++) {
    console.log(students[i].name, students[i].height, students[i].bodyweight);
}