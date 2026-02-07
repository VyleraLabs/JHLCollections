const fs = require('fs');
const path = require('path');

const rootDir = 'c:/Users/Toma Aytakin/jhlcollection';
const keywords = ['features an elegant cafe', 'wide range of cocktails', 'gueridon service'];

function search(dir) {
    if (dir.includes('node_modules') || dir.includes('.git') || dir.includes('.next')) return;

    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            search(fullPath);
        } else if (file.endsWith('.json') || file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            for (const kw of keywords) {
                if (content.toLocaleLowerCase().includes(kw.toLocaleLowerCase())) {
                    console.log(`Found "${kw}" in ${fullPath}`);
                }
            }
        }
    }
}

search(rootDir);
