
export type Language = 'en' | 'zh' | 'id' | 'ru' | 'ja' | 'ar' | 'ko';

export interface Translations {
    nav: {
        home: string;
        rooms: string;
        dining: string;
        meetings: string;
        wellness: string;
        facilities: string;
        offers: string;
        bookNow: string;
    };
    hero: {
        welcome: string;
        title: string;
        description: string;
        jewelText: string;
        welcomeTitle: string;
        welcomeDescription: string;
    };
    features: {
        luxury: { title: string; desc: string };
        location: { title: string; desc: string };
        offers: { title: string; desc: string; cta: string };
    };
    categories: {
        rooms: { title: string; subtitle: string; description: string; cta: string };
        dining: { title: string; subtitle: string; description: string; cta: string };
        meetings: { title: string; subtitle: string; description: string; cta: string };
        wellness: { title: string; subtitle: string; description: string; cta: string };
        facilities: { title: string; subtitle: string; description: string; cta: string };
        offers: { title: string; subtitle: string; description: string; cta: string };
    };
    bookingPage: {
        step1Title: string;
        step2Title: string;
        planYourStay: string;
        tellUsAboutTrip: string;
        guestDetails: string;
        checkInLabel: string;
        checkOutLabel: string;
        adultsLabel: string;
        childrenLabel: string;
        selectDate: string;
        adultsCount: string;
        childrenCount: string;
        nextStep: string;
        fullName: string;
        emailAddress: string;
        phoneNumber: string;
        fullNamePlaceholder: string;
        emailPlaceholder: string;
        phonePlaceholder: string;
        bookNow: string;
        findingRates: string;
        redirecting: string;
        loadingSanctuary: string;
        validation: {
            nameRequired: string;
            nameInvalid: string;
            emailInvalid: string;
            phoneInvalid: string;
            specialChars: string;
        };
    };
    booking: {
        checkIn: string;
        checkOut: string;
        guests: string;
        adults: string;
        availability: string;
        selectDate: string;
        discover: string;
    };
    footer: {
        contact: string;
        quickLinks: string;
        legal: string;
        newsletter: string;
        subscribe: string;
        placeholder: string;
        join: string;
        rights: string;
        privacyPolicy: string;
        termsOfService: string;
    };
    promo: {
        specialOffer: string;
        reservation: string;
        tangDynasty: {
            title: string;
            description: string;
            price: string;
        };
    };
    dining: {
        title: string;
        subtitle: string;
        description: string;
        venues: {
            mangan: { type: string; desc: string };
            alGusto: { type: string; desc: string };
            royalEight: { type: string; desc: string };
            empress: { type: string; desc: string };
            castro: { type: string; desc: string };
            leBleu: { type: string; desc: string };
        };
        openDaily: string;
        viewMenu: string;
        menuCategories: {
            main: { title: string; subtitle: string };
            dimsum: { title: string; subtitle: string };
            beverage: { title: string; subtitle: string };
        };
    };
    pages: {
        rooms: {
            hero: { title: string; subtitle: string };
            content: { title: string; desc: string };
            roomTypes: {
                premier: { name: string; desc: string };
                executive: { name: string; desc: string };
                signature: { name: string; desc: string };
            };
            amenities: {
                wifi: string;
                tv: string;
                coffee: string;
                ac: string;
            };
            perNight: string;
            bookNow: string;
        };
        meetings: {
            hero: { title: string; subtitle: string };
            content: { title: string; desc: string };
            venues: {
                title: string;
                skyBallroom: {
                    name: string;
                    description: string;
                    location: string;
                    ceremony: string;
                    reception: string;
                };
                skyGarden: {
                    name: string;
                    description: string;
                    location: string;
                    ceremony: string;
                    reception: string;
                };
                royalEight: {
                    name: string;
                    description: string;
                    location: string;
                    ceremony: string;
                    reception: string;
                };
            };
            packages: {
                title: string;
                desc: string;
            };
            cta: string;
        };
        wellness: {
            hero: { title: string; subtitle: string };
            content: { title: string; desc: string };
            venues: {
                acqua: { name: string; type: string; desc: string };
                sandjong: { name: string; type: string; desc: string };
                acquaree: { name: string; type: string; desc: string };
                laMere: { name: string; type: string; desc: string };
            };
            treatments: {
                massage: { name: string; duration: string };
                facial: { name: string; duration: string };
            };
        };
        facilities: {
            hero: { title: string; subtitle: string };
            content: { tag: string; title: string; desc: string };
            items: {
                pool: { name: string; desc: string };
                fitness: { name: string; desc: string };
            };
        };
        offers: {
            hero: { title: string; subtitle: string };
            items: {
                weekend: { tag: string; title: string; desc: string; cta: string };
                brunch: { tag: string; title: string; desc: string; cta: string };
            };
        };
        privacy: {
            title: string;
            lastUpdated: string;
            content: string;
            sections: {
                storage: {
                    title: string;
                    content: string;
                };
            };
        };
    };
    cookies: {
        title: string;
        message: string;
        accept: string;
        decline: string;
        policy: string;
    };
}

