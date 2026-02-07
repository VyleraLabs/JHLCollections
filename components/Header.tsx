"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { name: "Rooms", href: "/rooms" },
    { name: "Dining", href: "/dining" },
    { name: "Meetings", href: "/meetings" },
    { name: "Wellness", href: "/wellness" },
    { name: "Facilities", href: "/facilities" },
    { name: "Offers", href: "/offers" },
];

export default function Header() {
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
                    <nav className="hidden lg:block">
                        <ul className="flex items-center gap-12">
                            {NAV_LINKS.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "text-[11px] font-lato font-bold uppercase tracking-[0.25em] transition-all duration-300 relative group py-2",
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

                    {/* Right: Book Now Button */}
                    <div className="hidden lg:flex items-center">
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
                            <span className="relative z-10">Book Now</span>
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
                        className="fixed inset-0 z-[110] bg-[#0d1f2e] text-white flex flex-col p-12 overflow-y-auto"
                    >
                        <div className="flex justify-between items-center mb-16">
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
                                { name: "Home", href: "/", image: "/assets/original/1mc6912000qshhrwa9EE8.jpg", subtitle: "Jewel of the City" },
                                { name: "Rooms", href: "/rooms", image: "/assets/original/img-24a5fc2c-d787-414c-8a78-a919e9b9b2d4.webp", subtitle: "Suites & Sanctum" },
                                { name: "Dining", href: "/dining", image: "/assets/original/img-18c2e520-f15d-415a-a07b-f27bb31373ee.webp", subtitle: "Culinary Dynasty" },
                                { name: "Meetings", href: "/meetings", image: "/assets/original/img-7fca6da7-689b-466d-9dac-18c9c47dcda1.webp", subtitle: "Grand Events" },
                                { name: "Wellness", href: "/wellness", image: "/assets/original/img-1f1dc5b2-25c7-47a8-8d9a-3aee88c3d769.webp", subtitle: "Serenity & Spa" },
                                { name: "Facilities", href: "/facilities", image: "/assets/original/12-edit.jpg", subtitle: "Exquisite Lifestyle" },
                                { name: "Offers", href: "/offers", image: "/assets/original/img-16d5a22e-570d-4d2c-b931-948176ffc404.webp", subtitle: "Exclusive Benefits" },
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="group relative h-28 w-full overflow-hidden rounded-lg shadow-lg transition-all duration-500"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 group-active:scale-105"
                                        quality={60}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-center px-8">
                                        <span className="text-brand-gold text-[10px] uppercase font-bold tracking-[0.2em] mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            {item.subtitle}
                                        </span>
                                        <span className="text-2xl font-serif text-white tracking-wide">
                                            {item.name}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-0 left-0 h-1 bg-brand-gold w-0 group-hover:w-full transition-all duration-500"></div>
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    window.location.href = "/booking";
                                }}
                                className="bg-brand-gold text-white px-10 py-5 mt-4 text-xs font-bold uppercase tracking-[0.2em] shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
                            >
                                Book Your Stay
                            </button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
