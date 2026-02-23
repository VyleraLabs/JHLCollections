"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function SandjongHero() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-brand-dark">
            {/* Static Background Layer (LCP Candidate) - Instant paint */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/sandjong/sandjongfacility1.webp"
                    alt="Sandjong Spa Ambience"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                    quality={60}
                    // @ts-ignore
                    fetchPriority="high"
                />
            </div>

            {/* Parallax & Overlay Layer */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
            >
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-black/50" />

                {/* Desktop: Auto-play video (Deferred for hydration) */}
                {isClient && !isMobile && (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover w-full h-full opacity-90 hidden md:block"
                    >
                        <source src="/assets/sandjong/hero.mp4" type="video/mp4" />
                    </video>
                )}
            </motion.div>

            {/* Mobile Video Layer */}
            {isClient && isMobile && isPlaying && (
                <div className="absolute inset-0 z-10 bg-black">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="none"
                        className="object-cover w-full h-full opacity-90"
                    >
                        <source src="/assets/sandjong/hero.mp4" type="video/mp4" />
                    </video>
                </div>
            )}

            {/* Mobile UI Overlay */}
            {isClient && isMobile && !isPlaying && (
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <button
                        onClick={() => setIsPlaying(true)}
                        className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/50 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
                        aria-label="Play Video"
                    >
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1 group-hover:scale-110 transition-transform" />
                    </button>
                </div>
            )}

            {/* Main Content */}
            <div className="relative z-30 h-full flex flex-col justify-center items-center text-center text-white px-4">
                <div className="flex flex-col items-center">
                    <div>
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="h-[1px] w-12 bg-brand-gold/50" />
                            <p className="font-serif italic text-brand-gold text-lg md:text-xl tracking-widest">
                                {t.pages.sandjong.hero.soul}
                            </p>
                            <div className="h-[1px] w-12 bg-brand-gold/50" />
                        </div>

                        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tight drop-shadow-2xl text-white pb-4">
                            {t.pages.sandjong.hero.title}
                        </h1>

                        <p className="font-sans font-light text-sm md:text-base max-w-lg mx-auto text-gray-200 tracking-[0.2em] uppercase">
                            {t.pages.sandjong.hero.subtitle}
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })}
            >
                <span className="text-[10px] uppercase tracking-widest">{t.pages.sandjong.hero.discover}</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </motion.div>
        </div>
    );
}
