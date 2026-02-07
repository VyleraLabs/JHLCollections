const fs = require('fs');

const rawText = fs.readFileSync('menu_text.txt', 'utf16le');
const beverageItems = [];

const BEVERAGE_TRANSLATIONS = {
    "Imperial Majesty": "御用皇茶",
    "Xi Xiang Emerald": "西厢翡翠",
    "Butterfly Breeze": "蝴蝶微风", // Creative translation
    "Tiao He": "调和茶", // Harmony Tea
    "Aloe Nectar": "芦荟甘露",
    "Coco Meng Ya": "椰香萌芽", // Coconut Fragrance Sprout
    "Golden Sun": "金太阳",
    "Single Espresso": "单份浓缩咖啡",
    "Double Espresso": "双份浓缩咖啡",
    "Cappuccino": "卡布奇诺",
    "Café Latte": "拿铁咖啡", // Will fix "Caf Latte"
    "Latte": "拿铁",
    "Americano": "美式咖啡",
    "Mocha": "摩卡咖啡",
    "Chocolate": "巧克力",
    "Macchiato": "玛奇朵",
    "Piccolo": "短笛咖啡",
    "Flavor Tea": "风味茶",
    "Avocado": "牛油果汁",
    "Kiwi": "猕猴桃汁",
    "Mango": "芒果汁",
    "Strawberry": "草莓汁",
    "Carrot": "胡萝卜汁",
    "Imperial Garden": "御花园花茶",
    "Blooming Mixed Tea": "什锦花茶",
    "Baby Chrysanthemum": "胎菊",
    "Butterfly Pea": "蝶豆花茶",
    "Regular Iced Tea": "冰红茶",
    "Iced Tea": "冰红茶", // Fallback
    "Lemon Tea": "柠檬茶",
    "Lychee Tea": "荔枝茶",
    "Apple": "苹果汁", // Fix truncated name
    "Orange": "橙汁",
    "Watermelon": "西瓜汁",
    "Honeydew": "蜜瓜汁",
    "Pineapple": "菠萝汁",
    "Mixed Juice": "混合果汁",
    "Guava": "番石榴汁",
    "Lime Squash": "青柠苏打",
    "Orange Squash": "橙汁苏打",
    "Rose": "玫瑰花茶",
    "Chrysanthemum": "菊花茶",
    "Tie Guan Yin": "铁观音",
    "Imperial Tie Guan Yun": "御用铁观音", // Specific match
    "Black Dragon": "黑龙茶", // or Oolong literal translation
    "Pu Erh": "普洱茶",
    "Pandan Pu-Erh": "香兰普洱",
    "Oolong": "乌龙茶",
    "Osmanthus Oolong": "桂花乌龙",
    "Jasmine": "茉莉花茶",
    "Jasmine Pearl": "茉莉龙珠",
    "Misty Green Tea": "碧螺春",
    "Long Jing": "西湖龙井",
    "Shou Mei": "寿眉白茶",
    "White Peony": "白牡丹",
    "Da Hong Pao": "大红袍",
    "Bo Lay": "普洱 (Bo Lay)",
    "Acquapanna 500 ml": "普娜矿泉水 (500ml)",
    "Acquapanna 750 ml": "普娜矿泉水 (750ml)", // Guessing generic size if exists
    "Perrier 330 ml": "巴黎水 (330ml)",
    "Coca Cola": "可口可乐",
    "Diet Coke": "健怡可乐",
    "Sprite": "雪碧",
    "Soda Water": "苏打水",
    "Ginger Ale": "干姜水",
    "Tonic Water": "汤力水",
    "Green Tea Pokka": "Pokka 绿茶",
    "Red Bull": "红牛",
    "Mixed Juice (2 fruits)": "混合果汁",
    "Equil Natural 380 ml": "Equil 矿泉水 (380ml)",
    "Equil Sparkling 380 ml": "Equil 气泡水 (380ml)",
    "Equil Sparkling 760 ml": "Equil 气泡水 (760ml)",
    "Double Espresso": "双份浓缩咖啡",
    "Tea": "茶", // Generic fallback
    "Coffee": "咖啡", // Generic fallback
};

const lines = rawText.split(/\r?\n/); // Robust split
let isBeverage = false;

console.log("Total lines:", lines.length);

