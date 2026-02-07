"use client";

import React from "react";
import { m } from "framer-motion";

interface Promo {
    id: string;
    title: string;
    price: string;
    link: string;
    description: string;
}

const tableCheckUrl = "https://www.tablecheck.com/en/jhl-solitaire-gading-serpong-royal-eight/reserve/experiences";

const activePromo: Promo = {
    id: "tang-dynasty",
    title: "Tang Dynasty Set Menu",
    price: "IDR 4.888.000",
    link: tableCheckUrl,
    description: "A culinary journey through the ages 10-course banquet."
};

const bgImage = "/assets/royal-eight/banquet.svg";

export const PromoCarousel = () => {
    return (
        <div className="w-full py-8 mb-4">
            <m.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto bg-[#1A1A1A] rounded-xl border border-luxury-gold p-1 shadow-[0_0_30px_rgba(212,175,55,0.15)] relative overflow-hidden group"
            >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img src={bgImage} alt="Banquet" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/80 to-transparent" />
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/10 rounded-full blur-3xl group-hover:bg-luxury-gold/20 transition-colors duration-700 z-10"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-6 md:p-10 gap-6">
                    <div className="text-center md:text-left">
                        <span className="text-luxury-gold font-sans text-xs uppercase tracking-[0.3em] mb-2 block animate-pulse">
                            Special Offer
                        </span>
                        <h3 className="text-3xl md:text-4xl font-serif text-white mb-2">
                            {activePromo.title}
                        </h3>
                        <p className="text-white/80 mb-4 font-light italic">
                            {activePromo.description}
                        </p>
                        <div className="text-2xl text-luxury-gold font-bold font-serif">
                            {activePromo.price}
                        </div>
                    </div>

                    <a
                        href={activePromo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-luxury-gold text-black font-sans font-bold text-sm tracking-uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                    >
                        RESERVE TABLE
                    </a>
                </div>
            </m.div>
        </div>
    );
};
