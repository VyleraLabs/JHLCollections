const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

// We will try to use a more robust way to read the file, pretending it is binary and letting pdf-parse handle it.
// We already know pdf-parse works for English.
// Let's see if we can get the raw buffer and see if there are CIDs or other encoding issues.

async function check() {
    const filePath = 'c:/Users/Toma Aytakin/jhlcollection/public/assets/menuroyal8/[2025] Main Course _ Royal Eight.pdf';
    const dataBuffer = fs.readFileSync(filePath);

    // Use pdf-parse with a custom render callback to inspect text layers if possible, 
    // but pdf-parse is a wrapper around pdf.js. 
    // Let's just dump the text to console log in a way we can see hex if needed, 
    // but first let's just try to print it with JSON.stringify to see if characters are there but hidden.

    const parser = require('pdf-parse');
    const data = await parser(dataBuffer);

    console.log("metadata:", data.info);
    console.log("text snippet (first 1000 chars):");
    console.log(JSON.stringify(data.text.substring(0, 1000)));
}

check();
