"use client";

import React from "react";
import { MENU_ITEMS } from "@/data/menu";
import { MenuCard } from "@/components/royal-eight/MenuCard";
import { PromoCarousel } from "@/components/PromoCarousel";

export default function RoyalEightPage() {
    const mainCourses = MENU_ITEMS.filter(item => item.sourceFile === 'Main');
    const dimSums = MENU_ITEMS.filter(item => item.sourceFile === 'DimSum');
    const beverages = MENU_ITEMS.filter(item => item.sourceFile === 'Beverage');

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">

            {/* Promo Section */}
            <PromoCarousel />

            {/* Main Course Section */}
            <section id="main-course" className="scroll-mt-32">
                <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-4">
                    <div>
                        <span className="text-luxury-gold font-sans text-sm tracking-widest uppercase block mb-2">Signature Dishes</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white">Main Course</h2>
                    </div>
                    <div className="hidden md:block text-right text-white/40 text-sm italic">
                        A symphony of flavors <br />from the heart of China
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mainCourses.map((item) => (
                        <MenuCard key={item.id} item={item} />
                    ))}
                </div>
            </section>

            {/* Dim Sum Section */}
            <section id="dim-sum" className="scroll-mt-32">
                <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-4">
                    <div>
                        <span className="text-luxury-gold font-sans text-sm tracking-widest uppercase block mb-2">Handcrafted Daily</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white">Dim Sum</h2>
                    </div>
                    <div className="hidden md:block text-right text-white/40 text-sm italic">
                        Delicate parcels of joy <br />steamed to perfection
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dimSums.map((item) => (
                        <MenuCard key={item.id} item={item} />
                    ))}
                </div>
            </section>

            {/* Beverage Section */}
            <section id="beverage" className="scroll-mt-32">
                <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-4">
                    <div>
                        <span className="text-luxury-gold font-sans text-sm tracking-widest uppercase block mb-2">Refreshments</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white">Beverage</h2>
                    </div>
                    <div className="hidden md:block text-right text-white/40 text-sm italic">
                        Premium teas and <br />curated spirits
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {beverages.map((item) => (
                        <MenuCard key={item.id} item={item} />
                    ))}
                </div>
            </section>

            <div className="h-24"></div> {/* Spacer */}
        </div>
    );
}
