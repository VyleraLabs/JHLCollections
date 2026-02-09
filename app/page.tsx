"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, MapPin, Utensils, Bed } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <main className="min-h-screen bg-brand-off-white">
      <Header />

      <HeroSlider />

      {/* Welcome Section */}
      <section className="py-20 bg-brand-off-white overflow-hidden w-full relative">
        <div className="w-full pr-4 lg:pr-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left px-6 lg:pl-20 lg:pr-16"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-brand-dark mb-6 tracking-tight leading-[1.1]">
                {t.hero.welcomeTitle}
              </h2>

              <div className="relative mb-10">
                <span className="text-brand-gold font-cursive text-4xl md:text-6xl relative z-10 block">
                  {t.hero.jewelText}
                </span>
              </div>

              <p className="text-gray-500 font-light leading-relaxed w-full mx-auto lg:mx-0 text-lg md:text-xl mb-10">
                {t.hero.welcomeDescription}
              </p>

              <div className="w-24 h-[1px] bg-brand-gold mb-10 opacity-30 mx-auto lg:mx-0"></div>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="relative w-full aspect-video group overflow-hidden"
            >
              <Image
                src="/assets/original/jewel-in-the-city.webp"
                alt="JHL Solitaire Iconic Architecture at Night"
                fill
                className="object-contain transition-transform duration-[3s] group-hover:scale-[1.02] transform-gpu"
                priority
                quality={80}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Section className="bg-brand-off-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-gold/20 flex items-center justify-center mb-6 text-brand-gold">
              <Star size={32} />
            </div>
            <h3 className="font-serif text-xl mb-3 text-brand-dark">{t.features.luxury.title}</h3>
            <p className="text-gray-600 text-sm">{t.features.luxury.desc}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-gold/20 flex items-center justify-center mb-6 text-brand-gold">
              <MapPin size={32} />
            </div>
            <h3 className="font-serif text-xl mb-3 text-brand-dark">{t.features.location.title}</h3>
            <p className="text-gray-600 text-sm">{t.features.location.desc}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-gold/20 flex items-center justify-center mb-6 text-brand-gold">
              <ArrowRight size={32} />
            </div>
            <h3 className="font-serif text-xl mb-3 text-brand-dark">{t.features.offers.title}</h3>
            <p className="text-gray-600 text-sm">{t.features.offers.desc}</p>
            <Link href="/offers" className="mt-4 text-brand-dark hover:text-brand-gold uppercase text-xs font-bold tracking-widest border-b border-brand-gold pb-1 transition-colors">
              {t.features.offers.cta}
            </Link>
          </div>
        </div>
      </Section>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Room Highlight */}
        <div className="relative h-[600px] group overflow-hidden">
          <Image
            src="/assets/original/img-24a5fc2c-d787-414c-8a78-a919e9b9b2d4.webp"
            alt="Rooms & Suites"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            quality={50}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

          <div className="absolute bottom-0 left-0 w-full p-12 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-brand-gold uppercase text-xs font-bold tracking-[0.2em] mb-3 block drop-shadow-md">{t.nav.rooms}</span>
            <h2 className="text-4xl font-serif mb-6 italic drop-shadow-md">{t.categories.rooms.title}</h2>
            <p className="text-gray-300 mb-8 max-w-md line-clamp-2 md:line-clamp-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {t.categories.rooms.description}
            </p>
            <Link href="/rooms" className="inline-block text-xs uppercase font-bold tracking-[0.2em] border-b-2 border-brand-gold pb-2 hover:text-brand-gold transition-colors">
              {t.categories.rooms.cta}
            </Link>
          </div>
        </div>

        {/* Dining Highlight */}
        <div className="relative h-[600px] group overflow-hidden">
          <Image
            src="/assets/original/img-18c2e520-f15d-415a-a07b-f27bb31373ee.webp"
            alt="Dining"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            quality={50}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

          <div className="absolute bottom-0 left-0 w-full p-12 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-brand-gold uppercase text-xs font-bold tracking-[0.2em] mb-3 block drop-shadow-md">{t.nav.dining}</span>
            <h2 className="text-4xl font-serif mb-6 italic drop-shadow-md">{t.categories.dining.title}</h2>
            <p className="text-gray-300 mb-8 max-w-md line-clamp-2 md:line-clamp-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {t.categories.dining.description}
            </p>
            <Link href="/dining" className="inline-block text-xs uppercase font-bold tracking-[0.2em] border-b-2 border-brand-gold pb-2 hover:text-brand-gold transition-colors">
              {t.categories.dining.cta}
            </Link>
          </div>
        </div>

        {/* Wellness Highlight */}
        <div className="relative h-[600px] group overflow-hidden">
          <Image
            src="/assets/original/img-1f1dc5b2-25c7-47a8-8d9a-3aee88c3d769.webp"
            alt="Luxury Wellness & Fitness"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            quality={60}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 w-full p-12 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-brand-gold uppercase text-xs font-bold tracking-[0.2em] mb-3 block drop-shadow-md">{t.nav.wellness}</span>
            <h2 className="text-4xl font-serif mb-6 italic drop-shadow-md">{t.categories.wellness.title}</h2>
            <p className="text-gray-300 mb-8 max-w-md line-clamp-2 md:line-clamp-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {t.categories.wellness.description}
            </p>
            <Link href="/wellness" className="inline-block text-xs uppercase font-bold tracking-[0.2em] border-b-2 border-brand-gold pb-2 hover:text-brand-gold transition-colors">
              {t.categories.wellness.cta}
            </Link>
          </div>
        </div>

        {/* Meetings Highlight */}
        <div className="relative h-[600px] group overflow-hidden">
          <Image
            src="/assets/original/img-7fca6da7-689b-466d-9dac-18c9c47dcda1.webp"
            alt="Grand Weddings & Events Hall"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            quality={60}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Deeper overlay for bright wedding hall */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 w-full p-12 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-brand-gold uppercase text-xs font-bold tracking-[0.2em] mb-3 block drop-shadow-lg">{t.nav.meetings}</span>
            <h2 className="text-4xl font-serif mb-6 italic drop-shadow-lg">{t.categories.meetings.title}</h2>
            <p className="text-gray-300 mb-8 max-w-md line-clamp-2 md:line-clamp-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {t.categories.meetings.description}
            </p>
            <Link href="/events" className="inline-block text-xs uppercase font-bold tracking-[0.2em] border-b-2 border-brand-gold pb-2 hover:text-brand-gold transition-colors">
              {t.categories.meetings.cta}
            </Link>
          </div>
        </div>

        {/* Facilities Highlight */}
        <div className="relative h-[600px] group overflow-hidden md:col-span-2">
          <Image
            src="/assets/original/12-edit.jpg"
            alt="Iconic Pool & Lifestyle Facilities"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            quality={70}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 w-full p-12 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-brand-gold uppercase text-xs font-bold tracking-[0.2em] mb-3 block drop-shadow-md">{t.nav.facilities}</span>
            <h2 className="text-4xl font-serif mb-6 italic drop-shadow-md">{t.categories.facilities.title}</h2>
            <p className="text-gray-300 mb-8 max-w-md line-clamp-2 md:line-clamp-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {t.categories.facilities.description}
            </p>
            <Link href="/facilities" className="inline-block text-xs uppercase font-bold tracking-[0.2em] border-b-2 border-brand-gold pb-2 hover:text-brand-gold transition-colors">
              {t.categories.facilities.cta}
            </Link>
          </div>
        </div>
      </div>



      <Footer />
    </main>
  );
}
