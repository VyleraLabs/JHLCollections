
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, Star, Users, MapPin } from "lucide-react";

export default function Meetings() {
    const { t } = useLanguage();

    const eventVenuesSchema = {
        "@context": "https://schema.org",
        "@type": "Hotel",
        "name": "JHL Solitaire Gading Serpong",
        "url": "https://jhlcollections.com/events",
        "parentOrganization": {
            "@type": "Hotel",
            "name": "JHL Solitaire Gading Serpong"
        },
        "containsPlace": [
            {
                "@type": "EventVenue",
                "name": "Sky Ballroom",
                "description": "Luxurious indoor ballroom on Level 15 with 180-degree city views. Perfect for weddings and grand receptions.",
                "image": "https://jhlcollections.com/assets/meetings/sky-ballroom-venue.jpg",
                "maximumAttendeeCapacity": 800,
                "isAccessibleForFree": false,
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Level 15, JHL Solitaire",
                    "addressLocality": "Tangerang",
                    "addressRegion": "Banten",
                    "addressCountry": "ID"
                }
            },
            {
                "@type": "EventVenue",
                "name": "Sky Garden",
                "description": "Exclusive rooftop outdoor venue for intimate weddings and private parties.",
                "image": "https://jhlcollections.com/assets/meetings/sky-garden-venue.webp",
                "maximumAttendeeCapacity": 150,
                "isAccessibleForFree": false,
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Rooftop, JHL Solitaire",
                    "addressLocality": "Tangerang",
                    "addressRegion": "Banten",
                    "addressCountry": "ID"
                }
            },
            {
                "@type": "Restaurant",
                "name": "Royal Eight Chinese Dining",
                "description": "Authentic Chinese dining venue suitable for engagement parties and corporate luncheons.",
                "image": "https://jhlcollections.com/assets/meetings/royal-eight-venue.webp",
                "servesCuisine": "Chinese",
                "maximumAttendeeCapacity": 250
            }
        ]
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.2 } }
    };

    return (
        <main className="bg-brand-dark min-h-screen text-white overflow-x-hidden selection:bg-brand-gold selection:text-brand-dark">
            <JsonLd data={eventVenuesSchema} />
            <Header />

            {/* Immersive Hero */}
            <section className="relative h-screen w-full overflow-hidden">
                <Image
                    src="/assets/original/img-7fca6da7-689b-466d-9dac-18c9c47dcda1.webp"
                    alt="Luxury Meetings & Events at JHL Solitaire Gading Serpong"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-brand-dark" />

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="max-w-4xl bg-black/40 backdrop-blur-sm p-8 md:p-16 border border-white/10 shadow-2xl"
                    >
                        <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
                            <div className="h-[1px] w-12 bg-user-gold/80" />
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className="font-luxury text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight text-white drop-shadow-2xl">
                            {t.pages.meetings.hero.title}
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-brand-gold mb-8 font-bold drop-shadow-md">
                            {t.pages.meetings.hero.subtitle}
                        </motion.p>
                        <motion.div variants={fadeInUp} className="flex justify-center">
                            <div className="h-20 w-[1px] bg-brand-gold" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Introduction - Editorial Style */}
            <section className="py-24 px-6 md:px-12 bg-brand-dark relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-luxury text-lg md:text-2xl leading-loose text-white/90 uppercase tracking-widest"
                    >
                        &quot;{t.pages.meetings.content.desc}&quot;
                    </motion.p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-[1px] w-24 bg-brand-gold mx-auto mt-12"
                    />
                </div>
            </section>

            {/* Venues - Alternating Layout */}
            <div className="w-full space-y-0">
                {/* Sky Ballroom */}
                <VenueSection
                    image="/assets/meetings/sky-ballroom-venue.jpg"
                    subtitle="Level 15 • Indoor • 800 Pax"
                    title={t.pages.meetings.venues.skyBallroom.name}
                    description={t.pages.meetings.venues.skyBallroom.description}
                    specs={[
                        { label: "Ceremony", value: t.pages.meetings.venues.skyBallroom.ceremony },
                        { label: "Reception", value: t.pages.meetings.venues.skyBallroom.reception }
                    ]}
                    align="right"
                />

                {/* Sky Garden */}
                <VenueSection
                    image="/assets/meetings/sky-garden-venue.webp"
                    subtitle="Rooftop • Outdoor • 150 Pax"
                    title={t.pages.meetings.venues.skyGarden.name}
                    description={t.pages.meetings.venues.skyGarden.description}
                    specs={[
                        { label: "Ceremony", value: t.pages.meetings.venues.skyGarden.ceremony },
                        { label: "Reception", value: t.pages.meetings.venues.skyGarden.reception }
                    ]}
                    align="left"
                />

                {/* Royal Eight */}
                <VenueSection
                    image="/assets/meetings/royal-eight-venue.webp"
                    subtitle="Level 5 • Indoor Dining • 250 Pax"
                    title={t.pages.meetings.venues.royalEight.name}
                    description={t.pages.meetings.venues.royalEight.description}
                    specs={[
                        { label: "Ceremony", value: t.pages.meetings.venues.royalEight.ceremony },
                        { label: "Reception", value: t.pages.meetings.venues.royalEight.reception }
                    ]}
                    align="right"
                    ctaLink="/dining/royal-eight"
                    ctaText={t.categories.dining.cta}
                />

                {/* Meeting Rooms Link */}
                <VenueSection
                    image="/assets/meetings/hero.jpg"
                    subtitle={t.pages.meetings.venues.meetingRooms.subtitle}
                    title={t.pages.meetings.venues.meetingRooms.name}
                    description={t.pages.meetings.venues.meetingRooms.description}
                    specs={[
                        { label: "Venues", value: "7 Rooms" },
                        { label: "Max Capacity", value: `60 ${t.pages.meetingRooms.specs.capacity}` }
                    ]}
                    align="left"
                    ctaLink="/events/meeting-rooms"
                    ctaText={t.pages.meetings.venues.meetingRooms.cta}
                />
            </div>

            {/* Packages / Inquiry Section */}
            {/* Packages / Inquiry Section - Removed */}

            <Footer />
        </main>
    );
}

