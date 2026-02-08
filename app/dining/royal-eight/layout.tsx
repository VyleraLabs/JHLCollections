import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Royal Eight Chinese Dining | Luxury Dim Sum & Banquet",
    description: "Experience the taste of dynasty at Royal Eight. Authentic Chinese fine dining suitable for family gatherings and weddings. Serving premium Dim Sum, Packing Duck, and Seafood.",
    keywords: ["Chinese Fine Dining", "Dim Sum Serpong", "Royal Eight JHL", "Luxury Banquet", "Chinese Restaurant Gading Serpong"],
};

import React from "react";
import { cookies } from "next/headers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/royal-eight/HeroSection";
import { PromoIntegration } from "@/components/PromoIntegration";
import { SchemaGenerator } from "@/components/SchemaGenerator";
import { MENU_ITEMS } from "@/data/menu";
import { translations } from "@/lib/translations";
import type { Language } from "@/lib/translations";

export default async function RoyalEightLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Server-side language detection from cookies
    const cookieStore = await cookies();
    const languageCookie = cookieStore.get('language')?.value as Language | undefined;
    const currentLanguage: Language = languageCookie || 'en';
    const currentTranslations = translations[currentLanguage];

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
            <SchemaGenerator
                menuData={MENU_ITEMS}
                specialOffers={specialOffers}
                language={currentLanguage}
                translations={currentTranslations}
            />

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
