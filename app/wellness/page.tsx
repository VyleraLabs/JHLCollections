
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Image from "next/image";

export default function Wellness() {
    return (
        <main className="min-h-screen bg-brand-off-white">
            <Header />
            <div className="relative h-[60vh] bg-gray-900">
                <Image
                    src="/assets/original/img-5987e456-e67b-49c7-914b-ae0761591f47.webp"
                    alt="Wellness Hero"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="font-serif text-5xl md:text-6xl mb-4">Wellness & Spa</h1>
                    <p className="font-sans tracking-widest uppercase">Rejuvenate Your Senses</p>
                </div>
            </div>
            <Section className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif text-brand-dark mb-6">Acqua Spa</h2>
                <p className="text-gray-600 mb-8">
                    Immerse yourself in tranquility at Acqua Spa. From traditional massages to
                    modern therapeutic treatments, our expert therapists are dedicated to restoring
                    your balance and well-being.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
                    <div className="bg-white p-6 shadow-md border-t-2 border-brand-gold">
                        <h3 className="font-serif text-xl mb-2">Signature Massage</h3>
                        <p className="text-sm text-gray-500">60 / 90 Mins</p>
                    </div>
                    <div className="bg-white p-6 shadow-md border-t-2 border-brand-gold">
                        <h3 className="font-serif text-xl mb-2">Luxury Facial</h3>
                        <p className="text-sm text-gray-500">60 Mins</p>
                    </div>
                </div>
            </Section>
            <Footer />
        </main>
    );
}
