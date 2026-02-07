
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import { Utensils, GlassWater, Coffee, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Dining() {
    const { t } = useLanguage();

    const venues = [
        {
            name: "Mangan All Day Dining",
            type: t.dining.venues.mangan.type,
            desc: t.dining.venues.mangan.desc,
            image: "/assets/original/mangan.webp",
            icon: Utensils,
            href: "#"
        },
        {
            name: "Al Gusto Italian Dining and Bar",
            type: t.dining.venues.alGusto.type,
            desc: t.dining.venues.alGusto.desc,
            image: "/assets/original/algusto.webp",
            icon: GlassWater,
            href: "#"
        },
        {
            name: "Royal Eight Chinese Dining",
            type: t.dining.venues.royalEight.type,
            desc: t.dining.venues.royalEight.desc,
            image: "/assets/original/img-c846a4d7-ba07-4e74-be1a-a6621114eb15.webp",
            icon: Utensils,
            href: "/dining/royal-eight"
        },
        {
            name: "Empress China Bar",
            type: t.dining.venues.empress.type,
            desc: t.dining.venues.empress.desc,
            image: "/assets/original/img-18c2e520-f15d-415a-a07b-f27bb31373ee.webp",
            icon: GlassWater,
            href: "#"
        },
        {
            name: "Castro Lounge & Cigar Bar",
            type: t.dining.venues.castro.type,
            desc: t.dining.venues.castro.desc,
            image: "/assets/original/castro.webp",
            icon: Coffee,
            href: "#"
        },
        {
            name: "Le Bléu Cafe des Fleurs",
            type: t.dining.venues.leBleu.type,
            desc: t.dining.venues.leBleu.desc,
            image: "/assets/original/lableu.webp",
            icon: Coffee,
            href: "#"
        }
    ];

    return (
        <main className="min-h-screen bg-brand-off-white">
            <Header />

            {/* Hero */}
            <div className="relative h-[60vh] bg-gray-900">
                <Image
                    src="/assets/original/img-18c2e520-f15d-415a-a07b-f27bb31373ee.webp"
                    alt="Dining Hero"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="font-serif text-5xl md:text-6xl mb-4">{t.dining.title}</h1>
                    <p className="font-sans tracking-widest uppercase">{t.dining.subtitle}</p>
                </div>
            </div>

            <Section>
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-serif text-brand-dark mb-6">{t.dining.title}</h2>
                    <p className="text-gray-600">
                        {t.dining.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {venues.map((venue) => (
                        <div key={venue.name} className="bg-white group hover:shadow-xl transition-shadow duration-300 rounded-sm overflow-hidden">
                            <div className="relative h-[250px] overflow-hidden">
                                <Image
                                    src={venue.image}
                                    alt={venue.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full text-brand-gold">
                                    <venue.icon size={20} />
                                </div>
                            </div>
                            <div className="p-8">
                                <span className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-2 block">{venue.type}</span>
                                <h3 className="text-2xl font-serif text-brand-dark mb-4">{venue.name}</h3>
                                <p className="text-gray-600 text-sm mb-6 line-clamp-3">{venue.desc}</p>

                                <div className="flex items-center text-xs text-gray-500 mb-6">
                                    <Clock size={14} className="mr-2" />
                                    <span>{t.dining.openDaily}</span>
                                </div>

                                <Link href={venue.href} className="inline-block border-b border-brand-dark pb-1 text-brand-dark font-medium hover:text-brand-gold hover:border-brand-gold transition-colors">
                                    {t.dining.viewMenu}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Footer />
        </main>
    );
}
