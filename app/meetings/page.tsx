
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Meetings() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-brand-off-white">
            <Header />
            <div className="relative h-[60vh] bg-gray-900">
                <Image
                    src="/assets/original/img-7fca6da7-689b-466d-9dac-18c9c47dcda1.webp"
                    alt="Meetings Hero"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="font-serif text-5xl md:text-6xl mb-4">{t.pages.meetings.hero.title}</h1>
                    <p className="font-sans tracking-widest uppercase">{t.pages.meetings.hero.subtitle}</p>
                </div>
            </div>
            <Section className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6">{t.pages.meetings.venues.title}</h2>
                    <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
                        {t.pages.meetings.content.desc}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    {/* Sky Ballroom */}
                    <div className="bg-white border border-brand-gold/20 hover:border-brand-gold transition-all duration-300 shadow-sm overflow-hidden flex flex-col group">
                        <div className="h-64 bg-gray-900 relative">
                            <Image
                                src="/assets/original/img-ef7c98e1-d5f0-4d5e-8f2c-674b5c7d8f9a.webp"
                                alt="Sky Ballroom"
                                fill
                                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 left-6 text-white text-xs uppercase tracking-[0.2em] font-bold">Indoor (Level 15)</div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-2xl font-serif text-brand-dark mb-4">{t.pages.meetings.venues.skyBallroom.name}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                                {t.pages.meetings.venues.skyBallroom.description}
                            </p>
                            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-brand-gold/10">
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-1">Ceremony</p>
                                    <p className="text-brand-dark font-serif text-lg">{t.pages.meetings.venues.skyBallroom.ceremony}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-1">Reception</p>
                                    <p className="text-brand-dark font-serif text-lg">{t.pages.meetings.venues.skyBallroom.reception}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sky Garden */}
                    <div className="bg-white border border-brand-gold/20 hover:border-brand-gold transition-all duration-300 shadow-sm overflow-hidden flex flex-col group">
                        <div className="h-64 bg-gray-900 relative">
                            <Image
                                src="/assets/original/img-6e7c98e1-d5f0-4d5e-8f2c-674b5c7d8f9a.webp"
                                alt="Sky Garden"
                                fill
                                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 left-6 text-white text-xs uppercase tracking-[0.2em] font-bold">Rooftop / Private</div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-2xl font-serif text-brand-dark mb-4">{t.pages.meetings.venues.skyGarden.name}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                                {t.pages.meetings.venues.skyGarden.description}
                            </p>
                            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-brand-gold/10">
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-1">Ceremony</p>
                                    <p className="text-brand-dark font-serif text-lg">{t.pages.meetings.venues.skyGarden.ceremony}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-1">Reception</p>
                                    <p className="text-brand-dark font-serif text-lg">{t.pages.meetings.venues.skyGarden.reception}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Royal Eight */}
                    <div className="bg-white border border-brand-gold/20 hover:border-brand-gold transition-all duration-300 shadow-sm overflow-hidden flex flex-col group">
                        <div className="h-64 bg-gray-900 relative">
                            <Image
                                src="/assets/original/img-5e7c98e1-d5f0-4d5e-8f2c-674b5c7d8f9a.webp"
                                alt="Royal Eight"
                                fill
                                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 left-6 text-white text-xs uppercase tracking-[0.2em] font-bold">Indoor Dining</div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-2xl font-serif text-brand-dark mb-4">{t.pages.meetings.venues.royalEight.name}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                                {t.pages.meetings.venues.royalEight.description}
                            </p>
                            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-brand-gold/10">
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-1">Ceremony</p>
                                    <p className="text-brand-dark font-serif text-lg">{t.pages.meetings.venues.royalEight.ceremony}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-1">Reception</p>
                                    <p className="text-brand-dark font-serif text-lg">{t.pages.meetings.venues.royalEight.reception}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Packages Section */}
                <div className="bg-brand-dark text-white p-16 text-center border-l-4 border-brand-gold">
                    <h2 className="text-3xl md:text-4xl font-serif mb-8">{t.pages.meetings.packages.title}</h2>
                    <p className="text-gray-300 max-w-4xl mx-auto mb-12 text-lg leading-relaxed italic font-serif">
                        &quot;{t.pages.meetings.packages.desc}&quot;
                    </p>
                    <button className="bg-brand-gold text-white px-12 py-5 uppercase text-sm font-bold tracking-widest hover:bg-brand-gold-hover transition-all transform hover:-translate-y-1">
                        {t.pages.meetings.cta}
                    </button>
                </div>
            </Section>
            <Footer />
        </main>
    );
}
