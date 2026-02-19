const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(process.cwd(), 'public', 'assets', 'original');
const DEST_DIR = path.join(process.cwd(), 'public', 'assets', 'sandjong');

if (!fs.existsSync(DEST_DIR)) {
    fs.mkdirSync(DEST_DIR, { recursive: true });
}

async function processAssets() {
    const files = fs.readdirSync(SRC_DIR);

    // Process Images
    const imageFiles = files.filter(f => f.toLowerCase().startsWith('sandjong') && f.match(/\.(png|jpg|jpeg)$/i));

    for (const file of imageFiles) {
        const srcPath = path.join(SRC_DIR, file);
        const destPath = path.join(DEST_DIR, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));

        console.log(`Optimizing image: ${file}`);

        await sharp(srcPath)
            .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true }) // Max HD
            .webp({ quality: 80, smartSubsample: true })
            .toFile(destPath);
    }

    // Process Video
    const videoFile = 'sandjongherovid.mp4';
    if (files.includes(videoFile)) {
        const srcVideo = path.join(SRC_DIR, videoFile);
        const destVideo = path.join(DEST_DIR, 'hero.mp4');

        console.log(`Copying video: ${videoFile} -> hero.mp4`);
        fs.copyFileSync(srcVideo, destVideo);
        // Note: No optimization possible without ffmpeg
    }
}

processAssets().catch(console.error);
