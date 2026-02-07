const fs = require('fs');
const pdfLib = require('pdf-parse');

console.log('Type of pdfLib:', typeof pdfLib);
console.log('Keys of pdfLib:', Object.keys(pdfLib));

async function test() {
    try {
        const dataBuffer = fs.readFileSync('c:/Users/Toma Aytakin/jhlcollection/public/assets/menuroyal8/[2025] Main Course _ Royal Eight.pdf');

        let parser;
        if (typeof pdfLib === 'function') {
            parser = pdfLib;
        } else if (pdfLib.PDFParse) {
            parser = pdfLib.PDFParse;
        } else if (pdfLib.default) {
            parser = pdfLib.default;
        } else {
            console.error('Could not find PDFParse function');
            return;
        }

        console.log('Using parser:', parser);

        // PDFParse constructor style or function style?
        // The cli.mjs used "new PDFParse"
        // Let's try to see if it's a class or function.

        // If it's the class from the CLI: "import { PDFParse } from 'pdf-parse';"
        // Then we probably need to instantiate it.

        let data;
        try {
            // Try functional style first if it matches old API, or Class style
            if (parser.prototype && parser.prototype.getText) {
                const instance = new parser({ data: dataBuffer });
                data = await instance.getText();
                console.log("Extracted via Class method");
            } else {
                data = await parser(dataBuffer);
                console.log("Extracted via Function method");
            }
        } catch (e) {
            console.log("First attempt failed, trying alternative...", e.message);
            // Fallback
            const instance = new parser({ data: dataBuffer });
            data = await instance.getText();
        }

        const text = data.text || data; // Handle if data is just the object

        const duckIndex = text.indexOf("Peking Duck");
        if (duckIndex !== -1) {
            console.log("\n--- CONTEXT AROUND 'Peking Duck' ---");
            console.log(text.substring(duckIndex - 100, duckIndex + 200));
        } else {
            console.log("'Peking Duck' not found.");
        }

        // Check for Chinese char (example: 北京)
        const chineseCheck = text.match(/[\u4e00-\u9fa5]/);
        if (chineseCheck) {
            console.log("Chinese characters FOUND:", chineseCheck[0]);
            // Print a snippet around it
            const idx = chineseCheck.index;
            console.log(text.substring(idx - 50, idx + 50));
        } else {
            console.log("Chinese characters NOT found.");
        }

    } catch (err) {
        console.error("Final Error:", err);
    }
}

test();
