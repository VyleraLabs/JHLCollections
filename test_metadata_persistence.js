const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function testMetadata() {
    const inputDir = path.join(process.cwd(), 'public', 'assets', 'original');
    const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

    if (files.length === 0) {
        console.log('No images found in public/ to test.');
        return;
    }

    const inputPath = path.join(inputDir, files[0]);
    const outputPath = path.join(process.cwd(), 'public', 'test-metadata.jpg');

    const signature = '6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b'; // hash from previous step

    console.log(`Testing with image: ${files[0]}`);

    try {
        // 1. Embed metadata
        await sharp(inputPath)
            .withMetadata({
                exif: {
                    IFD0: {
                        Copyright: signature,
                        ImageDescription: 'belongsToVyleraLabs,godiswatchingusteal'
                    }
                },
                // We can also try IPTC or XMP if EXIF is not sufficient
            })
            .toFile(outputPath);

        console.log('Created test-metadata.jpg with embedded signature.');

        // 2. Read back metadata
        const metadata = await sharp(outputPath).metadata();
        console.log('Read back metadata:', metadata.exif ? 'EXIF found' : 'No EXIF');

        // 3. Simulate Next.js optimization (resize + format conversion)
        const optimizedPath = path.join(process.cwd(), 'public', 'test-optimized.webp');
        await sharp(outputPath)
            .resize(800) // Simulate processing
            .webp({ quality: 80 }) // Next.js default is usually webp/avif
            .toFile(optimizedPath);

        const optMetadata = await sharp(optimizedPath).metadata();
        console.log('Optimized image metadata:', optMetadata.exif ? 'EXIF preserved' : 'EXIF STRIPPED');

        // 4. Try with keepMetadata
        const optimizedKeepPath = path.join(process.cwd(), 'public', 'test-optimized-keep.webp');
        await sharp(outputPath)
            .resize(800)
            .withMetadata() // Crucial for Next.js to keep it, but Next.js internal image optimizer might not use this flag by default
            .webp({ quality: 80 })
            .toFile(optimizedKeepPath);

        const optKeepMetadata = await sharp(optimizedKeepPath).metadata();
        console.log('Optimized (withMetadata) image metadata:', optKeepMetadata.exif ? 'EXIF preserved' : 'EXIF STRIPPED');

    } catch (err) {
        console.error('Error:', err);
    }
}

testMetadata();
