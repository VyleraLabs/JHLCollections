
export type Language = 'en' | 'zh' | 'id';

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
            cta: string;
        };
        wellness: {
            hero: { title: string; subtitle: string };
            content: { title: string; desc: string };
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
    };
}

export const translations: Record<Language, Translations> = {
    en: {
        nav: {
            home: "Home",
            rooms: "Rooms",
            dining: "Dining",
            meetings: "Meetings",
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
                description: "Rejuvenate your senses at Acqua Spa, featuring curated treatments and world-class fitness facilities.",
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
            viewMenu: "View Menu"
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
                cta: "Enquire Now"
            },
            wellness: {
                hero: { title: "Wellness & Spa", subtitle: "Rejuvenate Your Senses" },
                content: {
                    title: "Acqua Spa",
                    desc: "Immerse yourself in tranquility at Acqua Spa. From traditional massages to modern therapeutic treatments, our expert therapists are dedicated to restoring your balance and well-being."
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
            }
        }
    },
    zh: {
        nav: {
            home: "首页",
            rooms: "客房",
            dining: "餐饮",
            meetings: "会议",
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
                description: "在 Acqua 水疗中心焕发活力，体验精心设计的护理与世界一流的健身设施。",
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
            viewMenu: "查看菜单"
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
                cta: "立即咨询"
            },
            wellness: {
                hero: { title: "水疗与康体", subtitle: "焕发您的感官" },
                content: {
                    title: "Acqua 水疗中心",
                    desc: "在 Acqua 水疗中心沉浸于宁静之中。从传统的按摩到现代的疗程，我们专业的理疗师致力于为您恢复身心平衡与健康。"
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
            }
        }
    },
    id: {
        nav: {
            home: "Beranda",
            rooms: "Kamar",
            dining: "Kuliner",
            meetings: "Pertemuan",
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
                description: "Segarkan pancaindera Anda di Acqua Spa, menghadirkan perawatan pilihan dan fasilitas kebugaran kelas dunia.",
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
            viewMenu: "Lihat Menu"
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
                cta: "Hubungi Kami"
            },
            wellness: {
                hero: { title: "Kebugaran & Spa", subtitle: "Segarkan Panca Indera Anda" },
                content: {
                    title: "Acqua Spa",
                    desc: "Hanyutkan diri Anda dalam ketenangan di Acqua Spa. Dari pijat tradisional hingga perawatan terapeutik modern, terapis ahli kami berdedikasi untuk memulihkan keseimbangan dan kesejahteraan Anda."
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
            }
        }
    }
};
