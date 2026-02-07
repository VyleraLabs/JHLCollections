const fs = require('fs');
const pdfLib = require('pdf-parse');

console.log('--- INSPECTING PDF-PARSE ---');
console.log('Type:', typeof pdfLib);

function inspect(obj, depth = 0) {
    if (depth > 2) return;
    if (typeof obj !== 'object' || obj === null) return;

    for (const key of Object.keys(obj)) {
        const val = obj[key];
        const type = typeof val;
        console.log(`${'  '.repeat(depth)}${key}: ${type}`);
        if (type === 'object') inspect(val, depth + 1);
    }
}

inspect(pdfLib);

// Try using node path specifically
try {
    const nodeLib = require('pdf-parse/dist/node/cjs/index.cjs');
    console.log('\n--- INSPECTING DIST/NODE/CJS ---');
    console.log('Type:', typeof nodeLib);
    inspect(nodeLib);
} catch (e) {
    console.log('Could not require dist/node/cjs:', e.message);
}
