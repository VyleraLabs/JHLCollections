"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, Translations } from '@/lib/translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Language>('en');

    useEffect(() => {
        const savedLang = localStorage.getItem('language') as Language;
        const supportedLangs: Language[] = ['en', 'zh', 'id', 'ru', 'ja', 'ar', 'ko'];

        let initialLang: Language = 'en';

        if (savedLang && supportedLangs.includes(savedLang)) {
            initialLang = savedLang;
        } else {
            // Check browser preference
            const browserLang = navigator.language.split('-')[0];
            if (browserLang === 'zh') {
                initialLang = 'zh';
            } else if (browserLang === 'id' || browserLang === 'in') {
                initialLang = 'id';
            } else if (browserLang === 'ru') {
                initialLang = 'ru';
            } else if (browserLang === 'ja') {
                initialLang = 'ja';
            } else if (browserLang === 'ar') {
                initialLang = 'ar';
            } else if (browserLang === 'ko') {
                initialLang = 'ko';
            }
        }

        setLanguageState(initialLang);
        document.documentElement.lang = initialLang;
        document.documentElement.dir = initialLang === 'ar' ? 'rtl' : 'ltr';
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
        // Also update html lang attribute
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    };

    const value = {
        language,
        setLanguage,
        t: translations[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
