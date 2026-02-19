const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const SECRET_PHRASE = 'belongsToVyleraLabs,godiswatchingusteal';
const SIGNATURE_HASH = crypto.createHash('sha256').update(SECRET_PHRASE).digest('hex');

console.log(`Target Signature Hash: ${SIGNATURE_HASH}`);

const PUBLIC_DIR = path.join(process.cwd(), 'public');

// Supported extensions
const EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.tiff', '.tif'];

async function processDirectory(directory) {
    const entries = fs.readdirSync(directory, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
            await processDirectory(fullPath);
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name).toLowerCase();
            if (EXTENSIONS.includes(ext)) {
                await embedSignature(fullPath);
            }
        }
    }
}

async function embedSignature(filePath) {
    try {
        const tempPath = filePath + '.temp' + path.extname(filePath);

        // Read metadata to check if already signed (optimization)
        const metadata = await sharp(filePath).metadata();

        if (metadata.exif) {
            // Needed to parse existing EXIF if we wanted to check, but sharp doesn't easily expose the raw buffer to check specific tags without another lib.
            // We will just overwrite to strict enforce the signature.
        }

        await sharp(filePath)
            .withMetadata({
                exif: {
                    IFD0: {
                        Copyright: SIGNATURE_HASH,
                        ImageDescription: SECRET_PHRASE,
                        Artist: 'VyleraLabs'
                    }
                }
            })
            .toFile(tempPath);

        // Atomic replacement
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);

        console.log(`Signed: ${path.relative(PUBLIC_DIR, filePath)}`);
    } catch (error) {
        console.error(`Failed to sign ${path.relative(PUBLIC_DIR, filePath)}:`, error.message);
        // Clean up temp file if it exists
        if (fs.existsSync(filePath + '.temp' + path.extname(filePath))) {
            fs.unlinkSync(filePath + '.temp' + path.extname(filePath));
        }
    }
}

console.log('Starting Digital Signature Embedding...');
processDirectory(PUBLIC_DIR)
    .then(() => console.log('Digital Signature Embedding Complete.'))
    .catch(err => console.error('Fatal Error:', err));