export const translations: Record<Language, Translations> = {
    en: {
        nav: {
            home: "Home",
            rooms: "Rooms",
            dining: "Dining",
            meetings: "Meetings & Events",
            wellness: "Wellness",
            facilities: "Facilities",
            offers: "Offers",
            bookNow: "Book Now",
        },
        hero: {
            welcome: "Welcome to",
            title: "JHL Solitaire",
            description: "Gading Serpong, A JHL Collections",
            jewelText: "The Jewel in the City",
            welcomeTitle: "Epitomizing The Best Essence of Life",
            welcomeDescription: "Every moment of living is a triumphant joy to be celebrated. At JHL Solitaire, we believe our guests deserve the finest experience of living to the fullest. With pride and prestige, we aim to exceed expectations by reciprocating our guests' exquisite taste with a poised frame of mind, first-class service, and offerings.",
        },
        features: {
            luxury: {
                title: "5-Star Luxury",
                desc: "Award-winning service and amenities designed for the discerning traveler.",
            },
            location: {
                title: "Prime Location",
                desc: "Located in the heart of Gading Serpong, minutes from ICE and AEON Mall.",
            },
            offers: {
                title: "Exclusive Offers",
                desc: "Book directly with us to enjoy special rates and complimentary benefits.",
                cta: "View Offers",
            },
        },
        categories: {
            rooms: {
                title: "Rooms & Suites",
                subtitle: "Suites & Sanctum",
                description: "Experience the art of luxurious living in rooms and suites designed with exceptional attention to detail.",
                cta: "Discover More"
            },
            dining: {
                title: "Dining Experience",
                subtitle: "Culinary Dynasty",
                description: "Unfold the rich tapestry of exquisite flavors. From international buffets to authentic Italian fine dining.",
                cta: "Explore Venues"
            },
            meetings: {
                title: "Weddings & Events",
                subtitle: "Grand Events",
                description: "Transform your special moments into eternal memories at our magnificent multifunction hall, perfect for grand weddings and prestigious events.",
                cta: "Plan Your Memory"
            },
            wellness: {
                title: "Wellness & Spa",
                subtitle: "Serenity & Spa",
                description: "Rejuvenate your senses at our world-class wellness facilities, featuring three specialized spas—Acqua Spa, Sandjong Spa, and Acquaree Spa for kids—alongside our state-of-the-art gym and La Mere beauty salon.",
                cta: "Rejuvenate Now"
            },
            facilities: {
                title: "Exquisite Facilities",
                subtitle: "Exquisite Lifestyle",
                description: "Experience the diamond-shaped architectural marvel and refined lifestyle services unique to JHL Solitaire.",
                cta: "Explore Amenities"
            },
            offers: {
                title: "Exclusive Offers",
                subtitle: "Exclusive Benefits",
                description: "Unlock exceptional privileges and bespoke experiences during your stay with our curated range of seasonal offers.",
                cta: "View Offers"
            },
        },
        bookingPage: {
            step1Title: "Step 1",
            step2Title: "Step 2",
            planYourStay: "Let's Plan Your Stay",
            tellUsAboutTrip: "Tell us about your trip",
            guestDetails: "Guest Details",
            checkInLabel: "Check-In",
            checkOutLabel: "Check-Out",
            adultsLabel: "Adults",
            childrenLabel: "Children",
            selectDate: "Select Date",
            adultsCount: "Adults",
            childrenCount: "Children",
            nextStep: "Next Step",
            fullName: "Full Name",
            emailAddress: "Email Address",
            phoneNumber: "Phone Number",
            fullNamePlaceholder: "Enter your full name",
            emailPlaceholder: "Enter your email",
            phonePlaceholder: "812 3456 7890",
            bookNow: "Book Now",
            findingRates: "Finding Best Rates...",
            redirecting: "Redirecting you to our secure reservation engine.",
            loadingSanctuary: "Loading your sanctuary...",
            validation: {
                nameRequired: "Please enter a valid full name.",
                nameInvalid: "Invalid characters detected. Please refine your name.",
                emailInvalid: "Please enter a valid email address.",
                phoneInvalid: "Please enter a valid phone number (minimum 7 digits).",
                specialChars: "Special characters < > are not allowed for security.",
            },
        },
        booking: {
            checkIn: "Check-in",
            checkOut: "Check-out",
            guests: "Guests",
            adults: "Adults",
            availability: "Check Availability",
            selectDate: "Select Date",
            discover: "Discover",
        },
        footer: {
            contact: "Contact",
            quickLinks: "Quick Links",
            legal: "Legal",
            newsletter: "Newsletter",
            subscribe: "Subscribe for exclusive offers.",
            placeholder: "Your email",
            join: "Join",
            rights: "All rights reserved.",
            privacyPolicy: "Privacy Policy",
            termsOfService: "Terms of Service",
        },
        promo: {
            specialOffer: "Special Offer",
            reservation: "RESERVE TABLE",
            tangDynasty: {
                title: "Tang Dynasty Set Menu",
                description: "A culinary journey through the ages 10-course banquet.",
                price: "IDR 4.888.000",
            }
        },
        dining: {
            title: "Culinary Experiences",
            subtitle: "Taste the Extraordinary",
            description: "From casual dining to exquisite gourmet experiences, JHL Solitaire offers a diverse range of culinary options to satisfy every palate. Our chefs use only the freshest ingredients to create masterpieces on every plate.",
            venues: {
                mangan: {
                    type: "International Buffet",
                    desc: "A culinary theatre featuring live cooking stations and a diverse array of international and local delicacies."
                },
                alGusto: {
                    type: "Italian Fine Dining",
                    desc: "Authentic Italian flavors served in a sophisticated setting, perfect for romantic dinners or business lunches, featuring live gueridon cooking."
                },
                royalEight: {
                    type: "Chinese Fine Dining",
                    desc: "A delectable selection of lunch, dinner, and Chinese desserts served in a contemporary and thoughtfully crafted setting."
                },
                empress: {
                    type: "Lounge & Bar",
                    desc: "Discover apothecary-inspired signature cocktails, fine spirits, and a curated wine selection in an elegant atmosphere."
                },
                castro: {
                    type: "Lounge & Bar",
                    desc: "Unwind with premium cigars, fine whiskies, and curated cocktails in an atmosphere of refined elegance."
                },
                leBleu: {
                    type: "Café & Patisserie",
                    desc: "A crafted expression of indulgence where delicate textures, refined sweetness, and timeless technique come together in every cake."
                }
            },
            openDaily: "Open Daily: 10:00 - 22:00",
            viewMenu: "View Menu",
            menuCategories: {
                main: { title: "Main Course", subtitle: "Signature Dishes" },
                dimsum: { title: "Dim Sum", subtitle: "Handcrafted Daily" },
                beverage: { title: "Beverage", subtitle: "Refreshments" }
            }
        },
        pages: {
            rooms: {
                hero: { title: "Accommodations", subtitle: "Rest in Refined Elegance" },
                content: {
                    title: "Your Private Sanctuary",
                    desc: "Each of our 141 rooms and suites is a masterpiece of design, blending contemporary aesthetics with timeless comfort. Enjoy state-of-the-art amenities, plush bedding, and breathtaking views of the city skyline."
                },
                roomTypes: {
                    premier: { name: "Premier Room", desc: "A spacious 40sqm sanctuary designed for modern comfort." },
                    executive: { name: "Executive Suite", desc: "Elevated luxury with separate living area and panoramic city views." },
                    signature: { name: "JHL Solitaire Signature", desc: "The ultimate expression of luxury living for the discerning traveler." }
                },
                amenities: {
                    wifi: "High Speed Wifi",
                    tv: "Smart TV",
                    coffee: "Coffee Maker",
                    ac: "AC"
                },
                perNight: "/ Night",
                bookNow: "Book Now"
            },
            meetings: {
                hero: { title: "Meetings & Events", subtitle: "Where Business Meets Luxury" },
                content: {
                    title: "Sky Ballroom",
                    desc: "Our iconic Sky Ballroom offers 180-degree panoramic views of the city, providing a stunning backdrop for weddings, corporate galas, and social events. Equipped with cutting-edge technology and supported by our dedicated events team."
                },
                venues: {
                    title: "Exquisite Venues",
                    skyBallroom: {
                        name: "Sky Ballroom",
                        description: "The Sky Ballroom creates an extraordinary setting for any special occasion. Ideal for weddings, graduations, or private events, this exceptional venue is located 200 feet above the ground on the 15th floor. Featuring state of the art audiovisual technology, high-speed wireless Internet, and floor-to-ceiling windows that fill the space with natural light.",
                        location: "Indoor (15th Floor)",
                        ceremony: "200 PAX",
                        reception: "250 PAX"
                    },
                    skyGarden: {
                        name: "Sky Garden",
                        description: "An enchanting rooftop sanctuary for intimate weddings and gatherings, where breathtaking views and timeless elegance create unforgettable moments.",
                        location: "Rooftop / Private",
                        ceremony: "500 PAX",
                        reception: "50 PAX"
                    },
                    royalEight: {
                        name: "Royal Eight Chinese Dining",
                        description: "Chinese dining experience in the heart of Gading Serpong, Tangerang. As part of our signature semi-fine dining collection, Royal Eight serves a delectable selection of lunch, dinner, and desserts throughout the day. The restaurants contemporary ambiance and thoughtfully crafted design provide the perfect setting for a harmonious culinary journey.",
                        location: "Indoor",
                        ceremony: "250 PAX",
                        reception: "250 PAX"
                    }
                },
                packages: {
                    title: "Packages",
                    desc: "Tailored to your needs, our event packages offer comprehensive services including premium catering, decoration, and dedicated event coordination."
                },
                cta: "Enquire Now"
            },
            wellness: {
                hero: { title: "Wellness & Spa", subtitle: "Rejuvenate Your Senses" },
                content: {
                    title: "A Haven of Holistic Well-being",
                    desc: "JHL Solitaire Gading Serpong offers a comprehensive wellness destination featuring three distinct spa experiences: Acqua Spa (modern luxury), Sandjong Spa (traditional heritage), and Acquaree Spa (the first dedicated kids' spa). Our facilities also include a state-of-the-art gym and the prestigious La Mere Beauty Salon."
                },
                venues: {
                    acqua: {
                        name: "Acqua Spa",
                        type: "Modern Luxury Spa",
                        desc: "A contemporary sanctuary focused on modern therapeutic treatments and ultimate relaxation."
                    },
                    sandjong: {
                        name: "Sandjong Spa",
                        type: "Traditional Heritage Spa",
                        desc: "Discover the essence of Indonesian heritage through ancient healing techniques and natural ingredients."
                    },
                    acquaree: {
                        name: "Acquaree Kids Spa",
                        type: "Children's Specialized Spa",
                        desc: "The first specialized spa for children, offering fun and gentle treatments in a safe environment."
                    },
                    laMere: {
                        name: "La Mere",
                        type: "Beauty Salon",
                        desc: "Professional hair, nail, and beauty services delivered by expert stylists and beauticians."
                    }
                },
                treatments: {
                    massage: { name: "Signature Massage", duration: "60 / 90 Mins" },
                    facial: { name: "Luxury Facial", duration: "60 Mins" }
                }
            },
            facilities: {
                hero: { title: "Exquisite Facilities", subtitle: "Diamond-Shaped Architectural Marvel" },
                content: {
                    tag: "World-Class Amenities",
                    title: "The Essence of JHL Luxury",
                    desc: "JHL Solitaire Gading Serpong offers a collection of curated facilities designed to cater to the most discerning lifestyle needs. From our landmark architecture to our bespoke guest services, every detail is crafted for perfection."
                },
                items: {
                    pool: {
                        name: "Signature Infinity Pool",
                        desc: "A stunning architectural highlight, our infinity pool offers a unique swimming experience with unrestricted views of Gading Serpong's skyline."
                    },
                    fitness: {
                        name: "State-of-the-Art Fitness",
                        desc: "Equipped with the latest Technogym technology, our fitness center provides everything needed for a comprehensive wellness routine."
                    }
                }
            },
            offers: {
                hero: { title: "Exclusive Offers", subtitle: "Limited Time Packages" },
                items: {
                    weekend: {
                        tag: "Stay Package",
                        title: "Weekend Getaway",
                        desc: "Enjoy 20% off on weekend stays including breakfast.",
                        cta: "Book Now"
                    },
                    brunch: {
                        tag: "Dining",
                        title: "Sunday Brunch",
                        desc: "All you can eat international buffet every Sunday.",
                        cta: "Book Table"
                    }
                }
            },
            privacy: {
                title: "Privacy Policy",
                lastUpdated: "Last Updated: February 8, 2026",
                content: "At JHL Solitaire, we value your privacy. This policy outlines how we handle your personal data.",
                sections: {
                    storage: {
                        title: "Data Storage & Localization",
                        content: "We prioritize the security of your Personal Data. In compliance with Indonesian regulations (PP No. 71/2019 and UU PDP), our primary servers and customer databases are located within the territory of the Republic of Indonesia (Google Cloud Region: Jakarta).\n\nHowever, for the purpose of performance optimization (CDN) and traffic analysis, limited anonymized data may be processed by our third-party partners (such as Google Analytics) in other jurisdictions that adhere to international data privacy standards."
                    }
                }
            }
        },
        cookies: {
            title: "Cookie Consent",
            message: "We use cookies to enhance your experience and analyze our traffic. By clicking \"Accept\", you consent to our use of cookies.",
            accept: "Accept",
            decline: "Decline",
            policy: "Privacy Policy"
        }
    },
    zh: {
        nav: {
            home: "首页",
            rooms: "客房",
            dining: "餐饮",
            meetings: "会议·活动",
            wellness: "康体",
            facilities: "设施",
            offers: "特惠",
            bookNow: "立即预订",
        },
        hero: {
            welcome: "欢迎莅临",
            title: "JHL Solitaire",
            description: "雅加达 Gading Serpong，JHL 集合酒店",
            jewelText: "璀璨雅加达",
            welcomeTitle: "开启生活的极致精髓",
            welcomeDescription: "生活的每一瞬间都值得欢庆。在 JHL Solitaire，我们致力于为每一位贵宾提供最顶级的奢华生活体验。我们以自豪与荣耀，通过从容的心态、一流的服务和卓越的品质，回馈宾客的高端品味，超越您的每一分期待。",
        },
        features: {
            luxury: {
                title: "五星级奢华",
                desc: "屡获殊荣的服务与设施，专为独具品味的旅行者打造。",
            },
            location: {
                title: "绝佳位置",
                desc: "坐落于 Gading Serpong 核心区域，紧邻 ICE 和 AEON 购物中心。",
            },
            offers: {
                title: "专属优惠",
                desc: "直接预订，尊享特别价格与专属礼遇。",
                cta: "查看优惠",
            },
        },
        categories: {
            rooms: {
                title: "客房与套房",
                subtitle: "奢享居所",
                description: "在精心设计的客房与套房中，体验非凡的奢华生活艺术。",
                cta: "探索更多"
            },
            dining: {
                title: "餐饮体验",
                subtitle: "珍馐王朝",
                description: "开启一场味蕾的华丽旅程。从国际自助餐到正宗意式高级料理。",
                cta: "探索餐厅"
            },
            meetings: {
                title: "婚礼与活动",
                subtitle: "盛大盛事",
                description: "在宏伟的多功能厅，将您的特殊时刻化为永恒回忆，是举办盛大婚礼和知名活动的理想之选。",
                cta: "策划回忆"
            },
            wellness: {
                title: "水疗康体",
                subtitle: "宁静水疗",
                description: "在我们的世界级康体设施中焕发活力，拥有三家特色水疗中心：Acqua 水疗中心（现代奢华）、Sandjong 水疗中心（传统传承）和专为儿童设计的 Acquaree 水疗中心，以及先进的健身房和 La Mere 美容沙龙。",
                cta: "立即焕活"
            },
            facilities: {
                title: "卓越设施",
                subtitle: "精致生活",
                description: "体验 JHL Solitaire 独有的钻石型建筑奇观与精致的生活方式服务。",
                cta: "探索设施"
            },
            offers: {
                title: "尊享礼遇",
                subtitle: "独家优惠",
                description: "在您入住期间，通过我们精心挑选的季节性优惠，开启非凡特权和量身定制的体验。",
                cta: "查看优惠"
            },
        },
        booking: {
            checkIn: "入住日期",
            checkOut: "离店日期",
            guests: "入住人数",
            adults: "成人",
            availability: "查询空房",
            selectDate: "选择日期",
            discover: "探索",
        },
        bookingPage: {
            step1Title: "第一步",
            step2Title: "第二步",
            planYourStay: "规划您的入住",
            tellUsAboutTrip: "告诉我们您的行程",
            guestDetails: "宾客信息",
            checkInLabel: "入住",
            checkOutLabel: "退房",
            adultsLabel: "成人",
            childrenLabel: "儿童",
            selectDate: "选择日期",
            adultsCount: "成人",
            childrenCount: "儿童",
            nextStep: "下一步",
            fullName: "全名",
            emailAddress: "电邮地址",
            phoneNumber: "电话号码",
            fullNamePlaceholder: "请输入您的全名",
            emailPlaceholder: "请输入您的电邮",
            phonePlaceholder: "812 3456 7890",
            bookNow: "立即预订",
            findingRates: "正在寻找最优惠价...",
            redirecting: "正在跳转至安全订房系统。",
            loadingSanctuary: "正在加载您的专属空间...",
            validation: {
                nameRequired: "请输入有效的全名。",
                nameInvalid: "检测到无效字符。请修正您的姓名。",
                emailInvalid: "请输入有效的电邮地址。",
                phoneInvalid: "请输入有效的电话号码（至少7位数字）。",
                specialChars: "出于安全考虑，不允许使用特殊字符 < >。",
            },
        },
        footer: {
            contact: "联系我们",
            quickLinks: "快速链接",
            legal: "法律条款",
            newsletter: "资讯订阅",
            subscribe: "订阅以获取独家优惠。",
            placeholder: "您的电子邮箱",
            join: "加入",
            rights: "保留所有权利。",
            privacyPolicy: "隐私政策",
            termsOfService: "服务条款",
        },
        promo: {
            specialOffer: "限时优惠",
            reservation: "立即预约",
            tangDynasty: {
                title: "唐朝精品套餐",
                description: "领略古老风情，尊享十道珍馐盛宴。",
                price: "IDR 4,888,000",
            }
        },
        dining: {
            title: "卓越味蕾体验",
            subtitle: "品味非凡",
            description: "从休闲餐饮到极致美食体验，JHL Solitaire 提供多元化的餐饮选择，满足各种味蕾需求。我们的厨师仅选用最时新的食材，在每一份餐盘上创造艺术杰作。",
            venues: {
                mangan: {
                    type: "国际自助餐",
                    desc: "一场味觉大戏，设有现场烹饪台和各式国际及当地佳肴。"
                },
                alGusto: {
                    type: "意式高级餐饮",
                    desc: "地道的意大利风味，在格调高雅的环境中为您呈现。是浪漫晚餐或商务午餐的完美选择，更有现场桌边烹饪。"
                },
                royalEight: {
                    type: "中式高级餐饮",
                    desc: "在充满现代感且精心打造的环境中，为您呈现各式精选午餐、晚餐及中式甜点。"
                },
                empress: {
                    type: "酒廊与酒吧",
                    desc: "在优雅的氛围中，探索受传统配方启发的招牌鸡尾酒、精品烈酒及精选葡萄酒。"
                },
                castro: {
                    type: "酒廊与酒吧",
                    desc: "在优雅精致的氛围中，品味高端雪茄、精品威士忌和精选鸡尾酒，尽享放松时刻。"
                },
                leBleu: {
                    type: "咖啡厅与饼屋",
                    desc: "极尽奢华的美味诠释，将细腻的口感、优雅的甜味与永恒的技艺完美融合在每一款蛋糕中。"
                }
            },
            openDaily: "每日营业：10:00 - 22:00",
            viewMenu: "查看菜单",
            menuCategories: {
                main: { title: "主菜", subtitle: "招牌菜肴" },
                dimsum: { title: "点心", subtitle: "每日手工制作" },
                beverage: { title: "饮品", subtitle: "清凉特饮" }
            }
        },
        pages: {
            rooms: {
                hero: { title: "客房与套房", subtitle: "在精致优雅中休憩" },
                content: {
                    title: "您的私人避风港",
                    desc: "我们的 141 间客房和套房均是设计杰作，融合了现代美学与永恒舒适。尊享先进设施、豪华床品以及扣人心弦的城市天际线美景。"
                },
                roomTypes: {
                    premier: { name: "高级客房 (Premier Room)", desc: "40平方米的宽敞空间，专为现代舒适体验而设计。" },
                    executive: { name: "行政套房 (Executive Suite)", desc: "配备独立的起居区域和全景城市景观，尽享尊贵。" },
                    signature: { name: "JHL Solitaire 尊享套房", desc: "为品味不凡的旅行者带来的极致奢华生活体验。" }
                },
                amenities: {
                    wifi: "高速无线网络",
                    tv: "智能电视",
                    coffee: "咖啡机",
                    ac: "空调系统"
                },
                perNight: "/ 晚",
                bookNow: "立即预订"
            },
            meetings: {
                hero: { title: "会议与活动", subtitle: "商务与奢华的完美交汇" },
                content: {
                    title: "天空宴会厅 (Sky Ballroom)",
                    desc: "我们标志性的天空宴会厅拥有 180 度城市全景，为婚礼、企业盛会和社交活动提供绝佳背景。配备尖端科技，并由我们的专业活动团队提供鼎力支持。"
                },
                venues: {
                    title: "卓越场地",
                    skyBallroom: {
                        name: "天空宴会厅 (Sky Ballroom)",
                        description: "天空宴会厅为任何特殊场合营造出非凡的氛围。是举办婚礼、毕业典礼或私人活动的理想之选，这一卓越场地位于 15 层，距离地面 200 英尺。配备先进的视听技术、高速无线网络和从地板到天花板的全景窗户，让自然光充盈整个空间。",
                        location: "室内 (15层)",
                        ceremony: "200 人",
                        reception: "250 人"
                    },
                    skyGarden: {
                        name: "天空花园 (Sky Garden)",
                        description: "一个迷人的屋顶圣地，适合举办亲密的婚礼和聚会，在这里，壮丽的景色和永恒的优雅营造出难忘的时刻。",
                        location: "屋顶 / 私人",
                        ceremony: "500 人",
                        reception: "50 人"
                    },
                    royalEight: {
                        name: "皇家八号中餐厅 (Royal Eight)",
                        description: "位于丹格朗 Gading Serpong 核心地带的中式餐饮体验。作为我们招牌半正式餐饮系列的一部分，皇家八号全天供应精选的午餐、晚餐和甜点。餐厅现代的氛围和精心设计的风格为和谐的烹饪之旅提供了完美的环境。",
                        location: "室内",
                        ceremony: "250 人",
                        reception: "250 人"
                    }
                },
                packages: {
                    title: "配套方案",
                    desc: "我们的活动配套方案根据您的需求量身定制，提供包括高级餐饮、装饰和专属活动协调在内的全面服务。"
                },
                cta: "立即咨询"
            },
            wellness: {
                hero: { title: "水疗与康体", subtitle: "焕发您的感官" },
                content: {
                    title: "身心平衡的避风港",
                    desc: "JHL Solitaire Gading Serpong 提供全面的康体目的地，拥有三种不同的水疗体验：Acqua 水疗中心（现代奢华）、Sandjong 水疗中心（传统传承）以及首家儿童专用 Acquaree 水疗中心。此外，我们的设施还包括先进的健身中心和享誉盛名的 La Mere 美容沙龙。"
                },
                venues: {
                    acqua: {
                        name: "Acqua 水疗中心",
                        type: "现代奢华水疗",
                        desc: "专注于现代疗愈和极致放松的当代避风港。"
                    },
                    sandjong: {
                        name: "Sandjong 水疗中心",
                        type: "传统传承水疗",
                        desc: "通过古老的治愈技法和天然成分，探索印度尼西亚传承的精髓。"
                    },
                    acquaree: {
                        name: "Acquaree 儿童水疗中心",
                        type: "儿童专用水疗",
                        desc: "首家专为儿童设计的水疗中心，在安全的环境中提供有趣且温和的护理。"
                    },
                    laMere: {
                        name: "La Mere",
                        type: "美容沙龙",
                        desc: "由专家级造型师和美容师提供专业的美发、美甲和美容服务。"
                    }
                },
                treatments: {
                    massage: { name: "招牌按摩", duration: "60 / 90 分钟" },
                    facial: { name: "奢华面部护理", duration: "60 分钟" }
                }
            },
            facilities: {
                hero: { title: "卓越设施", subtitle: "钻石型建筑奇观" },
                content: {
                    tag: "世界级设施",
                    title: "JHL 奢华之精髓",
                    desc: "JHL Solitaire Gading Serpong 提供一系列精心挑选的设施，旨在满足最挑剔的生活方式需求。从地标性的建筑到量身定制的宾客服务，每一个细节都精益求精。"
                },
                items: {
                    pool: {
                        name: "标志性无边泳池",
                        desc: "作为建筑的一大亮点，我们的无边泳池为您提供独特的游泳体验，尽览 Gading Serpong 天际线的无限风光。"
                    },
                    fitness: {
                        name: "先进健身中心",
                        desc: "配备最新的 Technogym 技术，我们的健身中心提供全面健康管理所需的一切设施。"
                    }
                }
            },
            offers: {
                hero: { title: "专属特惠", subtitle: "限时套餐" },
                items: {
                    weekend: {
                        tag: "入住房费",
                        title: "周末度假",
                        desc: "尊享周末入住 8 折优惠，包含早餐。",
                        cta: "立即预订"
                    },
                    brunch: {
                        tag: "餐饮",
                        title: "周日早午餐",
                        desc: "每周日供应各式国际自助美味，尽情享用。",
                        cta: "立即预约"
                    }
                }
            },
            privacy: {
                title: "隐私政策",
                lastUpdated: "最后更新：2026年2月8日",
                content: "在 JHL Solitaire，我们非常重视您的隐私。本政策概述了我们如何处理您的个人数据。",
                sections: {
                    storage: {
                        title: "数据存储与本地化",
                        content: "我们优先考虑您的个人数据安全。根据印度尼西亚法规（2019年第71号政府条例和UU PDP），我们的主要服务器和客户数据库位于印度尼西亚共和国境内（Google Cloud区域： Jacob达）。\n\n然而，为了性能优化（CDN）和流量分析，受限制的匿名数据可能会由我们的第三方合作伙伴（如 Google Analytics）在遵守国际数据隐私标准的其他司法管辖区进行处理。"
                    }
                }
            }
        },
        cookies: {
            title: "Cookie 访问权限",
            message: "我们使用 cookie 来提升您的体验并分析流量。点击“接受”，即表示您同意我们使用 cookie。",
            accept: "接受",
            decline: "拒绝",
            policy: "隐私政策"
        }
    },
    id: {
        nav: {
            home: "Beranda",
            rooms: "Kamar",
            dining: "Kuliner",
            meetings: "Pertemuan & Acara",
            wellness: "Kebugaran",
            facilities: "Fasilitas",
            offers: "Penawaran",
            bookNow: "Pesan Sekarang",
        },
        hero: {
            welcome: "Selamat Datang di",
            title: "JHL Solitaire",
            description: "Gading Serpong, A JHL Collections",
            jewelText: "Permata Gading Serpong",
            welcomeTitle: "Mengejawantahkan Esensi Terbaik Kehidupan",
            welcomeDescription: "Setiap momen kehidupan adalah kegembiraan yang patut dirayakan. Di JHL Solitaire, kami percaya tamu kami berhak mendapatkan pengalaman hidup terbaik. Dengan kebanggaan dan prestise, kami bertujuan untuk melampaui ekspektasi dengan membalas cita rasa istimewa tamu kami melalui pemikiran yang matang, layanan kelas satu, dan penawaran terbaik.",
        },
        features: {
            luxury: {
                title: "Kemewahan Bintang 5",
                desc: "Layanan dan fasilitas pemenang penghargaan, dirancang bagi wisatawan berkelas.",
            },
            location: {
                title: "Lokasi Strategis",
                desc: "Terletak di jantung Gading Serpong, hanya beberapa menit dari ICE dan AEON Mall.",
            },
            offers: {
                title: "Penawaran Eksklusif",
                desc: "Pesan langsung untuk menikmati harga khusus dan manfaat istimewa.",
                cta: "Lihat Penawaran",
            },
        },
        categories: {
            rooms: {
                title: "Kamar & Suite",
                subtitle: "Hunian Mewah",
                description: "Rasakan seni hidup mewah di kamar dan suite yang dirancang dengan perhatian luar biasa terhadap detail.",
                cta: "Temukan Lebih Lanjut"
            },
            dining: {
                title: "Pengalaman Kuliner",
                subtitle: "Dinasti Rasa",
                description: "Saksikan perpaduan rasa yang istimewa. Mulai dari prasmanan internasional hingga hidangan Italia autentik.",
                cta: "Eksplorasi Restoran"
            },
            meetings: {
                title: "Pernikahan & Acara",
                subtitle: "Momen Megah",
                description: "Ubah momen spesial Anda menjadi kenangan abadi di aula serbaguna kami yang megah, ideal untuk pernikahan mewah.",
                cta: "Rencanakan Momen Anda"
            },
            wellness: {
                title: "Kebugaran & Spa",
                subtitle: "Ketenangan Jiwa",
                description: "Segarkan panca indera Anda di fasilitas kebugaran kelas dunia kami, yang menghadirkan tiga spa khusus—Acqua Spa (kemewahan modern), Sandjong Spa (warisan tradisional), dan Acquaree Spa untuk anak-anak—bersama dengan gym mutakhir dan salon kecantikan La Mere.",
                cta: "Segarkan Sekarang"
            },
            facilities: {
                title: "Fasilitas Eksklusif",
                subtitle: "Gaya Hidup Mewah",
                description: "Nikmati kemegahan arsitektur berbentuk berlian dan layanan gaya hidup premium khas JHL Solitaire.",
                cta: "Lihat Fasilitas"
            },
            offers: {
                title: "Penawaran Eksklusif",
                subtitle: "Manfaat Istimewa",
                description: "Buka hak istimewa dan pengalaman personal selama menginap dengan berbagai penawaran musiman kami.",
                cta: "Lihat Penawaran"
            },
        },
        booking: {
            checkIn: "Tanggal Masuk",
            checkOut: "Tanggal Keluar",
            guests: "Tamu",
            adults: "Dewasa",
            availability: "Cek Ketersediaan",
            selectDate: "Pilih Tanggal",
            discover: "Jelajahi",
        },
        bookingPage: {
            step1Title: "Langkah 1",
            step2Title: "Langkah 2",
            planYourStay: "Rencanakan Menginap Anda",
            tellUsAboutTrip: "Ceritakan tentang perjalanan Anda",
            guestDetails: "Detail Tamu",
            checkInLabel: "Check-In",
            checkOutLabel: "Check-Out",
            adultsLabel: "Dewasa",
            childrenLabel: "Anak-anak",
            selectDate: "Pilih Tanggal",
            adultsCount: "Dewasa",
            childrenCount: "Anak-anak",
            nextStep: "Langkah Berikutnya",
            fullName: "Nama Lengkap",
            emailAddress: "Alamat Email",
            phoneNumber: "Nomor Telepon",
            fullNamePlaceholder: "Masukkan nama lengkap Anda",
            emailPlaceholder: "Masukkan email Anda",
            phonePlaceholder: "812 3456 7890",
            bookNow: "Pesan Sekarang",
            findingRates: "Mencari Tarif Terbaik...",
            redirecting: "Mengalihkan Anda ke sistem reservasi aman kami.",
            loadingSanctuary: "Memuat tempat istimewa Anda...",
            validation: {
                nameRequired: "Silakan masukkan nama lengkap yang valid.",
                nameInvalid: "Karakter tidak valid terdeteksi. Silakan perbaiki nama Anda.",
                emailInvalid: "Silakan masukkan alamat email yang valid.",
                phoneInvalid: "Silakan masukkan nomor telepon yang valid (minimal 7 digit).",
                specialChars: "Karakter khusus < > tidak diizinkan untuk keamanan.",
            },
        },
        footer: {
            contact: "Kontak",
            quickLinks: "Tautan Cepat",
            legal: "Legal",
            newsletter: "Buletin",
            subscribe: "Berlangganan untuk penawaran eksklusif.",
            placeholder: "Email Anda",
            join: "Gabung",
            rights: "Hak cipta dilindungi undang-undang.",
            privacyPolicy: "Kebijakan Privasi",
            termsOfService: "Ketentuan Layanan",
        },
        promo: {
            specialOffer: "Penawaran Spesial",
            reservation: "RESERVASI MEJA",
            tangDynasty: {
                title: "Tang Dynasty Set Menu",
                description: "Perjalanan kuliner lintas zaman dengan jamuan 10 jenis hidangan.",
                price: "IDR 4.888.000",
            }
        },
        dining: {
            title: "Pengalaman Kuliner",
            subtitle: "Cita Rasa Luar Biasa",
            description: "Mulai dari hidangan santai hingga pengalaman kuliner mewah, JHL Solitaire menawarkan berbagai pilihan kuliner untuk memanjakan setiap lidah. Juru masak kami menggunakan bahan terbaik untuk menciptakan mahakarya di setiap sajian.",
            venues: {
                mangan: {
                    type: "Prasmanan Internasional",
                    desc: "Teater kuliner yang menghadirkan stasiun memasak langsung dan beragam hidangan internasional serta lokal."
                },
                alGusto: {
                    type: "Fine Dining Italia",
                    desc: "Cita rasa Italia autentik yang disajikan dalam suasana elegan, sempurna untuk makan malam romantis atau makan siang bisnis, dilengkapi dengan pertunjukan memasak di meja."
                },
                royalEight: {
                    type: "Fine Dining Tiongkok",
                    desc: "Pilihan makan siang, makan malam, dan hidangan penutup Tiongkok yang istimewa, disajikan dalam nuansa modern yang dirancang dengan penuh estetika."
                },
                empress: {
                    type: "Lounge & Bar",
                    desc: "Temukan kreasi koktail khas yang unik, minuman beralkohol pilihan, dan koleksi anggur terkurasi dalam suasana yang elegan."
                },
                castro: {
                    type: "Lounge & Bar",
                    desc: "Bersantai dengan cerutu premium, wiski pilihan, dan koktail terkurasi di tengah atmosfer kemewahan yang tenang."
                },
                leBleu: {
                    type: "Kafe & Patisserie",
                    desc: "Wujud kemewahan kuliner yang memadukan tekstur halus, rasa manis yang elegan, dan teknik klasik dalam setiap sajian kue."
                }
            },
            openDaily: "Buka Setiap Hari: 10:00 - 22:00",
            viewMenu: "Lihat Menu",
            menuCategories: {
                main: { title: "Hidangan Utama", subtitle: "Menu Andalan" },
                dimsum: { title: "Dim Sum", subtitle: "Dibuat Setiap Hari" },
                beverage: { title: "Minuman", subtitle: "Penyegar Dahaga" }
            }
        },
        pages: {
            rooms: {
                hero: { title: "Akomodasi", subtitle: "Beristirahat dalam Kemewahan yang Elegan" },
                content: {
                    title: "Sanctuari Pribadi Anda",
                    desc: "Setiap dari 141 kamar dan suite kami adalah mahakarya desain, memadukan estetika kontemporer dengan kenyamanan abadi. Nikmati fasilitas mutakhir, tempat tidur mewah, dan pemandangan cakrawala kota yang menakjubkan."
                },
                roomTypes: {
                    premier: { name: "Premier Room", desc: "Sanctuari seluas 40m2 yang didesain untuk kenyamanan modern." },
                    executive: { name: "Executive Suite", desc: "Kemewahan tinggi dengan area ruang tamu terpisah dan pemandangan kota yang panoramik." },
                    signature: { name: "JHL Solitaire Signature", desc: "Perwujudan tertinggi dari gaya hidup mewah bagi wisatawan yang berkelas." }
                },
                amenities: {
                    wifi: "Wifi Kecepatan Tinggi",
                    tv: "Smart TV",
                    coffee: "Mesin Kopi",
                    ac: "AC"
                },
                perNight: "/ Malam",
                bookNow: "Pesan Sekarang"
            },
            meetings: {
                hero: { title: "Pertemuan & Acara", subtitle: "Di Mana Bisnis Bertemu Kemewahan" },
                content: {
                    title: "Sky Ballroom",
                    desc: "Sky Ballroom ikonik kami menawarkan pemandangan panorama kota 180 derajat, memberikan latar belakang yang menakjubkan untuk pernikahan, gala korporat, dan acara sosial. Dilengkapi dengan teknologi terkini dan didukung oleh tim acara kami yang berdedikasi."
                },
                venues: {
                    title: "Venue Eksklusif",
                    skyBallroom: {
                        name: "Sky Ballroom",
                        description: "Sky Ballroom menciptakan suasana luar biasa untuk setiap acara spesial. Ideal untuk pernikahan, wisuda, atau acara pribadi, venue istimewa ini terletak 200 kaki di atas tanah di lantai 15. Menampilkan teknologi audiovisual mutakhir, internet nirkabel berkecepatan tinggi, dan jendela setinggi langit-langit yang memenuhi ruangan dengan cahaya alami.",
                        location: "Indoor (Lantai 15)",
                        ceremony: "200 PAX",
                        reception: "250 PAX"
                    },
                    skyGarden: {
                        name: "Sky Garden",
                        description: "Sanctuari atap yang menawan untuk pernikahan dan pertemuan intim, di mana pemandangan yang menakjubkan dan keanggunan abadi menciptakan momen yang tak terlupakan.",
                        location: "Rooftop / Privat",
                        ceremony: "500 PAX",
                        reception: "50 PAX"
                    },
                    royalEight: {
                        name: "Royal Eight Chinese Dining",
                        description: "Pengalaman bersantap Tionghoa di jantung Gading Serpong, Tangerang. Sebagai bagian dari koleksi semi-fine dining khas kami, Royal Eight menyajikan pilihan makan siang, makan malam, dan hidangan penutup yang lezat sepanjang hari. Suasana kontemporer restoran dan desain yang dirancang dengan cermat memberikan pengaturan yang sempurna untuk perjalanan kuliner yang harmonis.",
                        location: "Indoor",
                        ceremony: "250 PAX",
                        reception: "250 PAX"
                    }
                },
                packages: {
                    title: "Paket",
                    desc: "Disesuaikan dengan kebutuhan Anda, paket acara kami menawarkan layanan komprehensif termasuk katering premium, dekorasi, dan koordinasi acara khusus."
                },
                cta: "Hubungi Kami"
            },
            wellness: {
                hero: { title: "Kebugaran & Spa", subtitle: "Segarkan Panca Indera Anda" },
                content: {
                    title: "Oasis Kesejahteraan Holistik",
                    desc: "JHL Solitaire Gading Serpong menawarkan destinasi kebugaran lengkap dengan tiga pengalaman spa yang berbeda: Acqua Spa (kemewahan modern), Sandjong Spa (warisan tradisional), dan Acquaree Spa (spa khusus anak pertama). Fasilitas kami juga mencakup gym mutakhir dan Salon Kecantikan La Mere yang bergengsi."
                },
                venues: {
                    acqua: {
                        name: "Acqua Spa",
                        type: "Spa Mewah Modern",
                        desc: "Sanctuari kontemporer yang berfokus pada perawatan terapeutik modern dan relaksasi maksimal."
                    },
                    sandjong: {
                        name: "Sandjong Spa",
                        type: "Spa Warisan Tradisional",
                        desc: "Temukan esensi warisan Indonesia melalui teknik penyembuhan kuno dan bahan-bahan alami."
                    },
                    acquaree: {
                        name: "Acquaree Kids Spa",
                        type: "Spa Khusus Anak",
                        desc: "Spa khusus anak pertama, menawarkan perawatan yang menyenangkan dan lembut dalam lingkungan yang aman."
                    },
                    laMere: {
                        name: "La Mere",
                        type: "Salon Kecantikan",
                        desc: "Layanan rambut, kuku, dan kecantikan profesional yang diberikan oleh penata rambut dan ahli kecantikan ahli."
                    }
                },
                treatments: {
                    massage: { name: "Signature Massage", duration: "60 / 90 Menit" },
                    facial: { name: "Luxury Facial", duration: "60 Menit" }
                }
            },
            facilities: {
                hero: { title: "Fasilitas Eksklusif", subtitle: "Keajaiban Arsitektur Berbentuk Berlian" },
                content: {
                    tag: "Fasilitas Kelas Dunia",
                    title: "Esensi Kemewahan JHL",
                    desc: "JHL Solitaire Gading Serpong menawarkan koleksi fasilitas terkurasi yang dirancang untuk memenuhi kebutuhan gaya hidup yang paling menuntut. Dari arsitektur ikonik kami hingga layanan tamu kustom, setiap detail dirancang untuk kesempurnaan."
                },
                items: {
                    pool: {
                        name: "Signature Infinity Pool",
                        desc: "Sorotan arsitektur yang menakjubkan, kolam renang infinity kami menawarkan pengalaman berenang unik dengan pemandangan cakrawala Gading Serpong yang tak terbatas."
                    },
                    fitness: {
                        name: "Kebugaran Mutakhir",
                        desc: "Dilengkapi dengan teknologi Technogym terbaru, pusat kebugaran kami menyediakan segala yang dibutuhkan untuk rutinitas kesehatan yang komprehensif."
                    }
                }
            },
            offers: {
                hero: { title: "Penawaran Eksklusif", subtitle: "Paket Waktu Terbatas" },
                items: {
                    weekend: {
                        tag: "Paket Menginap",
                        title: "Weekend Getaway",
                        desc: "Nikmati diskon 20% untuk menginap di akhir pekan termasuk sarapan.",
                        cta: "Pesan Sekarang"
                    },
                    brunch: {
                        tag: "Kuliner",
                        title: "Sunday Brunch",
                        desc: "Prasmanan internasional sepuasnya setiap hari Minggu.",
                        cta: "Pesan Meja"
                    }
                }
            },
            privacy: {
                title: "Kebijakan Privasi",
                lastUpdated: "Terakhir Diperbarui: 8 Februari 2026",
                content: "Di JHL Solitaire, kami menghargai privasi Anda. Kebijakan ini menguraikan bagaimana kami menangani data pribadi Anda.",
                sections: {
                    storage: {
                        title: "Penyimpanan & Teritori Data",
                        content: "Kami memprioritaskan keamanan Data Pribadi Anda. Sesuai dengan peraturan Indonesia (PP No. 71/2019 dan UU PDP), server utama dan basis data pelanggan kami berada di wilayah Republik Indonesia (Wilayah Google Cloud: Jakarta).\n\nNamun, untuk tujuan optimalisasi performa (CDN) dan analisis lalu lintas, data anonim terbatas mungkin diproses oleh mitra pihak ketiga kami (seperti Google Analytics) di yurisdiksi lain yang mematuhi standar privasi data internasional."
                    }
                }
            }
        },
        cookies: {
            title: "Persetujuan Cookie",
            message: "Kami menggunakan cookie untuk meningkatkan pengalaman Anda dan menganalisis lalu lintas kami. Dengan mengeklik \"Terima\", Anda menyetujui penggunaan cookie kami.",
            accept: "Terima",
            decline: "Tolak",
            policy: "Kebijakan Privasi"
        }
    },
    ru: {
        nav: {
            home: "Главная",
            rooms: "Номера",
            dining: "Рестораны",
            meetings: "Мероприятия",
            wellness: "Велнес",
            facilities: "Удобства",
            offers: "Предложения",
            bookNow: "Забронировать",
        },
        hero: {
            welcome: "Добро пожаловать в",
            title: "JHL Solitaire",
            description: "Гадинг Серпонг, коллекция JHL",
            jewelText: "Жемчужина города",
            welcomeTitle: "Воплощение лучшей сути жизни",
            welcomeDescription: "Каждый момент жизни — это торжество, которое стоит отпраздновать. В JHL Solitaire мы верим, что наши гости заслуживают самого лучшего. С гордостью и престижем мы стремимся превзойти ожидания, отвечая изысканному вкусу наших гостей первоклассным сервисом и предложениями.",
        },
        features: {
            luxury: {
                title: "5-звездочная роскошь",
                desc: "Отмеченный наградами сервис и удобства для взыскательных путешественников.",
            },
            location: {
                title: "Превосходное расположение",
                desc: "В самом сердце Гадинг Серпонг, в минутах от ICE и торгового центра AEON.",
            },
            offers: {
                title: "Эксклюзивные предложения",
                desc: "Бронируйте напрямую, чтобы получить специальные тарифы и привилегии.",
                cta: "Смотреть предложения",
            },
        },
        categories: {
            rooms: {
                title: "Номера и люксы",
                subtitle: "Люксы и Святилище",
                description: "Почувствуйте искусство роскошной жизни в номерах и люксах, созданных с исключительным вниманием к деталям.",
                cta: "Узнать больше"
            },
            dining: {
                title: "Гастрономический опыт",
                subtitle: "Кулинарная династия",
                description: "Откройте для себя богатую палитру изысканных вкусов. От международных шведских столов до аутентичной итальянской кухни.",
                cta: "Исследовать рестораны"
            },
            meetings: {
                title: "Свадьбы и события",
                subtitle: "Грандиозные мероприятия",
                description: "Превратите свои особые моменты в вечные воспоминания в нашем великолепном многофункциональном зале.",
                cta: "Спланировать событие"
            },
            wellness: {
                title: "Велнес и Спа",
                subtitle: "Спокойствие и Спа",
                description: "Омолодите свои чувства в наших велнес-залах мирового класса, где расположены три специализированных спа-центра: Acqua Spa (современная роскошь), Sandjong Spa (традиционное наследие) и Acquaree Spa для детей, а также современный тренажерный зал и салон красоты La Mere.",
                cta: "Омолодиться сейчас"
            },
            facilities: {
                title: "Изысканные удобства",
                subtitle: "Изысканный образ жизни",
                description: "Оцените архитектурное чудо в форме бриллианта и утонченный стиль жизни, уникальный для JHL Solitaire.",
                cta: "Исследовать удобства"
            },
            offers: {
                title: "Эксклюзивные предложения",
                subtitle: "Эксклюзивные привилегии",
                description: "Откройте исключительные привилегии и индивидуальные впечатления во время вашего пребывания.",
                cta: "Смотреть предложения"
            },
        },
        booking: {
            checkIn: "Заезд",
            checkOut: "Выезд",
            guests: "Гости",
            adults: "Взрослые",
            availability: "Проверить наличие",
            selectDate: "Выбрать дату",
            discover: "Открыть",
        },
        bookingPage: {
            step1Title: "Шаг 1",
            step2Title: "Шаг 2",
            planYourStay: "Спланируем ваше пребывание",
            tellUsAboutTrip: "Расскажите о вашей поездке",
            guestDetails: "Данные гостя",
            checkInLabel: "Заезд",
            checkOutLabel: "Выезд",
            adultsLabel: "Взрослые",
            childrenLabel: "Дети",
            selectDate: "Выбрать дату",
            adultsCount: "Взрослые",
            childrenCount: "Дети",
            nextStep: "Следующий шаг",
            fullName: "Полное имя",
            emailAddress: "Адрес электронной почты",
            phoneNumber: "Номер телефона",
            fullNamePlaceholder: "Введите ваше полное имя",
            emailPlaceholder: "Введите ваш email",
            phonePlaceholder: "812 3456 7890",
            bookNow: "Забронировать",
            findingRates: "Поиск лучших тарифов...",
            redirecting: "Перенаправление на безопасную систему бронирования.",
            loadingSanctuary: "Загрузка вашего убежища...",
            validation: {
                nameRequired: "Пожалуйста, введите действительное полное имя.",
                nameInvalid: "Обнаружены недопустимые символы. Пожалуйста, исправьте ваше имя.",
                emailInvalid: "Пожалуйста, введите действительный адрес электронной почты.",
                phoneInvalid: "Пожалуйста, введите действительный номер телефона (минимум 7 цифр).",
                specialChars: "Специальные символы < > не разрешены по соображениям безопасности.",
            },
        },
        footer: {
            contact: "Контакты",
            quickLinks: "Быстрые ссылки",
            legal: "Правовая информация",
            newsletter: "Рассылка",
            subscribe: "Подпишитесь на эксклюзивные предложения.",
            placeholder: "Ваш email",
            join: "Присоединиться",
            rights: "Все права защищены.",
            privacyPolicy: "Политика конфиденциальности",
            termsOfService: "Условия использования",
        },
        promo: {
            specialOffer: "Специальное предложение",
            reservation: "ЗАРЕЗЕРВИРОВАТЬ СТОЛ",
            tangDynasty: {
                title: "Сет-меню Династия Тан",
                description: "Кулинарное путешествие сквозь века: банкет из 10 блюд.",
                price: "IDR 4.888.000",
            }
        },
        dining: {
            title: "Кулинарные впечатления",
            subtitle: "Вкус необычайного",
            description: "От непринужденной трапезы до изысканных гурманских впечатлений, JHL Solitaire предлагает разнообразные кулинарные варианты.",
            venues: {
                mangan: {
                    type: "Международный шведский стол",
                    desc: "Кулинарный театр с станциями живой кухни и разнообразными международными и местными деликатесами."
                },
                alGusto: {
                    type: "Итальянская высокая кухня",
                    desc: "Аутентичные итальянские вкусы в утонченной обстановке, идеально подходящие для романтических ужинов."
                },
                royalEight: {
                    type: "Китайская высокая кухня",
                    desc: "Восхитительный выбор обедов, ужинов и китайских десертов в современной обстановке."
                },
                empress: {
                    type: "Лаунж и Бар",
                    desc: "Откройте для себя авторские коктейли, вдохновленные аптекарским делом, и изысканные спиртные напитки."
                },
                castro: {
                    type: "Лаунж и Бар",
                    desc: "Отдохните с премиальными сигарами, изысканным виски и кураторскими коктейлями."
                },
                leBleu: {
                    type: "Кафе и Кондитерская",
                    desc: "Искусное выражение наслаждения, где нежные текстуры и утонченная сладость сливаются воедино."
                }
            },
            openDaily: "Ежедневно: 10:00 - 22:00",
            viewMenu: "Смотреть меню",
            menuCategories: {
                main: { title: "Основные блюда", subtitle: "Фирменные блюда" },
                dimsum: { title: "Димсамы", subtitle: "Ручная работа ежедневно" },
                beverage: { title: "Напитки", subtitle: "Освежающие напитки" }
            }
        },
        pages: {
            rooms: {
                hero: { title: "Размещение", subtitle: "Отдых в утонченной элегантности" },
                content: {
                    title: "Ваше личное святилище",
                    desc: "Каждый из наших 141 номеров и люксов — это шедевр дизайна, сочетающий современную эстетику с вечным комфортом."
                },
                roomTypes: {
                    premier: { name: "Премьер номер", desc: "Просторное убежище площадью 40 кв.м, созданное для современного комфорта." },
                    executive: { name: "Исполнительный люкс", desc: "Повышенная роскошь с отдельной гостиной и панорамным видом на город." },
                    signature: { name: "JHL Solitaire Signature", desc: "Высшее выражение роскошной жизни для взыскательных путешественников." }
                },
                amenities: {
                    wifi: "Высокоскоростной Wi-Fi",
                    tv: "Смарт ТВ",
                    coffee: "Кофемашина",
                    ac: "Кондиционер"
                },
                perNight: "/ Ночь",
                bookNow: "Забронировать"
            },
            meetings: {
                hero: { title: "Встречи и события", subtitle: "Где бизнес встречается с роскошью" },
                content: {
                    title: "Небесный бальный зал",
                    desc: "Наш легендарный Небесный бальный зал предлагает 180-градусный панорамный вид на город, обеспечивая потрясающий фон для свадеб, корпоративных гала-концертов и светских мероприятий. Оснащен новейшими технологиями и поддерживается нашей преданной командой организаторов."
                },
                venues: {
                    title: "Изысканные площадки",
                    skyBallroom: {
                        name: "Sky Ballroom",
                        description: "Sky Ballroom создает необыкновенную обстановку для любого торжественного случая. Идеально подходит для свадеб, выпускных или частных мероприятий. Это исключительное место расположено на высоте 200 футов над землей на 15-м этаже. К услугам гостей современное аудиовизуальное оборудование, высокоскоростной беспроводной интернет и панорамные окна во всю стену, наполняющие пространство естественным светом.",
                        location: "В помещении (15-й этаж)",
                        ceremony: "200 чел.",
                        reception: "250 чел."
                    },
                    skyGarden: {
                        name: "Sky Garden",
                        description: "Очаровательное убежище на крыше для камерных свадеб и встреч, где захватывающие виды и вечная элегантность создают незабываемые моменты.",
                        location: "Крыша / Частная зона",
                        ceremony: "500 чел.",
                        reception: "50 чел."
                    },
                    royalEight: {
                        name: "Royal Eight Chinese Dining",
                        description: "Опыт китайской кухни в самом сердце Гадинг Серпонг, Тангеранг. Являясь частью нашей фирменной коллекции ресторанов полувысокой кухни, Royal Eight предлагает восхитительный выбор обедов, ужинов и десертов в течение дня. Современная атмосфера ресторана и продуманный дизайн создают идеальные условия для гармоничного кулинарного путешествия.",
                        location: "В помещении",
                        ceremony: "250 чел.",
                        reception: "250 чел."
                    }
                },
                packages: {
                    title: "Пакеты услуг",
                    desc: "Разработанные в соответствии с вашими потребностями, наши банкетные пакеты предлагают комплексные услуги, включая кейтеринг премиум-класса, декорирование и услуги персонального координатора."
                },
                cta: "Узнать сейчас"
            },
            wellness: {
                hero: { title: "Велнес и Спа", subtitle: "Омолодите свои чувства" },
                content: {
                    title: "Оазис целостного благополучия",
                    desc: "JHL Solitaire Gading Serpong предлагает комплексное велнес-направление, включающее три различных спа-центра: Acqua Spa (современная роскошь), Sandjong Spa (традиционное наследие) и Acquaree Spa (первый специализированный спа для детей). К вашим услугам также современный фитнес-центр и престижный салон красоты La Mere."
                },
                venues: {
                    acqua: {
                        name: "Acqua Spa",
                        type: "Современный роскошный спа",
                        desc: "Современное святилище, ориентированное на новейшие терапевтические процедуры и полное расслабление."
                    },
                    sandjong: {
                        name: "Sandjong Spa",
                        type: "Традиционный спа-центр",
                        desc: "Откройте для себя суть индонезийского наследия с помощью древних техник исцеления и натуральных ингредиентов."
                    },
                    acquaree: {
                        name: "Acquaree Kids Spa",
                        type: "Специализированный детский спа",
                        desc: "Первый специализированный спа-центр для детей, предлагающий веселые и щадящие процедуры в безопасной среде."
                    },
                    laMere: {
                        name: "La Mere",
                        type: "Салон красоты",
                        desc: "Профессиональные услуги по уходу за волосами, ногтями и кожей от опытных стилистов и косметологов."
                    }
                },
                treatments: {
                    massage: { name: "Фирменный массаж", duration: "60 / 90 Мин" },
                    facial: { name: "Роскошный уход за лицом", duration: "60 Мин" }
                }
            },
            facilities: {
                hero: { title: "Изысканные удобства", subtitle: "Архитектурное чудо в форме бриллианта" },
                content: {
                    tag: "Удобства мирового класса",
                    title: "Суть роскоши JHL",
                    desc: "JHL Solitaire Gading Serpong предлагает коллекцию кураторских удобств."
                },
                items: {
                    pool: {
                        name: "Фирменный инфинити-бассейн",
                        desc: "Потрясающая архитектурная достопримечательность, наш инфинити-бассейн предлагает уникальный опыт."
                    },
                    fitness: {
                        name: "Современный фитнес-центр",
                        desc: "Оснащенный новейшими технологиями Technogym, наш фитнес-центр предоставляет все необходимое."
                    }
                }
            },
            offers: {
                hero: { title: "Эксклюзивные предложения", subtitle: "Предложения с ограниченным сроком" },
                items: {
                    weekend: {
                        tag: "Пакет проживания",
                        title: "Выходные",
                        desc: "Скидка 20% на проживание в выходные, включая завтрак.",
                        cta: "Забронировать"
                    },
                    brunch: {
                        tag: "Рестораны",
                        title: "Воскресный бранч",
                        desc: "Международный шведский стол каждое воскресенье.",
                        cta: "Забронировать столик"
                    }
                }
            },
            privacy: {
                title: "Политика конфиденциальности",
                lastUpdated: "Последнее обновление: 8 февраля 2026 г.",
                content: "В JHL Solitaire мы ценим вашу конфиденциальность. Эта политика описывает, как мы обрабатываем ваши личные данные.",
                sections: {
                    storage: {
                        title: "Хранение и локализация данных",
                        content: "Мы уделяем приоритетное внимание безопасности ваших Персональных данных. В соответствии с правилами Индонезии (ПП № 71/2019 и UU PDP), наши основные серверы и базы данных клиентов расположены на территории Республики Индонезии (регион Google Cloud: Джакарта).\n\nОднако в целях оптимизации производительности (CDN) и анализа трафика ограниченные анонимизированные данные могут обрабатываться нашими сторонними партнерами (такими как Google Analytics) в других юрисдикциях, придерживающихся международных стандартов конфиденциальности данных."
                    }
                }
            }
        },
        cookies: {
            title: "Согласие на использование файлов cookie",
            message: "Мы используем файлы cookie, чтобы улучшить ваш опыт и анализировать наш трафик. Нажимая «Принять», вы соглашаетесь на использование нами файлов cookie.",
            accept: "Принять",
            decline: "Отклонить",
            policy: "Политика конфиденциальности"
        }
    },
    ja: {
        nav: {
            home: "ホーム",
            rooms: "客室",
            dining: "お食事",
            meetings: "会議・イベント",
            wellness: "ウェルネス",
            facilities: "施設",
            offers: "オファー",
            bookNow: "予約する",
        },
        hero: {
            welcome: "ようこそ",
            title: "JHL Solitaire",
            description: "Gading Serpong, A JHL Collections",
            jewelText: "都会の宝石",
            welcomeTitle: "人生の最高の喜びを体現する",
            welcomeDescription: "生きるすべての瞬間は、祝うべき喜びです。JHL Solitaireでは、お客様に人生を最大限に楽しむための最高の体験を提供する価値があると信じています。誇りと威信を持って、お客様の洗練された好みに応え、一流のサービスとオファーで期待を超えることを目指しています。",
        },
        features: {
            luxury: {
                title: "5つ星の贅沢",
                desc: "目の肥えた旅行者のために設計された、受賞歴のあるサービスとアメニティ。",
            },
            location: {
                title: "最高のロケーション",
                desc: "Gading Serpongの中心部に位置し、ICEやAEONモールから数分です。",
            },
            offers: {
                title: "限定オファー",
                desc: "直接予約で特別料金と特典をお楽しみください。",
                cta: "オファーを見る",
            },
        },
        categories: {
            rooms: {
                title: "客室とスイート",
                subtitle: "スイート＆サンクチュアリ",
                description: "細部にまでこだわって設計された客室とスイートで、贅沢な生活の芸術を体験してください。",
                cta: "もっと詳しく"
            },
            dining: {
                title: "ダイニング体験",
                subtitle: "食の王朝",
                description: "絶妙な味の豊かなタペストリーを広げてください。国際的なビュッフェから本格的なイタリア料理まで。",
                cta: "レストランを探す"
            },
            meetings: {
                title: "ウェディング＆イベント",
                subtitle: "壮大なイベント",
                description: "壮大な多目的ホールで、特別な瞬間を永遠の思い出に変えましょう。豪華な結婚式や権威あるイベントに最適です。",
                cta: "思い出を計画する"
            },
            wellness: {
                title: "ウェルネス＆スパ",
                subtitle: "静寂とスパ",
                description: "世界クラスのウェルネス施設で五感を若返らせましょう。モダンなAcqua Spa、伝統的なSandjong Spa、お子様向けのAcquaree Spaの3つのスパに加え、最先端のジムと美容サロンLa Mereを備えています。",
                cta: "今すぐリフレッシュ"
            },
            facilities: {
                title: "絶妙な施設",
                subtitle: "絶妙なライフスタイル",
                description: "JHL Solitaire独自のダイヤモンド型の建築の驚異と洗練されたライフスタイルサービスを体験してください。",
                cta: "施設を探す"
            },
            offers: {
                title: "限定オファー",
                subtitle: "限定特典",
                description: "厳選された季節のオファーで、滞在中の特別な特典とオーダーメイドの体験を解き放ちましょう。",
                cta: "オファーを見る"
            },
        },
        booking: {
            checkIn: "チェックイン",
            checkOut: "チェックアウト",
            guests: "ゲスト",
            adults: "大人",
            availability: "空室状況を確認",
            selectDate: "日付を選択",
            discover: "発見する",
        },
        bookingPage: {
            step1Title: "ステップ1",
            step2Title: "ステップ2",
            planYourStay: "ご滞在を計画しましょう",
            tellUsAboutTrip: "旅行についてお聞かせください",
            guestDetails: "ゲスト詳細",
            checkInLabel: "チェックイン",
            checkOutLabel: "チェックアウト",
            adultsLabel: "大人",
            childrenLabel: "子供",
            selectDate: "日付を選択",
            adultsCount: "大人",
            childrenCount: "子供",
            nextStep: "次のステップ",
            fullName: "氏名",
            emailAddress: "メールアドレス",
            phoneNumber: "電話番号",
            fullNamePlaceholder: "氏名を入力してください",
            emailPlaceholder: "メールアドレスを入力してください",
            phonePlaceholder: "812 3456 7890",
            bookNow: "今すぐ予約",
            findingRates: "最良の料金を検索中...",
            redirecting: "安全な予約システムにリダイレクトしています。",
            loadingSanctuary: "あなたの聖域を読み込み中...",
            validation: {
                nameRequired: "有効な氏名を入力してください。",
                nameInvalid: "無効な文字が検出されました。氏名を修正してください。",
                emailInvalid: "有効なメールアドレスを入力してください。",
                phoneInvalid: "有効な電話番号を入力してください（最低7桁）。",
                specialChars: "セキュリティ上の理由により、特殊文字 < > は使用できません。",
            },
        },
        footer: {
            contact: "お問い合わせ",
            quickLinks: "クイックリンク",
            legal: "法的情報",
            newsletter: "ニュースレター",
            subscribe: "限定オファーを購読する。",
            placeholder: "メールアドレス",
            join: "参加する",
            rights: "全著作権所有。",
            privacyPolicy: "プライバシーポリシー",
            termsOfService: "利用規約",
        },
        promo: {
            specialOffer: "特別オファー",
            reservation: "テーブルを予約",
            tangDynasty: {
                title: "唐王朝セットメニュー",
                description: "時代を超えた料理の旅。10コースの宴会。",
                price: "IDR 4,888,000",
            }
        },
        dining: {
            title: "料理体験",
            subtitle: "非凡な味",
            description: "カジュアルな食事から絶妙なグルメ体験まで、JHL Solitaireはあらゆる味覚を満たす多様な料理の選択肢を提供します。",
            venues: {
                mangan: {
                    type: "インターナショナルビュッフェ",
                    desc: "ライブクッキングステーションと多様な国際的および地元の珍味を備えた料理劇場。"
                },
                alGusto: {
                    type: "イタリアンファインダイニング",
                    desc: "洗練された環境で提供される本格的なイタリアの味。ロマンチックなディナーやビジネスランチに最適です。"
                },
                royalEight: {
                    type: "中華ファインダイニング",
                    desc: "現代的で考え抜かれた環境で提供される、おいしいランチ、ディナー、中華デザートのセレクション。"
                },
                empress: {
                    type: "ラウンジ＆バー",
                    desc: "エレガントな雰囲気の中で、薬局風のシグネチャーカクテル、高級スピリッツ、厳選されたワインを発見してください。"
                },
                castro: {
                    type: "ラウンジ＆バー",
                    desc: "洗練されたエレガンスの雰囲気の中で、プレミアムシガー、高級ウイスキー、厳選されたカクテルでリラックスしてください。"
                },
                leBleu: {
                    type: "カフェ＆パティスリー",
                    desc: "繊細な食感、洗練された甘さ、時代を超越した技術がすべてのケーキに融合した、贅沢の表現。"
                }
            },
            openDaily: "毎日営業: 10:00 - 22:00",
            viewMenu: "メニューを見る",
            menuCategories: {
                main: { title: "メインコース", subtitle: "シグネチャー料理" },
                dimsum: { title: "点心", subtitle: "毎日手作り" },
                beverage: { title: "お飲み物", subtitle: "リフレッシュメント" }
            }
        },
        pages: {
            rooms: {
                hero: { title: "宿泊施設", subtitle: "洗練されたエレガンスでの休息" },
                content: {
                    title: "あなたのプライベートサンクチュアリ",
                    desc: "141室の客室とスイートはそれぞれ、現代的な美学と時代を超えた快適さを融合させたデザインの傑作です。"
                },
                roomTypes: {
                    premier: { name: "プレミアルーム", desc: "現代的な快適さのために設計された広々とした40平方メートルのサンクチュアリ。" },
                    executive: { name: "エグゼクティブスイート", desc: "独立したリビングエリアとパノラマの街の景色を望む、ワンランク上の贅沢。" },
                    signature: { name: "JHL Solitaire シグネチャー", desc: "目の肥えた旅行者のための贅沢な生活の究極の表現。" }
                },
                amenities: {
                    wifi: "高速Wi-Fi",
                    tv: "スマートTV",
                    coffee: "コーヒーメーカー",
                    ac: "エアコン"
                },
                perNight: "/ 泊",
                bookNow: "予約する"
            },
            meetings: {
                hero: { title: "ミーティング＆イベント", subtitle: "ビジネスとラグジュアリーが交差する場所" },
                content: {
                    title: "スカイボールルーム",
                    desc: "街のパノラマを180度見渡すことができるアイコニックなスカイボールルームは、結婚式や企業のガラ、社交イベントに最高の背景を提供します。最先端のテクノロジーを完備し、専任のイベントチームが完璧なサポートをお約束します。"
                },
                venues: {
                    title: "極上の会場",
                    skyBallroom: {
                        name: "スカイボールルーム",
                        description: "スカイボールルームは、あらゆる特別な機会に並外れた設定を作り出します。結婚式、卒業式、またはプライベートなイベントに理想的なこの卓越した会場は、地上200フィート（15階）に位置しています。最先端の視聴覚テクノロジー、高速ワイヤレスインターネット、そして自然光で空間を満たす床から天井までの窓が特徴です。",
                        location: "室内 (15階)",
                        ceremony: "200 名",
                        reception: "250 名"
                    },
                    skyGarden: {
                        name: "スカイガーデン",
                        description: "息をのむような景色と時代を超越したエレガンスが忘れられない瞬間を作り出す、親密な結婚式や集まりのための魅惑的な屋上サンクチュアリ。",
                        location: "屋上 / プライベート",
                        ceremony: "500 名",
                        reception: "50 名"
                    },
                    royalEight: {
                        name: "ロイヤルエイト 中華ダイニング",
                        description: "タンゲランのガディン・セルポンの中心で味わう中華ダイニング体验。シグネチャーなセミファインダイニングコレクションの一部として、ロイヤルエイトは一日を通して魅力的なランチ、ディナー、デザートを提供します。レストランの現代的な雰囲気と思慮深く作り込まれたデザインは、調和のとれた美食の旅に最適な環境を提供します。",
                        location: "室内",
                        ceremony: "250 名",
                        reception: "250 名"
                    }
                },
                packages: {
                    title: "パッケージ",
                    desc: "お客様のニーズに合わせてカスタマイズされたイベントパッケージは、プレミアムなケータリング、装飾、専任のイベントコーディネートを含む包括的なサービスを提供します。"
                },
                cta: "お問い合わせ"
            },
            wellness: {
                hero: { title: "ウェルネス＆スパ", subtitle: "五感を若返らせる" },
                content: {
                    title: "ホリスティックな癒しの聖域",
                    desc: "JHL Solitaire Gading Serpongは、モダンで贅沢な Acqua Spa、伝統を受け継ぐ Sandjong Spa、そして初の子供専用 Acquaree Spa の3つの異なるスパ体験を提供します。さらに、最先端のジムと一流の美容サロン La Mere も完備しています。"
                },
                venues: {
                    acqua: {
                        name: "Acqua Spa",
                        type: "モダンラグジュアリースパ",
                        desc: "最新のトリートメントと究極のリラクゼーションに焦点を当てた、現代的な癒しの空間。"
                    },
                    sandjong: {
                        name: "Sandjong Spa",
                        type: "伝統的ヘリテージスパ",
                        desc: "古来の癒しの技法と天然素材を通じて、インドネシアの伝統の神髄を体験してください。"
                    },
                    acquaree: {
                        name: "Acquaree Kids Spa",
                        type: "子供専用スパ",
                        desc: "安全な環境で楽しく優しいトリートメントを提供する、初の子供専用スパ施設。"
                    },
                    laMere: {
                        name: "La Mere",
                        type: "ビューティーサロン",
                        desc: "熟練のスタイリストとエステティシャンによる、プロフェッショナルなヘア、ネイル、ビューティーサービス。"
                    }
                },
                treatments: {
                    massage: { name: "シグネチャーマッサージ", duration: "60 / 90 分" },
                    facial: { name: "ラグジュアリーフェイシャル", duration: "60 分" }
                }
            },
            facilities: {
                hero: { title: "絶妙な施設", subtitle: "ダイヤモンド型の建築の驚異" },
                content: {
                    tag: "世界クラスのアメニティ",
                    title: "JHLラグジュアリーのエッセンス",
                    desc: "JHL Solitaire Gading Serpongは、最も要求の厳しいライフスタイルのニーズに応えるために設計された厳選された施設を提供します。"
                },
                items: {
                    pool: {
                        name: "シグネチャーインフィニティプール",
                        desc: "素晴らしい建築のハイライトであるインフィニティプールは、Gading Serpongのスカイラインを制限なく眺めることができるユニークな水泳体験を提供します。"
                    },
                    fitness: {
                        name: "最先端のフィットネス",
                        desc: "最新のTechnogymテクノロジーを搭載したフィットネスセンターは、包括的なウェルネスルーチンに必要なすべてを提供します。"
                    }
                }
            },
            offers: {
                hero: { title: "限定オファー", subtitle: "期間限定パッケージ" },
                items: {
                    weekend: {
                        tag: "宿泊パッケージ",
                        title: "ウィークエンドゲッタウェイ",
                        desc: "朝食を含む週末の滞在が20%オフ。",
                        cta: "予約する"
                    },
                    brunch: {
                        tag: "ダイニング",
                        title: "サンデーブランチ",
                        desc: "毎週日曜日の食べ放題インターナショナルビュッフェ。",
                        cta: "テーブルを予約"
                    }
                }
            },
            privacy: {
                title: "プライバシーポリシー",
                lastUpdated: "最終更新日：2026年2月8日",
                content: "JHL Solitaireでは、お客様のプライバシーを大切にしています。このポリシーでは、お客様の個人データの取り扱いについて説明します。",
                sections: {
                    storage: {
                        title: "データの保存とローカリゼーション",
                        content: "当社は、お客様の個人データのセキュリティを最優先事項としています。インドネシアの規制（PP No. 71/2019およびUU PDP）を遵守し、当社の主要なサーバーと顧客データベースはインドネシア共和国の領土内（Google Cloudリージョン：ジャカルタ）に配置されています。\n\nただし、パフォーマンスの最適化（CDN）およびトラフィック分析の目的で、国際的なデータプライバシー基準を遵守する他の法域において、当社のサードパーティパートナー（Google Analyticsなど）によって限定された匿名化データが処理される場合があります。"
                    }
                }
            }
        },
        cookies: {
            title: "クッキーの使用同意",
            message: "当ウェブサイトでは、お客様の体験を向上させ、トラフィックを分析するためにクッキーを使用しています。「同意する」をクリックすると、クッキーの使用に同意したことになります。",
            accept: "同意する",
            decline: "拒否する",
            policy: "プライバシーポリシー"
        }
    },
    ar: {
        nav: {
            home: "الرئيسية",
            rooms: "غرف",
            dining: "تتناول الطعام",
            meetings: "الاجتماعات",
            wellness: "عافية",
            facilities: "مرافق",
            offers: "عروض",
            bookNow: "احجز الآن",
        },
        hero: {
            welcome: "مرحبا بك في",
            title: "جي إتش إل سوليتير",
            description: "غادينغ سيربونغ، مجموعة جي إتش إل",
            jewelText: "جوهرة المدينة",
            welcomeTitle: "تجسيد أفضل جوهر للحياة",
            welcomeDescription: "كل لحظة من الحياة هي فرحة تستحق الاحتفال. في جي إتش إل سوليتير، نؤمن بأن ضيوفنا يستحقون أرقى تجربة للعيش على أكمل وجه. بكل فخر وهيبة، نهدف إلى تجاوز التوقعات من خلال مبادلة الذوق الرفيع لضيوفنا بإطار ذهني متزن، وخدمة من الدرجة الأولى، وعروض مميزة.",
        },
        features: {
            luxury: {
                title: "رفاهية 5 نجوم",
                desc: "خدمة ووسائل راحة حائزة على جوائز مصممة للمسافر المميز.",
            },
            location: {
                title: "موقع متميز",
                desc: "يقع في قلب غادينغ سيربونغ، على بعد دقائق من ICE و مول AEON.",
            },
            offers: {
                title: "عروض حصرية",
                desc: "احجز مباشرة معنا للاستمتاع بأسعار خاصة ومزايا مجانية.",
                cta: "عرض العروض",
            },
        },
        categories: {
            rooms: {
                title: "الغرف والأجنحة",
                subtitle: "الأجنحة والملاذ",
                description: "جرب فن المعيشة الفاخرة في غرف وأجنحة مصممة بعناية فائقة للتفاصيل.",
                cta: "اكتشف المزيد"
            },
            dining: {
                title: "تجربة تناول الطعام",
                subtitle: "سلالة الطهي",
                description: "اكتشف النسيج الغني للنكهات الرائعة. من البوفيهات العالمية إلى المأكولات الإيطالية الأصيلة الفاخرة.",
                cta: "استكشف الأماكن"
            },
            meetings: {
                title: "حفلات الزفاف والفعاليات",
                subtitle: "فعاليات كبرى",
                description: "حول لحظاتك الخاصة إلى ذكريات أبدية في قاعتنا الرائعة متعددة الوظائف، والمثالية لحفلات الزفاف الكبرى والفعاليات المرموقة.",
                cta: "خطط لذكرياتك"
            },
            wellness: {
                title: "العافية والسبا",
                subtitle: "السكينة والسبا",
                description: "جدد حواسك في مرافقنا الصحية العالمية، التي تضم ثلاثة منتجعات متخصصة: أكوا سبا (فخامة حديثة)، وساندجونج سبا (تراث تقليدي)، وأكواريه سبا للأطفال، بالإضافة إلى صالة الألعاب الرياضية الحديثة وصالون لتجميل لا مير.",
                cta: "تجديد النشاط الآن"
            },
            facilities: {
                title: "مرافق رائعة",
                subtitle: "نظام حياة رائع",
                description: "جرب الأعجوبة المعمارية الماسية الشكل وخدمات نمط الحياة الراقية الفريدة من نوعها في جي إتش إل سوليتير.",
                cta: "استكشف المرافق"
            },
            offers: {
                title: "عروض حصرية",
                subtitle: "مزايا حصرية",
                description: "افتح امتيازات استثنائية وتجارب مخصصة أثناء إقامتك مع مجموعتنا المختارة من العروض الموسمية.",
                cta: "عرض العروض"
            },
        },
        booking: {
            checkIn: "تسجيل الوصول",
            checkOut: "تسجيل المغادرة",
            guests: "الضيوف",
            adults: "البالغين",
            availability: "تحقق من التوفر",
            selectDate: "اختر التاريخ",
            discover: "اكتشف",
        },
        bookingPage: {
            step1Title: "الخطوة 1",
            step2Title: "الخطوة 2",
            planYourStay: "لنخطط لإقامتك",
            tellUsAboutTrip: "أخبرنا عن رحلتك",
            guestDetails: "تفاصيل الضيف",
            checkInLabel: "تسجيل الوصول",
            checkOutLabel: "تسجيل المغادرة",
            adultsLabel: "البالغين",
            childrenLabel: "الأطفال",
            selectDate: "اختر التاريخ",
            adultsCount: "البالغين",
            childrenCount: "الأطفال",
            nextStep: "الخطوة التالية",
            fullName: "الاسم الكامل",
            emailAddress: "عنوان البريد الإلكتروني",
            phoneNumber: "رقم الهاتف",
            fullNamePlaceholder: "أدخل اسمك الكامل",
            emailPlaceholder: "أدخل بريدك الإلكتروني",
            phonePlaceholder: "812 3456 7890",
            bookNow: "احجز الآن",
            findingRates: "البحث عن أفضل الأسعار...",
            redirecting: "إعادة التوجيه إلى نظام الحجز الآمن.",
            loadingSanctuary: "تحميل ملاذك...",
            validation: {
                nameRequired: "الرجاء إدخال اسم كامل صحيح.",
                nameInvalid: "تم اكتشاف أحرف غير صالحة. الرجاء تصحيح اسمك.",
                emailInvalid: "الرجاء إدخال عنوان بريد إلكتروني صحيح.",
                phoneInvalid: "الرجاء إدخال رقم هاتف صحيح (7 أرقام على الأقل).",
                specialChars: "الأحرف الخاصة < > غير مسموح بها لأسباب أمنية.",
            },
        },
        footer: {
            contact: "اتصل",
            quickLinks: "روابط سريعة",
            legal: "قانوني",
            newsletter: "النشرة الإخبارية",
            subscribe: "اشترك للحصول على عروض حصرية.",
            placeholder: "بريدك الإلكتروني",
            join: "انضم",
            rights: "جميع الحقوق محفوظة.",
            privacyPolicy: "سياسة الخصوصية",
            termsOfService: "شروط الخدمة",
        },
        promo: {
            specialOffer: "عرض خاص",
            reservation: "احجز طاولة",
            tangDynasty: {
                title: "قائمة تانغ ديناستي",
                description: "رحلة طهي عبر العصور وليمة من 10 أطباق.",
                price: "IDR 4.888.000",
            }
        },
        dining: {
            title: "تجارب الطهي",
            subtitle: "تذوق الاستثنائي",
            description: "من تناول الطعام غير الرسمي إلى تجارب الذواقة الرائعة، يقدم جي إتش إل سوليتير مجموعة متنوعة من خيارات الطهي لإرضاء كل الأذواق.",
            venues: {
                mangan: {
                    type: "بوفيه عالمي",
                    desc: "مسرح للطهي يتميز بمحطات طهي حية ومجموعة متنوعة من الأطباق العالمية والمحلية."
                },
                alGusto: {
                    type: "مأكولات إيطالية فاخرة",
                    desc: "نكهات إيطالية أصيلة تقدم في أجواء راقية، مثالية للعشاء الرومانسي أو غداء العمل."
                },
                royalEight: {
                    type: "مأكولات صينية فاخرة",
                    desc: "مجموعة لذيذة من الغداء والعشاء والحلويات الصينية تقدم في بيئة معاصرة ومصممة بعناية."
                },
                empress: {
                    type: "صالة وبار",
                    desc: "اكتشف الكوكتيلات المميزة المستوحاة من الصيدلة والمشروبات الروحية الفاخرة ومجموعة مختارة من النبيذ في أجواء أنيقة."
                },
                castro: {
                    type: "صالة وبار",
                    desc: "استرخ مع السيجار الفاخر والويسكي الفاخر والكوكتيلات المختارة في جو من الأناقة الراقية."
                },
                leBleu: {
                    type: "مقهى ومعجنات",
                    desc: "تعبير متقن عن الدلال حيث تجتمع القوام الرقيق والحلاوة الراقية والتقنية الخالدة في كل كعكة."
                }
            },
            openDaily: "مفتوح يوميا: 10:00 - 22:00",
            viewMenu: "عرض القائمة",
            menuCategories: {
                main: { title: "الطبق الرئيسي", subtitle: "أطباق مميزة" },
                dimsum: { title: "ديم سوم", subtitle: "صناعة يدوية يوميا" },
                beverage: { title: "مشروبات", subtitle: "مرطبات" }
            }
        },
        pages: {
            rooms: {
                hero: { title: "الإقامة", subtitle: "استرح في أناقة راقية" },
                content: {
                    title: "ملاذك الخاص",
                    desc: "كل غرفة وجناح من غرفنا وأجنحتنا البالغ عددها 141 هي تحفة في التصميم، تمزج بين الجماليات المعاصرة والراحة الخالدة."
                },
                roomTypes: {
                    premier: { name: "غرفة بريمير", desc: "ملاذ واسع بمساحة 40 مترًا مربعًا مصمم للراحة الحديثة." },
                    executive: { name: "جناح تنفيذي", desc: "رفاهية راقية مع منطقة معيشة منفصلة وإطلالات بانورامية على المدينة." },
                    signature: { name: "جي إتش إل سوليتير سيجنتشر", desc: "التعبير النهائي عن المعيشة الفاخرة للمسافر المميز." }
                },
                amenities: {
                    wifi: "واي فاي عالي السرعة",
                    tv: "تلفزيون ذكي",
                    coffee: "ماكينة قهوة",
                    ac: "مكيف هواء"
                },
                perNight: "/ ليلة",
                bookNow: "احجز الآن"
            },
            meetings: {
                hero: { title: "الاجتماعات والفعاليات", subtitle: "حيث يلتقي العمل بالرفاهية" },
                content: {
                    title: "سكاي بالروم",
                    desc: "توفر قاعة سكاي بالروم الأيقونية إطلالات بانورامية بزاوية 180 درجة على المدينة، مما يوفر خلفية مذهلة لحفلات الزفاف والمناسبات الاجتماعية. مجهزة بأحدث التقنيات ويدعمها فريق الفعاليات المتخصص لدينا."
                },
                venues: {
                    title: "قاعات رائعة",
                    skyBallroom: {
                        name: "سكاي بالروم",
                        description: "تخلق قاعة سكاي بالروم أجواءً استثنائية لأي مناسبة خاصة. مثالية لحفلات الزفاف أو التخرج أو الفعاليات الخاصة، تقع هذه القاعة الاستثنائية على ارتفاع 200 قدم فوق سطح الأرض في الطابق الخامس عشر. تتميز بأحدث التقنيات السمعية والبصرية، وإنترنت لاسلكي عالي السرعة، ونوافذ ممتدة من الأرض حتى السقف تملأ المكان بالضوء الطبيعي.",
                        location: "داخلي (الطابق 15)",
                        ceremony: "200 شخص",
                        reception: "250 شخص"
                    },
                    skyGarden: {
                        name: "سكاي جاردن",
                        description: "ملاذ ساحر على السطح لحفلات الزفاف والتجمعات الحميمة، حيث تخلق المناظر الخلابة والأناقة الخالدة لحظات لا تُنسى.",
                        location: "سطح المبنى / خاص",
                        ceremony: "500 شخص",
                        reception: "50 شخص"
                    },
                    royalEight: {
                        name: "رويال إيت للمأكولات الصينية",
                        description: "تجربة طعام صيني في قلب غادينغ سيربونغ، تانجيرانج. كجزء من مجموعة المطاعم الراقية لدينا، يقدم رويال إيت مجموعة مختارة من الغداء والعشاء والحلويات طوال اليوم. توفر الأجواء المعاصرة للمطعم والتصميم المتقن بيئة مثالية لرحلة تذوق طعام متناغمة.",
                        location: "داخلي",
                        ceremony: "250 شخص",
                        reception: "250 شخص"
                    }
                },
                packages: {
                    title: "الباقات",
                    desc: "باقات الفعاليات لدينا مصممة خصيصًا لتلبية احتياجاتك، وتقدم خدمات شاملة بما في ذلك تقديم الطعام الفاخر والديكور وتنسيق الفعاليات المتخصص."
                },
                cta: "استفسر الآن"
            },
            wellness: {
                hero: { title: "العافية والسبا", subtitle: "جدد حواسك" },
                content: {
                    title: "ملاذ للصحة الشمولية",
                    desc: "يقدم جي إتش إل سوليتير غادينغ سيربونغ وجهة صحية شاملة تضم ثلاث تجارب سبا متميزة: أكوا سبا (الفخامة الحديثة)، وساندجونج سبا (التراث التقليدي)، وأكواريه سبا (أول سبا مخصص للأطفال). تضم مرافقنا أيضًا صالة ألعاب رياضية حديثة وصالون تجميل لا مير المرموق."
                },
                venues: {
                    acqua: {
                        name: "أكوا سبا",
                        type: "سبا فاخر حديث",
                        desc: "ملاذ معاصر يركز على العلاجات الحديثة والاسترخاء التام."
                    },
                    sandjong: {
                        name: "ساندجونج سبا",
                        type: "سبا تراثي تقليدي",
                        desc: "اكتشف جوهر التراث الإندونيسي من خلال تقنيات الشفاء القديمة والمكونات الطبيعية."
                    },
                    acquaree: {
                        name: "أكواريه كيدز سبا",
                        type: "سبا متخصص للأطفال",
                        desc: "أول سبا متخصص للأطفال، يقدم علاجات ممتعة ولطيفة في بيئة آمنة."
                    },
                    laMere: {
                        name: "لا مير",
                        type: "صالون تجميل",
                        desc: "خدمات تصفيف شعر وأظافر وتجميل احترافية يقدمها خبراء التجميل."
                    }
                },
                treatments: {
                    massage: { name: "تدليك مميز", duration: "60 / 90 دقيقة" },
                    facial: { name: "علاج وجه فاخر", duration: "60 دقيقة" }
                }
            },
            facilities: {
                hero: { title: "مرافق رائعة", subtitle: "أعجوبة معمارية على شكل ماسة" },
                content: {
                    tag: "مرافق عالمية المستوى",
                    title: "جوهر رفاهية جي إتش إل",
                    desc: "يقدم جي إتش إل سوليتير غادينغ سيربونغ مجموعة من المرافق المنسقة."
                },
                items: {
                    pool: {
                        name: "مسبح إنفينيتي المميز",
                        desc: "يعد مسبح إنفينيتي الخاص بنا، وهو معلم معماري مذهل، تجربة سباحة فريدة من نوعها."
                    },
                    fitness: {
                        name: "لياقة بدنية حديثة",
                        desc: "يوفر مركز اللياقة البدنية الخاص بنا، المجهز بأحدث تقنيات تكنوجيم، كل ما تحتاجه."
                    }
                }
            },
            offers: {
                hero: { title: "عروض حصرية", subtitle: "باقات لفترة محدودة" },
                items: {
                    weekend: {
                        tag: "باقة إقامة",
                        title: "عطلة نهاية الأسبوع",
                        desc: "تمتع بخصم 20% على إقامات نهاية الأسبوع شاملة الإفطار.",
                        cta: "احجز الآن"
                    },
                    brunch: {
                        tag: "تتناول الطعام",
                        title: "برنش الأحد",
                        desc: "بوفيه عالمي مفتوح كل يوم أحد.",
                        cta: "احجز طاولة"
                    }
                }
            },
            privacy: {
                title: "سياسة الخصوصية",
                lastUpdated: "آخر تحديث: 8 فبراير 2026",
                content: "في جي إتش إل سوليتير، نحن نقدر خصوصيتك. توضح هذه السياسة كيفية تعاملنا مع بياناتك الشخصية.",
                sections: {
                    storage: {
                        title: "تخزين البيانات وتوطينها",
                        content: "نحن نولي الأولوية لأمن بياناتك الشخصية. امتثالاً للوائح الإندونيسية (PP رقم 71/2019 وUU PDP)، تقع خوادمنا الرئيسية وقواعد بيانات عملائنا داخل أراضي جمهورية إندونيسيا (منطقة Google Cloud: جاكرتا).\n\nومع ذلك، لأغراض تحسين الأداء (CDN) وتحليل حركة المرور، قد تتم معالجة بيانات مجهولة المصدر محدودة من قبل شركائنا من الجهات الخارجية (مثل Google Analytics) في ولايات قضائية أخرى تلتزم بالمعايير الدولية لخصوصية البيانات."
                    }
                }
            }
        },
        cookies: {
            title: "موافقة ملفات تعريف الارتباط",
            message: "نحن نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتحليل حركة المرور لدينا. بالنقر فوق \"قبول\"، فإنك توافق على استخدامنا لملفات تعريف الارتباط.",
            accept: "قبول",
            decline: "رفض",
            policy: "سياسة الخصوصية"
        }
    },
    ko: {
        nav: {
            home: "홈",
            rooms: "객실",
            dining: "다이닝",
            meetings: "미팅 & 이벤트",
            wellness: "웰니스",
            facilities: "시설",
            offers: "오퍼",
            bookNow: "예약하기",
        },
        hero: {
            welcome: "환영합니다",
            title: "JHL Solitaire",
            description: "Gading Serpong, A JHL Collections",
            jewelText: "도시의 보석",
            welcomeTitle: "인생의 최고의 본질을 구현하다",
            welcomeDescription: "삶의 모든 순간은 축하받아야 할 기쁨입니다. JHL Solitaire에서는 고객이 최고의 삶을 경험할 자격이 있다고 믿습니다. 자부심과 명성을 가지고, 우리는 침착한 마음가짐, 일류 서비스 및 제공으로 고객의 절묘한 취향에 보답하여 기대 이상을 목표로 합니다.",
        },
        features: {
            luxury: {
                title: "5성급 럭셔리",
                desc: "안목 있는 여행자를 위해 설계된 수상 경력에 빛나는 서비스와 편의 시설.",
            },
            location: {
                title: "최고의 위치",
                desc: "Gading Serpong의 중심부에 위치하며 ICE 및 AEON Mall에서 몇 분 거리입니다.",
            },
            offers: {
                title: "독점 오퍼",
                desc: "저희와 직접 예약하여 특별 요금과 무료 혜택을 누리세요.",
                cta: "오퍼 보기",
            },
        },
        categories: {
            rooms: {
                title: "객실 및 스위트",
                subtitle: "스위트 & 생츄어리",
                description: "디테일에 탁월한 주의를 기울여 설계된 객실과 스위트에서 럭셔리한 삶의 예술을 경험하십시오.",
                cta: "더 알아보기"
            },
            dining: {
                title: "다이닝 경험",
                subtitle: "요리의 왕조",
                description: "절묘한 맛의 풍부한 태피스트리를 펼치십시오. 인터내셔널 뷔페부터 정통 이탈리아 파인 다이닝까지.",
                cta: "장소 탐색"
            },
            meetings: {
                title: "웨딩 & 이벤트",
                subtitle: "웅장한 이벤트",
                description: "웅장한 결혼식과 권위 있는 행사에 이상적인 웅장한 다목적 홀에서 특별한 순간을 영원한 추억으로 바꾸십시오.",
                cta: "추억 계획하기"
            },
            wellness: {
                title: "웰니스 & 스파",
                subtitle: "평온 & 스파",
                description: "현대적인 Acqua Spa, 전통적인 Sandjong Spa, 어린이를 위한 Acquaree Spa 등 세 개의 전문 스파와 최첨단 피트니스 센터, La Mere 뷰티 살론을 갖춘 세계적 수준의 웰니스 시설에서 감각을 되살리세요.",
                cta: "지금 활력 되찾기"
            },
            facilities: {
                title: "절묘한 시설",
                subtitle: "절묘한 라이프스타일",
                description: "JHL Solitaire만의 독특한 다이아몬드 모양의 건축적 경이로움과 세련된 라이프스타일 서비스를 경험하십시오.",
                cta: "시설 탐색"
            },
            offers: {
                title: "독점 오퍼",
                subtitle: "독점 혜택",
                description: "엄선된 시즌 오퍼로 머무는 동안 탁월한 특권과 맞춤형 경험을 잠금 해제하십시오.",
                cta: "오퍼 보기"
            },
        },
        booking: {
            checkIn: "체크인",
            checkOut: "체크아웃",
            guests: "게스트",
            adults: "성인",
            availability: "가능 여부 확인",
            selectDate: "날짜 선택",
            discover: "발견",
        },
        bookingPage: {
            step1Title: "1단계",
            step2Title: "2단계",
            planYourStay: "숙박 계획하기",
            tellUsAboutTrip: "여행에 대해 알려주세요",
            guestDetails: "게스트 세부정보",
            checkInLabel: "체크인",
            checkOutLabel: "체크아웃",
            adultsLabel: "성인",
            childrenLabel: "어린이",
            selectDate: "날짜 선택",
            adultsCount: "성인",
            childrenCount: "어린이",
            nextStep: "다음 단계",
            fullName: "성명",
            emailAddress: "이메일 주소",
            phoneNumber: "전화번호",
            fullNamePlaceholder: "성명을 입력하세요",
            emailPlaceholder: "이메일을 입력하세요",
            phonePlaceholder: "812 3456 7890",
            bookNow: "지금 예약",
            findingRates: "최저가 검색 중...",
            redirecting: "안전한 예약 시스템으로 리디렉션 중입니다.",
            loadingSanctuary: "당신의 안식처를 불러오는 중...",
            validation: {
                nameRequired: "유효한 성명을 입력하세요.",
                nameInvalid: "유효하지 않은 문자가 감지되었습니다. 성명을 수정하세요.",
                emailInvalid: "유효한 이메일 주소를 입력하세요.",
                phoneInvalid: "유효한 전화번호를 입력하세요 (최소 7자리).",
                specialChars: "보안을 위해 특수 문자 < >는 허용되지 않습니다.",
            },
        },
        footer: {
            contact: "연락처",
            quickLinks: "빠른 링크",
            legal: "법적",
            newsletter: "뉴스레터",
            subscribe: "독점 오퍼를 구독하십시오.",
            placeholder: "이메일",
            join: "가입",
            rights: "모든 권리 보유.",
            privacyPolicy: "개인정보 처리방침",
            termsOfService: "서비스 약관",
        },
        promo: {
            specialOffer: "특별 오퍼",
            reservation: "테이블 예약",
            tangDynasty: {
                title: "당나라 세트 메뉴",
                description: "시대를 초월한 요리 여행 10코스 연회.",
                price: "IDR 4,888,000",
            }
        },
        dining: {
            title: "요리 경험",
            subtitle: "비범함을 맛보다",
            description: "캐주얼 다이닝부터 절묘한 미식 경험까지, JHL Solitaire는 모든 입맛을 만족시킬 수 있는 다양한 요리 옵션을 제공합니다.",
            venues: {
                mangan: {
                    type: "인터내셔널 뷔페",
                    desc: "라이브 쿠킹 스테이션과 다양한 인터내셔널 및 현지 별미를 갖춘 요리 극장."
                },
                alGusto: {
                    type: "이탈리아 파인 다이닝",
                    desc: "세련된 분위기에서 제공되는 정통 이탈리아의 맛, 낭만적인 저녁 식사나 비즈니스 점심 식사에 완벽합니다."
                },
                royalEight: {
                    type: "중국 파인 다이닝",
                    desc: "현대적이고 사려 깊게 만들어진 환경에서 제공되는 맛있는 점심, 저녁 식사 및 중국 디저트 셀렉션."
                },
                empress: {
                    type: "라운지 & 바",
                    desc: "우아한 분위기에서 약재상에서 영감을 받은 시그니처 칵테일, 고급 증류주, 엄선된 와인을 만나보세요."
                },
                castro: {
                    type: "라운지 & 바",
                    desc: "세련된 우아함의 분위기 속에서 프리미엄 시가, 고급 위스키, 엄선된 칵테일과 함께 휴식을 취하십시오."
                },
                leBleu: {
                    type: "카페 & 파티세리",
                    desc: "모든 케이크에 섬세한 질감, 세련된 단맛, 시대를 초월한 기술이 어우러진 탐닉의 표현."
                }
            },
            openDaily: "매일 영업: 10:00 - 22:00",
            viewMenu: "메뉴 보기",
            menuCategories: {
                main: { title: "메인 코스", subtitle: "시그니처 요리" },
                dimsum: { title: "딤섬", subtitle: "매일 수제" },
                beverage: { title: "음료", subtitle: "다과" }
            }
        },
        pages: {
            rooms: {
                hero: { title: "숙박", subtitle: "세련된 우아함 속의 휴식" },
                content: {
                    title: "당신의 개인 안식처",
                    desc: "141개의 객실과 스위트는 각각 현대적인 미학과 시대를 초월한 편안함을 조화시킨 디자인의 걸작입니다."
                },
                roomTypes: {
                    premier: { name: "프리미어 룸", desc: "현대적인 편안함을 위해 설계된 넓은 40제곱미터의 안식처." },
                    executive: { name: "이그제큐티브 스위트", desc: "별도의 거실 공간과 파노라마 도시 전망을 갖춘 한 차원 높은 럭셔리." },
                    signature: { name: "JHL Solitaire 시그니처", desc: "안목 있는 여행자를 위한 럭셔리 라이프의 궁극적인 표현." }
                },
                amenities: {
                    wifi: "고속 와이파이",
                    tv: "스마트 TV",
                    coffee: "커피 메이커",
                    ac: "에어컨"
                },
                perNight: "/ 1박",
                bookNow: "예약하기"
            },
            meetings: {
                hero: { title: "미팅 & 이벤트", subtitle: "비즈니스와 럭셔리가 만나는 곳" },
                content: {
                    title: "스카이 볼룸",
                    desc: "상징적인 스카이 볼룸은 180도 파노라마 도시 전망을 제공하여 웨딩, 기업 갈라 및 사교 행사를 위한 멋진 배경을 선사합니다. 최첨단 기술을 갖추고 전담 이벤트 팀의 지원을 받습니다."
                },
                venues: {
                    title: "정교한 베뉴",
                    skyBallroom: {
                        name: "스카이 볼룸",
                        description: "스카이 볼룸은 모든 특별한 날을 위한 비범한 환경을 만듭니다. 웨딩, 졸업식 또는 프라이빗 이벤트에 이상적인 이 탁월한 장소는 15층, 지상 200피트 높이에 위치해 있습니다. 최첨단 시청각 기술, 고속 무선 인터넷, 공간을 자연광으로 가득 채우는 바닥에서 천장까지 이어지는 통창이 특징입니다.",
                        location: "실내 (15층)",
                        ceremony: "200명",
                        reception: "250명"
                    },
                    skyGarden: {
                        name: "스카이 가든",
                        description: "숨 막히는 전망과 시대를 초월한 우아함이 잊지 못할 순간을 선사하는 친밀한 웨딩과 모임을 위한 매혹적인 루프탑 안식처입니다.",
                        location: "루프탑 / 프라이빗",
                        ceremony: "500명",
                        reception: "50명"
                    },
                    royalEight: {
                        name: "로얄 에이트 중식 다이닝",
                        description: "탕그랑 가딩 세르퐁의 중심에서 즐기는 중식 다이닝 경험입니다. 시그니처 세미 파인 다이닝 컬렉션의 일부로, 로얄 에이트는 하루 종일 엄선된 점심, 저녁 및 디저트를 제공합니다. 레스토랑의 현대적인 분위기와 사려 깊게 설계된 디자인은 조화로운 미식 여정을 위한 완벽한 환경을 제공합니다.",
                        location: "실내",
                        ceremony: "250명",
                        reception: "250명"
                    }
                },
                packages: {
                    title: "패키지",
                    desc: "고객님의 요구에 맞게 맞춤화된 이벤트 패키지는 프리미엄 케이터링, 장식 및 전담 이벤트 코디네이션을 포함한 포괄적인 서비스를 제공합니다."
                },
                cta: "문의하기"
            },
            wellness: {
                hero: { title: "웰니스 & 스파", subtitle: "감각을 되살리세요" },
                content: {
                    title: "홀리스틱 웰빙의 안식처",
                    desc: "JHL Solitaire Gading Serpong은 현대적인 럭셔리의 Acqua Spa, 전통 유산의 Sandjong Spa, 그리고 최초의 어린이 전용 Acquaree Spa 등 세 가지 독특한 스파 경험을 제공합니다. 또한 최첨단 피트니스 센터와 명성 높은 La Mere 뷰티 살롱을 운영하고 있습니다."
                },
                venues: {
                    acqua: {
                        name: "Acqua Spa",
                        type: "현대적인 럭셔리 스파",
                        desc: "최신 치료 요법과 궁극의 휴식에 초점을 맞춘 현대적인 안식처입니다."
                    },
                    sandjong: {
                        name: "Sandjong Spa",
                        type: "전통 유산 스파",
                        desc: "고대 치유 기술과 천연 재료를 통해 인도네시아 전통의 정수를 발견해 보세요."
                    },
                    acquaree: {
                        name: "Acquaree Kids Spa",
                        type: "어린이 전용 스파",
                        desc: "안전한 환경에서 재미있고 부드러운 트리트먼트를 제공하는 최초의 어린이 전용 스파 시설입니다."
                    },
                    laMere: {
                        name: "La Mere",
                        type: "뷰티 살롱",
                        desc: "전문 스타일리스트와 미용사가 제공하는 전문적인 헤어, 네일, 뷰티 서비스를 경험하세요."
                    }
                },
                treatments: {
                    massage: { name: "시그네처 마사지", duration: "60 / 90 분" },
                    facial: { name: "럭셔리 페이셜", duration: "60 분" }
                }
            },
            facilities: {
                hero: { title: "절묘한 시설", subtitle: "다이아몬드 모양의 건축적 경이로움" },
                content: {
                    tag: "세계적 수준의 편의 시설",
                    title: "JHL 럭셔리의 본질",
                    desc: "JHL Solitaire Gading Serpong은 가장 까다로운 라이프스타일 요구 사항을 충족하도록 설계된 엄선된 시설을 제공합니다."
                },
                items: {
                    pool: {
                        name: "시그니처 인피니티 풀",
                        desc: "놀라운 건축적 하이라이트인 인피니티 풀은 Gading Serpong의 스카이라인을 제한 없이 볼 수 있는 독특한 수영 경험을 제공합니다."
                    },
                    fitness: {
                        name: "최첨단 피트니스",
                        desc: "최신 Technogym 기술을 갖춘 피트니스 센터는 포괄적인 웰빙 루틴에 필요한 모든 것을 제공합니다."
                    }
                }
            },
            offers: {
                hero: { title: "독점 오퍼", subtitle: "기간 한정 패키지" },
                items: {
                    weekend: {
                        tag: "숙박 패키지",
                        title: "주말 휴가",
                        desc: "조식을 포함한 주말 숙박 20% 할인.",
                        cta: "예약하기"
                    },
                    brunch: {
                        tag: "다이닝",
                        title: "일요일 브런치",
                        desc: "매주 일요일 무제한 인터내셔널 뷔페.",
                        cta: "테이블 예약"
                    }
                }
            },
            privacy: {
                title: "개인정보 처리방침",
                lastUpdated: "최종 업데이트: 2026년 2월 8일",
                content: "JHL Solitaire는 귀하의 개인정보를 소중히 여깁니다. 본 방침은 당사가 귀하의 개인 데이터를 처리하는 방식을 설명합니다.",
                sections: {
                    storage: {
                        title: "데이터 저장 및 현지화",
                        content: "당사는 귀하의 개인 데이터 보안을 최우선으로 생각합니다. 인도네시아 규정(PP No. 71/2019 및 UU PDP)을 준수하여 당사의 기본 서버와 고객 데이터베이스는 인도네시아 공화국 영토(Google Cloud 리전: 자카르타) 내에 위치합니다.\n\n그러나 성능 최적화(CDN) 및 트래픽 분석을 목적으로 국제 데이터 프라이버시 표준을 준수하는 다른 관할권에서 당사의 제3자 파트너(Google Analytics 등)가 제한된 익명 데이터를 처리할 수 있습니다."
                    }
                }
            }
        },
        cookies: {
            title: "쿠키 수집 동의",
            message: "저희는 귀하의 경험을 개선하고 트래픽을 분석하기 위해 쿠키를 사용합니다. \"수락\"을 클릭하면 쿠키 사용에 동의하는 것으로 간주됩니다.",
            accept: "수락",
            decline: "거부",
            policy: "개인정보 처리방침"
        }
    }
};
