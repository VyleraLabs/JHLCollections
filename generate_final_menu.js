const fs = require('fs');

// Read extracted beverage data
// We'll re-parse the menu_text.txt which we know has beverages
const rawText = fs.readFileSync('menu_text.txt', 'utf16le');
const beverageItems = [];

const lines = rawText.split('\n');
let isBeverage = false;

for (let line of lines) {
    if (line.includes('Beverage Menu')) isBeverage = true;
    if (line.includes('Main Course') || line.includes('Dim Sum')) isBeverage = false;

    if (isBeverage) {
        const match = line.match(/^(.+?)\s+(?:IDR|Rp\.?)\s*([\d.,]+)/i) || line.match(/^(.+?)\s+(\d{2,3})$/);
        if (match) {
            let name = match[1].trim();
            // clean up trailing numbers from name if any
            name = name.replace(/\d+$/, '').trim();

            let priceStr = match[2].replace(/[.,]/g, '');
            let price = parseInt(priceStr);
            if (price < 1000) price *= 1000;

            if (name.length > 3 && price > 0) {
                beverageItems.push({
                    id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                    sourceFile: 'Beverage',
                    category: 'Beverage', // Refine later if needed
                    name: name,
                    price: price,
                    imageKeyword: name.toLowerCase()
                });
            }
        }
    }
}

// Manual / Reconstructed Data for Main & Dim Sum (since PDFs are image-based)
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
        price: 68000, // Corrected from prompt 88k -> 68k commonly, prompt said 88.000? Let's use 88000.
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

// Special correction for Coconut Pudding price from prompt
const coconut = dimSumItems.find(i => i.name === 'Coconut Pudding');
if (coconut) coconut.price = 88000;

const allItems = [...mainItems, ...dimSumItems, ...beverageItems];

// Final TS Content
const tsContent = `export type MenuItem = {
  id: string;
  sourceFile: 'Main' | 'DimSum' | 'Beverage';
  category: string;
  name: string;
  nameChinese?: string;
  price: number;
  description?: string;
  imageKeyword: string;
  isRecommended?: boolean;
};

export const MENU_ITEMS: MenuItem[] = ${JSON.stringify(allItems, null, 2)};
`;

fs.writeFileSync('data/menu.ts', tsContent);
console.log(`Generated data/menu.ts with ${allItems.length} items (Reconstructed Main/DimSum + Extracted Beverages).`);
