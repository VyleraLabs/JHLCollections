const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'assets', 'royal-eight');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Helper to create an SVG string
function createSVG(text, color) {
    return `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="${color}"/>
<text x="50%" y="50%" font-family="serif" font-size="48" fill="#D4AF37" text-anchor="middle" dy=".3em">${text}</text>
</svg>`;
}

const assets = [
    { name: 'peking-duck.jpg', text: 'Peking Duck', color: '#1A1A1A' },
    { name: 'dim-sum.jpg', text: 'Dim Sum', color: '#2A2A2A' },
    { name: 'tea-ceremony.jpg', text: 'Tea Ceremony', color: '#1F1F1F' },
    { name: 'abalone.jpg', text: 'Abalone', color: '#151515' },
    { name: 'banquet.jpg', text: 'Banquet', color: '#202020' },
    // Hero image needs to be jpeg for next/image optimization sometimes, but let's try svg
    // actually, next/image handles svg fine but we need to supply width/height.
    // user code expects imageUrl to be used in src.
    // SVG is fine.
    { name: 'hero-ambience.jpg', text: 'Royal Eight Ambience', color: '#0F0F0F' }
];

// Note: saving as .jpg but content is SVG will break image viewers. 
// We should save as .svg and update code to point to .svg OR use a library to create real jpg.
// But we can't easily create real JPG without canvas/sharp.
// Let's just create .svg files and update the code to point to .svg.

assets.forEach(asset => {
    const svgContent = createSVG(asset.text, asset.color);
    const svgPath = path.join(targetDir, asset.name.replace('.jpg', '.svg'));
    fs.writeFileSync(svgPath, svgContent);
    console.log(`Created ${svgPath}`);
});
