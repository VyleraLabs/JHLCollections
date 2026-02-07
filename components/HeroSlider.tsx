"use client";

import React from 'react'; // Added React import
import { motion } from "framer-motion";
import { ChevronDown, Calendar, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import CustomDatePicker from "./CustomDatePicker";

export default function HeroSlider() {
    const [checkIn, setCheckIn] = React.useState("");
    const [checkOut, setCheckOut] = React.useState("");
    const [adults, setAdults] = React.useState("2");

    const [isCheckInOpen, setIsCheckInOpen] = React.useState(false);
    const [isCheckOutOpen, setIsCheckOutOpen] = React.useState(false);

    const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

    const formatDateDisplay = (dateStr: string) => {
        if (!dateStr) return "Select Date";
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
    };

    const handleBooking = () => {
        const params = new URLSearchParams({
            checkIn,
            checkOut,
            adults
        });
        window.location.href = `/booking?${params.toString()}`;
    };

    return (
        <section className="relative h-screen w-full bg-[#0F0F0F] flex flex-col items-center justify-center overflow-hidden">
            {/* Background Narrative */}
            <div className="absolute inset-0 z-0">
                {/* Text-based Loading State - elegant and minimalist */}
                <div
                    className={cn(
                        "absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#0F0F0F] transition-opacity duration-1000 px-6",
                        isVideoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
                    )}
                >
                    <span className="text-xs md:text-sm font-bold uppercase tracking-[0.5em] text-brand-gold mb-6 animate-pulse drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]">
                        Welcome to
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-medium leading-tight mb-8 text-white animate-pulse drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                        JHL Solitaire
                    </h1>
                    <p className="text-sm md:text-lg font-light uppercase tracking-[0.3em] text-white/80 animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">
                        Gading Serpong, A JHL Collections
                    </p>
                </div>

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label="Atmospheric background video of JHL Solitaire"
                    className="absolute inset-0 w-full h-full object-cover z-10"
                    onCanPlay={() => setIsVideoLoaded(true)}
                    style={{
                        opacity: isVideoLoaded ? 0.7 : 0,
                        transition: "opacity 1.5s ease-in-out"
                    }}
                >
                    <source src="/assets/original/vdo-90a158da-4449-4f21-ad38-feafbacb8c9d.mp4" type="video/mp4" />
                    <track kind="captions" srcLang="en" label="Atmospheric background video" />
                </video>
                {/* Artistic Gradient Wash */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-20"></div>
            </div>

            {/* Staggered Entrance Content */}
            <div className="relative z-30 container mx-auto px-6 h-full flex flex-col items-center justify-center text-center text-white pointer-events-none">
                <div className={cn(
                    "flex flex-col items-center max-w-5xl mb-32 md:mb-0 transition-all duration-1000",
                    isVideoLoaded ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4"
                )}>
                    <span
                        className="text-xs md:text-sm font-bold uppercase tracking-[0.5em] text-brand-gold mb-6"
                    >
                        Welcome to
                    </span>

                    <h1
                        className="text-5xl md:text-7xl lg:text-9xl font-serif font-medium leading-tight mb-8"
                    >
                        JHL Solitaire
                    </h1>

                    <div
                        className="w-24 h-[1px] bg-white/40 mb-8"
                    ></div>

                    <p
                        className="text-sm md:text-lg font-light uppercase tracking-[0.3em] text-white/80"
                    >
                        Gading Serpong, A JHL Collections
                    </p>
                </div>

                {/* Scroll Call to Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="hidden md:flex absolute bottom-40 flex-col items-center gap-3"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em]">Discover</span>
                    <ChevronDown className="animate-bounce" size={20} />
                </motion.div>
            </div>

            {/* Mockup Booking Widget */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-0 left-0 w-full z-40 hidden md:block"
            >
                <div className="container mx-auto max-w-6xl">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-t-2xl shadow-2xl p-6 lg:p-8 flex items-center gap-10">

                        <div className="flex-1 grid grid-cols-3 gap-10">
                            {/* Check In */}
                            <div className="relative">
                                <div
                                    className="flex flex-col gap-2 cursor-pointer group/item"
                                    onClick={() => setIsCheckInOpen(!isCheckInOpen)}
                                >
                                    <label className="text-[10px] uppercase font-bold tracking-widest text-brand-gold cursor-pointer">Check-in</label>
                                    <div className="flex items-center gap-3 border-b border-white/20 pb-2 transition-colors group-hover/item:border-brand-gold">
                                        <Calendar size={16} className="text-white/60" />
                                        <span className="text-sm font-light text-white">
                                            {formatDateDisplay(checkIn)}
                                        </span>
                                    </div>
                                </div>
                                <CustomDatePicker
                                    label="Check-In"
                                    selectedDate={checkIn}
                                    isOpen={isCheckInOpen}
                                    side="top"
                                    onSelect={(date) => {
                                        setCheckIn(date);
                                        setIsCheckInOpen(false);
                                    }}
                                    onClose={() => setIsCheckInOpen(false)}
                                />
                            </div>

                            {/* Check Out */}
                            <div className="relative">
                                <div
                                    className="flex flex-col gap-2 cursor-pointer group/item"
                                    onClick={() => setIsCheckOutOpen(!isCheckOutOpen)}
                                >
                                    <label className="text-[10px] uppercase font-bold tracking-widest text-brand-gold cursor-pointer">Check-out</label>
                                    <div className="flex items-center gap-3 border-b border-white/20 pb-2 transition-colors group-hover/item:border-brand-gold">
                                        <Calendar size={16} className="text-white/60" />
                                        <span className="text-sm font-light text-white">
                                            {formatDateDisplay(checkOut)}
                                        </span>
                                    </div>
                                </div>
                                <CustomDatePicker
                                    label="Check-Out"
                                    selectedDate={checkOut}
                                    isOpen={isCheckOutOpen}
                                    side="top"
                                    onSelect={(date) => {
                                        setCheckOut(date);
                                        setIsCheckOutOpen(false);
                                    }}
                                    onClose={() => setIsCheckOutOpen(false)}
                                />
                            </div>

                            {/* Guests */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="hero-guests" className="text-[10px] uppercase font-bold tracking-widest text-brand-gold">Guests</label>
                                <div className="flex items-center gap-3 border-b border-white/20 pb-2 transition-colors focus-within:border-brand-gold">
                                    <Users size={16} className="text-white/60" />
                                    <select
                                        id="hero-guests"
                                        value={adults}
                                        aria-label="Number of adults"
                                        onChange={(e) => setAdults(e.target.value)}
                                        className="bg-transparent text-sm font-light text-white outline-none cursor-pointer w-full"
                                    >
                                        <option value="1" className="bg-[#0F0F0F]">1 Adult</option>
                                        <option value="2" className="bg-[#0F0F0F]">2 Adults</option>
                                        <option value="3" className="bg-[#0F0F0F]">3 Adults</option>
                                        <option value="4" className="bg-[#0F0F0F]">4 Adults</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleBooking}
                            className="bg-brand-gold text-brand-dark px-12 py-5 font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-xl"
                        >
                            Check Availability
                        </button>
                    </div>
                </div>
            </motion.div>
            <div className="md:hidden absolute bottom-0 w-full p-6 z-40">
                <button
                    onClick={handleBooking}
                    className="w-full bg-brand-gold text-brand-dark py-4 font-bold text-xs uppercase tracking-[0.2em]"
                >
                    Book Now
                </button>
            </div>
        </section>
    );
}
