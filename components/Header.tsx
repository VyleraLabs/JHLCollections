"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { type Language } from "@/lib/translations";

export default function Header() {
    const { language, setLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);

        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    const NAV_LINKS = [
        { name: t.nav.rooms, href: "/rooms" },
        { name: t.nav.dining, href: "/dining" },
        { name: t.nav.meetings, href: "/meetings" },
        { name: t.nav.wellness, href: "/wellness" },
        { name: t.nav.facilities, href: "/facilities" },
        { name: t.nav.offers, href: "/offers" },
    ];

    const LanguageSwitcher = ({ isMobile = false }: { isMobile?: boolean }) => {
        const [isHovered, setIsHovered] = useState(false);
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

        if (isMobile) {
            return (
                <div className="mt-8 border-t border-white/10 pt-8 flex flex-col gap-4 items-center">
                    <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Select Language</span>
                    <div className="flex flex-wrap justify-center gap-4">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => setLanguage(lang.code)}
                                className={cn(
                                    "flex items-center gap-2 py-2 px-4 rounded-full transition-all duration-300",
                                    language === lang.code ? "bg-brand-gold text-white" : "bg-white/5 text-white/60"
                                )}
                            >
                                <span className="text-sm">{lang.flag}</span>
                                <span className="text-xs font-bold">{lang.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            );
        }

        return (
            <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <button
                    className={cn(
                        "flex items-center gap-3 py-2 px-4 rounded border border-white/20 transition-all duration-500 hover:border-brand-gold group/lang",
                        isScrolled ? "bg-black/20" : "bg-transparent"
                    )}
                >
                    <Globe size={14} className="text-brand-gold group-hover/lang:scale-110 transition-transform" />
                    <div className="flex items-center gap-2">
                        <span className="text-sm">{activeLang.flag}</span>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-white">{activeLang.label}</span>
                    </div>
                    <ChevronDown size={12} className={cn("text-white/60 transition-transform duration-500", isHovered && "rotate-180")} />
                </button>

                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full right-0 pt-2 w-48 z-[110]"
                        >
                            <div className="bg-brand-dark/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden p-2 space-y-1">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            setLanguage(lang.code);
                                            setIsHovered(false);
                                        }}
                                        className={cn(
                                            "w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-300 rounded-lg",
                                            language === lang.code
                                                ? "bg-brand-gold text-white font-bold"
                                                : "text-white/70 hover:bg-white/10 hover:text-white"
                                        )}
                                    >
                                        <span className="text-base">{lang.flag}</span>
                                        <span className="text-xs font-bold tracking-widest">{lang.label}</span>
                                        {language === lang.code && (
                                            <motion.div
                                                layoutId="active-lang-dot"
                                                className="ml-auto w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]"
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    };

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out",
                    isScrolled
                        ? "bg-brand-dark/90 backdrop-blur-md border-b border-white/10 py-4 shadow-xl"
                        : "bg-transparent py-8"
                )}
            >
                <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                    <Link
                        href="/"
                        className="flex items-center group"
                    >
                        <div className="relative w-24 h-16 lg:w-32 lg:h-20 overflow-hidden">
                            <Image
                                src="/assets/original/jhl_logo.webp"
                                alt="JHL Solitaire Logo"
                                fill
                                className={cn(
                                    "object-contain transition-all duration-500",
                                    !isScrolled && "brightness-0 invert"
                                )}
                                priority
                            />
                        </div>
                    </Link>

                    {/* Center: Desktop Navigation (Horizontal) */}
                    <nav className="hidden xl:block">
                        <ul className="flex items-center gap-10">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "font-lato font-bold uppercase transition-all duration-300 relative group py-2",
                                            ['zh', 'ja', 'ko', 'ar'].includes(language) ? "text-base tracking-widest" : "text-[10px] tracking-[0.25em]",
                                            isScrolled ? "text-white/90 hover:text-brand-gold" : "text-white/90 hover:text-white"
                                        )}
                                    >
                                        {link.name}
                                        <span className={cn(
                                            "absolute bottom-0 left-0 w-0 h-px transition-all duration-500 group-hover:w-full",
                                            isScrolled ? "bg-brand-gold" : "bg-white"
                                        )}></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Right: Language + Book Now Button */}
                    <div className="hidden lg:flex items-center gap-8">
                        <LanguageSwitcher />
                        <button
                            onClick={() => window.location.href = "/booking"}
                            className={cn(
                                "px-8 py-3 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border relative overflow-hidden group",
                                isScrolled
                                    ? "border-brand-gold text-brand-gold hover:text-white"
                                    : "border-white/50 text-white hover:border-white hover:text-brand-dark"
                            )}
                        >
                            <span className={cn(
                                "absolute inset-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0 z-0",
                                isScrolled ? "bg-brand-gold" : "bg-white"
                            )}></span>
                            <span className="relative z-10">{t.nav.bookNow}</span>
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={cn(
                            "lg:hidden p-2 transition-colors duration-500",
                            "text-white"
                        )}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

            </header>

            {/* Mobile menu handled separately to avoid layout shift and style inheritance */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[110] bg-[#0d1f2e] text-white flex flex-col p-8 overflow-y-auto"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <div className="relative w-24 h-16 overflow-hidden">
                                <Image
                                    src="/assets/original/jhl_logo.webp"
                                    alt="JHL Solitaire Logo"
                                    fill
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                            <button onClick={() => setIsMobileMenuOpen(false)}>
                                <X size={32} strokeWidth={1} />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-4">
                            {[
                                { name: t.nav.home, href: "/", image: "/assets/original/1mc6912000qshhrwa9EE8.jpg", subtitle: t.hero.welcome },
                                { name: t.nav.rooms, href: "/rooms", image: "/assets/original/img-24a5fc2c-d787-414c-8a78-a919e9b9b2d4.webp", subtitle: t.categories.rooms.subtitle },
                                { name: t.nav.dining, href: "/dining", image: "/assets/original/img-18c2e520-f15d-415a-a07b-f27bb31373ee.webp", subtitle: t.categories.dining.subtitle },
                                { name: t.nav.meetings, href: "/meetings", image: "/assets/original/img-7fca6da7-689b-466d-9dac-18c9c47dcda1.webp", subtitle: t.categories.meetings.subtitle },
                                { name: t.nav.wellness, href: "/wellness", image: "/assets/original/img-1f1dc5b2-25c7-47a8-8d9a-3aee88c3d769.webp", subtitle: t.categories.wellness.subtitle },
                                { name: t.nav.facilities, href: "/facilities", image: "/assets/original/12-edit.jpg", subtitle: t.categories.facilities.subtitle },
                                { name: t.nav.offers, href: "/offers", image: "/assets/original/img-16d5a22e-570d-4d2c-b931-948176ffc404.webp", subtitle: t.categories.offers.subtitle },
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="group relative h-24 w-full overflow-hidden rounded-lg shadow-lg transition-all duration-500"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        quality={40}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-center px-8">
                                        <span className="text-brand-gold text-[8px] uppercase font-bold tracking-[0.2em] mb-1 opacity-80">
                                            {item.subtitle}
                                        </span>
                                        <span className="text-xl font-serif text-white tracking-wide">
                                            {item.name}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    window.location.href = "/booking";
                                }}
                                className="bg-brand-gold text-white px-10 py-5 mt-4 text-xs font-bold uppercase tracking-[0.2em] shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
                            >
                                {t.nav.bookNow}
                            </button>
                            <LanguageSwitcher isMobile />
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
