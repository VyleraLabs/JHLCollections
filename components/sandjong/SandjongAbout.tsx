"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function SandjongAbout() {
    const { t } = useLanguage();
    const about = t.pages.sandjong.about;

    // Batik Pattern (SVG equivalent as BG image)
    const batikPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

    return (
        <section className="relative bg-brand-off-white">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-30 fixed" style={{ backgroundImage: batikPattern }} />

            {/* CINEMATIC SCROLL SECTION */}
            <div className="relative max-w-[1920px] mx-auto">
                <div className="flex flex-col lg:flex-row">
                    {/* LEFT: Sticky Text Content */}
                    <div className="lg:w-[40%] h-auto lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center px-8 md:px-16 py-20 z-20 bg-brand-off-white/90 backdrop-blur-sm lg:bg-transparent">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="block font-sans text-brand-gold uppercase tracking-[0.25em] text-sm mb-6 pl-4 border-l-2 border-brand-gold">
                                The Sanctuary
                            </span>
                            <h2 className="font-serif text-5xl md:text-6xl text-brand-dark mb-8 leading-tight">
                                {about.glanceTitle}
                            </h2>
                            <p className="text-gray-600 font-light text-lg leading-relaxed mb-8 font-serif italic">
                                "{about.glanceText}"
                            </p>
                            <div className="w-16 h-[1px] bg-brand-gold mb-8" />
                            <p className="text-gray-500 font-sans text-sm leading-relaxed mb-6">
                                {about.ambienceText}
                            </p>
                        </motion.div>
                    </div>

                    {/* RIGHT: Scrolling Image Sequence */}
                    <div className="lg:w-[60%] flex flex-col gap-4 p-4 lg:p-0">
                        {/* Image 1: Facility */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full h-[80vh] overflow-hidden"
                        >
                            <Image
                                src="/assets/sandjong/sandjongfacility1.webp"
                                alt="Sandjong Interior"
                                fill
                                sizes="(max-width: 768px) 100vw, 60vw"
                                quality={90}
                                priority
                                className="object-cover transition-transform duration-[1.5s] hover:scale-105 will-change-transform"
                            />
                        </motion.div>

                        {/* Image 2: Model Relaxing */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full h-[80vh] overflow-hidden"
                        >
                            <Image
                                src="/assets/sandjong/sandjongmodel.webp"
                                alt="Relaxation"
                                fill
                                sizes="(max-width: 768px) 100vw, 60vw"
                                quality={90}
                                className="object-cover transition-transform duration-[1.5s] hover:scale-105"
                            />
                        </motion.div>

                        {/* Image 3: Hot Stone Detail */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full h-[60vh] overflow-hidden"
                        >
                            <Image
                                src="/assets/sandjong/sandjongbackhotstone.webp"
                                alt="Hot Stone"
                                fill
                                sizes="(max-width: 768px) 100vw, 60vw"
                                quality={90}
                                className="object-cover transition-transform duration-[1.5s] hover:scale-105"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* AWARD SPOTLIGHT SECTION */}
            <div className="relative h-[90vh] flex items-center justify-center bg-brand-dark overflow-hidden">
                {/* Spotlight Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,rgba(0,0,0,0)_60%)]" />

                {/* Background Watermark Text */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-5 pointer-events-none select-none">
                    <span className="text-[20vw] font-serif text-white whitespace-nowrap">BEST SPA</span>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, type: "spring" }}
                        className="relative w-80 h-80 md:w-96 md:h-96"
                    >
                        {/* Glow behind trophy */}
                        <div className="absolute inset-0 bg-brand-gold/20 blur-3xl rounded-full" />

                        <Image
                            src="/assets/sandjong/sandjongawardtrophy.webp"
                            alt="Award"
                            fill
                            sizes="(max-width: 768px) 300px, 400px"
                            quality={90}
                            className="object-contain drop-shadow-[0_20px_50px_rgba(212,175,55,0.3)]"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-center mt-8"
                    >
                        <h3 className="text-3xl md:text-5xl font-serif text-brand-gold mb-4">
                            {about.achievementTitle}
                        </h3>
                        <p className="text-gray-400 font-light max-w-lg mx-auto leading-relaxed">
                            {about.achievementText}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* AMBIENCE PARALLAX SECTION */}
            <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y: useTransform(useScroll().scrollYProgress, [0.5, 1], [0, -100]) }}
                    className="absolute inset-0 z-0 will-change-transform"
                >
                    <Image
                        src="/assets/sandjong/sandjongreception.webp"
                        alt="Ambience"
                        fill
                        quality={90}
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </motion.div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="hidden md:block" /> {/* Spacer */}

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-brand-dark/80 backdrop-blur-md p-12 border-l-4 border-brand-gold shadow-2xl"
                        >
                            <span className="block font-sans text-brand-gold uppercase tracking-[0.3em] text-xs mb-6">
                                Atmosphere
                            </span>
                            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                                {about.ambienceTitle}
                            </h2>
                            <p className="text-white/90 font-light text-lg leading-relaxed italic">
                                "{about.ambienceText}"
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
