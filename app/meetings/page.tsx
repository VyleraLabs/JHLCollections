
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Image from "next/image";

export default function Meetings() {
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
                    <h1 className="font-serif text-5xl md:text-6xl mb-4">Meetings & Events</h1>
                    <p className="font-sans tracking-widest uppercase">Where Business Meets Luxury</p>
                </div>
            </div>
            <Section className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif text-brand-dark mb-6">Sky Ballroom</h2>
                <p className="text-gray-600 mb-8">
                    Our iconic Sky Ballroom offers 180-degree panoramic views of the city, providing a
                    stunning backdrop for weddings, corporate galas, and social events. Equipped with
                    cutting-edge technology and supported by our dedicated events team.
                </p>
                <button className="bg-brand-gold text-white px-8 py-3 uppercase text-sm font-bold tracking-wider hover:bg-brand-gold-hover transition-colors">
                    Enquire Now
                </button>
            </Section>
            <Footer />
        </main>
    );
}
