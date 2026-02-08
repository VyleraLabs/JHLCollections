"use client";

import React, { useState, useEffect } from "react";
import { MENU_ITEMS } from "@/data/menu";
import { MenuCard } from "@/components/royal-eight/MenuCard";
import { PromoCarousel } from "@/components/PromoCarousel";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { type Language } from "@/lib/translations";
import { Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type MenuTab = 'Main' | 'DimSum' | 'Beverage';

export default function RoyalEightPage() {
    const { language, setLanguage, t } = useLanguage();
    const [activeTab, setActiveTab] = useState<MenuTab>('Main');
    const [isSticky, setIsSticky] = useState(false);
    const [isLangHovered, setIsLangHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = window.innerHeight - 100; // Approx threshold
            if (window.scrollY > heroHeight) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const mainCourses = MENU_ITEMS.filter(item => item.sourceFile === 'Main');
    const dimSums = MENU_ITEMS.filter(item => item.sourceFile === 'DimSum');
    const beverages = MENU_ITEMS.filter(item => item.sourceFile === 'Beverage');

    const tabs: { id: MenuTab; label: string; subtitle: string }[] = [
        { id: 'Main', label: t.dining.menuCategories.main.title, subtitle: t.dining.menuCategories.main.subtitle },
        { id: 'DimSum', label: t.dining.menuCategories.dimsum.title, subtitle: t.dining.menuCategories.dimsum.subtitle },
        { id: 'Beverage', label: t.dining.menuCategories.beverage.title, subtitle: t.dining.menuCategories.beverage.subtitle },
    ];

    const languages: { code: Language; flag: string; label: string }[] = [
        { code: 'en', flag: "🇺🇸", label: "EN" },
        { code: 'zh', flag: "🇨🇳", label: "ZH" },
        { code: 'id', flag: "🇮🇩", label: "ID" },
        { code: 'ru', flag: "🇷🇺", label: "RU" },
        { code: 'ja', flag: "🇯🇵", label: "JA" },
        { code: 'ar', flag: "🇦🇪", label: "AR" },
        { code: 'ko', flag: "🇰🇷", label: "KO" }
    ];

    const activeLang = languages.find(l => l.code === language) || languages[0];

    return (
        <div className="w-full py-12 space-y-12">

            {/* Promo Section */}
            <section id="special-offers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <PromoCarousel />
            </section>

            {/* Non-Halal Indicator for Arabic Users */}
            {language === 'ar' && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 flex items-center justify-center gap-3">
                        <span className="text-red-400 text-xl">⚠️</span>
                        <p className="text-red-200 font-serif text-lg text-center" dir="rtl">
                            هذا المطعم يقدم أطباق غير حلال (لحم الخنزير والكحول).
                        </p>
                    </div>
                </div>
            )}

            {/* Tab Navigation */}
            {/* Tab Navigation */}
            <div className={`transition-all duration-300 z-40 ${isSticky
                ? "sticky top-[96px] md:top-[112px] bg-black/80 backdrop-blur-md shadow-2xl w-full border-t border-b border-white/5 py-4"
                : "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                }`}>
                {/* Animated Golden Stream Border */}
                {isSticky && (
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent animate-shimmer bg-[length:200%_auto]" />
                )}

                <div className={`flex flex-wrap justify-center gap-4 md:gap-8 transition-all duration-300 mx-auto relative ${isSticky ? "max-w-7xl px-4 sm:px-6 lg:px-8 items-center" : "w-full border-b border-white/10 pb-4 items-end"}`}>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => {
                                setActiveTab(tab.id);
                                if (isSticky) {
                                    window.scrollTo({
                                        top: window.innerHeight - 150, // Adjust offset as needed
                                        behavior: 'smooth'
                                    });
                                }
                            }}
                            className={cn(
                                "group flex flex-col items-center px-4 py-2 transition-all duration-300 relative",
                                activeTab === tab.id ? "text-luxury-gold" : "text-white/60 hover:text-white"
                            )}
                        >
                            <span className={cn(
                                "text-xs font-sans tracking-widest uppercase mb-1 transition-colors",
                                activeTab === tab.id ? "text-luxury-gold" : "text-white/40 group-hover:text-white/60"
                            )}>
                                {tab.subtitle}
                            </span>
                            <span className="text-2xl md:text-3xl font-serif">
                                {tab.label}
                            </span>
                            {activeTab === tab.id && (
                                <span className="absolute bottom-[-17px] left-0 w-full h-[2px] bg-luxury-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                            )}
                        </button>
                    ))}

                    {/* Language Switcher - Absolute Right on Desktop, Hidden on Mobile/Tablet if space is tight OR flexed */}
                    {/* We'll place it absolute right for the sticky state to match parent nav */}
                    <div className={cn(
                        "transition-all duration-300",
                        isSticky ? "absolute right-4 md:right-8 top-1/2 -translate-y-1/2 hidden lg:block" : "hidden" // Only show in sticky mode on large screens to avoid clutter
                    )}>
                        <div
                            className="relative"
                            onMouseEnter={() => setIsLangHovered(true)}
                            onMouseLeave={() => setIsLangHovered(false)}
                        >
                            <button
                                className="flex items-center gap-3 py-2 px-4 rounded border border-white/20 transition-all duration-500 hover:border-luxury-gold group/lang bg-black/20"
                            >
                                <Globe size={14} className="text-luxury-gold group-hover/lang:scale-110 transition-transform" />
                                <div className="flex items-center gap-2">
                                    <span className="text-sm">{activeLang.flag}</span>
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-white">{activeLang.label}</span>
                                </div>
                                <ChevronDown size={12} className={cn("text-white/60 transition-transform duration-500", isLangHovered && "rotate-180")} />
                            </button>

                            <AnimatePresence>
                                {isLangHovered && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full right-0 pt-2 w-48 z-[110]"
                                    >
                                        <div className="bg-[#1A1A1A]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden p-2 space-y-1">
                                            {languages.map((lang) => (
                                                <button
                                                    key={lang.code}
                                                    onClick={() => {
                                                        setLanguage(lang.code);
                                                        setIsLangHovered(false);
                                                    }}
                                                    className={cn(
                                                        "w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-300 rounded-lg",
                                                        language === lang.code ? "bg-luxury-gold/20 text-luxury-gold" : "hover:bg-white/5 text-white/80 hover:text-white"
                                                    )}
                                                >
                                                    <span className="text-lg">{lang.flag}</span>
                                                    <span className="text-xs font-bold tracking-widest uppercase">{lang.label}</span>
                                                    {language === lang.code && (
                                                        <motion.div layoutId="activeLangCheck" className="ml-auto w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Grid Content */}
            <div className="min-h-[500px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Min height to prevent layout jump */}
                {activeTab === 'Main' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {mainCourses.map((item) => (
                                <MenuCard key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'DimSum' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {dimSums.map((item) => (
                                <MenuCard key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'Beverage' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {beverages.map((item) => (
                                <MenuCard key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="h-24"></div> {/* Spacer */}
        </div>
    );
}
