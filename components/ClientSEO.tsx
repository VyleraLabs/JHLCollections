"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ClientSEO() { // exported as default
    const { t, language } = useLanguage();

    useEffect(() => {
        // Update Title
        document.title = `${t.hero.title} - ${t.hero.jewelText}`;

        // Update Meta Description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', t.hero.welcomeDescription || "A 5-star luxury hotel in Gading Serpong, Tangerang.");
        } else {
            // Create if doesn't exist (fallback)
            const meta = document.createElement('meta');
            meta.name = "description";
            meta.content = t.hero.welcomeDescription || "A 5-star luxury hotel in Gading Serpong, Tangerang.";
            document.head.appendChild(meta);
        }

        // Update Open Graph keys if they exist
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', `${t.hero.title} - ${t.hero.jewelText}`);

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', t.hero.welcomeDescription || "");

        // Set HTML lang attribute again to be sure
        document.documentElement.lang = language;

    }, [t, language]);

    return null; // This component renders nothing visually
}
