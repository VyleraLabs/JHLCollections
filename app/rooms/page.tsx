
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import { Wifi, Tv, Coffee, Wind } from "lucide-react";

export default function Rooms() {
    const rooms = [
        {
            name: "Premier Room",
            desc: "A spacious 40sqm sanctuary designed for modern comfort.",
            price: "IDR 1,800,000",
            image: "/assets/original/img-24a5fc2c-d787-414c-8a78-a919e9b9b2d4.webp"
        },
        {
            name: "Executive Suite",
            desc: "Elevated luxury with separate living area and panoramic city views.",
            price: "IDR 3,200,000",
            image: "/assets/original/img-93fce4d6-af81-4e27-b726-55da2332debe.webp"
        },
        {
            name: "JHL Solitaire Signature",
            desc: "The ultimate expression of luxury living for the discerning traveler.",
            price: "IDR 5,500,000",
            image: "/assets/original/img-8d509d57-ebcc-4fd8-af90-355871a4ae75.webp"
        }
    ];

    return (
        <main className="min-h-screen bg-brand-off-white">
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
                    <h1 className="font-serif text-5xl md:text-6xl mb-4">Accommodations</h1>
                    <p className="font-sans tracking-widest uppercase">Rest in Refined Elegance</p>
                </div>
            </div>

            <Section>
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-serif text-brand-dark mb-6">Your Private Sanctuary</h2>
                    <p className="text-gray-600">
                        Each of our 141 rooms and suites is a masterpiece of design, blending contemporary
                        aesthetics with timeless comfort. Enjoy state-of-the-art amenities, plush bedding,
                        and breathtaking views of the city skyline.
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
                                        <span className="text-xs uppercase text-gray-400">High Speed Wifi</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <Tv size={20} />
                                        <span className="text-xs uppercase text-gray-400">Smart TV</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <Coffee size={20} />
                                        <span className="text-xs uppercase text-gray-400">Coffee Maker</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <Wind size={20} />
                                        <span className="text-xs uppercase text-gray-400">AC</span>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                                    <div className="text-2xl font-serif text-brand-dark">
                                        {room.price} <span className="text-sm font-sans text-gray-400 font-normal">/ Night</span>
                                    </div>
                                    <button className="bg-brand-gold text-white px-8 py-3 uppercase text-sm font-bold tracking-wider hover:bg-brand-gold-hover transition-colors">
                                        Book Now
                                    </button>
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
