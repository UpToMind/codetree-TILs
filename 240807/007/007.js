class SecretMeeting {
    constructor(secretCode,meetingPoint,time) {
        this.secretCode = secretCode;
        this.meetingPoint = meetingPoint;
        this.time = time;
    }

}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
const secretMeeting1 = new SecretMeeting(input[0], input[1], Number(input[2]));

console.log(`secret code : ${secretMeeting1.secretCode}`);
console.log(`meeting point : ${secretMeeting1.meetingPoint}`);
console.log(`time : ${secretMeeting1.time}`);