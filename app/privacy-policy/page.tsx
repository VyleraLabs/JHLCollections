"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPolicy() {
    const { t, language } = useLanguage();

    return (
        <main className={`min-h-screen bg-white ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            <Header />

            {/* Hero */}
            <div className="relative pt-40 pb-20 bg-brand-dark text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-serif text-4xl md:text-5xl mb-4 text-brand-gold">{t.pages.privacy.title}</h1>
                    <p className="text-white/60 uppercase tracking-widest text-xs">
                        {t.pages.privacy.lastUpdated}
                    </p>
                </div>
            </div>

            <Section>
                <div className="max-w-3xl mx-auto py-10">
                    <p className="text-lg text-gray-600 leading-relaxed mb-16 font-light">
                        {t.pages.privacy.content}
                    </p>

                    <div className="space-y-12">
                        <div className="bg-brand-off-white/50 p-8 md:p-12 border-l-4 border-brand-gold rounded-r-lg shadow-sm">
                            <h2 className="text-2xl font-serif text-brand-dark mb-6">
                                {t.pages.privacy.sections.storage.title}
                            </h2>
                            <div className="text-gray-700 leading-relaxed whitespace-pre-line text-justify">
                                {t.pages.privacy.sections.storage.content}
                            </div>
                        </div>

                        {/* General luxury placeholder content for completeness */}
                        <div className="text-gray-600 space-y-6">
                            <p>
                                We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
                            </p>
                            <p>
                                When you visit our website and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we describe our privacy policy. We seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
