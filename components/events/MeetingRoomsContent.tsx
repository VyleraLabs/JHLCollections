"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// Define Static Data Structure inside component or import if shared (kept here for simplicity as per original)
const meetingRooms = [
    {
        name: "Citrine",
        description: "This 92-square-meter space on the 6th floor offers a functional layout with a 2.4-meter ceiling. It is ideal for mid-sized meetings or corporate gatherings, providing a conducive environment for productive discussions.",
        size: "92 m²",
        ceiling: "2.4 m",
        specs: { uShape: 36, classRoom: 45, boardRoom: 30, theatre: 50, roundTable: 32, cocktail: 60 },
        image: "/assets/meetings/citrine.webp"
    },
    {
        name: "Zircon",
        description: "Located on the 6th floor, this 92-square-meter venue features a modern design and a 2.4-meter ceiling, making it perfect for hosting meetings or workshops with flexibility and convenience.",
        size: "92 m²",
        ceiling: "2.4 m",
        specs: { uShape: 36, classRoom: 45, boardRoom: 30, theatre: 50, roundTable: 32, cocktail: 60 },
        image: "/assets/meetings/zircon.webp"
    },
    {
        name: "Lapis Lazuli",
        description: "Spanning 92 square meters, this venue is situated on the 6th floor with a 2.4-meter ceiling. It offers a versatile setup suitable for corporate events or private functions, combining comfort with practicality.",
        size: "92 m²",
        ceiling: "2.4 m",
        specs: { uShape: 23, classRoom: 25, boardRoom: 20, theatre: 40, roundTable: 24, cocktail: 20 },
        image: "/assets/meetings/lapis-lazuli.webp"
    },
    {
        name: "Moonstone",
        description: "This 80-square-meter meeting space on the 6th floor is designed for efficiency and focus. With a 2.4-meter ceiling, it is the perfect choice for small to medium-sized gatherings that demand a professional atmosphere.",
        size: "80 m²",
        ceiling: "2.4 m",
        specs: { uShape: 23, classRoom: 25, boardRoom: 24, theatre: 40, roundTable: 24, cocktail: 25 },
        image: "/assets/meetings/moonstone.webp"
    },
    {
        name: "Garnet",
        description: "Featuring 80 square meters of space on the 6th floor, this room offers a welcoming environment with a 2.4-meter ceiling. It is ideal for board meetings, brainstorming sessions, or private events.",
        size: "80 m²",
        ceiling: "2.4 m",
        specs: { uShape: 35, classRoom: 40, boardRoom: 25, theatre: 45, roundTable: 32, cocktail: 50 },
        image: "/assets/meetings/garnet.webp"
    },
    {
        name: "Topaz",
        description: "A stylish 80-square-meter space on the 6th floor, complemented by a 2.4-meter ceiling, this venue is designed to host gatherings with ease, providing a polished setting for any event.",
        size: "80 m²",
        ceiling: "2.4 m",
        specs: { uShape: 35, classRoom: 40, boardRoom: 25, theatre: 45, roundTable: 32, cocktail: 50 },
        image: "/assets/meetings/topaz.webp"
    },
    {
        name: "Tourmaline",
        description: "The 67-square-meter Tourmaline Room on the 6th floor boasts a sleek design and a 2.4-meter ceiling. It is a versatile choice for intimate meetings or small-scale events, ensuring an efficient and comfortable experience.",
        size: "67 m²",
        ceiling: "2.4 m",
        specs: { uShape: 15, classRoom: 15, boardRoom: 15, theatre: 25, roundTable: 16, cocktail: 20 },
        image: "/assets/meetings/tourmaline.webp"
    }
];

