const fs = require('fs');
const path = require('path');
const harvestDir = 'c:/Users/Toma Aytakin/jhlcollection/harvest';
const jsonFiles = fs.readdirSync(harvestDir).filter(f => f.endsWith('.json'));
const keywords = ['Mezzanine', 'flower', 'Cigar', 'Castro', 'Le Bleu', 'Fleurs'];

jsonFiles.forEach(file => {
    const content = fs.readFileSync(path.join(harvestDir, file), 'utf8');
    keywords.forEach(kw => {
        if (content.toLocaleLowerCase().includes(kw.toLocaleLowerCase())) {
            console.log(`Found "${kw}" in ${file}`);
        }
    });
});
