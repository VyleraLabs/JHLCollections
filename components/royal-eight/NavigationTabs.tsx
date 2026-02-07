"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
    { id: "main-course", label: "Main Course" },
    { id: "dim-sum", label: "Dim Sum" },
    { id: "beverage", label: "Beverage" },
];

export const NavigationTabs = () => {
    const [activeTab, setActiveTab] = useState("main-course");
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        const heroHeight = window.innerHeight - 100; // Approx threshold
        if (window.scrollY > heroHeight) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }

        // Active tab detection logic could go here based on section intersection
        // specific implementation depends on how precise we want to be.
        // For now, let's keep it simple: click sets active. Note: User scrolling won't update active tab unless verified with IntersectionObserver.
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setActiveTab(id);
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Height of sticky header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <nav
            className={`sticky top-0 z-50 w-full transition-all duration-500 ${isSticky ? "bg-luxury-black/90 backdrop-blur-md shadow-2xl border-b border-luxury-gold/20" : "bg-transparent"
                }`}
            aria-label="Menu Categories"
        >
            <h2 className="sr-only">Menu Categories</h2>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center h-20">
                    <div className="flex space-x-2 md:space-x-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => scrollToSection(tab.id)}
                                className={`relative px-4 py-2 text-sm md:text-lg font-serif font-medium transition-colors duration-300 ${activeTab === tab.id ? "text-luxury-gold" : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-luxury-gold shadow-[0_0_10px_#D4AF37]"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};
