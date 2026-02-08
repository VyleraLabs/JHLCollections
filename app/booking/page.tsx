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
import { useLanguage } from "@/context/LanguageContext";

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

const ValidationError = ({ message }: { message: string | null }) => (
    <AnimatePresence>
        {message && (
            <motion.div
                initial={{ opacity: 0, y: 5, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                className="absolute top-full left-0 mt-2 bg-red-500/90 text-white text-[10px] py-1 px-3 rounded shadow-lg backdrop-blur-sm z-50 flex items-center gap-2"
            >
                <span className="w-1 h-1 bg-white rounded-full animate-pulse" />
                {message}
            </motion.div>
        )}
    </AnimatePresence>
);

function BookingForm() {
    const { t } = useLanguage();
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

    const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

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
        if (!dateStr) return t.bookingPage.selectDate;
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // Clear error for this field when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }

        // Block < and > signs proactively for name and general text inputs
        if (name === "name" || name === "phone" || name === "email") {
            if (/[<>]/.test(value)) {
                setErrors(prev => ({ ...prev, [name]: t.bookingPage.validation.specialChars }));

                // Auto-dismiss after 3 seconds
                setTimeout(() => {
                    setErrors(prev => ({ ...prev, [name]: null }));
                }, 3000);
                return;
            }
        }

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
            .replace(/<[^>]*>?/gm, '') // Remove all HTML tags
            .replace(/[&<>"']/g, (m) => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            }[m] || m))
            .replace(/javascript:/gi, '') // Block javascript: protocol
            .replace(/onerror/gi, '') // Block common event handlers
            .replace(/onload/gi, '')
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
        if (!formData.name.trim() || formData.name.length < 2) {
            setErrors(prev => ({ ...prev, name: t.bookingPage.validation.nameRequired }));
            return;
        }
        if (/[<>]/.test(formData.name) || /<script/i.test(formData.name)) {
            setErrors(prev => ({ ...prev, name: t.bookingPage.validation.nameInvalid }));
            return;
        }
        if (!validateEmail(formData.email)) {
            setErrors(prev => ({ ...prev, email: t.bookingPage.validation.emailInvalid }));
            return;
        }
        if (!validatePhone(formData.phone)) {
            setErrors(prev => ({ ...prev, phone: t.bookingPage.validation.phoneInvalid }));
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
            className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative z-[10] !overflow-visible"
        >
            {/* Progress Bar */}
            <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= 1 ? 'bg-brand-gold text-brand-dark' : 'bg-white/10 text-white/40'}`}>1</div>
                    <div className={`h-[2px] w-12 transition-colors ${step >= 2 ? 'bg-brand-gold' : 'bg-white/10'}`}></div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= 2 ? 'bg-brand-gold text-brand-dark' : 'bg-white/10 text-white/40'}`}>2</div>
                </div>
                <span className="text-brand-gold font-serif italic text-lg">{t.bookingPage.planYourStay}</span>
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
                        <h2 className="text-3xl font-serif text-white mb-4">{t.bookingPage.findingRates}</h2>
                        <p className="text-white/60">{t.bookingPage.redirecting}</p>
                    </motion.div>
                ) : step === 1 ? (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h2 className="text-3xl font-serif text-white mb-8">{t.bookingPage.tellUsAboutTrip}</h2>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2 relative">
                                    <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">{t.bookingPage.checkInLabel}</label>
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
                                        side="bottom"
                                        minDate={new Date().toISOString().split("T")[0]} // Disable past dates
                                        onSelect={(date) => {
                                            // Auto-adjust checkout if invalid
                                            const newCheckIn = new Date(date);
                                            const currentCheckOut = formData.checkOut ? new Date(formData.checkOut) : null;

                                            let newCheckOut = formData.checkOut;
                                            if (currentCheckOut && currentCheckOut <= newCheckIn) {
                                                const nextDay = new Date(newCheckIn);
                                                nextDay.setDate(nextDay.getDate() + 1);
                                                newCheckOut = nextDay.toISOString().split("T")[0];
                                            }

                                            setFormData(prev => ({
                                                ...prev,
                                                checkIn: date,
                                                checkOut: newCheckOut
                                            }));
                                            setIsCheckInOpen(false);
                                        }}
                                        onClose={() => setIsCheckInOpen(false)}
                                    />
                                </div>
                                <div className="space-y-2 relative">
                                    <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">{t.bookingPage.checkOutLabel}</label>
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
                                        label={t.bookingPage.checkOutLabel}
                                        selectedDate={formData.checkOut}
                                        isOpen={isCheckOutOpen}
                                        side="bottom"
                                        minDate={formData.checkIn ? (() => {
                                            const d = new Date(formData.checkIn);
                                            d.setDate(d.getDate() + 1);
                                            return d.toISOString().split("T")[0];
                                        })() : new Date().toISOString().split("T")[0]} // Min check-out is check-in + 1 day
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
                                    <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">{t.bookingPage.adultsLabel}</label>
                                    <select
                                        id="adults-select"
                                        name="adults"
                                        aria-label={t.bookingPage.adultsLabel}
                                        value={formData.adults}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg py-4 px-4 text-white focus:outline-none focus:border-brand-gold transition-colors"
                                    >
                                        {[1, 2, 3, 4].map(n => <option key={n} value={n} className="bg-brand-dark">{n} {t.bookingPage.adultsCount}</option>)}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">{t.bookingPage.childrenLabel}</label>
                                    <select
                                        id="children-select"
                                        name="children"
                                        aria-label={t.bookingPage.childrenLabel}
                                        value={formData.children}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg py-4 px-4 text-white focus:outline-none focus:border-brand-gold transition-colors"
                                    >
                                        {[0, 1, 2, 3].map(n => <option key={n} value={n} className="bg-brand-dark">{n} {t.bookingPage.childrenCount}</option>)}
                                    </select>
                                </div>
                            </div>

                            <button
                                onClick={handleNext}
                                className="w-full bg-brand-gold text-brand-dark py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all duration-300 mt-8 flex items-center justify-center gap-2 group"
                            >
                                {t.bookingPage.nextStep}
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
                            <h2 className="text-3xl font-serif text-white">{t.bookingPage.guestDetails}</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">{t.bookingPage.fullName}</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        placeholder={t.bookingPage.fullNamePlaceholder}
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full bg-white/5 border rounded-lg py-4 pl-12 pr-4 text-white focus:outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-white/10 focus:border-brand-gold'}`}
                                    />
                                    <ValidationError message={errors.name} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">{t.bookingPage.emailAddress}</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        placeholder={t.bookingPage.emailPlaceholder}
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full bg-white/5 border rounded-lg py-4 pl-12 pr-4 text-white focus:outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-white/10 focus:border-brand-gold'}`}
                                    />
                                    <ValidationError message={errors.email} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">{t.bookingPage.phoneNumber}</label>
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
                                            placeholder={t.bookingPage.phonePlaceholder}
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={`w-full bg-white/5 border rounded-lg py-4 pl-12 pr-4 text-white focus:outline-none transition-colors ${errors.phone ? 'border-red-500' : 'border-white/10 focus:border-brand-gold'}`}
                                        />
                                        <ValidationError message={errors.phone} />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-brand-gold text-brand-dark py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all duration-300 mt-8 flex items-center justify-center gap-2"
                            >
                                {t.bookingPage.bookNow}
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
    const { t } = useLanguage();
    const [showVideo, setShowVideo] = useState(false);
    const [videoPlaying, setVideoPlaying] = useState(false);

    useEffect(() => {
        // Delay video loading to prioritize initial paint and LCP (image)
        const timer = setTimeout(() => setShowVideo(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    // Schema Markup for SEO
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://jhlcollections.com/jhlsolitaire/booking",
                "url": "https://jhlcollections.com/jhlsolitaire/booking",
                "name": `${t.bookingPage.planYourStay} - JHL Solitaire Gading Serpong`,
                "description": "Book your luxury stay at JHL Solitaire Gading Serpong. Premium 5-star hotel reservation system.",
                "isPartOf": {
                    "@id": "https://jhlcollections.com/jhlsolitaire"
                },
                "breadcrumb": {
                    "@id": "https://jhlcollections.com/jhlsolitaire/booking#breadcrumb"
                },
                "potentialAction": {
                    "@type": "ReserveAction",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://jhlcollections.com/jhlsolitaire/booking?checkIn={checkIn}&checkOut={checkOut}&adults={adults}&children={children}",
                        "actionPlatform": [
                            "http://schema.org/DesktopWebPlatform",
                            "http://schema.org/MobileWebPlatform"
                        ]
                    },
                    "result": {
                        "@type": "LodgingReservation",
                        "reservationFor": {
                            "@type": "Hotel",
                            "name": "JHL Solitaire Gading Serpong",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Jl. Gading Serpong Boulevard Barat Blok S No.5",
                                "addressLocality": "Tangerang",
                                "addressRegion": "Banten",
                                "postalCode": "15810",
                                "addressCountry": "ID"
                            },
                            "telephone": "+62-21-5421-8888",
                            "starRating": {
                                "@type": "Rating",
                                "ratingValue": "5"
                            }
                        }
                    }
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://jhlcollections.com/jhlsolitaire/booking#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://jhlcollections.com/jhlsolitaire"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Booking",
                        "item": "https://jhlcollections.com/jhlsolitaire/booking"
                    }
                ]
            }
        ]
    };

    return (
        <main className="min-h-screen bg-brand-dark relative !overflow-visible">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />
            <Header />

            {/* Optimized Background with Lazy Video */}
            <div className="fixed inset-0 z-0">
                {/* Immediate LCP Image - Fades out when video starts */}
                <motion.div
                    animate={{ opacity: videoPlaying ? 0 : 0.4 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src="/assets/original/img-fc3f9082-a8d8-4064-baba-377ee1ae4503.jpg"
                        alt="Luxury Sanctuary Background"
                        fill
                        priority
                        className="object-cover blur-[2px]"
                    />
                </motion.div>

                {showVideo && (
                    <motion.video
                        initial={{ opacity: 0 }}
                        animate={{ opacity: videoPlaying ? 0.8 : 0 }}
                        transition={{ duration: 1 }}
                        autoPlay
                        muted
                        loop
                        playsInline
                        onPlaying={() => setVideoPlaying(true)}
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/assets/original/vdo-d470790c-8679-4b47-b6c7-f529221aea1e.mp4" type="video/mp4" />
                    </motion.video>
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 z-10"></div>
                {/* Subtle Gold Tint */}
                <div className="absolute inset-0 bg-brand-gold/5 mix-blend-overlay z-20"></div>
            </div>


            <section className="relative pt-40 pb-[400px] px-6 z-40 !overflow-visible">
                <div className="container mx-auto max-w-2xl !overflow-visible relative z-50">
                    <Suspense fallback={<div className="text-white text-center py-20 font-serif italic">{t.bookingPage.loadingSanctuary}</div>}>
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
