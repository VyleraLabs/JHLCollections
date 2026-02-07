const fs = require('fs');
const content = fs.readFileSync('c:/Users/Toma Aytakin/jhlcollection/harvest/offers_list.json', 'utf8');
const index = content.toLocaleLowerCase().indexOf('castro');
if (index !== -1) {
    console.log('Found Castro at index', index);
    console.log(content.substring(index - 500, index + 1000));
} else {
    console.log('Castro not found in offers_list.json');
}
