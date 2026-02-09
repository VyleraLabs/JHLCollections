"use client";

import React from "react";
// import { m } from "framer-motion"; // Removed for LCP optimization
import Image from "next/image";
// import heroBg from "@/assets/royal-eight/hero-ambience.webp"; // Replaced with new asset
import dynamic from "next/dynamic";

const LightstreamEight = dynamic(() => import("./LightstreamEight").then(mod => mod.LightstreamEight), {
    ssr: false,
    loading: () => null
});

const heroBg = "/assets/original/img-afa9b05f-b2fc-4310-ac64-7cdb11a22bff.webp";

export const HeroSection = () => {
    // Parallax removed for performance stability

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Static Background with Entry Animation */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroBg}
                    alt="Royal Eight Ambience"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                    quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0F0F0F]" />
            </div>

            {/* Brand Lightstream - Positioned behind text but above bg */}
            <LightstreamEight />

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1
                    style={{ textShadow: "0 10px 30px rgba(0,0,0,0.5)" }}
                    className="font-serif text-5xl md:text-7xl lg:text-9xl text-luxury-gold mb-6 tracking-wide"
                >
                    Royal Eight
                </h1>
                <p
                    className="font-sans text-white/90 text-lg md:text-2xl uppercase font-light drop-shadow-lg tracking-[0.3em]"
                >
                    The Taste of Dynasty
                </p>
            </div>

            {/* Scroll Indicator */}
            <div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-luxury-gold flex flex-col items-center gap-2 animate-pulse"
            >
                <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-luxury-gold to-transparent" />
            </div>
        </section >
    );
};
