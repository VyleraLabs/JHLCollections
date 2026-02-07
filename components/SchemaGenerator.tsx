"use client";

import React from "react";

interface MenuItem {
    name: string;
    description?: string;
    nameChinese?: string; // Fallback description
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
}

export const SchemaGenerator = ({ menuData, specialOffers }: SchemaGeneratorProps) => {
    const generateMenuSchema = () => {
        // Group items by category
        const categories = Array.from(new Set(menuData.map(item => item.category)));

        const sections = categories.map(category => {
            const items = menuData.filter(item => item.category === category);
            return {
                "@type": "MenuSection",
                "name": category,
                "hasMenuItem": items.map((item: any) => ({ // Cast item to any to allow for new properties not in MenuItem interface
                    "@type": "MenuItem",
                    "name": item.name,
                    "description": item.description || item.nameChinese,
                    "offers": {
                        "@type": "Offer",
                        "price": item.price,
                        "priceCurrency": "IDR"
                    },
                    "image": item.imageUrl,
                    /* Semantic Enrichment Fields */
                    ...(item.isRelatedTo && { "isRelatedTo": item.isRelatedTo }),
                    ...(item.disambiguatingDescription && { "disambiguatingDescription": item.disambiguatingDescription }),
                    ...(item.suitableForDiet && { "suitableForDiet": item.suitableForDiet }), // "Spicy" isn't a standard URL but valid text
                    ...(item.keywords && { "keywords": item.keywords }),
                    ...(item.timeRequired && { "timeRequired": item.timeRequired }) // ISO 8601 duration
                }))
            };
        });

        const schema = {
            "@context": "https://schema.org",
            "@type": "Menu",
            "name": "Royal Eight Menu",
            "description": "Authentic Chinese Fine Dining Menu",
            "inLanguage": ["en", "zh-CN"],
            "servesCuisine": "ChineseCuisine",
            "hasMenuSection": sections
        };

        return JSON.stringify(schema);
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
