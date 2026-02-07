const fs = require('fs');
// Try to handle different export styles of pdf-parse
const pdfLib = require('pdf-parse');
const pdf = typeof pdfLib === 'function' ? pdfLib : (pdfLib.default || pdfLib);

const files = [
    'c:/Users/Toma Aytakin/jhlcollection/public/assets/menuroyal8/[2025] Dim Sum _ Royal Eight Chinese Dining.pdf',
    'c:/Users/Toma Aytakin/jhlcollection/public/assets/menuroyal8/[2025] Main Course _ Royal Eight.pdf'
];

async function check() {
    for (const file of files) {
        console.log(`\n--- Checking ${path.basename(file)} ---`);
        try {
            const dataBuffer = fs.readFileSync(file);
            const data = await pdf(dataBuffer);
            const text = data.text;
            console.log(`Length: ${text.length}`);
            console.log("First 200 chars:", text.substring(0, 200).replace(/\n/g, ' '));

            // Check for keywords
            const keywords = ['Duck', 'Beef', 'Pork', 'Chicken', 'Dumpling', 'Rice', 'Noodle', 'Soup', 'Set', 'Menu'];
            const found = keywords.filter(k => text.includes(k));
            console.log("Keywords found:", found);

            if (found.length === 0) {
                console.log("WARNING: potentially image-based PDF or encoding issue.");
            }
        } catch (e) {
            console.log("Error reading PDF:", e.message);
        }
    }
}

const path = require('path');
check();
