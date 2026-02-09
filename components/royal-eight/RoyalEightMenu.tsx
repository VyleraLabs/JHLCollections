"use client";

import React, { useState, useEffect } from "react";
import { MenuItem } from "@/data/menu";
import { MenuCard } from "@/components/royal-eight/MenuCard";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { type Language } from "@/lib/translations";
import { Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type MenuTab = 'Main' | 'DimSum' | 'Beverage';

interface RoyalEightMenuProps {
    menuItems: MenuItem[];
}

export const RoyalEightMenu = ({ menuItems }: RoyalEightMenuProps) => {
    const { language, setLanguage, t } = useLanguage();
    const [activeTab, setActiveTab] = useState<MenuTab>('Main');
    const [isSticky, setIsSticky] = useState(false);
    const [isLangHovered, setIsLangHovered] = useState(false);
    const sentinelRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // When sentinel scrolls out of view (past the header offset), we are sticky
                setIsSticky(!entry.isIntersecting);
            },
            {
                threshold: 0,
                // Offset matching the header height (Mobile: 96px, Desktop: 112px)
                // Using a safe estimate that works for both by targeting the trigger point
                rootMargin: "-112px 0px 0px 0px"
            }
        );

        if (sentinelRef.current) {
            observer.observe(sentinelRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const mainCourses = React.useMemo(() => menuItems.filter(item => item.sourceFile === 'Main'), [menuItems]);
    const dimSums = React.useMemo(() => menuItems.filter(item => item.sourceFile === 'DimSum'), [menuItems]);
    const beverages = React.useMemo(() => menuItems.filter(item => item.sourceFile === 'Beverage'), [menuItems]);

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
        <div className="w-full relative">
            {/* Non-Halal Indicator for Arabic Users */}
            {language === 'ar' && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 flex items-center justify-center gap-3">
                        <span className="text-red-400 text-xl">⚠️</span>
                        <p className="text-red-200 font-serif text-lg text-center" dir="rtl">
                            هذا المطعم يقدم أطباق غير حلال (لحم الخنزير والكحول).
                        </p>
                    </div>
                </div>
            )}

            {/* Scroll Sentinel - Detects when menu hits the header exactly */}
            <div ref={sentinelRef} className="absolute top-0 h-[1px] w-full invisible pointer-events-none" />

            {/* Tab Navigation */}
            <div className={cn(
                "sticky top-[96px] md:top-[112px] z-40 transition-all duration-300 w-full",
                isSticky
                    ? "bg-black/80 backdrop-blur-md shadow-xl border-t border-b border-white/5 py-4"
                    : "bg-transparent py-4 border-b border-white/10"
            )}>
                {/* Animated Golden Stream Border */}
                {isSticky && (
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent animate-shimmer bg-[length:200%_auto]" />
                )}

                <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between md:justify-center relative transition-all duration-300 gap-4 md:gap-0`}>
                    {/* Empty Left Column for Centering - Removed */}

                    {/* Center Tabs */}
                    <div className="flex flex-wrap gap-4 md:gap-8 justify-center w-full md:w-auto z-10">
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
                                    activeTab === tab.id ? "text-luxury-gold" : "text-white/70 group-hover:text-white"
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
                    </div>

                    <div className={cn(
                        "transition-all duration-300 flex items-center justify-center md:justify-end gap-4 w-full md:w-auto md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2 lg:right-8",
                        isSticky ? "opacity-100" : "opacity-100" // Manage visibility opacity to avoid layout shift, or use hidden
                    )}>
                        {/* WhatsApp Reservation Button */}
                        <a
                            href="https://api.whatsapp.com/send?phone=6282130000808"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-luxury-gold text-black font-sans font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors duration-300 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] rounded-sm"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            <span>Reserve Now</span>
                        </a>

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
            <div className="min-h-[500px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
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

            <div className="h-24"></div>
        </div>
    );
};
