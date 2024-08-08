const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);

class Person {
    constructor(name, address, region) {
        this.name = name;
        this.address = address;
        this.region = region;
    }
}

let persons = Array(n).fill(new Person);
for(let i = 0; i < n; i++) {
    let [name, address, region] = input[i+1].split(" ");
    persons[i] = new Person(name, address, region);
}

persons.sort((prev,cur) => prev.name - cur.name);

console.log(`name ${persons[n-1].name}`);
console.log(`addr ${persons[n-1].address}`);
console.log(`city ${persons[n-1].region}`);