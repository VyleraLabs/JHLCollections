const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const menuDir = 'c:/Users/Toma Aytakin/jhlcollection/public/assets/menuroyal8';
const files = [
    { name: '[2025] Main Course _ Royal Eight.pdf', categories: ['Main Course', 'BBQ', 'Set Menu'] },
    { name: '[2025] Dim Sum _ Royal Eight Chinese Dining.pdf', categories: ['Dim Sum', 'Dessert'] },
    { name: '[2025] Beverage Menu _ Royal Eight Chinese Dining.pdf', categories: ['Beverage', 'Wine', 'Tea'] }
];

async function run() {
    for (const file of files) {
        const filePath = path.join(menuDir, file.name);
        console.log(`--- ${file.name} ---`);
        const dataBuffer = fs.readFileSync(filePath);
        const parser = new PDFParse({ data: dataBuffer });
        const result = await parser.getText();
        console.log(result.text);
        await parser.destroy();
        console.log('\n\n');
    }
}

run().catch(console.error);
