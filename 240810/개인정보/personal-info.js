class Student {
    constructor(name, h, w) {
        this.name = name;
        this.h = h;
        this.w = w;
    }
}

function cmpByName(prev, cur) {
    return (prev.name).localeCompare(cur.name);
}

function cmpByHeight(prev, cur) {
    return cur.h - prev.h;
}


const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');
let n = 5;
let students = Array(n).fill( new Student() );

for (let i = 0; i < n; i++) {
    let [name, h, w] = input[i].split(" ");
    students[i] = new Student(name, Number(h), Number(w));
}

students.sort(cmpByName);
console.log("name");

for ( let i = 0; i < n; i++ ) {
    console.log(students[i].name, students[i].h, students[i].w);
}

console.log("");
console.log("height");
students.sort(cmpByHeight);

for ( let i = 0; i < n; i++ ) {
    console.log(students[i].name, students[i].h, students[i].w);
}