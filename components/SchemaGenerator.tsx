import type { Translations } from "@/lib/translations";

interface MenuItem {
    name: string;
    description?: string;
    nameChinese?: string;
    descriptionChinese?: string;
    descriptionIndonesian?: string;
    descriptionRussian?: string;
    descriptionJapanese?: string;
    descriptionArabic?: string;
    descriptionKorean?: string;
    price: number;
    imageUrl?: string;
    category?: string;
    isRelatedTo?: string;
    disambiguatingDescription?: string;
    suitableForDiet?: string;
    keywords?: string;
    timeRequired?: string;
}

interface SchemaGeneratorProps {
    menuData: MenuItem[];
    specialOffers: any[];
    language?: string;
    translations?: Translations;
}

export const SchemaGenerator = ({ menuData, specialOffers, language = 'en', translations }: SchemaGeneratorProps) => {

    const generateMenuSchema = () => {
        // Alias translations for backward compatibility
        const t = translations || {} as any;

        // Group items by category
        const categories = Array.from(new Set(menuData.map(item => item.category)));

        const sections = categories.map(category => {
            const items = menuData.filter(item => item.category === category);
            return {
                "@type": "MenuSection",
                "name": category,
                "hasMenuItem": items.map((item: any) => {
                    let description = item.description;
                    if (language === 'zh' && item.descriptionChinese) {
                        description = item.descriptionChinese;
                    } else if (language === 'id' && item.descriptionIndonesian) {
                        description = item.descriptionIndonesian;
                    }

                    return {
                        "@type": "MenuItem",
                        "name": language === 'zh' ? (item.nameChinese || item.name) : item.name,
                        "description": description || item.nameChinese,
                        "offers": {
                            "@type": "Offer",
                            "price": item.price,
                            "priceCurrency": "IDR"
                        },
                        "image": item.imageUrl,
                        /* Semantic Enrichment Fields */
                        ...(item.isRelatedTo && { "isRelatedTo": item.isRelatedTo }),
                        ...(item.disambiguatingDescription && { "disambiguatingDescription": item.disambiguatingDescription }),
                        ...(item.suitableForDiet && { "suitableForDiet": item.suitableForDiet }),
                        ...(item.keywords && { "keywords": item.keywords }),
                        ...(item.timeRequired && { "timeRequired": item.timeRequired })
                    };
                })
            };
        });

        const hotel = {
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": translations?.hero?.title || "JHL Solitaire Gading Serpong",
            "description": translations?.hero?.welcomeDescription || "Luxury 5-star hotel in Gading Serpong",
            "url": "https://jhlcollections.com/jhlsolitaire",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Gading Serpong Boulevard Barat Blok S No.5",
                "addressLocality": "Tangerang",
                "addressRegion": "Banten",
                "postalCode": "15810",
                "addressCountry": "ID"
            },
            "starRating": {
                "@type": "Rating",
                "ratingValue": "5"
            },
            "numberOfRooms": 141,
            "checkinTime": "14:00",
            "checkoutTime": "12:00",
            "amenityFeature": [
                {
                    "@type": "LocationFeatureSpecification",
                    "name": "Free Wi-Fi",
                    "value": true
                },
                {
                    "@type": "LocationFeatureSpecification",
                    "name": "24-hour Reception",
                    "value": true,
                    "openHours": "00:00-23:59"
                },
                {
                    "@type": "LocationFeatureSpecification",
                    "name": "Concierge Service",
                    "value": true
                },
                {
                    "@type": "LocationFeatureSpecification",
                    "name": "Butler Service",
                    "value": true
                },
                {
                    "@type": "LocationFeatureSpecification",
                    "name": "Smart Home IoT",
                    "value": true
                },
                {
                    "@type": "LocationFeatureSpecification",
                    "name": "State-of-the-art Gym",
                    "value": true
                },
                {
                    "@type": "LocationFeatureSpecification",
                    "name": "Infinity Pool",
                    "value": true
                },
                {
                    "@type": "LocationFeatureSpecification",
                    "name": "Child & Toddler Friendly",
                    "value": true,
                    "description": "Family-friendly environment with dedicated toddler amenities provided."
                },
                {
                    "@type": "LocationFeatureSpecification",
                    "name": "Parking",
                    "value": true,
                    "description": "Plenty of secure parking spaces available."
                },
                {
                    "@type": "LocationFeatureSpecification",
                    "name": "Valet Service",
                    "value": true,
                    "description": "Professional valet parking service available."
                }
            ],
            "containsPlace": [
                {
                    "@type": "Spa",
                    "name": t.pages.wellness.venues.acqua.name,
                    "description": t.pages.wellness.venues.acqua.desc
                },
                {
                    "@type": "Spa",
                    "name": t.pages.wellness.venues.sandjong.name,
                    "description": t.pages.wellness.venues.sandjong.desc
                },
                {
                    "@type": "Spa",
                    "name": t.pages.wellness.venues.acquaree.name,
                    "description": t.pages.wellness.venues.acquaree.desc
                },
                {
                    "@type": "HealthAndBeautyBusiness",
                    "name": t.pages.wellness.venues.laMere.name,
                    "description": t.pages.wellness.venues.laMere.desc
                },
                {
                    "@type": "BanquetHall",
                    "name": t.pages.meetings.venues.skyBallroom.name,
                    "description": t.pages.meetings.venues.skyBallroom.description
                },
                {
                    "@type": "BanquetHall",
                    "name": t.pages.meetings.venues.skyGarden.name,
                    "description": t.pages.meetings.venues.skyGarden.description
                },
                {
                    "@type": "MeetingRoom",
                    "name": t.pages.meetings.venues.royalEight.name,
                    "description": t.pages.meetings.venues.royalEight.description
                }
            ]
        };

        const restaurant = {
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Royal Eight Chinese Dining",
            "description": t.dining.venues.royalEight.desc || "Authentic Chinese Fine Dining at JHL Solitaire Gading Serpong, featuring 8 VIP private dining rooms and legendary Master Head Chef Chong Kok Leong.",
            "image": "https://jhlcollections.com/assets/royal-eight/hero.webp",
            "priceRange": "$$$",
            "servesCuisine": ["Chinese", "Dim Sum", "Authentic Chinese"],
            "telephone": "+62 21 3950 3000",
            "address": hotel.address,
            "parentOrganization": hotel,
            "containedInPlace": hotel,
            "chef": {
                "@type": "Person",
                "name": "Chong Kok Leong",
                "jobTitle": "Master Head Chef",
                "nationality": "China",
                "description": "Legendary Master Head Chef from China specializing in authentic Chinese cuisine."
            },
            "amenityFeature": [
                {
                    "@type": "LocationFeatureSpecification",
                    "name": "VIP Private Dining Rooms",
                    "value": true,
                    "description": "8 exclusive private dining rooms with capacity for 4-50 guests."
                },
                {
                    "@type": "LocationFeatureSpecification",
                    "name": "Events & Celebrations",
                    "value": true,
                    "description": "Great for events, meetings, and celebrations."
                },
                {
                    "@type": "LocationFeatureSpecification",
                    "name": "Family Friendly",
                    "value": true,
                    "description": "Great for family dinners."
                },
                {
                    "@type": "LocationFeatureSpecification",
                    "name": "Chinese New Year Spot",
                    "value": true,
                    "description": "Perfect spot for Chinese New Year dinner and celebrations."
                },
                {
                    "@type": "LocationFeatureSpecification",
                    "name": "Child Friendly",
                    "value": true,
                    "description": "Child and toddler friendly atmosphere."
                }
            ],
            "keywords": "Authentic Chinese Cuisine, Handcrafted Daily Dim Sum, VIP Private Dining, Events, Meetings, Celebrations, Family Dinner, Luxury Dining, Chinese New Year Dinner, Chinese New Year Celebration, Child Friendly Dining",
            "hasMenu": {
                "@type": "Menu",
                "name": "Royal Eight Menu",
                "description": t.dining.venues.royalEight.type,
                "inLanguage": language,
                "hasMenuSection": sections
            }
        };

        // We return an array of schemas to cover both Hotel and Restaurant
        return JSON.stringify([hotel, restaurant]);
    };

    const generateSpecialAnnouncementSchema = () => {
        if (specialOffers.length === 0) return null;

        const schema = {
            "@context": "https://schema.org",
            "@type": "SpecialAnnouncement",
            "name": specialOffers[0].title,
            "text": specialOffers[0].description,
            "url": specialOffers[0].link,
            "datePosted": specialOffers[0].datePosted,
        };

        return JSON.stringify(schema);
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: generateMenuSchema() }}
            />
            {specialOffers.length > 0 && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: generateSpecialAnnouncementSchema()! }}
                />
            )}
        </>
    );
};

