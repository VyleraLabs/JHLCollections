"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import Image from 'next/image';

import { useLanguage } from '@/context/LanguageContext';

type Treatment = {
    name: string;
    description?: string;
    duration?: string;
    price?: string;
};

type Category = {
    id: string;
    title: string;
    items: Treatment[];
}

export default function SandjongMenu() {
    const { t } = useLanguage();
    const menu = t.pages.sandjong.menu;

    const TREATMENT_DATA: Category[] = [
        {
            id: 'signatures',
            title: menu.categories.signatures,
            items: [
                { name: menu.items.lamonan.name, description: menu.items.lamonan.desc },
                { name: menu.items.selayang.name, description: menu.items.selayang.desc },
                { name: menu.items.alam.name, description: menu.items.alam.desc },
                { name: menu.items.serunai.name, description: menu.items.serunai.desc }
            ]
        },
        {
            id: 'fullbody',
            title: menu.categories.fullbody,
            items: [
                { name: menu.items.massage.name, description: menu.items.massage.desc },
                { name: menu.items.facial.name, description: menu.items.facial.desc },
                { name: menu.items.scrub.name, description: menu.items.scrub.desc }
            ]
        },
        {
            id: 'maternity',
            title: menu.categories.maternity,
            items: [
                { name: menu.items.pregnant.name, description: menu.items.pregnant.desc },
                { name: menu.items.pregnancyTrts.name, description: menu.items.pregnancyTrts.desc },
                { name: menu.items.postpartum.name, description: menu.items.postpartum.desc },
                { name: menu.items.postpartumTrts.name, description: menu.items.postpartumTrts.desc },
                { name: menu.items.wrap.name, description: menu.items.wrap.desc },
                { name: menu.items.scrubMaternity.name, description: menu.items.scrubMaternity.desc },
                { name: menu.items.touches.name, description: menu.items.touches.desc }
            ]
        }
    ];

    const [activeTab, setActiveTab] = useState(TREATMENT_DATA[0].id);

    // Pattern for Dark BG
    const batikPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

    return (
        <section className="py-32 bg-brand-dark text-white relative overflow-hidden" id="menu">
            <div className="absolute inset-0 z-0" style={{ backgroundImage: batikPattern }} />

            {/* Decorative Top Gradient */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-brand-off-white/10 to-transparent pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <span className="inline-block py-1 px-3 border border-brand-gold/50 rounded-full text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-6">
                        {menu.title}
                    </span>
                    <h2 className="font-serif text-5xl md:text-6xl text-brand-gold mb-6">{menu.subtitle}</h2>
                    <p className="text-gray-400 max-w-xl mx-auto font-light text-lg italic font-serif">
                        "{menu.desc}"
                    </p>
                </div>

                {/* Ornate Tabs */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-10 border-b border-brand-gold/20 pb-8 max-w-3xl mx-auto">
                    {TREATMENT_DATA.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={clsx(
                                "text-lg md:text-xl font-serif transition-all duration-500 relative pb-2 tracking-wide",
                                activeTab === cat.id ? "text-brand-gold" : "text-gray-500 hover:text-gray-300"
                            )}
                        >
                            {cat.title}
                            {activeTab === cat.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-gold rotate-45" // Diamond indicator
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Social Booking Buttons */}
                <div className="flex flex-wrap justify-center gap-6 mb-16">
                    {[
                        {
                            name: 'WhatsApp',
                            color: 'hover:text-green-400',
                            link: '#',
                            icon: (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            )
                        },
                        {
                            name: 'WeChat',
                            color: 'hover:text-green-500',
                            link: '#',
                            icon: (
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.696 16.03c-.22 0-.42.06-.61.12l-2.73 1.48.56-2.39c-1.84-1.32-2.92-3.23-2.92-5.22 0-3.76 3.78-6.82 8.44-6.82 4.66.01 8.44 3.07 8.44 6.83 0 3.76-3.78 6.82-8.44 6.82-.25 0-.5-.01-.74-.03zm12.63-2.61c-1.12-1.02-2.72-1.55-4.42-1.55-4.7 0-8.5 2.89-8.5 6.46 0 3.56 3.8 6.46 8.5 6.46.68 0 1.35-.06 2.01-.18l2.95 1.59-.61-2.58c1.55-1.28 2.45-2.97 2.45-4.76 0-2.14-1.11-4.08-2.38-5.44zm-14.7-4.46c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6.21 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3.89 7.04c-.45 0-.82.37-.82.82s.37.82.82.82.82-.37.82-.82-.37-.82-.82-.82zm4.6 0c-.45 0-.82.37-.82.82s.37.82.82.82.82-.37.82-.82-.37-.82-.82-.82z" />
                                </svg>
                            )
                        },
                        {
                            name: 'Telegram',
                            color: 'hover:text-blue-400',
                            link: '#',
                            icon: (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12.017 12.017 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                </svg>
                            )
                        },
                    ].map((platform) => (
                        <a
                            key={platform.name}
                            href={platform.link}
                            className={clsx(
                                "relative group overflow-hidden px-8 py-3 bg-brand-dark border border-brand-gold/30 rounded-full transition-all duration-300 hover:border-brand-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center gap-3",
                                platform.color
                            )}
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            <span className="relative z-10">{platform.icon}</span>
                            <span className="relative z-10 font-serif italic text-brand-gold group-hover:text-white transition-colors tracking-wider">
                                {menu.book} via {platform.name}
                            </span>
                        </a>
                    ))}
                </div>

                {/* Royal Menu Card */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-sm border border-brand-gold/10 p-8 md:p-12 rounded-sm shadow-2xl relative"
                        >
                            {/* Decorative Corner Borders */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-brand-gold/30" />
                            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-brand-gold/30" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-brand-gold/30" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-brand-gold/30" />

                            <div className="grid grid-cols-1 gap-y-10">
                                {TREATMENT_DATA.find(c => c.id === activeTab)?.items.map((item, idx) => (
                                    <div key={idx} className="group relative">
                                        <div className="flex justify-between items-baseline mb-2 mx-2">
                                            <h3 className="text-2xl font-serif text-brand-off-white group-hover:text-brand-gold transition-colors duration-300">
                                                {item.name}
                                            </h3>
                                            <div className="flex-1 mx-4 border-b border-dashed border-gray-700 relative top-[-6px] opacity-30 group-hover:opacity-60 transition-opacity" />
                                            {/* Price placeholder or removed Book text */}
                                        </div>
                                        {item.description && (
                                            <p className="text-sm text-gray-500 font-light italic pl-2 max-w-2xl group-hover:text-gray-400 transition-colors">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="mt-20 text-center">
                    <a href="#reservation" className="inline-block relative px-10 py-4 group overflow-hidden">
                        <span className="absolute inset-0 w-full h-full border border-brand-gold/50 group-hover:border-brand-gold transition-colors duration-500" />
                        <span className="absolute inset-0 w-0 h-full bg-brand-gold/10 group-hover:w-full transition-all duration-500 ease-out" />
                        <span className="relative text-brand-gold uppercase tracking-[0.2em] text-xs font-bold group-hover:text-white transition-colors duration-500">
                            {menu.viewPdf}
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
