"use client";

import React, { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Calendar, User, Mail, Phone, ArrowLeft, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import CustomDatePicker from "@/components/CustomDatePicker";

const countryCodes = [
    { code: "+62", country: "Indonesia", flag: "🇮🇩" },
    { code: "+60", country: "Malaysia", flag: "🇲🇾" },
    { code: "+65", country: "Singapore", flag: "🇸🇬" },
    { code: "+86", country: "China", flag: "🇨🇳" },
    { code: "+1", country: "USA", flag: "🇺🇸" },
    { code: "+44", country: "UK", flag: "🇬🇧" },
    { code: "+81", country: "Japan", flag: "🇯🇵" },
    { code: "+82", country: "South Korea", flag: "🇰🇷" },
    { code: "+61", country: "Australia", flag: "🇦🇺" },
];

function BookingForm() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneCode: "+62",
        phone: "",
        checkIn: searchParams.get("checkIn") || "",
        checkOut: searchParams.get("checkOut") || "",
        adults: searchParams.get("adults") || "2",
        children: searchParams.get("children") || "0",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isCheckInOpen, setIsCheckInOpen] = useState(false);
    const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);

    useEffect(() => {
        // Update form if search params change
        setFormData(prev => ({
            ...prev,
            checkIn: searchParams.get("checkIn") || prev.checkIn,
            checkOut: searchParams.get("checkOut") || prev.checkOut,
            adults: searchParams.get("adults") || prev.adults,
            children: searchParams.get("children") || prev.children,
        }));
    }, [searchParams]);

    const formatDateDisplay = (dateStr: string) => {
        if (!dateStr) return "Select Date";
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleNext = () => {
        if (step < 2) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const sanitizeInput = (str: string) => {
        if (!str) return "";
        return str
            .replace(/[&<>"']/g, (m) => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            }[m] || m))
            .replace(/;/g, "\\;") // Basic SQL escape for semicolons
            .trim();
    };

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePhone = (phone: string) => {
        return /^[0-9\s\-()+]{7,20}$/.test(phone);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Strict Validation
        if (!validateEmail(formData.email)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (!validatePhone(formData.phone)) {
            alert("Please enter a valid phone number.");
            return;
        }

        setIsSubmitting(true);

        // Sanitize and Capture data for marketing
        const leadData = {
            name: sanitizeInput(formData.name),
            email: sanitizeInput(formData.email),
            phone: sanitizeInput(`${formData.phoneCode}${formData.phone}`),
            checkIn: formData.checkIn,
            checkOut: formData.checkOut,
            adults: formData.adults,
            children: formData.children,
            timestamp: new Date().toISOString()
        };

        // Save sanitized data
        localStorage.setItem("latest_lead", JSON.stringify(leadData));

        // Construct book-secure.com URL
        const arrivalDate = new Date(formData.checkIn || Date.now());
        const departureDate = new Date(formData.checkOut || (Date.now() + 86400000));

        const fromday = String(arrivalDate.getDate()).padStart(2, '0');
        const frommonth = String(arrivalDate.getMonth() + 1).padStart(2, '0');
        const fromyear = String(arrivalDate.getFullYear());

        const arrival = `${fromyear}-${frommonth}-${fromday}`;
        const departure = departureDate.toISOString().split('T')[0];

        // Calculate number of nights
        const timeDiff = departureDate.getTime() - arrivalDate.getTime();
        const numberOfNights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        const nbdays = String(numberOfNights > 0 ? numberOfNights : 1);

        const baseUrl = "https://www.book-secure.com/";
        const params = new URLSearchParams({
            showPromotions: "1",
            Clusternames: "ASIAIDASIHTLJhlSolit",
            cluster: "ASIAIDASIHTLJhlSolit",
            Hotelnames: "ASIAIDASIHTLJhlSolit", // This seems to be a cluster ID, not hotel name
            hname: "ASIAIDASIHTLJhlSolit", // This also seems to be a cluster ID
            arrivalDateValue: arrival,
            arrival: arrival,
            fromday,
            frommonth,
            fromyear,
            nbdays: nbdays,
            nbNightsValue: nbdays,
            adulteresa: formData.adults,
            nbAdultsValue: formData.adults,
            adults: formData.adults,
            children: formData.children,
            property: "idtan31027", // This is the actual hotel ID
            redir: "BIZ-so5523q0o4",
            rt: "1616992606",
            s: "results"
        });

        // Small delay for UX transition
        setTimeout(() => {
            window.location.href = `${baseUrl}?${params.toString()}`;
        }, 1500);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden"
        >
            {/* Progress Bar */}
            <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= 1 ? 'bg-brand-gold text-brand-dark' : 'bg-white/10 text-white/40'}`}>1</div>
                    <div className={`h-[2px] w-12 transition-colors ${step >= 2 ? 'bg-brand-gold' : 'bg-white/10'}`}></div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= 2 ? 'bg-brand-gold text-brand-dark' : 'bg-white/10 text-white/40'}`}>2</div>
                </div>
                <span className="text-brand-gold font-serif italic text-lg">Your Stay</span>
            </div>

            <AnimatePresence mode="wait">
                {isSubmitting ? (
                    <motion.div
                        key="submitting"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-20"
                    >
                        <div className="inline-block p-4 rounded-full bg-brand-gold/20 mb-6">
                            <CheckCircle2 className="text-brand-gold animate-pulse" size={48} />
                        </div>
                        <h2 className="text-3xl font-serif text-white mb-4">Finding Best Rates...</h2>
                        <p className="text-white/60">Redirecting you to our secure reservation engine.</p>
                    </motion.div>
                ) : step === 1 ? (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h2 className="text-3xl font-serif text-white mb-8">Tell us about your trip</h2>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2 relative">
                                    <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Check-In</label>
                                    <div
                                        onClick={() => setIsCheckInOpen(!isCheckInOpen)}
                                        className="relative group cursor-pointer"
                                    >
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-hover:text-brand-gold transition-colors" size={18} />
                                        <div className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white hover:border-brand-gold transition-colors">
                                            {formatDateDisplay(formData.checkIn)}
                                        </div>
                                    </div>
                                    <CustomDatePicker
                                        label="Check-In"
                                        selectedDate={formData.checkIn}
                                        isOpen={isCheckInOpen}
                                        onSelect={(date) => {
                                            setFormData(prev => ({ ...prev, checkIn: date }));
                                            setIsCheckInOpen(false);
                                        }}
                                        onClose={() => setIsCheckInOpen(false)}
                                    />
                                </div>
                                <div className="space-y-2 relative">
                                    <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Check-Out</label>
                                    <div
                                        onClick={() => setIsCheckOutOpen(!isCheckOutOpen)}
                                        className="relative group cursor-pointer"
                                    >
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-hover:text-brand-gold transition-colors" size={18} />
                                        <div className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white hover:border-brand-gold transition-colors">
                                            {formatDateDisplay(formData.checkOut)}
                                        </div>
                                    </div>
                                    <CustomDatePicker
                                        label="Check-Out"
                                        selectedDate={formData.checkOut}
                                        isOpen={isCheckOutOpen}
                                        onSelect={(date) => {
                                            setFormData(prev => ({ ...prev, checkOut: date }));
                                            setIsCheckOutOpen(false);
                                        }}
                                        onClose={() => setIsCheckOutOpen(false)}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Adults</label>
                                    <select
                                        name="adults"
                                        value={formData.adults}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg py-4 px-4 text-white focus:outline-none focus:border-brand-gold transition-colors"
                                    >
                                        {[1, 2, 3, 4].map(n => <option key={n} value={n} className="bg-brand-dark">{n} Adults</option>)}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Children</label>
                                    <select
                                        name="children"
                                        value={formData.children}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg py-4 px-4 text-white focus:outline-none focus:border-brand-gold transition-colors"
                                    >
                                        {[0, 1, 2, 3].map(n => <option key={n} value={n} className="bg-brand-dark">{n} Children</option>)}
                                    </select>
                                </div>
                            </div>

                            <button
                                onClick={handleNext}
                                className="w-full bg-brand-gold text-brand-dark py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all duration-300 mt-8 flex items-center justify-center gap-2 group"
                            >
                                Next Step
                                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <button onClick={handleBack} className="text-white/40 hover:text-brand-gold transition-colors">
                                <ArrowLeft size={24} />
                            </button>
                            <h2 className="text-3xl font-serif text-white">Guest Details</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white focus:outline-none focus:border-brand-gold transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white focus:outline-none focus:border-brand-gold transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Phone Number</label>
                                <div className="flex gap-4">
                                    <select
                                        name="phoneCode"
                                        value={formData.phoneCode}
                                        onChange={handleChange}
                                        className="w-32 bg-white/5 border border-white/10 rounded-lg py-4 px-4 text-white focus:outline-none focus:border-brand-gold transition-colors"
                                    >
                                        {countryCodes.map(c => (
                                            <option key={c.code} value={c.code} className="bg-brand-dark">
                                                {c.flag} {c.code}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="relative flex-1">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            placeholder="812 3456 7890"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white focus:outline-none focus:border-brand-gold transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-brand-gold text-brand-dark py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all duration-300 mt-8 flex items-center justify-center gap-2"
                            >
                                Book Now
                                <ChevronRight size={18} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function BookingPage() {
    return (
        <main className="min-h-screen bg-brand-dark overflow-x-hidden relative">
            <Header />

            {/* Elegant Background Image with Overlay */}
            <div className="fixed inset-0 z-0">
                <Image
                    src="/assets/original/img-fc3f9082-a8d8-4064-baba-377ee1ae4503.jpg"
                    alt="Luxury Background"
                    fill
                    className="object-cover opacity-40 scale-105 animate-[ken-burns_20s_ease-in-out_infinite_alternate]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/40 to-brand-dark/95 z-10"></div>
                {/* Subtle Gold Tint */}
                <div className="absolute inset-0 bg-brand-gold/5 mix-blend-overlay z-20"></div>
            </div>

            <section className="relative pt-32 pb-20 px-6 z-30">
                <div className="container mx-auto max-w-2xl">
                    <Suspense fallback={<div className="text-white text-center py-20 font-serif italic">Loading your sanctuary...</div>}>
                        <BookingForm />
                    </Suspense>
                </div>
            </section>

            <div className="relative z-30">
                <Footer />
            </div>
        </main>
    );
}
