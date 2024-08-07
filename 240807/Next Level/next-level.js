class User {
    constructor(id = "codetree", level = 10) {
        this.id = id;
        this.level = level;
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

const user1 = new User(input[0], Number(input[1]));
const user2 = new User();

console.log(`user ${user2.id} lv ${user2.level}`);
console.log(`user ${user1.id} lv ${user1.level}`);