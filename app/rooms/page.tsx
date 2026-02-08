
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import { Wifi, Tv, Coffee, Wind } from "lucide-react";
import JsonLd from "@/components/JsonLd";

export default function Rooms() {
    const { t } = useLanguage();

    const rooms = [
        {
            name: "Premier Room",
            desc: t.pages.rooms.roomTypes.premier.desc,
            price: "IDR 1,800,000",
            priceValue: 1800000,
            image: "/assets/original/img-24a5fc2c-d787-414c-8a78-a919e9b9b2d4.webp"
        },
        {
            name: "Executive Suite",
            desc: t.pages.rooms.roomTypes.executive.desc,
            price: "IDR 3,200,000",
            priceValue: 3200000,
            image: "/assets/original/img-93fce4d6-af81-4e27-b726-55da2332debe.webp"
        },
        {
            name: "JHL Solitaire Signature",
            desc: t.pages.rooms.roomTypes.signature.desc,
            price: "IDR 5,500,000",
            priceValue: 5500000,
            image: "/assets/original/img-8d509d57-ebcc-4fd8-af90-355871a4ae75.webp"
        }
    ];

    const roomsSchema = {
        "@context": "https://schema.org",
        "@type": "Hotel",
        "name": "JHL Solitaire Gading Serpong",
        "description": "5-Star Luxury Hotel in Gading Serpong featuring 141 elegantly appointed rooms and suites.",
        "url": "https://jhlcollections.com/rooms",
        "parentOrganization": {
            "@type": "Hotel",
            "name": "JHL Solitaire Gading Serpong"
        },
        "containsPlace": rooms.map(room => ({
            "@type": "HotelRoom",
            "name": room.name,
            "description": room.desc,
            "image": `https://jhlcollections.com${room.image}`,
            "occupancy": {
                "@type": "QuantitativeValue",
                "value": 2,
                "unitCode": "C62" // Person
            },
            "bed": {
                "@type": "BedDetails",
                "numberOfBeds": 1,
                "typeOfBed": "King"
            },
            "priceSpecification": {
                "@type": "PriceSpecification",
                "price": room.priceValue,
                "priceCurrency": "IDR",
                "unitCode": "DAY"
            },
            "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "LED TV", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Coffee & Tea Maker", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true }
            ]
        }))
    };

    return (
        <main className="min-h-screen bg-brand-off-white">
            <JsonLd data={roomsSchema} />
            <Header />

            {/* Hero */}
            <div className="relative h-[60vh] bg-gray-900">
                <Image
                    src="/assets/original/img-90c3de0c-4eac-487a-9f90-aba3e1cfffcc.webp"
                    alt="Rooms Hero"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="font-serif text-5xl md:text-6xl mb-4">{t.pages.rooms.hero.title}</h1>
                    <p className="font-sans tracking-widest uppercase">{t.pages.rooms.hero.subtitle}</p>
                </div>
            </div>

            <Section>
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-serif text-brand-dark mb-6">{t.pages.rooms.content.title}</h2>
                    <p className="text-gray-600">
                        {t.pages.rooms.content.desc}
                    </p>
                </div>

                <div className="space-y-24">
                    {rooms.map((room, index) => (
                        <div key={room.name} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                            <div className="w-full md:w-1/2 relative h-[400px]">
                                <Image
                                    src={room.image}
                                    alt={room.name}
                                    fill
                                    className="object-cover rounded-sm shadow-lg"
                                />
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <h3 className="text-3xl font-serif text-brand-dark mb-4">{room.name}</h3>
                                <p className="text-gray-600 mb-6">{room.desc}</p>

                                <div className="flex gap-6 justify-center md:justify-start mb-8 text-brand-gold">
                                    <div className="flex flex-col items-center gap-2">
                                        <Wifi size={20} />
                                        <span className="text-xs uppercase text-gray-400">{t.pages.rooms.amenities.wifi}</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <Tv size={20} />
                                        <span className="text-xs uppercase text-gray-400">{t.pages.rooms.amenities.tv}</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <Coffee size={20} />
                                        <span className="text-xs uppercase text-gray-400">{t.pages.rooms.amenities.coffee}</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <Wind size={20} />
                                        <span className="text-xs uppercase text-gray-400">{t.pages.rooms.amenities.ac}</span>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                                    <div className="text-2xl font-serif text-brand-dark">
                                        {room.price} <span className="text-sm font-sans text-gray-400 font-normal">{t.pages.rooms.perNight}</span>
                                    </div>
                                    <Link
                                        href="/booking"
                                        className="bg-brand-gold text-white px-8 py-3 uppercase text-sm font-bold tracking-wider hover:bg-brand-gold-hover transition-colors"
                                    >
                                        {t.pages.rooms.bookNow}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Footer />
        </main>
    );
}
