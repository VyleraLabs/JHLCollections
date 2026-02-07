const fs = require('fs');
const pdf = require('pdf-parse');

async function test() {
    try {
        const dataBuffer = fs.readFileSync('c:/Users/Toma Aytakin/jhlcollection/public/assets/menuroyal8/[2025] Main Course _ Royal Eight.pdf');
        const data = await pdf(dataBuffer);

        // Check for Peking Duck
        const text = data.text;
        const duckIndex = text.indexOf("Peking Duck");

        if (duckIndex !== -1) {
            console.log("\n--- CONTEXT AROUND 'Peking Duck' ---");
            console.log(text.substring(duckIndex - 100, duckIndex + 200));
            console.log("------------------------------------\n");
        } else {
            console.log("'Peking Duck' not found.");
        }

    } catch (err) {
        console.error(err);
    }
}

test();
