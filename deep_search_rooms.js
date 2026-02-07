const fs = require('fs');
const content = fs.readFileSync('c:/Users/Toma Aytakin/jhlcollection/harvest/rooms_list.json', 'utf8');
const index = content.toLocaleLowerCase().indexOf('cigar');
if (index !== -1) {
    console.log('Found Cigar at index', index);
    console.log(content.substring(index - 500, index + 500));
} else {
    console.log('Cigar not found in rooms_list.json');
}
