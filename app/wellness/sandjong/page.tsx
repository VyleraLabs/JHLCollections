"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SandjongHero from "@/components/sandjong/SandjongHero";
import SandjongAbout from "@/components/sandjong/SandjongAbout";
import SandjongMenu from "@/components/sandjong/SandjongMenu";
import JsonLd from "@/components/JsonLd";
import { useLanguage } from '@/context/LanguageContext';

export default function SandjongPage() {
    const { t } = useLanguage();
    const spaSchema = {
        "@context": "https://schema.org",
        "@type": "HealthAndBeautyBusiness",
        "name": "Sandjong Spa",
        "description": "A Javanese heritage luxury spa at JHL Solitaire Gading Serpong.",
        "image": "https://jhlcollections.com/assets/sandjong/hero.mp4",
        "priceRange": "$$$",
        "parentOrganization": {
            "@type": "Hotel",
            "name": "JHL Solitaire Gading Serpong"
        },
        "location": {
            "@type": "Place",
            "name": "JHL Solitaire, Wellness Floor"
        }
    };

    return (
        <main className="min-h-screen bg-brand-off-white selection:bg-brand-gold selection:text-white">
            <JsonLd data={spaSchema} />
            <Header />

            <SandjongHero />

            <SandjongAbout />

            <SandjongMenu />

            {/* Reservation / Footer CTA */}
            <section id="reservation" className="py-20 bg-brand-off-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="font-serif text-4xl text-brand-dark mb-6">{t.pages.sandjong.reservation.title}</h2>
                    <p className="text-gray-600 mb-8 font-light">
                        {t.pages.sandjong.reservation.desc}
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-brand-dark text-white px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-brand-gold transition-colors duration-300">
                            {t.pages.sandjong.reservation.bookOnline}
                        </button>
                        <button className="border border-brand-dark text-brand-dark px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-brand-dark hover:text-white transition-colors duration-300">
                            {t.pages.sandjong.reservation.contactUs}
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
