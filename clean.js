const fs = require('fs');
const path = require('path');

const pathToRemove = path.join(__dirname, '.next');

if (fs.existsSync(pathToRemove)) {
    fs.rmSync(pathToRemove, { recursive: true, force: true });
    console.log('.next folder deleted.');
} else {
    console.log('.next folder does not exist.');
}
