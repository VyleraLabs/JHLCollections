const sharp = require('sharp');
const path = require('path');
const crypto = require('crypto');
const fs = require('fs');

const SECRET_PHRASE = 'belongsToVyleraLabs';
const ALPHA = 3;

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

async function verifyWatermark(filePath) {
    try {
        console.log(`Verifying: ${filePath}`);

        const image = sharp(filePath);
        const metadata = await image.metadata();
        const { width, height, channels } = metadata;

        // NOTE: For a real robust system, we would need to handle resizing.
        // If the image was resized, we need to resize our noise generation grid or try multiple scales.
        // For this implementation, we assume the checker checks the image at its current resolution 
        // using a noise pattern generated FOR that resolution. 
        // This works if the noise function is spatial and independent (which it is, per pixel).
        // Wait, if image is resized, pixel (x,y) no longer corresponds to the same prng sequence index i.
        // Index i = y * width + x. 
        // If width changes, the whole sequence shifts.
        // Use case: This script validates images that are largely intact or just compressed.
        // To handle resize, we'd need to try to restore original aspect/size or use a frequency domain watermark.
        // For now, checks are valid for: Compression, Format Conversion, Metadata Stripping.
        // Checks assume: Geometry is preserved (or we'd need to resize image back to original known dimensions if we knew them).

        const rawBuffer = await image.raw().toBuffer();
        const prng = createLCG(SEED);

        let correlation = 0;
        let signalEnergy = 0;

        for (let i = 0; i < rawBuffer.length; i++) {
            if (channels === 4 && (i + 1) % 4 === 0) continue;

            const noiseSign = prng() > 0.5 ? 1 : -1;

            // Correlation = Sum( Image[i] * Noise[i] )
            // Image[i] = Original[i] + alpha*Noise[i]
            // Sum( (Orig + alpha*Noise) * Noise ) = Sum(Orig*Noise) + Sum(alpha*Noise^2)
            // Sum(Orig*Noise) -> 0 (uncorrelated)
            // Sum(alpha*Noise^2) -> alpha * length * 1 (since noise is +/- 1 and square is 1)
            // So expected Correlation ~ alpha * NumberOfPixels * Channels

            correlation += rawBuffer[i] * noiseSign;
            signalEnergy += rawBuffer[i] * rawBuffer[i];
        }

        // Normalize correlation? 
        // Or just check against expected strength.
        // Control check (Simulate wrong key)
        const prngControl = createLCG(SEED + 999);
        let controlCorrelation = 0;
        for (let i = 0; i < rawBuffer.length; i++) {
            if (channels === 4 && (i + 1) % 4 === 0) continue;
            const noiseSign = prngControl() > 0.5 ? 1 : -1;
            controlCorrelation += rawBuffer[i] * noiseSign;
        }

        console.log(`Correlation Score (Target): ${correlation}`);
        console.log(`Correlation Score (Random): ${controlCorrelation}`);

        const ratio = Math.abs(correlation) / (Math.abs(controlCorrelation) + 1);
        console.log(`Confidence Ratio: ${ratio.toFixed(2)}`);

        if (ratio > 3.0) { // Threshold > 3x random noise floor
            console.log("✅ RESULT: ROBUST WATERMARK DETECTED (High Confidence)");
            return true;
        } else if (ratio > 1.5) {
            console.log("⚠️ RESULT: POSSIBLE WATERMARK (Low Confidence - Image may be heavily modified or resized)");
            return false;
        } else {
            console.log("❌ RESULT: NO WATERMARK DETECTED");
            return false;
        }

    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
        return false;
    }
}

async function main() {
    let target = process.argv[2];
    if (!target) {
        // Default to first jpg found in public/assets/original/
        const dir = path.join(process.cwd(), 'public', 'assets', 'original');
        if (fs.existsSync(dir)) {
            const files = fs.readdirSync(dir).filter(f => f.match(/\.(jpg|jpeg|png)$/i));
            if (files.length > 0) target = path.join(dir, files[0]);
        }
    }

    if (target) {
        await verifyWatermark(target);
    } else {
        console.log("Usage: node scripts/verify_robust_watermark.js <path-to-image>");
    }
}

main();
