const fs = require('fs');

try {
    const rawText = fs.readFileSync('menu_text.txt', 'utf16le');
    const lines = rawText.split(/\r?\n/);
    let foundBeverage = false;
    let count = 0;

    console.log("--- START INSPECTION ---");
    for (const line of lines) {
        if (line.includes('[2025] Beverage Menu')) {
            foundBeverage = true;
            console.log("Found Header:", line);
        }

        if (foundBeverage) {
            console.log(line);
            count++;
            if (count > 50) break; // First 50 lines of beverage
        }
    }
    console.log("--- END INSPECTION ---");

} catch (err) {
    console.error("Error reading file:", err);
}