// Reusable Venue Section Component
function VenueSection({ image, subtitle, title, description, specs, align = "left", ctaLink, ctaText }: {
    image: string,
    subtitle: string,
    title: string,
    description: string,
    specs: { label: string, value: string }[],
    align?: "left" | "right",
    ctaLink?: string,
    ctaText?: string
}) {
    return (
        <section className="relative flex flex-col lg:flex-row min-h-[90vh] bg-black group">
            {/* Image Side */}
            <div className={`relative w-full lg:w-3/5 h-[50vh] lg:h-auto overflow-hidden ${align === "right" ? "lg:order-last" : "lg:order-first"}`}>
                <motion.div
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative w-full h-full"
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:hidden" />
                </motion.div>
            </div>

            {/* Content Side */}
            <div className={`relative w-full lg:w-2/5 flex flex-col justify-center p-8 lg:p-20 z-10 -mt-20 lg:mt-0 ${align === "right" ? "lg:pr-24" : "lg:pl-24"}`}>
                <motion.div
                    initial={{ opacity: 0, x: align === "left" ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex items-center gap-3 mb-6 text-brand-gold/80">
                        <div className="h-[1px] w-12 bg-brand-gold" />
                        <span className="text-xs font-bold tracking-[0.3em] uppercase">{subtitle}</span>
                    </div>

                    <h2 className="font-luxury text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-none tracking-tight">
                        {title}
                    </h2>

                    <p className="text-white/70 text-lg font-editorial leading-relaxed mb-10 border-l border-white/10 pl-6">
                        {description}
                    </p>

                    <div className="grid grid-cols-2 gap-8 mb-12">
                        {specs.map((spec, i) => (
                            <div key={i}>
                                <h4 className="text-xs uppercase tracking-widest text-brand-gold mb-2">{spec.label}</h4>
                                <p className="font-luxury text-2xl md:text-3xl text-white">{spec.value}</p>
                            </div>
                        ))}
                    </div>

                    {ctaLink ? (
                        <Link href={ctaLink} className="inline-flex items-center gap-2 text-white hover:text-brand-gold transition-colors group">
                            <span className="text-xs font-bold tracking-widest uppercase border-b border-white/30 pb-1 group-hover:border-brand-gold">{ctaText || "Discover More"}</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    ) : (
                        <div className="flex items-center gap-2 text-white/50 text-xs tracking-widest uppercase">
                            <MapPin size={14} />
                            <span>Gading Serpong, Tangerang</span>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
