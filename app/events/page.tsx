
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
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
            <Section className="px-0 max-w-none overflow-x-hidden">
                <div className="text-center mb-16 px-4 max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6">{t.pages.meetings.venues.title}</h2>
                    <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
                        {t.pages.meetings.content.desc}
                    </p>
                </div>

                {/* Sky Ballroom - Full width with overlay */}
                <div className="relative h-[70vh] lg:h-[80vh] mb-2 group overflow-hidden">
                    <Image
                        src="/assets/meetings/sky-ballroom-venue.jpg"
                        alt="Sky Ballroom"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

                    {/* Floating overlay card */}
                    <div className="absolute inset-0 flex items-center justify-start px-4 lg:px-20">
                        <div className="bg-white/70 lg:bg-white/90 backdrop-blur-sm p-6 lg:p-12 max-w-sm lg:max-w-xl shadow-2xl">
                            <div className="inline-block px-6 py-2 mb-4 bg-brand-dark/5 border-l-4 border-brand-gold">
                                <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-bold">Indoor (Level 15)</span>
                            </div>
                            <h3 className="text-2xl lg:text-5xl font-serif text-brand-dark mb-3 lg:mb-4 leading-tight">{t.pages.meetings.venues.skyBallroom.name}</h3>
                            <p className="text-gray-700 text-sm lg:text-lg leading-relaxed mb-4 lg:mb-6 line-clamp-3 lg:line-clamp-none">
                                {t.pages.meetings.venues.skyBallroom.description}
                            </p>
                            <div className="grid grid-cols-2 gap-4 lg:gap-6">
                                <div className="border-l-2 border-brand-gold/30 pl-4">
                                    <p className="text-xs uppercase tracking-widest text-brand-gold/70 font-bold mb-1">Ceremony</p>
                                    <p className="text-brand-dark font-serif text-xl lg:text-3xl">{t.pages.meetings.venues.skyBallroom.ceremony}</p>
                                </div>
                                <div className="border-l-2 border-brand-gold/30 pl-4">
                                    <p className="text-xs uppercase tracking-widest text-brand-gold/70 font-bold mb-1">Reception</p>
                                    <p className="text-brand-dark font-serif text-xl lg:text-3xl">{t.pages.meetings.venues.skyBallroom.reception}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sky Garden - Full width with overlay on right */}
                <div className="relative h-[70vh] lg:h-[80vh] mb-2 group overflow-hidden">
                    <Image
                        src="/assets/meetings/sky-garden-venue.webp"
                        alt="Sky Garden"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent" />

                    {/* Floating overlay card on right */}
                    <div className="absolute inset-0 flex items-center justify-end px-4 lg:px-20">
                        <div className="bg-white/70 lg:bg-white/90 backdrop-blur-sm p-6 lg:p-12 max-w-sm lg:max-w-xl shadow-2xl">
                            <div className="inline-block px-6 py-2 mb-4 bg-brand-dark/5 border-l-4 border-brand-gold">
                                <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-bold">Rooftop / Private</span>
                            </div>
                            <h3 className="text-2xl lg:text-5xl font-serif text-brand-dark mb-3 lg:mb-4 leading-tight">{t.pages.meetings.venues.skyGarden.name}</h3>
                            <p className="text-gray-700 text-sm lg:text-lg leading-relaxed mb-4 lg:mb-6 line-clamp-3 lg:line-clamp-none">
                                {t.pages.meetings.venues.skyGarden.description}
                            </p>
                            <div className="grid grid-cols-2 gap-4 lg:gap-6">
                                <div className="border-l-2 border-brand-gold/30 pl-4">
                                    <p className="text-xs uppercase tracking-widest text-brand-gold/70 font-bold mb-1">Ceremony</p>
                                    <p className="text-brand-dark font-serif text-xl lg:text-3xl">{t.pages.meetings.venues.skyGarden.ceremony}</p>
                                </div>
                                <div className="border-l-2 border-brand-gold/30 pl-4">
                                    <p className="text-xs uppercase tracking-widest text-brand-gold/70 font-bold mb-1">Reception</p>
                                    <p className="text-brand-dark font-serif text-xl lg:text-3xl">{t.pages.meetings.venues.skyGarden.reception}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Royal Eight - Full width with overlay, clickable */}
                <Link href="/dining/royal-eight" className="block relative h-[70vh] lg:h-[80vh] mb-2 group overflow-hidden cursor-pointer">
                    <Image
                        src="/assets/meetings/royal-eight-venue.webp"
                        alt="Royal Eight Chinese Dining"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

                    {/* Floating overlay card */}
                    <div className="absolute inset-0 flex items-center justify-start px-4 lg:px-20">
                        <div className="bg-white/70 lg:bg-white/90 backdrop-blur-sm p-6 lg:p-12 max-w-sm lg:max-w-xl shadow-2xl group-hover:bg-white/95 transition-all duration-300">
                            <div className="inline-block px-6 py-2 mb-4 bg-brand-dark/5 border-l-4 border-brand-gold">
                                <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-bold">Indoor Dining</span>
                            </div>
                            <h3 className="text-2xl lg:text-5xl font-serif text-brand-dark mb-3 lg:mb-4 leading-tight group-hover:text-brand-gold transition-colors duration-300">{t.pages.meetings.venues.royalEight.name}</h3>
                            <p className="text-gray-700 text-sm lg:text-lg leading-relaxed mb-4 lg:mb-6 line-clamp-3 lg:line-clamp-none">
                                {t.pages.meetings.venues.royalEight.description}
                            </p>
                            <div className="grid grid-cols-2 gap-4 lg:gap-6 mb-4 lg:mb-6">
                                <div className="border-l-2 border-brand-gold/30 pl-4">
                                    <p className="text-xs uppercase tracking-widest text-brand-gold/70 font-bold mb-1">Ceremony</p>
                                    <p className="text-brand-dark font-serif text-xl lg:text-3xl">{t.pages.meetings.venues.royalEight.ceremony}</p>
                                </div>
                                <div className="border-l-2 border-brand-gold/30 pl-4">
                                    <p className="text-xs uppercase tracking-widest text-brand-gold/70 font-bold mb-1">Reception</p>
                                    <p className="text-brand-dark font-serif text-xl lg:text-3xl">{t.pages.meetings.venues.royalEight.reception}</p>
                                </div>
                            </div>
                            <div className="flex items-center text-brand-gold group-hover:translate-x-2 transition-transform duration-300">
                                <span className="text-sm uppercase tracking-widest font-bold">Explore Dining</span>
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Packages Section */}
                <div className="bg-brand-dark text-white p-16 text-center border-l-4 border-brand-gold">
                    <h2 className="text-3xl md:text-4xl font-serif mb-8">{t.pages.meetings.packages.title}</h2>
                    <p className="text-gray-300 max-w-4xl mx-auto mb-12 text-lg leading-relaxed italic font-serif">
                        &quot;{t.pages.meetings.packages.desc}&quot;
                    </p>
                    <button className="bg-white text-brand-dark px-12 py-5 uppercase text-sm font-bold tracking-widest hover:bg-brand-gold hover:text-white transition-all transform hover:-translate-y-1">
                        {t.pages.meetings.cta}
                    </button>
                </div>
            </Section>
            <Footer />
        </main>
    );
}
