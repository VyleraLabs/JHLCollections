
const fs = require('fs');
const path = require('path');
const https = require('https');

const harvestDir = path.join(__dirname);
const publicAssetsDir = path.join(__dirname, '../public/assets/original');
const mappingFile = path.join(__dirname, '../public/assets/map.json');

if (!fs.existsSync(publicAssetsDir)) {
    fs.mkdirSync(publicAssetsDir, { recursive: true });
}

const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        if (!url || !url.startsWith('http')) {
            // console.log(`Skipping invalid URL: ${url}`);
            resolve(null);
            return;
        }

        const file = fs.createWriteStream(dest);
        const request = https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve(dest);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
};

const extractUrls = (obj, urls = new Set()) => {
    if (!obj) return urls;

    if (typeof obj === 'object') {
        for (const key in obj) {
            if (key === 'local' && typeof obj[key] === 'string' && (obj[key].includes('/uploads/') || obj[key].endsWith('.jpg') || obj[key].endsWith('.png') || obj[key].endsWith('.webp') || obj[key].endsWith('.mp4'))) {
                urls.add(obj[key]);
            } else if (key === 'featured_image' || key === 'image' || key === 'logo' || key === 'favicon') {
                // specific handling for these objects usually containing 'local'
                if (obj[key] && obj[key].local) urls.add(obj[key].local);
            }

            extractUrls(obj[key], urls);
        }
    } else if (Array.isArray(obj)) {
        obj.forEach(item => extractUrls(item, urls));
    }
    return urls;
};

const main = async () => {
    const files = fs.readdirSync(harvestDir).filter(f => f.endsWith('.json'));
    let allUrls = new Set();

    files.forEach(file => {
        const content = fs.readFileSync(path.join(harvestDir, file), 'utf8');
        try {
            const json = JSON.parse(content);
            extractUrls(json, allUrls);
        } catch (e) {
            console.error(`Error parsing ${file}:`, e);
        }
    });

    console.log(`Found ${allUrls.size} unique assets to download.`);

    const urlMap = {};
    let count = 0;

    for (const url of allUrls) {
        const filename = path.basename(url);
        const localPath = path.join(publicAssetsDir, filename);
        // Clean query params if any
        const cleanFilename = filename.split('?')[0];
        const finalLocalPath = path.join(publicAssetsDir, cleanFilename);

        try {
            console.log(`Downloading (${++count}/${allUrls.size}): ${cleanFilename}`);
            await downloadFile(url, finalLocalPath);
            urlMap[url] = `/assets/original/${cleanFilename}`;
        } catch (e) {
            console.error(`Failed to download ${url}:`, e.message);
        }
    }

    fs.writeFileSync(mappingFile, JSON.stringify(urlMap, null, 2));
    console.log('Asset mapping saved to public/assets/map.json');
};

main();