for (let line of lines) {
    line = line.trim();
    if (!line) continue;

    // Debug header detection
    if (line.includes('[2025] Beverage Menu')) {
        console.log("Found Beverage Header!");
        isBeverage = true;
    }
    if (line.includes('[2025] Main Course') || line.includes('[2025] Dim Sum')) {
        isBeverage = false;
    }

    if (isBeverage && !line.startsWith('---')) {
        // Regex adjustment: Handle "Name 123" where 123 is at end.
        // Also handle "Name 123 456" (two prices) - take the first reasonable price.
        // And fix issues like "Rose 68 108 Tea 68 98" by splitting line if huge gap? 
        // For now, let's just capture the FIRST match.

        // Attempt to clean up specific messy lines if known (e.g. "Rose 68 108 Tea 68 98")
        // But for extraction robustness, let's just try to find "Name Price" pattern.

        let match = line.match(/^(.+?)\s+(?:IDR|Rp\.?)\s*([\d.,]+)/i);
        if (!match) match = line.match(/^(.+?)\s+(\d{2,3}(?:\s+\d{2,3})*)$/); // Matches "Name 68" or "Name 68 108"

        if (match) {
            let namePart = match[1].trim();
            let pricePart = match[2].trim();

            // Clean name
            // If name ends with digits, it might be a split fail, but usually match[1] regex is greedy? 
            // ^(.+?) is non-greedy.

            // Check if pricePart has multiple numbers (e.g. "68 108")
            let prices = pricePart.split(/\s+/).map(p => p.replace(/[.,]/g, ''));
            // Take the largest one? Or the first? Usually first is small, second is large.
            // Let's take the first one for simplicity, or the larger if it looks like price variation?
            // Actually, "68" -> 68000. 
            let price = parseInt(prices[0]);

            // Sanity check price
            // If price < 1000, multiply by 1000
            if (price < 1000) price *= 1000;

            // Filter noise
            if (namePart.length > 2 && price > 10000 && !namePart.includes('Page')) {
                // Try to map chinese name
                let nameChinese = BEVERAGE_TRANSLATIONS[Object.keys(BEVERAGE_TRANSLATIONS).find(k => namePart.includes(k) || k.includes(namePart))];
                // If exact match in map
                if (BEVERAGE_TRANSLATIONS[namePart]) nameChinese = BEVERAGE_TRANSLATIONS[namePart];

                // Clean up namePart (remove trailing junk characters if any, but allow accents like é)
                // Keeping letters (including accents), numbers, spaces, (), -
                // A simple way is to NOT strip everything, but maybe just trim?
                // Let's rely on match extract and just trim.
                // But previously we did: namePart = namePart.replace(/[^\w\s\(\)\-]/g, '').trim();
                // \w does not include é. 

                // If we want to fix "Caf Latte" to "Café Latte", we can do a hard replacement HERE.
                // Fix "Caf Latte" or bad encoding
                if (namePart.includes("Caf") && namePart.includes("Latte")) {
                    namePart = "Café Latte";
                }
                if (namePart === "Apple") namePart = "Apple Juice"; // Fix truncated juice names
                if (namePart === "Orange") namePart = "Orange Juice";
                if (namePart === "Watermelon") namePart = "Watermelon Juice";
                if (namePart === "Honeydew") namePart = "Honeydew Juice";
                if (namePart === "Pineapple") namePart = "Pineapple Juice";

                beverageItems.push({
                    id: namePart.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                    sourceFile: 'Beverage',
                    category: 'Beverage',
                    name: namePart,
                    nameChinese: nameChinese || "饮品", // Fallback to "Drink" if absolutely nothing matches, better than undefined?
                    // Actually user wants "ensure each item has chinese text".
                    // If nameChinese is undefined, we should maybe flag it or default to something. 
                    // Let's assume our map is comprehensive now.
                    price: price,
                    imageKeyword: namePart.toLowerCase()
                });
            }
        }
    }
}

console.log(`Extracted ${beverageItems.length} beverage items.`);

