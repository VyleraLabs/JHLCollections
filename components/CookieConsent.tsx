"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/lib/translations';
import { Globe, X, Check, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const CookieConsent = () => {
    const { t, language, setLanguage } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setIsVisible(false);
    };

    if (!isMounted || !isVisible) return null;

    const languages: { code: Language; label: string }[] = [
        { code: 'en', label: 'English' },
        { code: 'id', label: 'Bahasa' },
        { code: 'zh', label: '中文' },
        { code: 'ru', label: 'Русский' },
        { code: 'ja', label: '日本語' },
        { code: 'ar', label: 'العربية' },
        { code: 'ko', label: '한국어' },
    ];

    return (
        <div className="fixed bottom-6 left-6 right-6 z-[100] animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="max-w-6xl mx-auto">
                <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-xl border border-brand-gold/20 shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-6 md:p-8">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Content */}
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-xl font-serif text-brand-dark mb-2 flex items-center justify-center md:justify-start gap-2">
                                <span className="w-8 h-[1px] bg-brand-gold hidden md:block"></span>
                                {t.cookies.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed max-w-3xl">
                                {t.cookies.message}{' '}
                                <Link
                                    href="/privacy-policy"
                                    className="text-brand-gold hover:text-brand-gold-hover underline underline-offset-4 transition-colors font-medium inline-flex items-center gap-1"
                                >
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                    {t.cookies.policy}
                                </Link>
                            </p>
                        </div>

                        {/* Controls */}
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            {/* Language Switcher inside Cookie Bar */}
                            <div className="flex flex-wrap items-center justify-center gap-2 px-4 py-2 bg-black/5 rounded-full border border-black/5">
                                <Globe className="w-4 h-4 text-brand-gold mr-1" />
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => setLanguage(lang.code)}
                                        className={`px-2 py-1 text-xs font-medium rounded transition-all duration-300 ${language === lang.code
                                            ? 'text-brand-gold bg-brand-dark/5 shadow-sm'
                                            : 'text-gray-500 hover:text-brand-gold'
                                            }`}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={handleDecline}
                                    className="px-6 py-2 text-sm font-medium text-gray-500 hover:text-brand-dark hover:bg-black/5 rounded-lg transition-all duration-300"
                                >
                                    {t.cookies.decline}
                                </button>
                                <button
                                    onClick={handleAccept}
                                    className="px-8 py-2.5 text-sm font-bold text-white bg-brand-dark hover:bg-brand-gold rounded-lg shadow-lg hover:shadow-brand-gold/20 transition-all duration-300 flex items-center gap-2"
                                >
                                    <Check className="w-4 h-4" />
                                    {t.cookies.accept}
                                </button>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute top-4 right-4 p-1 text-gray-400 hover:text-brand-dark transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
