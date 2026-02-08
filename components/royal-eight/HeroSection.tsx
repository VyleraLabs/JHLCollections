"use client";

import React from "react";
import { m } from "framer-motion";
import Image from "next/image";
// import heroBg from "@/assets/royal-eight/hero-ambience.webp"; // Replaced with new asset
import { LightstreamEight } from "./LightstreamEight";

const heroBg = "/assets/original/img-afa9b05f-b2fc-4310-ac64-7cdb11a22bff.webp";

export const HeroSection = () => {
    // Parallax removed for performance stability

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Static Background with Entry Animation */}
            <m.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src={heroBg}
                    alt="Royal Eight Ambience"
                    fill
                    className="object-cover"
                    priority
                    placeholder="blur"
                    sizes="100vw"
                    quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0F0F0F]" />
            </m.div>

            {/* Brand Lightstream - Positioned behind text but above bg */}
            <LightstreamEight />

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <m.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="font-serif text-5xl md:text-7xl lg:text-9xl text-luxury-gold drop-shadow-2xl mb-6 tracking-wide"
                >
                    Royal Eight
                </m.h1>
                <m.p
                    initial={{ opacity: 0, letterSpacing: "0.1em" }}
                    animate={{ opacity: 1, letterSpacing: "0.3em" }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="font-sans text-white/90 text-lg md:text-2xl uppercase font-light drop-shadow-lg"
                >
                    The Taste of Dynasty
                </m.p>
            </div>

            {/* Scroll Indicator */}
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-luxury-gold flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-luxury-gold to-transparent" />
            </m.div>
        </section>
    );
};