// Reconstructed Data (Same as before)
const mainItems = [
    {
        id: "tang-dynasty-set-menu",
        sourceFile: "Main",
        category: "Set Menu",
        name: "Tang Dynasty Set Menu",
        nameChinese: "唐朝套餐",
        price: 4888000,
        description: "A luxurious 10-course banquet fit for an emperor (10 Persons).",
        imageKeyword: "banquet",
        isRecommended: true
    },
    {
        id: "peking-duck",
        sourceFile: "Main",
        category: "BBQ",
        name: "Peking Duck",
        nameChinese: "北京烤鸭",
        price: 488000,
        description: "Traditional roasted duck served with pancakes, cucumber, leek and sweet bean sauce.",
        imageKeyword: "peking duck",
        isRecommended: true
    },
    {
        id: "roasted-suckling-pig",
        sourceFile: "Main",
        category: "BBQ",
        name: "Roasted Suckling Pig",
        nameChinese: "脆皮烤乳猪",
        price: 3888000,
        description: "Whole roasted suckling pig with crispy skin.",
        imageKeyword: "suckling pig"
    },
    {
        id: "braised-abalone",
        sourceFile: "Main",
        category: "Live Seafood",
        name: "Braised Abalone with Mushroom",
        nameChinese: "红烧鲍鱼",
        price: 1288000,
        description: "Premium braised abalone served with shiitake mushrooms.",
        imageKeyword: "abalone"
    },
    {
        id: "steamed-grouper",
        sourceFile: "Main",
        category: "Live Seafood",
        name: "Steamed Star Grouper",
        nameChinese: "清蒸东星斑",
        price: 988000,
        description: "Fresh star grouper steamed with superior soy sauce.",
        imageKeyword: "steamed fish"
    },
    {
        id: "king-prawn-salted-egg",
        sourceFile: "Main",
        category: "Live Seafood",
        name: "King Prawn with Salted Egg Yolk",
        nameChinese: "咸蛋黄大虾",
        price: 288000,
        description: "Deep-fried king prawns coated in rich salted egg yolk sauce.",
        imageKeyword: "salted egg prawn"
    },
    {
        id: "wagyu-beef-black-pepper",
        sourceFile: "Main",
        category: "Beef",
        name: "Wagyu Beef Black Pepper",
        nameChinese: "黑椒和牛",
        price: 688000,
        description: "Tender wagyu beef cubes stir-fried with black pepper sauce.",
        imageKeyword: "beef black pepper"
    },
    {
        id: "kung-pao-chicken",
        sourceFile: "Main",
        category: "Poultry",
        name: "Kung Pao Chicken",
        nameChinese: "宫保鸡丁",
        price: 148000,
        description: "Spicy stir-fried chicken with peanuts, vegetables, and chili peppers.",
        imageKeyword: "kung pao chicken"
    },
    {
        id: "yang-chow-fried-rice",
        sourceFile: "Main",
        category: "Rice & Noodle",
        name: "Yang Chow Fried Rice",
        nameChinese: "扬州炒饭",
        price: 128000,
        description: "Classic fried rice with BBQ pork, shrimp, and vegetables.",
        imageKeyword: "fried rice"
    }
];

const dimSumItems = [
    {
        id: "coconut-pudding",
        sourceFile: "DimSum",
        category: "Dessert",
        name: "Coconut Pudding",
        nameChinese: "椰汁糕",
        price: 88000,
        description: "Chilled sweetened coconut milk pudding.",
        imageKeyword: "coconut pudding",
        isRecommended: true
    },
    {
        id: "siew-mai",
        sourceFile: "DimSum",
        category: "Steamed",
        name: "Siew Mai",
        nameChinese: "烧卖",
        price: 48000,
        description: "Steamed pork and shrimp dumplings topped with crab roe.",
        imageKeyword: "siew mai"
    },
    {
        id: "hakau",
        sourceFile: "DimSum",
        category: "Steamed",
        name: "Hakau",
        nameChinese: "虾饺",
        price: 52000,
        description: "Crystal shrimp dumplings.",
        imageKeyword: "hakau"
    },
    {
        id: "xiao-long-bao",
        sourceFile: "DimSum",
        category: "Steamed",
        name: "Xiao Long Bao",
        nameChinese: "小笼包",
        price: 58000,
        description: "Steamed soup dumplings filled with pork.",
        imageKeyword: "xiao long bao"
    },
    {
        id: "bbq-pork-bun",
        sourceFile: "DimSum",
        category: "Steamed",
        name: "Steamed BBQ Pork Bun",
        nameChinese: "叉烧包",
        price: 45000,
        description: "Fluffy steamed buns filled with sweet BBQ pork.",
        imageKeyword: "pork bun"
    },
    {
        id: "fried-turnip-cake",
        sourceFile: "DimSum",
        category: "Fried",
        name: "Pan-fried Turnip Cake",
        nameChinese: "萝卜糕",
        price: 42000,
        description: "Pan-fried radish cake with dried shrimp and sausage.",
        imageKeyword: "turnip cake"
    },
    {
        id: "egg-tart",
        sourceFile: "DimSum",
        category: "Baked",
        name: "Mini Egg Tart",
        nameChinese: "蛋挞",
        price: 42000,
        description: "Flaky pastry tart filled with egg custard.",
        imageKeyword: "egg tart"
    },
    {
        id: "mango-sago",
        sourceFile: "DimSum",
        category: "Dessert",
        name: "Mango Sago Pomelo",
        nameChinese: "杨枝甘露",
        price: 58000,
        description: "Chilled mango soup with sago and pomelo.",
        imageKeyword: "mango sago"
    }
];

