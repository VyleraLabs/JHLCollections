
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, MapPin, Utensils, Bed } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-off-white">
      <Header />

      <HeroSlider />

      {/* Welcome Section */}
      <Section className="text-center max-w-4xl mx-auto">
        <p className="text-brand-dark/80 uppercase tracking-widest text-sm font-bold mb-4">Welcome to JHL Solitaire</p>
        <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">
          Jewel of the City
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          JHL Solitaire Gading Serpong, a JHL Collections hotel, is our 5 Star Luxury Hotel situated 40 minutes from Soekarno-Hatta International Airport.
          The hotel creates a setting of luxury and comfort, with 141 stylishly appointed premier rooms and suites.
        </p>
        <div className="relative h-[400px] w-full rounded-sm overflow-hidden shadow-xl">
          <Image
            src="/assets/original/img-719d2f57-28fe-4ce9-a06c-1f26087159f3.webp"
            alt="JHL Solitaire Luxury Room Interior"
            fill
            className="object-cover"
            quality={60}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
          />
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
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

          <div className="absolute bottom-0 left-0 w-full p-12 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-brand-gold uppercase text-xs font-bold tracking-[0.2em] mb-3 block">Accommodations</span>
            <h2 className="text-4xl font-serif mb-6 italic">Rooms & Suites</h2>
            <p className="text-gray-300 mb-8 max-w-md line-clamp-2 md:line-clamp-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              Experience the art of luxurious living in rooms and suites designed with exceptional attention to detail.
            </p>
            <Link href="/rooms" className="inline-block text-xs uppercase font-bold tracking-[0.2em] border-b-2 border-brand-gold pb-2 hover:text-brand-gold transition-colors">
              Discover More
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
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

          <div className="absolute bottom-0 left-0 w-full p-12 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-brand-gold uppercase text-xs font-bold tracking-[0.2em] mb-3 block">Culinary</span>
            <h2 className="text-4xl font-serif mb-6 italic">Dining Experience</h2>
            <p className="text-gray-300 mb-8 max-w-md line-clamp-2 md:line-clamp-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              Unfold the rich tapestry of exquisite flavors. From international buffets to authentic Italian fine dining.
            </p>
            <Link href="/dining" className="inline-block text-xs uppercase font-bold tracking-[0.2em] border-b-2 border-brand-gold pb-2 hover:text-brand-gold transition-colors">
              Explore Venues
            </Link>
          </div>
        </div>

        {/* Wellness Highlight */}
        <div className="relative h-[600px] group overflow-hidden">
          <Image
            src="/assets/original/img-8d509d57-ebcc-4fd8-af90-355871a4ae75.webp"
            alt="Wellness & Spa"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            quality={50}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 w-full p-12 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-brand-gold uppercase text-xs font-bold tracking-[0.2em] mb-3 block">Serenity</span>
            <h2 className="text-4xl font-serif mb-6 italic">Wellness & Spa</h2>
            <p className="text-gray-300 mb-8 max-w-md line-clamp-2 md:line-clamp-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              Rejuvenate your senses at Acqua Spa, featuring curated treatments and world-class fitness facilities.
            </p>
            <Link href="/wellness" className="inline-block text-xs uppercase font-bold tracking-[0.2em] border-b-2 border-brand-gold pb-2 hover:text-brand-gold transition-colors">
              Rejuvenate Now
            </Link>
          </div>
        </div>

        {/* Meetings Highlight */}
        <div className="relative h-[600px] group overflow-hidden">
          <Image
            src="/assets/original/img-8530056e-f007-4829-85f3-ff18c9de3419.webp"
            alt="Meetings & Events"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            quality={50}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 w-full p-12 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-brand-gold uppercase text-xs font-bold tracking-[0.2em] mb-3 block">Bespoke</span>
            <h2 className="text-4xl font-serif mb-6 italic">Events & Meetings</h2>
            <p className="text-gray-300 mb-8 max-w-md line-clamp-2 md:line-clamp-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              Host your most prestigious events in our grand ballroom and sophisticated meeting suites.
            </p>
            <Link href="/meetings" className="inline-block text-xs uppercase font-bold tracking-[0.2em] border-b-2 border-brand-gold pb-2 hover:text-brand-gold transition-colors">
              Plan Your Event
            </Link>
          </div>
        </div>

        {/* Facilities Highlight */}
        <div className="relative h-[600px] group overflow-hidden md:col-span-2">
          <Image
            src="/assets/original/img-af978da9-6a92-4aca-8c1e-8b9c5d225e77.webp"
            alt="Hotel Facilities"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            quality={50}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 w-full p-12 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-brand-gold uppercase text-xs font-bold tracking-[0.2em] mb-3 block">Grandeur</span>
            <h2 className="text-4xl font-serif mb-6 italic">Iconic Facilities</h2>
            <p className="text-gray-300 mb-8 max-w-md line-clamp-2 md:line-clamp-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              Experience the diamond-shaped architectural marvel and refined lifestyle services unique to JHL Solitaire.
            </p>
            <Link href="/facilities" className="inline-block text-xs uppercase font-bold tracking-[0.2em] border-b-2 border-brand-gold pb-2 hover:text-brand-gold transition-colors">
              Explore Amenities
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-brand-off-white flex items-center justify-center mb-6 text-brand-gold">
              <Star size={32} />
            </div>
            <h3 className="font-serif text-xl mb-3 text-brand-dark">5-Star Luxury</h3>
            <p className="text-gray-600 text-sm">Award-winning service and amenities designed for the discerning traveler.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-brand-off-white flex items-center justify-center mb-6 text-brand-gold">
              <MapPin size={32} />
            </div>
            <h3 className="font-serif text-xl mb-3 text-brand-dark">Prime Location</h3>
            <p className="text-gray-600 text-sm">Located in the heart of Gading Serpong, minutes from ICE and AEON Mall.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-brand-off-white flex items-center justify-center mb-6 text-brand-gold">
              <ArrowRight size={32} />
            </div>
            <h3 className="font-serif text-xl mb-3 text-brand-dark">Exclusive Offers</h3>
            <p className="text-gray-600 text-sm">Book directly with us to enjoy special rates and complimentary benefits.</p>
            <Link href="#" className="mt-4 text-brand-dark hover:text-brand-gold uppercase text-xs font-bold tracking-widest border-b border-brand-gold pb-1 transition-colors">
              View Offers
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
