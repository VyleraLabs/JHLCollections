
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import { Utensils, GlassWater, Coffee, Clock } from "lucide-react";

export default function Dining() {
    const venues = [
        {
            name: "Mangan All Day Dining",
            type: "International Buffet",
            desc: "A culinary theatre featuring live cooking stations and a diverse array of international and local delicacies.",
            image: "/assets/original/img-ba3bd1f8-58b5-4636-a132-ced69ad01250.webp",
            icon: Utensils,
            href: "#"
        },
        {
            name: "Al Gusto Italian Dining and Bar",
            type: "Italian Fine Dining",
            desc: "Authentic Italian flavors served in a sophisticated setting, perfect for romantic dinners or business lunches, featuring live gueridon cooking.",
            image: "/assets/original/img-5da9ef9c-d3de-4501-a785-ac18c9ab9087.webp",
            icon: GlassWater,
            href: "#"
        },
        {
            name: "Royal Eight Chinese Dining",
            type: "Chinese Fine Dining",
            desc: "A delectable selection of lunch, dinner, and Chinese desserts served in a contemporary and thoughtfully crafted setting.",
            image: "/assets/original/img-c846a4d7-ba07-4e74-be1a-a6621114eb15.webp",
            icon: Utensils,
            href: "/dining/royal-eight"
        },
        {
            name: "Empress China Bar",
            type: "Lounge & Bar",
            desc: "Discover apothecary-inspired signature cocktails, fine spirits, and a curated wine selection in an elegant atmosphere.",
            image: "/assets/original/img-18c2e520-f15d-415a-a07b-f27bb31373ee.webp",
            icon: GlassWater,
            href: "#"
        },
        {
            name: "Castro Lounge & Cigar Bar",
            type: "Lounge & Bar",
            desc: "Unwind with premium cigars, fine whiskies, and curated cocktails in an atmosphere of refined elegance.",
            image: "/assets/original/img-1f1dc5b2-25c7-47a8-8d9a-3aee88c3d769.webp",
            icon: Coffee,
            href: "#"
        },
        {
            name: "Le Bléu Cafe des Fleurs",
            type: "Café & Patisserie",
            desc: "A crafted expression of indulgence where delicate textures, refined sweetness, and timeless technique come together in every cake.",
            image: "/assets/original/img-8b73612c-8942-417d-b556-8ebf8b7214d7.webp",
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
                    <h1 className="font-serif text-5xl md:text-6xl mb-4">Culinary Experiences</h1>
                    <p className="font-sans tracking-widest uppercase">Taste the Extraordinary</p>
                </div>
            </div>

            <Section>
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-serif text-brand-dark mb-6">A World of Flavors</h2>
                    <p className="text-gray-600">
                        From casual dining to exquisite gourmet experiences, JHL Solitaire offers a diverse
                        range of culinary options to satisfy every palate. Our chefs use only the freshest
                        ingredients to create masterpieces on every plate.
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
                                    <span>Open Daily: 10:00 - 22:00</span>
                                </div>

                                <Link href={venue.href} className="inline-block border-b border-brand-dark pb-1 text-brand-dark font-medium hover:text-brand-gold hover:border-brand-gold transition-colors">
                                    View Menu
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
