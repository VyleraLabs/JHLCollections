"use client";

import React from "react";
import { m } from "framer-motion";
import Image from "next/image";

interface Promo {
    id: string;
    title: string;
    price: string;
    link: string;
    description: string;
}

import { useLanguage } from '@/context/LanguageContext';

const tableCheckUrl = "https://www.tablecheck.com/en/jhl-solitaire-gading-serpong-royal-eight/reserve/experiences";

const bgImage = "/assets/original/img-6f594b46-8458-473f-a2e2-235dd3a798bd.webp";

export const PromoCarousel = () => {
    const { t } = useLanguage();

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
                    <Image
                        src={bgImage}
                        alt="Banquet"
                        fill
                        className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 896px"
                        quality={60}
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/80 to-transparent" />
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/10 rounded-full blur-3xl group-hover:bg-luxury-gold/20 transition-colors duration-700 z-10"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-6 md:p-10 gap-6">
                    <div className="text-center md:text-left">
                        <span className="text-luxury-gold font-sans text-xs uppercase tracking-[0.3em] mb-2 block animate-pulse">
                            {t.promo.specialOffer}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">
                            {t.promo.tangDynasty.title}
                        </h2>
                        <p className="text-white/80 mb-4 font-light italic">
                            {t.promo.tangDynasty.description}
                        </p>
                        <div className="text-2xl text-luxury-gold font-bold font-serif">
                            {t.promo.tangDynasty.price}
                        </div>
                    </div>

                    <a
                        href={tableCheckUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-luxury-gold text-black font-sans font-bold text-sm tracking-uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                    >
                        {t.promo.reservation}
                    </a>
                </div>
            </m.div>
        </div>
    );
};
