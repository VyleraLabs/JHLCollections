const fs = require('fs');
const path = require('path');

const rootDir = 'c:/Users/Toma Aytakin/jhlcollection';
const keywords = ['Castro', 'Cigar', 'Le Bleu', 'Cafe des Fleurs', 'elegant cafe', 'light snacks'];

function search(dir) {
    if (dir.includes('node_modules') || dir.includes('.git') || dir.includes('.next')) return;

    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
            search(fullPath);
        } else if (stats.isFile() && (file.endsWith('.json') || file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js'))) {
            const content = fs.readFileSync(fullPath, 'utf8');
            for (const keyword of keywords) {
                if (content.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())) {
                    console.log(`Found "${keyword}" in ${fullPath}`);
                    // Print context
                    const index = content.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase());
                    const start = Math.max(0, index - 100);
                    const end = Math.min(content.length, index + 300);
                    // console.log(`Context: ${content.substring(start, end)}`);
                }
            }
        }
    }
}

search(rootDir);
