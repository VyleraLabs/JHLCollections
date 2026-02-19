const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const SECRET_PHRASE = 'belongsToVyleraLabs';
const ALPHA = 3; // optimized amplitude for visibility vs robustness
const EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

// Linear Congruential Generator for consistent cross-platform/run noise
function createLCG(seed) {
    let state = seed;
    return function () {
        state = (state * 1664525 + 1013904223) % 4294967296;
        return state / 4294967296;
    };
}

function getSeedFromString(str) {
    const hash = crypto.createHash('sha256').update(str).digest('hex');
    return parseInt(hash.substring(0, 8), 16);
}

const SEED = getSeedFromString(SECRET_PHRASE);

async function processDirectory(directory) {
    const entries = fs.readdirSync(directory, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
            await processDirectory(fullPath);
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name).toLowerCase();
            if (EXTENSIONS.includes(ext)) {
                await embedWatermark(fullPath);
            }
        }
    }
}

async function embedWatermark(filePath) {
    try {
        // Skip if it looks like a temp file
        if (filePath.includes('.temp.')) return;

        const tempPath = filePath + '.temp.png'; // Use PNG for intermediate to avoid generational loss during embedding
        const backupPath = filePath + '.bak';

        const image = sharp(filePath);
        const metadata = await image.metadata();
        const { width, height, channels, format } = metadata;

        const rawBuffer = await image.raw().toBuffer();
        const watermarkBuffer = Buffer.alloc(rawBuffer.length);
        rawBuffer.copy(watermarkBuffer);

        const prng = createLCG(SEED);

        let changed = false;

        // Apply Spread Spectrum Watermark
        for (let i = 0; i < rawBuffer.length; i++) {
            // Skip alpha channel if present (usually every 4th byte for RGBA)
            // Valid for: 3 channels (RGB) or 4 channels (RGBA)
            if (channels === 4 && (i + 1) % 4 === 0) continue;

            // Generate deterministic noise: -1 or +1
            // We must generate it for EVERY pixel component to stay in sync
            const noiseSign = prng() > 0.5 ? 1 : -1;
            const noise = noiseSign * ALPHA;

            let val = rawBuffer[i] + noise;
            val = Math.max(0, Math.min(255, val)); // Clamp

            if (watermarkBuffer[i] !== val) {
                watermarkBuffer[i] = val;
                changed = true;
            }
        }

        if (changed) {
            // Save to temp file first
            const pipeline = sharp(watermarkBuffer, { raw: { width, height, channels } });

            // Preserve original format settings where possible, but for robust updates we just save back to original format
            // We use the original file path extension to determine format
            await pipeline.toFile(tempPath);

            // Atomic replace
            // Note: We might want to keep metadata from previous step!
            // Sharp might strip it if we process raw. 
            // Better to verify if we can re-merge metadata. 
            // But since 'embed_signature.js' puts it in EXIF, let's try to preserve it.
            // Actually, simply using .withMetadata() on the output chain should copy from input if we chained from file, 
            // but here we are creating new sharp from buffer.
            // Correct approach: 
            // 1. Read metadata buffer from original
            // 2. Attach to new pipeline

            const originalMetadata = await sharp(filePath).metadata();

            // Re-saving:
            // For now, we overwrite. If we want to preserve EXIF from step 1, we should be careful.
            // The previous script wrote specific EXIF. We can re-assert it here or try to copy.
            // Since we know what the signature IS, let's just re-assert it to be safe.
            // It's cheaper than parsing/copying generic buffer.
            const SIGNATURE_HASH = crypto.createHash('sha256').update(SECRET_PHRASE + ',godiswatchingusteal').digest('hex'); // Ensure this matches previous script logic if we initialized it differently.
            // Previous script used 'belongsToVyleraLabs,godiswatchingusteal'. 
            // This script uses 'belongsToVyleraLabs'. 
            // Let's use the FULL phrase for the hash to matching previous script. 
            const META_PHRASE = 'belongsToVyleraLabs,godiswatchingusteal';
            const META_HASH = crypto.createHash('sha256').update(META_PHRASE).digest('hex');

            // Unlink original file to avoid lock/write errors on Windows
            try {
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            } catch (e) {
                console.warn(`Could not unlink ${filePath}, attempting overwrite...`);
            }

            // Final save with metadata
            await sharp(tempPath)
                .withMetadata({
                    exif: {
                        IFD0: {
                            Copyright: META_HASH,
                            ImageDescription: META_PHRASE,
                            Artist: 'VyleraLabs'
                        }
                    }
                })
                .toFile(filePath); // Overwrite original

            fs.unlinkSync(tempPath);
            console.log(`Watermarked: ${path.basename(filePath)}`);
        } else {
            console.log(`Skipped (No change): ${path.basename(filePath)}`);
        }

    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
        // Clean up
        if (fs.existsSync(filePath + '.temp.png')) fs.unlinkSync(filePath + '.temp.png');
    }
}

const PUBLIC_DIR = path.join(process.cwd(), 'public');

console.log(`Starting Robust Watermarking with Seed generated from: "${SECRET_PHRASE}"`);
processDirectory(PUBLIC_DIR)
    .then(() => console.log('Robust Watermarking Complete.'))
    .catch(err => console.error('Fatal Error:', err));
