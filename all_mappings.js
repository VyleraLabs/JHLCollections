const fs = require('fs');
const path = require('path');

const harvestDir = 'c:/Users/Toma Aytakin/jhlcollection/harvest';
const jsonFiles = fs.readdirSync(harvestDir).filter(f => f.endsWith('.json'));

let output = '';

jsonFiles.forEach(file => {
    const content = fs.readFileSync(path.join(harvestDir, file), 'utf8');
    const json = JSON.parse(content);

    function traverse(obj) {
        if (typeof obj !== 'object' || obj === null) return;

        if (obj.title || obj.name) {
            const str = JSON.stringify(obj);
            const imgMatch = str.match(/img-[a-z0-9-]+\.(jpg|webp|png)/);
            if (imgMatch) {
                output += `[${file}] "${obj.title || obj.name}" -> ${imgMatch[0]}\n`;
            }
        }

        Object.values(obj).forEach(val => {
            if (Array.isArray(val)) val.forEach(traverse);
            else traverse(val);
        });
    }
    traverse(json);
});

fs.writeFileSync('c:/Users/Toma Aytakin/jhlcollection/all_mappings.txt', output);
