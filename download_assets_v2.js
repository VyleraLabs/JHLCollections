const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'assets', 'royal-eight');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const images = [
    { name: 'peking-duck.jpg', url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/115_245_577Quanjudeducksserved.jpg/800px-115_245_577Quanjudeducksserved.jpg" },
    { name: 'dim-sum.jpg', url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Three_dim_sum_in_steamer_basket.jpg/800px-Three_dim_sum_in_steamer_basket.jpg" },
    { name: 'tea-ceremony.jpg', url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Tea_ceremony.jpg/800px-Tea_ceremony.jpg" },
    { name: 'abalone.jpg', url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Korean_grilled_abalone-Jeonbok_gui-01.jpg/800px-Korean_grilled_abalone-Jeonbok_gui-01.jpg" },
    { name: 'banquet.jpg', url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Chinese_banquet_in_a_banquet_hall.JPG/800px-Chinese_banquet_in_a_banquet_hall.JPG" },
    { name: 'hero-ambience.jpg', url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" }
];

async function downloadImage(url, filepath) {
    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
        }
    };

    return new Promise((resolve, reject) => {
        https.get(url, options, (res) => {
            if (res.statusCode === 200) {
                const file = fs.createWriteStream(filepath);
                res.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`Downloaded: ${path.basename(filepath)}`);
                    resolve();
                });
            } else if (res.statusCode === 302 || res.statusCode === 301) {
                // Handle redirect
                downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
            } else {
                reject(new Error(`Failed to download ${url}: Status ${res.statusCode}`));
            }
        }).on('error', (err) => {
            reject(err);
        });
    });
}

async function run() {
    for (const img of images) {
        try {
            await downloadImage(img.url, path.join(targetDir, img.name));
        } catch (e) {
            console.error(`Error downloading ${img.name}:`, e.message);
        }
    }
}

run();
