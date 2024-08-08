class Data {
    constructor(date, day, weather) {
        this. date = date;
        this.day = day;
        this.weather = weather;
    }
}

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
const weathers = [];

for (let i=0; i<n; i++) {
    let [date, day, weather] = input[i+1].split(" ");
    weathers.push(new Data(date,day,weather));
}

weathers.sort((prev,cur) => prev.date.localeCompare(cur.date));

for (let i = 0; i < n; i++) {
    if(weathers[i].weather === "Rain") {
        console.log(weathers[i].date, weathers[i].day, weathers[i].weather);
        break;
    }
}