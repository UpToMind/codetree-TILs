const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());


if (input < 0) {
    console.log(input);
    console.log("minus");
}
else {
    console.log(input);
}