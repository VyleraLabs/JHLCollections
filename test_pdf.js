const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function test() {
    try {
        const filePath = 'c:/Users/Toma Aytakin/jhlcollection/public/assets/menuroyal8/[2025] Beverage Menu _ Royal Eight Chinese Dining.pdf';
        const dataBuffer = fs.readFileSync(filePath);
        const parser = new PDFParse({ data: dataBuffer });
        const result = await parser.getText();
        console.log('Text extracted:', result.text.substring(0, 500));
        await parser.destroy();
    } catch (err) {
        console.error('Error:', err);
    }
}

test();
