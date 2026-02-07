const fs = require('fs');

const menuText = fs.readFileSync('menu_text.txt', 'utf16le');

const items = [];
let currentFile = '';
let currentCategories = [];

const lines = menuText.split('\n');

for (let line of lines) {
    line = line.trim();
    if (line.startsWith('--- [2025]')) {
        currentFile = line.replace(/--- /g, '');
        if (currentFile.includes('Main Course')) currentCategories = ['Main Course', 'BBQ', 'Set Menu'];
        else if (currentFile.includes('Dim Sum')) currentCategories = ['Dim Sum', 'Dessert'];
        else if (currentFile.includes('Beverage')) currentCategories = ['Beverage', 'Wine', 'Tea'];
        continue;
    }

    if (!line || line.length < 3) continue;

    // Check for items with prices (e.g., "Golden Sun 68")
    const match = line.match(/^(.+?)\s+(\d+)(?:\s+\d+)?$/);
    if (match) {
        items.push({
            name: match[1],
            price: parseInt(match[2]) * 1000,
            category: currentCategories[0], // simplified
            sourceFile: currentFile
        });
    } else if (line.includes('IDR')) {
        // Handle lines like "Tang Dynasty Set Menu - IDR 4.888.000"
        const idrMatch = line.match(/^(.+?)\s+-\s+IDR\s+([\d.]+)/);
        if (idrMatch) {
            items.push({
                name: idrMatch[1],
                price: parseInt(idrMatch[2].replace(/\./g, '')),
                category: "Set Menu",
                sourceFile: currentFile
            });
        }
    }
}

// Add some manual items if extraction missed them but they were in the prompt
const manualItems = [
    { name: "Tang Dynasty Set Menu", price: 4888000, category: "Set Menu", sourceFile: "[2025] Main Course _ Royal Eight.pdf" },
    { name: "Peking Duck", price: 888000, category: "BBQ", sourceFile: "[2025] Main Course _ Royal Eight.pdf" },
    { name: "Coconut Pudding", price: 68000, category: "Dessert", sourceFile: "[2025] Dim Sum _ Royal Eight Chinese Dining.pdf" },
    { name: "Imperial Majesty", price: 68000, category: "Beverage", sourceFile: "[2025] Beverage Menu _ Royal Eight Chinese Dining.pdf" }
];

manualItems.forEach(mi => {
    if (!items.find(i => i.name === mi.name)) items.push(mi);
});

fs.writeFileSync('menuData.json', JSON.stringify(items, null, 2));
console.log(`Extracted ${items.length} items to menuData.json`);
