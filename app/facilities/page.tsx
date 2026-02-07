
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Image from "next/image";

export default function Facilities() {
    return (
        <main className="min-h-screen bg-brand-off-white">
            <Header />

            {/* Hero Section */}
            <div className="relative h-[60vh] bg-gray-900">
                <Image
                    src="/assets/original/12-edit.jpg"
                    alt="Iconic Pool & Lifestyle Facilities"
                    fill
                    className="object-cover opacity-70"
                    priority
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
                    <h1 className="font-serif text-5xl md:text-7xl mb-4 drop-shadow-lg">Exquisite Facilities</h1>
                    <p className="font-sans tracking-[0.4em] uppercase text-sm md:text-base opacity-90">Diamond-Shaped Architectural Marvel</p>
                </div>
            </div>

            {/* Main Content */}
            <Section className="text-center max-w-5xl mx-auto px-6">
                <p className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-6">World-Class Amenities</p>
                <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-8 italic">The Essence of JHL Luxury</h2>
                <p className="text-gray-600 leading-relaxed mb-16 text-lg max-w-3xl mx-auto">
                    JHL Solitaire Gading Serpong offers a collection of curated facilities designed to cater to the
                    most discerning lifestyle needs. From our landmark architecture to our bespoke guest services,
                    every detail is crafted for perfection.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                    <div className="group">
                        <div className="relative h-80 w-full mb-6 overflow-hidden rounded-sm">
                            <Image
                                src="/assets/original/img-af978da9-6a92-4aca-8c1e-8b9c5d225e77.webp"
                                alt="Signature Infinity Pool"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="font-serif text-2xl mb-4 text-brand-dark">Signature Infinity Pool</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            A stunning architectural highlight, our infinity pool offers a unique swimming experience with
                            unrestricted views of Gading Serpong's skyline.
                        </p>
                    </div>

                    <div className="group">
                        <div className="relative h-80 w-full mb-6 overflow-hidden rounded-sm">
                            <Image
                                src="/assets/original/img-5987e456-e67b-49c7-914b-ae0761591f47.webp"
                                alt="Modern Fitness Center"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="font-serif text-2xl mb-4 text-brand-dark">State-of-the-Art Fitness</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Equipped with the latest Technogym technology, our fitness center provides everything needed
                            for a comprehensive wellness routine.
                        </p>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
