"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const MeetingRoomsHero = () => {
    const { t } = useLanguage();

    return (
        <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
            <Image
                src="/assets/meetings/hero.jpg"
                alt="Corporate Meeting Rooms"
                fill
                className="object-cover opacity-60 grayscale-[20%]"
                priority
                sizes="100vw"
                quality={60}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950" />

            <div className="relative z-10 text-center max-w-4xl px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-luxury text-4xl md:text-6xl mb-6 uppercase tracking-widest text-brand-gold"
                >
                    {t.pages.meetingRooms.hero.title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-sans text-xl md:text-2xl tracking-[0.2em] mb-8 font-light"
                >
                    {t.pages.meetingRooms.hero.subtitle}
                </motion.p>
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="h-[1px] w-24 bg-brand-gold mx-auto"
                />
            </div>
        </section>
    );
};
