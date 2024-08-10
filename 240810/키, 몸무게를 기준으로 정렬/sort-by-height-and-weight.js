class Person {
    constructor(name, h, w) {
        this.name = name;
        this.h = h;
        this.w = w;
    }
}

function cmp (p,c) {
    if (p.h == c.h) {
        return c.w - p.w;
    }

    else return p.h - c.h;
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let people = Array(n).fill(new Person);

for(let i = 0; i < n; i++){
    let [name, h, w] = input[i+1].split(" ");
    people[i] = new Person(name, Number(h), Number(w));
}

people.sort(cmp);

for(let i=0; i<n; i++) {
    console.log(people[i].name, people[i].h, people[i].w);
}