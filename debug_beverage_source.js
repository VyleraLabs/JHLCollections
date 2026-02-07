const fs = require('fs');
const content = fs.readFileSync('menu_text.txt', 'utf16le');
const lines = content.split(/\r?\n/);

console.log("Searching for Apple and Latte...");
lines.forEach(line => {
    if (line.includes('Apple') || line.includes('Latte') || line.includes('Iced Tea')) {
        console.log(`[MATCH]: ${line.trim()}`);
    }
});
