const fs = require('fs');
const path = require('path');

const originalDir = 'c:/Users/Toma Aytakin/jhlcollection/public/assets/original';
const harvestDir = 'c:/Users/Toma Aytakin/jhlcollection/harvest';

const jsonFiles = fs.readdirSync(harvestDir).filter(f => f.endsWith('.json'));
const imageRefs = new Set();

jsonFiles.forEach(file => {
    const content = fs.readFileSync(path.join(harvestDir, file), 'utf8');
    const matches = content.match(/img-[a-z0-9-]+\.(jpg|webp|png|ico)/g);
    if (matches) matches.forEach(m => imageRefs.add(m));
});

const files = fs.readdirSync(originalDir).filter(f => f.startsWith('img-'));
const orphans = files.filter(f => !imageRefs.has(f));

console.log('Orphan Images:');
orphans.forEach(f => {
    const stats = fs.statSync(path.join(originalDir, f));
    console.log(`${f} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
});
