const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream/promises');

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

async function download(url, filename) {
    console.log(`Downloading ${filename}...`);
    try {
        const res = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            }
        });
        if (!res.ok) throw new Error(`Unexpected response ${res.statusText}`);

        const fileStream = fs.createWriteStream(path.join(targetDir, filename));
        await pipeline(res.body, fileStream);
        console.log(`Saved ${filename}`);
    } catch (err) {
        console.error(`Failed to download ${filename}:`, err.message);
    }
}

async function run() {
    for (const img of images) {
        await download(img.url, img.name);
    }
}

run();
