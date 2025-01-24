function palindromeCheck(word) {
    let cnt = 0;

    for (i = 0; i < parseInt(word.length / 2); i++) {
        if (word[i] == word[word.length - 1 - i]) {
            cnt++;
        }
    }

    if (cnt == parseInt(word.length / 2)) {
        return 'Yes';
    }

    else return 'No';
}

const fs = require("fs");
let word = fs.readFileSync(0).toString().trim();

console.log(palindromeCheck(word));
