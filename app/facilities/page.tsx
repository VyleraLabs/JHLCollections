
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Facilities() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-brand-off-white">
            <Header />

            {/* Hero Section */}
            <div className="relative h-[60vh] bg-gray-900">
                <Image
                    src="/assets/original/12-edit.jpg"
                    alt="Iconic Pool & Lifestyle Facilities"
                    fill
                    className="object-cover opacity-70"
                    priority
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
                    <h1 className="font-serif text-5xl md:text-7xl mb-4 drop-shadow-lg">{t.pages.facilities.hero.title}</h1>
                    <p className="font-sans tracking-[0.4em] uppercase text-sm md:text-base opacity-90">{t.pages.facilities.hero.subtitle}</p>
                </div>
            </div>

            {/* Main Content */}
            <Section className="text-center max-w-5xl mx-auto px-6">
                <p className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-6">{t.pages.facilities.content.tag}</p>
                <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-8 italic">{t.pages.facilities.content.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-16 text-lg max-w-3xl mx-auto">
                    {t.pages.facilities.content.desc}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                    <div className="group">
                        <div className="relative h-80 w-full mb-6 overflow-hidden rounded-sm">
                            <Image
                                src="/assets/original/infinitypool.jpg"
                                alt="Signature Infinity Pool"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="font-serif text-2xl mb-4 text-brand-dark">{t.pages.facilities.items.pool.name}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {t.pages.facilities.items.pool.desc}
                        </p>
                    </div>

                    <div className="group">
                        <div className="relative h-80 w-full mb-6 overflow-hidden rounded-sm">
                            <Image
                                src="/assets/original/img-1f1dc5b2-25c7-47a8-8d9a-3aee88c3d769.webp"
                                alt="Modern Fitness Center"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="font-serif text-2xl mb-4 text-brand-dark">{t.pages.facilities.items.fitness.name}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {t.pages.facilities.items.fitness.desc}
                        </p>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
