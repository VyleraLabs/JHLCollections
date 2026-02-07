const fs = require('fs');
const content = fs.readFileSync('c:/Users/Toma Aytakin/jhlcollection/harvest/offers_list.json', 'utf8');
const json = JSON.parse(content);
const results = json.data.items.map(item => ({ title: item.title, slug: item.slug, image: item.featured_image.name }));
fs.writeFileSync('c:/Users/Toma Aytakin/jhlcollection/offers_summary.json', JSON.stringify(results, null, 2));