export const MeetingRoomsContent = () => {
    const { t } = useLanguage();

    const roomsData = React.useMemo(() => [
        { ...meetingRooms[0], name: t.pages.meetingRooms.rooms.citrine.name, description: t.pages.meetingRooms.rooms.citrine.desc },
        { ...meetingRooms[1], name: t.pages.meetingRooms.rooms.zircon.name, description: t.pages.meetingRooms.rooms.zircon.desc },
        { ...meetingRooms[2], name: t.pages.meetingRooms.rooms.lapisLazuli.name, description: t.pages.meetingRooms.rooms.lapisLazuli.desc },
        { ...meetingRooms[3], name: t.pages.meetingRooms.rooms.moonstone.name, description: t.pages.meetingRooms.rooms.moonstone.desc },
        { ...meetingRooms[4], name: t.pages.meetingRooms.rooms.garnet.name, description: t.pages.meetingRooms.rooms.garnet.desc },
        { ...meetingRooms[5], name: t.pages.meetingRooms.rooms.topaz.name, description: t.pages.meetingRooms.rooms.topaz.desc },
        { ...meetingRooms[6], name: t.pages.meetingRooms.rooms.tourmaline.name, description: t.pages.meetingRooms.rooms.tourmaline.desc },
    ], [t]);

    const [activeSection, setActiveSection] = useState("");
    const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Hero height check (70vh approx)
            const heroHeight = window.innerHeight * 0.7;
            setIsScrolledPastHero(window.scrollY > heroHeight - 100);

            // Spy on sections
            const sections = roomsData.map(room => room.name);
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If top is near middle of viewport or just passed top
                    if (rect.top <= 300 && rect.bottom >= 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [roomsData]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Adjust for sticky header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <React.Fragment>
            {/* Sub-Navbar */}
            <AnimatePresence>
                {isScrolledPastHero && (
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-[112px] left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-md border-b border-white/10 hidden lg:block shadow-2xl"
                    >
                        {/* Animated Golden Stream Border */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent animate-shimmer bg-[length:200%_auto] z-50" />

                        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
                            <div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
                                {roomsData.map((room) => (
                                    <button
                                        key={room.name}
                                        onClick={() => scrollToSection(room.name)}
                                        className={`text-xs uppercase tracking-[0.2em] transition-colors whitespace-nowrap font-medium ${activeSection === room.name ? "text-brand-gold" : "text-white/50 hover:text-white"
                                            }`}
                                    >
                                        {room.name}
                                    </button>
                                ))}
                            </div>
                            <Link
                                href="https://wa.me/628118822257"
                                target="_blank"
                                className="ml-8 px-6 h-9 flex items-center justify-center bg-brand-gold text-brand-dark font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(198,168,124,0.3)] hover:shadow-[0_0_25px_rgba(198,168,124,0.6)]"
                            >
                                {t.pages.meetingRooms.subnav.planner}
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Intro Text */}
            <section className="py-20 px-6 bg-zinc-950 text-center">
                <div className="max-w-4xl mx-auto">
                    <p className="font-editorial text-lg md:text-xl leading-relaxed text-gray-400">
                        {t.pages.meetingRooms.intro}
                    </p>
                </div>
            </section>

            {/* Meeting Rooms List */}
            <div className="space-y-0">
                {roomsData.map((room, index) => (
                    <RoomSection key={index} room={room} align={index % 2 === 0 ? 'left' : 'right'} />
                ))}
            </div>
        </React.Fragment>
    );
};

function RoomSection({ room, align }: { room: any, align: 'left' | 'right' }) {
    const { t } = useLanguage();
    return (
        <motion.section
            id={room.name} // Add ID for scroll spy
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col xl:flex-row min-h-[80vh] bg-zinc-900 border-b border-white/5 group overflow-hidden"
        >
            {/* Image Side */}
            <div className={`relative w-full xl:w-[65%] h-[50vh] xl:h-auto overflow-hidden ${align === 'right' ? 'xl:order-last' : 'xl:order-first'}`}>
                <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000 ease-out"
                    sizes="(max-width: 1280px) 100vw, 65vw"
                    quality={60}
                />
                <div className="absolute inset-0 bg-black/20 xl:bg-transparent group-hover:bg-black/0 transition-colors duration-700" />
            </div>

            {/* Content Side */}
            <div className={`relative w-full xl:w-[35%] flex flex-col justify-center p-8 md:p-12 xl:p-16 ${align === 'right' ? 'xl:pr-24' : 'xl:pl-24'}`}>
                <motion.div
                    initial={{ opacity: 0, x: align === 'left' ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <h2 className="font-luxury text-4xl md:text-5xl text-brand-gold uppercase tracking-wider">{room.name}</h2>
                        <div className="h-[1px] flex-grow bg-white/10" />
                    </div>
                    <div className="flex gap-6 mb-6 text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">
                        <span className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-gold rounded-full" /> {t.pages.meetingRooms.specs.size}: {room.size}</span>
                        <span className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-gold rounded-full" /> {t.pages.meetingRooms.specs.ceiling}: {room.ceiling}</span>
                    </div>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans">{room.description}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/10 pt-8"
                >
                    <CapacityItem label="U-Shape" value={room.specs.uShape} unit={t.pages.meetingRooms.specs.capacity} />
                    <CapacityItem label="Classroom" value={room.specs.classRoom} unit={t.pages.meetingRooms.specs.capacity} />
                    <CapacityItem label="Boardroom" value={room.specs.boardRoom} unit={t.pages.meetingRooms.specs.capacity} />
                    <CapacityItem label="Theatre" value={room.specs.theatre} unit={t.pages.meetingRooms.specs.capacity} />
                    <CapacityItem label="Round Table" value={room.specs.roundTable} unit={t.pages.meetingRooms.specs.capacity} />
                    <CapacityItem label="Cocktail" value={room.specs.cocktail} unit={t.pages.meetingRooms.specs.capacity} />
                </motion.div>
            </div>
        </motion.section>
    );
}

function CapacityItem({ label, value, unit }: { label: string, value: number, unit: string }) {
    return (
        <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-brand-gold/60 mb-1">{label}</span>
            <span className="text-xl font-serif text-white">{value} {unit}</span>
        </div>
    );
}
