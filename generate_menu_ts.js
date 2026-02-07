const fs = require('fs');
const path = require('path');

// Read the previously extracted text (or re-extract if needed, but we have menu_text.txt)
// Actually, let's use the text we extracted earlier.
const rawText = fs.readFileSync('menu_text.txt', 'utf16le');

function parsePrice(str) {
    // Remove "IDR", ".", "," and parse.
    // Examples: "108" -> 108000, "4.888.000" -> 4888000
    if (!str) return 0;
    let clean = str.replace(/IDR/i, '').replace(/[.,]/g, '').trim();
    let val = parseInt(clean);

    // Heuristic: if price is small (< 1000), it's likely "in thousands"
    if (val < 1000) val *= 1000;
    return val;
}

const items = [];
const lines = rawText.split('\n');
let currentSource = '';
let currentCategory = 'Uncategorized';

// Manual overrides for High-Ticket/Specific items
const manualData = {
    "Tang Dynasty Set Menu": { price: 4888000, category: "Set Menu", nameChinese: "唐朝套餐", imageKeyword: "banquet" },
    "Peking Duck": { price: 488000, category: "BBQ", nameChinese: "北京烤鸭", imageKeyword: "peking duck", isRecommended: true },
    "Coconut Pudding": { price: 68000, category: "Dessert", imageKeyword: "coconut pudding" },
    "Imperial Majesty": { price: 68000, category: "Premium Tea", imageKeyword: "tea pot" },
    "Siew Mai": { imageKeyword: "dim sum siew mai" },
    "Hakau": { imageKeyword: "dim sum hakau" }
};

for (let line of lines) {
    line = line.trim();
    if (!line) continue;

    if (line.startsWith('--- [2025]')) {
        const file = line.replace('--- ', '').trim();
        if (file.includes('Main Course')) {
            currentSource = 'Main';
            currentCategory = 'Main Course'; // Default
        } else if (file.includes('Dim Sum')) {
            currentSource = 'DimSum';
            currentCategory = 'Dim Sum';
        } else if (file.includes('Beverage')) {
            currentSource = 'Beverage';
            currentCategory = 'Beverage';
        }
        continue;
    }

    // Try to detect categories (All CAPS usually, or specific keywords)
    // This is hard with raw text, so we'll stick to basic detection or manual overrides.
    if (line.match(/^(BBQ|LIVE SEAFOOD|POULTRY|BEEF|VEGETABLES|RICE|NOODLE)$/i)) {
        currentCategory = line;
        continue;
    }

    // Regex for "Name ... Price"
    // Handle "Item Name 123" (where 123 is 123k)
    // Handle "Item Name IDR 1.234.000"

    let name, price;

    // Check for explicit IDR pattern first
    const idrMatch = line.match(/^(.+?)\s+(?:IDR|Rp\.?)\s*([\d.,]+)/i);
    if (idrMatch) {
        name = idrMatch[1].trim();
        price = parsePrice(idrMatch[2]);
    } else {
        // Check for "Name 123" pattern at end of line
        // Be careful with years or other numbers. Assume price is at end.
        const suffixMatch = line.match(/^(.+?)\s+(\d{2,4})$/);
        if (suffixMatch) {
            name = suffixMatch[1].trim();
            price = parsePrice(suffixMatch[2]);
        }
    }

    if (name && price) {
        // Enriched Data
        let enriched = {
            id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            sourceFile: currentSource,
            category: currentCategory,
            name: name,
            price: price,
            imageKeyword: name.toLowerCase(),
            description: `Exquisite ${name} prepared by our master chefs.`
        };

        // Apply manual overrides
        const override = Object.keys(manualData).find(key => name.includes(key));
        if (override) {
            enriched = { ...enriched, ...manualData[override] };
            // Ensure exact name match doesn't overwrite if substring match was used
            // actually, if we matched substring, we might want to keep the original full name 
            // OR replace it if the detected name was partial.
            // For "Peking Duck", the pdf might say "Whole Peking Duck 488". 
            // The heuristic above might catch "Whole Peking Duck".
        }

        items.push(enriched);
    }
}

// Add specifically requested items if missed (Tang Dynasty might not be in the simple text parse if format is complex)
const tang = items.find(i => i.name.includes('Tang Dynasty'));
if (!tang) {
    items.unshift({
        id: 'tang-dynasty-set-menu',
        sourceFile: 'Main',
        category: 'Set Menu',
        name: 'Tang Dynasty Set Menu',
        nameChinese: '唐朝套餐',
        price: 4888000,
        description: 'A luxurious 10-course banquet fit for an emperor, featuring our finest culinary creations.',
        imageKeyword: 'banquet',
        isRecommended: true
    });
}

// Generate TS File Content
const tsContent = `export type MenuItem = {
  id: string;
  sourceFile: 'Main' | 'DimSum' | 'Beverage';
  category: string;
  name: string;
  nameChinese?: string;
  price: number;
  description?: string;
  imageKeyword: string;
  isRecommended?: boolean;
};

export const MENU_ITEMS: MenuItem[] = ${JSON.stringify(items, null, 2)};
`;

// Ensure data directory exists
if (!fs.existsSync('data')) fs.mkdirSync('data');

fs.writeFileSync('data/menu.ts', tsContent);
console.log(`Generated data/menu.ts with ${items.length} items.`);
