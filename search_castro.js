const fs = require('fs');
const content = fs.readFileSync('c:/Users/Toma Aytakin/jhlcollection/harvest/offers_list.json', 'utf8');
const json = JSON.parse(content);
json.data.items.forEach(item => {
    if (JSON.stringify(item).includes('Castro') || JSON.stringify(item).includes('Cigar')) {
        console.log(JSON.stringify(item, null, 2));
    }
});
