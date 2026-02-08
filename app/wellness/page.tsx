
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Wellness() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-brand-off-white">
            <Header />
            <div className="relative h-[60vh] bg-gray-900">
                <Image
                    src="/assets/original/img-5987e456-e67b-49c7-914b-ae0761591f47.webp"
                    alt="Wellness Hero"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="font-serif text-5xl md:text-6xl mb-4">{t.pages.wellness.hero.title}</h1>
                    <p className="font-sans tracking-widest uppercase">{t.pages.wellness.hero.subtitle}</p>
                </div>
            </div>
            <Section className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6">{t.pages.wellness.content.title}</h2>
                    <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
                        {t.pages.wellness.content.desc}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {Object.entries(t.pages.wellness.venues).map(([key, venue]) => (
                        <div key={key} className="bg-white p-8 border border-brand-gold/20 hover:border-brand-gold transition-all duration-300 flex flex-col items-center text-center shadow-sm hover:shadow-md group">
                            <div className="w-16 h-16 mb-6 flex items-center justify-center bg-brand-off-white rounded-full group-hover:bg-brand-gold/10 transition-colors">
                                {key === 'acqua' && <span className="text-brand-gold text-3xl">💧</span>}
                                {key === 'sandjong' && <span className="text-brand-gold text-3xl">🌿</span>}
                                {key === 'acquaree' && <span className="text-brand-gold text-3xl">🎈</span>}
                                {key === 'laMere' && <span className="text-brand-gold text-3xl">✨</span>}
                            </div>
                            <h3 className="text-xl font-serif text-brand-dark mb-2">{venue.name}</h3>
                            <p className="text-brand-gold text-[10px] uppercase tracking-[0.2em] mb-4 font-bold">{venue.type}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {venue.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center border-t border-brand-gold/10 pt-12">
                    <button className="bg-brand-gold text-white px-10 py-4 uppercase text-sm font-bold tracking-widest hover:bg-brand-gold-hover transition-all transform hover:-translate-y-1">
                        {t.categories.wellness.cta}
                    </button>
                </div>
            </Section>
            <Footer />
        </main>
    );
}
