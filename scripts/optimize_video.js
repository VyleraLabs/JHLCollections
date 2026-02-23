const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');
const path = require('path');
const fs = require('fs');

ffmpeg.setFfmpegPath(ffmpegPath);

const INPUT_FILE = path.join(__dirname, '../public/assets/sandjong/hero.mp4');
const OUTPUT_MOBILE = path.join(__dirname, '../public/assets/sandjong/hero-mobile.mp4');
const OUTPUT_DESKTOP = path.join(__dirname, '../public/assets/sandjong/hero-desktop.mp4');

if (!fs.existsSync(INPUT_FILE)) {
    console.error(`Input file not found: ${INPUT_FILE}`);
    process.exit(1);
}

console.log('Starting video optimization...');

// Mobile: 720p, 1000k bitrate, 24fps
const optimizeMobile = () => {
    return new Promise((resolve, reject) => {
        console.log('Generating mobile version...');
        ffmpeg(INPUT_FILE)
            .output(OUTPUT_MOBILE)
            .videoCodec('libx264')
            .size('1280x720')
            .videoBitrate('1000k')
            .fps(24)
            .audioCodec('aac')
            .audioBitrate('128k')
            .on('end', () => {
                console.log('Mobile version created successfully.');
                resolve();
            })
            .on('error', (err) => {
                console.error('Error creating mobile version:', err);
                reject(err);
            })
            .run();
    });
};

// Desktop: 1080p, 2500k bitrate, keep source fps
const optimizeDesktop = () => {
    return new Promise((resolve, reject) => {
        console.log('Generating desktop version...');
        ffmpeg(INPUT_FILE)
            .output(OUTPUT_DESKTOP)
            .videoCodec('libx264')
            .size('1920x1080')
            .videoBitrate('2500k')
            .audioCodec('aac')
            .audioBitrate('192k')
            .on('end', () => {
                console.log('Desktop version created successfully.');
                resolve();
            })
            .on('error', (err) => {
                console.error('Error creating desktop version:', err);
                reject(err);
            })
            .run();
    });
};

async function run() {
    try {
        await Promise.all([optimizeMobile(), optimizeDesktop()]);
        console.log('All optimizations complete!');
    } catch (error) {
        console.error('Optimization failed:', error);
        process.exit(1);
    }
}

run();
