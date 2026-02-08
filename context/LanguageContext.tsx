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

        if (savedLang && supportedLangs.includes(savedLang)) {
            setLanguageState(savedLang);
            document.documentElement.lang = savedLang;
            document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
        } else {
            // Check browser preference
            const browserLang = navigator.language.split('-')[0];
            if (browserLang === 'zh') {
                setLanguageState('zh');
            } else if (browserLang === 'id' || browserLang === 'in') {
                setLanguageState('id');
            } else if (browserLang === 'ru') {
                setLanguageState('ru');
            } else if (browserLang === 'ja') {
                setLanguageState('ja');
            } else if (browserLang === 'ar') {
                setLanguageState('ar');
                document.documentElement.dir = 'rtl';
            } else if (browserLang === 'ko') {
                setLanguageState('ko');
            }
        }
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
