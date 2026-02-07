const fs = require('fs');
const content = fs.readFileSync('c:/Users/Toma Aytakin/jhlcollection/harvest/home_experiences.json', 'utf8');
const json = JSON.parse(content);
console.log(JSON.stringify(json.data.items, null, 2));
