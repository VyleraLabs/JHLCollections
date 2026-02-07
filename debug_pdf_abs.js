const fs = require('fs');
const path = require('path');
// Use absolute path since relative require seems flaky in this env
const pdfParsePath = 'c:/Users/Toma Aytakin/jhlcollection/node_modules/pdf-parse';
const PDFParse = require(pdfParsePath);

async function check() {
    try {
        const filePath = 'c:/Users/Toma Aytakin/jhlcollection/public/assets/menuroyal8/[2025] Main Course _ Royal Eight.pdf';
        const dataBuffer = fs.readFileSync(filePath);

        const data = await PDFParse(dataBuffer);

        console.log("metadata:", data.info);
        // Dump a larger snippet to find "Peking Duck" and see what's around it
        const text = data.text;
        const duckIndex = text.indexOf("Peking Duck");

        if (duckIndex !== -1) {
            console.log("\n--- CONTEXT AROUND 'Peking Duck' ---");
            console.log(text.substring(duckIndex - 100, duckIndex + 200));
            console.log("------------------------------------\n");
        } else {
            console.log("'Peking Duck' not found in text.");
        }

        console.log("text snippet (first 1000 chars):");
        console.log(JSON.stringify(text.substring(0, 1000)));

    } catch (e) {
        console.error(e);
    }
}

check();
