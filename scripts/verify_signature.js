const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const SECRET_PHRASE = 'belongsToVyleraLabs,godiswatchingusteal';
const EXPECTED_HASH = crypto.createHash('sha256').update(SECRET_PHRASE).digest('hex');

async function verifySignature(filePath) {
    try {
        console.log(`Checking: ${filePath}`);
        const metadata = await sharp(filePath).metadata();

        if (!metadata.exif) {
            console.log('❌ No EXIF metadata found.');
            return false;
        }

        // Parse EXIF buffer? sharp returns buffer for exif. 
        // But sharp also allows reading parsed string tags if we use 'normalise' or just by checking specific fields if they are exposed.
        // Actually, sharp exposes `exif` as a Buffer. We need to parse it or trust that if we wrote it, it's there.
        // Wait, `sharp().metadata()` returns `exif` as Buffer. 
        // To read the tags we might need a parser like `exif-reader` OR we can just check if the buffer contains our string (hacky but works for a quick check if we don't want to add dependencies).

        const exifBuffer = metadata.exif;
        const hashBuffer = Buffer.from(EXPECTED_HASH);

        if (exifBuffer.includes(hashBuffer)) {
            console.log('✅ VALID STRINGS FOUND: Signature detected in EXIF data.');
            return true;
        } else {
            // Let's try to check for the secret phrase too
            const phraseBuffer = Buffer.from(SECRET_PHRASE);
            if (exifBuffer.includes(phraseBuffer)) {
                console.log('✅ VALID STRINGS FOUND: Secret phrase detected in EXIF data (Partial Match).');
                return true;
            }

            console.log('❌ Signature NOT found in EXIF data.');
            console.log('Expected Hash:', EXPECTED_HASH);
            return false;
        }

    } catch (error) {
        console.error(`Error verifying ${filePath}:`, error.message);
        return false;
    }
}

// Find a random image if no arg provided
async function main() {
    let targetFile = process.argv[2];

    if (!targetFile) {
        const assetsDir = path.join(process.cwd(), 'public', 'assets', 'original'); // Use a known populated dir
        if (fs.existsSync(assetsDir)) {
            const files = fs.readdirSync(assetsDir).filter(f => f.match(/\.(jpg|jpeg|png|webp)$/i));
            if (files.length > 0) {
                targetFile = path.join(assetsDir, files[0]);
            }
        }
    }

    if (targetFile) {
        await verifySignature(targetFile);
    } else {
        console.log('No image provided and could not find one automatically.');
    }
}

main();