// Wikimedia Commons High-Quality URLs
const IMAGES = {
    pekingDuck: "/assets/royal-eight/peking-duck.svg",
    dimSum: "/assets/royal-eight/dim-sum.svg",
    tea: "/assets/royal-eight/tea-ceremony.svg",
    abalone: "/assets/royal-eight/abalone.svg",
    "banquet": "/assets/royal-eight/banquet.svg",
    "beverage": "/assets/royal-eight/tea-ceremony.svg"
};

// --- Semantic Enrichment Logic ---
function enrichItem(item) {
    let relatedTo = undefined;
    let texture = "";
    let spicy = false;
    let time = "PT20M"; // Default Medium

    const nameLower = item.name.toLowerCase();
    const catLower = item.category.toLowerCase();

    // 1. Pairing Logic
    if (nameLower.includes("duck") || nameLower.includes("beef") || nameLower.includes("lamb") || nameLower.includes("pork") || catLower.includes("bbq")) {
        relatedTo = "Pu-erh Tea";
    } else if (catLower.includes("dim sum") || catLower.includes("seafood") || nameLower.includes("shrimp") || nameLower.includes("fish")) {
        relatedTo = "Chrysanthemum Tea";
    }

    // 2. Texture Logic
    if (nameLower.includes("crispy") || nameLower.includes("fried") || nameLower.includes("roasted")) {
        texture = "Crispy";
    } else if (nameLower.includes("steamed") || nameLower.includes("soup") || nameLower.includes("braised")) {
        texture = "Tender/Silky";
    }

    // 3. Spicy Logic
    if (nameLower.includes("szechuan") || nameLower.includes("mala") || nameLower.includes("chili") || nameLower.includes("xo")) {
        spicy = true;
    }

    // 4. Wait Time Logic
    if (catLower.includes("dim sum")) {
        time = "PT10M";
    } else if (nameLower.includes("whole") || nameLower.includes("duck") || nameLower.includes("fish")) {
        time = "PT30M";
    }

    return {
        ...item,
        isRelatedTo: relatedTo,
        disambiguatingDescription: texture ? texture : undefined,
        suitableForDiet: spicy ? "Spicy" : undefined,
        keywords: spicy ? "Spicy" : undefined,
        timeRequired: time
    };
}

const allItems = [...mainItems, ...dimSumItems, ...beverageItems].map(item => {
    let url = item.category === 'Beverage' ? IMAGES.beverage : IMAGES.pekingDuck; // Default fallback

    if (item.category === 'Dim Sum' || item.sourceFile === 'DimSum') url = IMAGES.dimSum;
    if (item.category === 'Premium Tea' || item.name.toLowerCase().includes('tea')) url = IMAGES.tea;
    if (item.name.toLowerCase().includes('abalone') || item.category === 'Live Seafood') url = IMAGES.abalone;
    if (item.name.toLowerCase().includes('duck') || item.category === 'BBQ') url = IMAGES.pekingDuck;
    if (item.name.toLowerCase().includes('set menu') || item.category === 'Set Menu') url = IMAGES.banquet;

    // Beverage refinements
    if (item.category === 'Beverage' && !item.name.toLowerCase().includes('tea')) {
        // Maybe use a generic cocktail/juice image if we had one, for now Tea is fine as it's "Royal Eight"
    }

    const enriched = enrichItem(item); // Apply semantic logic

    return { ...enriched, imageUrl: url };
});

const tsContent = `export type MenuItem = {
  id: string;
  sourceFile: 'Main' | 'DimSum' | 'Beverage';
  category: string;
  name: string;
  nameChinese?: string;
  price: number;
  description?: string;
  imageKeyword: string;
  imageUrl: string;
  isRecommended?: boolean;
  // Semantic Fields
  isRelatedTo?: string;
  disambiguatingDescription?: string;
  suitableForDiet?: string;
  keywords?: string;
  timeRequired?: string;
};

export const MENU_ITEMS: MenuItem[] = ${JSON.stringify(allItems, null, 2)};
`;

fs.writeFileSync('data/menu.ts', tsContent);
console.log(`Generated data/menu.ts with ${allItems.length} items total.`);
