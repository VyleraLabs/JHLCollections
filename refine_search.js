const fs = require('fs');
const content = fs.readFileSync('c:/Users/Toma Aytakin/jhlcollection/harvest/offers_list.json', 'utf8');
const json = JSON.parse(content);
json.data.items.forEach(item => {
    const text = JSON.stringify(item);
    if (text.toLocaleLowerCase().includes('le bleu') || text.toLocaleLowerCase().includes('le bl\u00e9u') || text.toLocaleLowerCase().includes('cigar')) {
        console.log(`--- Match found ---`);
        console.log(`Title: ${item.title}`);
        console.log(`Image: ${item.featured_image ? item.featured_image.name : 'N/A'}`);
        console.log(`Attachments: ${item.attachment ? item.attachment.map(a => a.name).join(', ') : 'N/A'}`);
    }
});
