const fs = require('fs');

const content = fs.readFileSync('./data/menu.ts', 'utf8');
const lines = content.split('\n');

let isBeverage = false;
let names = [];

for (let line of lines) {
    if (line.includes('"category": "Beverage"')) {
        isBeverage = true;
    }
    if (isBeverage && line.includes('"name":')) {
        const match = line.match(/"name": "(.*)"/);
        if (match) {
            names.push(match[1]);
        }
        isBeverage = false; // Reset for next item block
    }
}

console.log("Beverage Items:", names.length);
names.forEach(n => console.log(n));
