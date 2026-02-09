import React from "react";
import { MENU_ITEMS } from "@/data/menu";
import { RoyalEightMenu } from "@/components/royal-eight/RoyalEightMenu";
import { PromoCarousel } from "@/components/PromoCarousel";
import JsonLd from "@/components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Royal Eight Chinese Dining | JHL Solitaire",
    description: "Experience authentic Chinese fine dining at Royal Eight, featuring legendary Master Head Chef Chong Kok Leong and 8 VIP private dining rooms.",
};

export default function RoyalEightPage() {
    // Group menu items by category (sourceFile) for the schema
    const menuSections = ['Main', 'DimSum', 'Beverage'].map(section => {
        const items = MENU_ITEMS.filter(item => item.sourceFile === section);
        return {
            "@type": "MenuSection",
            "name": section === 'Main' ? "Main Course" : section === 'DimSum' ? "Dim Sum" : "Beverages",
            "hasMenuItem": items.map(item => ({
                "@type": "MenuItem",
                "name": item.name,
                "description": item.description || item.name,
                "offers": {
                    "@type": "Offer",
                    "price": item.price.toString(),
                    "priceCurrency": "IDR"
                }
            }))
        };
    });

    const royalEightSchema = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "Royal Eight Chinese Dining",
        "description": "Authentic Chinese Fine Dining at JHL Solitaire Gading Serpong, featuring 8 VIP private dining rooms and legendary Master Head Chef Chong Kok Leong.",
        "image": "https://jhlcollections.com/assets/royal-eight/hero.webp",
        "servesCuisine": "Chinese",
        "priceRange": "$$$",
        "telephone": "+62 21 3950 3000",
        "url": "https://jhlcollections.com/dining/royal-eight",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Gading Serpong Boulevard Barat Blok S No.5",
            "addressLocality": "Tangerang",
            "addressRegion": "Banten",
            "postalCode": "15810",
            "addressCountry": "ID"
        },
        "seatingCapacity": 250,
        "keywords": "Luxurious Chinese Food, Authentic Chinese Food, 5 Star Chinese Food, Dim Sum, Family Dining, Business Meetings",
        "employee": {
            "@type": "Person",
            "name": "Chong Kok Leong",
            "jobTitle": "Master Head Chef",
            "nationality": "China",
            "description": "Legendary Master Head Chef from China with decades of culinary excellence."
        },
        "amenityFeature": [
            {
                "@type": "LocationFeatureSpecification",
                "name": "8 VIP Private Dining Rooms",
                "value": true,
                "description": "Exclusive private rooms with capacity ranging from 5 to 50 guests, perfect for business or family gatherings."
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Event & Wedding Venue",
                "value": true,
                "description": "Available for weddings, engagements, and corporate events."
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Meeting Facilities",
                "value": true
            }
        ],
        "parentOrganization": {
            "@type": "Hotel",
            "name": "JHL Solitaire Gading Serpong",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Gading Serpong Boulevard Barat Blok S No.5",
                "addressLocality": "Tangerang",
                "addressRegion": "Banten",
                "postalCode": "15810",
                "addressCountry": "ID"
            }
        },
        "hasMenu": {
            "@type": "Menu",
            "name": "Royal Eight Menu",
            "hasMenuSection": menuSections
        }
    };

    return (
        <div className="w-full bg-[#0F0F0F] text-white">
            <JsonLd data={royalEightSchema} />

            {/* Content Container */}
            <div className="w-full py-12 space-y-12">

                {/* Promo Section */}
                <section id="special-offers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <PromoCarousel />
                </section>

                {/* Interactive Menu Section - Client Rendered */}
                <RoyalEightMenu menuItems={MENU_ITEMS} />
            </div>
        </div>
    );
}
