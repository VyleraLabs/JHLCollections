const fs = require('fs');
const path = require('path');

const harvestDir = 'c:/Users/Toma Aytakin/jhlcollection/harvest';
const files = fs.readdirSync(harvestDir).filter(f => f.endsWith('.json'));

files.forEach(file => {
    const content = fs.readFileSync(path.join(harvestDir, file), 'utf8');
    if (content.toLocaleLowerCase().includes('castro') || content.toLocaleLowerCase().includes('le bleu')) {
        console.log(`Found match in ${file}`);
    }
});
