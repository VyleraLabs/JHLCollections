import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Royal Eight Chinese Dining | Luxury Dim Sum & Banquet",
    description: "Experience the taste of dynasty at Royal Eight. Authentic Chinese fine dining suitable for family gatherings and weddings. Serving premium Dim Sum, Packing Duck, and Seafood.",
    keywords: ["Chinese Fine Dining", "Dim Sum Serpong", "Royal Eight JHL", "Luxury Banquet", "Chinese Restaurant Gading Serpong"],
};

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/royal-eight/HeroSection";
import { PromoIntegration } from "@/components/PromoIntegration";

import { MENU_ITEMS } from "@/data/menu";

export default function RoyalEightLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Filter special offers for schema
    const specialOffers = [{
        title: "Tang Dynasty Set Menu",
        description: "A luxurious 10-course banquet fit for an emperor.",
        link: "https://www.tablecheck.com/en/jhl-solitaire-gading-serpong-royal-eight/reserve/experiences",
        datePosted: "2024-02-01T08:00:00+07:00"
    }];

    return (
        <main className="min-h-screen bg-royal-stone text-white font-sans selection:bg-luxury-gold selection:text-black">
            <Header />

            {/* Integrations */}
            <PromoIntegration />
            {/* Schema Generator - using English fallbacks */}


            {/* Hero & Navigation */}
            <HeroSection />

            {/* Main Content Area */}
            <div className="relative z-10">
                {children}
            </div>

            <Footer />
        </main>
    );
}
