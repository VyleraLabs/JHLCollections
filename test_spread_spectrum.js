const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Simple seeded PRNG (Linear Congruential Generator) for consistent noise generation across systems
function createLCG(seed) {
    let state = seed;
    return function () {
        state = (state * 1664525 + 1013904223) % 4294967296;
        return state / 4294967296;
    };
}

// Generate a seed from the secret string
function getSeedFromString(str) {
    const hash = crypto.createHash('sha256').update(str).digest('hex');
    return parseInt(hash.substring(0, 8), 16);
}

const SECRET = "belongsToVyleraLabs";
const SEED = getSeedFromString(SECRET);
const ALPHA = 3; // Strength of watermark (1-5 is usually invisible)

async function embed(inputPath, outputPath) {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    const { width, height, channels } = metadata;

    const rawBuffer = await image.raw().toBuffer();
    const watermarkBuffer = Buffer.alloc(rawBuffer.length);
    rawBuffer.copy(watermarkBuffer);

    const prng = createLCG(SEED);

    // Apply spread spectrum noise to RGB channels (ignore Alpha if exists)
    for (let i = 0; i < rawBuffer.length; i++) {
        // If 4 channels (RGBA), skip every 4th byte (Alpha)
        if (channels === 4 && (i + 1) % 4 === 0) continue;

        // Generate noise: -1 or +1
        const sign = prng() > 0.5 ? 1 : -1;
        const noise = sign * ALPHA;

        let val = rawBuffer[i] + noise;
        val = Math.max(0, Math.min(255, val)); // Clamp
        watermarkBuffer[i] = val;
    }

    await sharp(watermarkBuffer, { raw: { width, height, channels } })
        .toFile(outputPath);

    console.log(`Embedded watermark into ${outputPath}`);
}

async function verify(imagePath, seedToCheck) {
    const image = sharp(imagePath);
    const metadata = await image.metadata();
    const { width, height, channels } = metadata;

    const rawBuffer = await image.raw().toBuffer();
    // Use the provided seed
    const prng = createLCG(seedToCheck);

    let correlation = 0;

    for (let i = 0; i < rawBuffer.length; i++) {
        // Skip alpha
        if (channels === 4 && (i + 1) % 4 === 0) continue;

        // Generate the noise pattern for this pixel/channel
        const sign = prng() > 0.5 ? 1 : -1;

        // Correlation: Sum( pixel * pattern )
        correlation += rawBuffer[i] * sign;
    }

    return correlation;
}

async function run() {
    const assetsDir = path.join(process.cwd(), 'public', 'assets', 'original');
    const files = fs.readdirSync(assetsDir).filter(f => f.endsWith('.jpg'));
    if (files.length === 0) {
        console.log("No images found in " + assetsDir);
        return;
    }

    // Choose a random image to test
    const input = path.join(assetsDir, files[0]);
    const output = 'test_robust.png';
    const compressedOutput = 'test_robust_compressed.jpg';

    console.log(`Processing: ${files[0]}`);

    // Embed
    await embed(input, output);

    // Test 1: Lossless (PNG)
    console.log('\n--- Verification on PNG (Lossless) ---');
    const scoreCorrect = await verify(output, SEED);
    const scoreWrong = await verify(output, SEED + 12345); // Wrong key
    console.log(`Score (Correct Key): ${scoreCorrect}`);
    console.log(`Score (Wrong Key)  : ${scoreWrong}`);

    // Test 2: Compressed (JPEG q=50)
    console.log('\n--- Verification on Compressed JPG (Quality=50) ---');
    await sharp(output).jpeg({ quality: 50 }).toFile(compressedOutput);

    const scoreCorrectJpg = await verify(compressedOutput, SEED);
    const scoreWrongJpg = await verify(compressedOutput, SEED + 12345);
    console.log(`Score (Correct Key): ${scoreCorrectJpg}`);
    console.log(`Score (Wrong Key)  : ${scoreWrongJpg}`);

    // Heuristic Threshold
    const ratio = Math.abs(scoreCorrectJpg) / (Math.abs(scoreWrongJpg) + 1); // Avoid div/0
    console.log(`\nDetection Ratio: ${ratio.toFixed(2)}x (should be > 5.0)`);
}

run();
