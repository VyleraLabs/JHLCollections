"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function SandjongHero() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-brand-dark">

            {/* Video Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 w-full h-full will-change-transform"
            >
                <div className="absolute inset-0 bg-black/20 z-10" /> {/* Light base overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-black/50 z-10" /> {/* Luxury Gradient */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/assets/sandjong/sandjongfacility1.webp"
                    className="object-cover w-full h-full opacity-90"
                >
                    <source src="/assets/sandjong/hero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </motion.div>

            {/* Ornamental Borders - Desktop Only */}
            <div className="absolute inset-6 md:inset-12 border border-brand-gold/20 z-20 pointer-events-none" />
            <div className="absolute inset-8 md:inset-14 border border-white/5 z-20 pointer-events-none" />

            {/* Content */}
            <div className="relative z-30 h-full flex flex-col justify-center items-center text-center text-white px-4">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-[1px] w-12 bg-brand-gold/50" />
                        <p className="font-serif italic text-brand-gold text-lg md:text-xl tracking-widest">
                            {t.pages.sandjong.hero.soul}
                        </p>
                        <div className="h-[1px] w-12 bg-brand-gold/50" />
                    </div>

                    <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tight drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/80 pb-4">
                        {t.pages.sandjong.hero.title}
                    </h1>

                    <p className="font-sans font-light text-sm md:text-base max-w-lg mx-auto text-gray-200 tracking-[0.2em] uppercase">
                        {t.pages.sandjong.hero.subtitle}
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <span className="text-[10px] uppercase tracking-widest">{t.pages.sandjong.hero.discover}</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </motion.div>
        </div>
    );
}
