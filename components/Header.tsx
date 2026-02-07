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
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
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

            {/* Mobile menu handled separately to avoid layout shift */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[110] bg-brand-dark text-white flex flex-col p-12"
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
                        <nav className="flex flex-col gap-8">
                            {["Home", ...NAV_LINKS.map(l => l.name)].map((item) => (
                                <Link
                                    key={item}
                                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                    className="text-4xl font-serif hover:text-brand-gold transition-all duration-300"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    window.location.href = "/booking";
                                }}
                                className="bg-brand-gold text-white px-10 py-5 mt-12 text-sm font-bold uppercase tracking-widest shadow-2xl"
                            >
                                Book Now
                            </button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
