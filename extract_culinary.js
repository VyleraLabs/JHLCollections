const fs = require('fs');
const path = require('path');

const files = ['offers_list.json', 'home_experiences.json'];
const keywords = ['Castro', 'Cigar', 'Le Bleu', 'Cafe', 'Mangan', 'Al Gusto', 'Royal Eight', 'Empress'];

let output = '';

files.forEach(file => {
    const filePath = path.join('c:/Users/Toma Aytakin/jhlcollection/harvest', file);
    if (!fs.existsSync(filePath)) return;

    const content = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(content);

    const items = json.data.items || [];

    items.forEach(item => {
        const text = JSON.stringify(item);
        if (keywords.some(k => text.toLocaleLowerCase().includes(k.toLocaleLowerCase()))) {
            output += `--- Match in ${file} ---\n`;
            output += `Title: ${item.title}\n`;
            output += `Slug: ${item.slug}\n`;
            output += `Featured Image: ${JSON.stringify(item.featured_image, null, 2)}\n`;
            output += `Attachments: ${JSON.stringify(item.attachment, null, 2)}\n`;
            output += '------------------------\n\n';
        }
    });

    // Check home_experiences category Items
    if (json.data.items && Array.isArray(json.data.items)) {
        json.data.items.forEach(item => {
            const text = JSON.stringify(item);
            if (keywords.some(k => text.toLocaleLowerCase().includes(k.toLocaleLowerCase()))) {
                output += `--- Sub-match in ${file} ---\n`;
                output += `Title: ${item.title}\n`;
                output += `Featured Image: ${JSON.stringify(item.featured_image, null, 2)}\n`;
                output += '------------------------\n\n';
            }
        });
    }
});

fs.writeFileSync('c:/Users/Toma Aytakin/jhlcollection/culinary_results.txt', output);
