
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Image from "next/image";

export default function Offers() {
    return (
        <main className="min-h-screen bg-brand-off-white">
            <Header />
            <div className="relative h-[60vh] bg-gray-900">
                <Image
                    src="/assets/original/img-90c3de0c-4eac-487a-9f90-aba3e1cfffcc.webp"
                    alt="Offers Hero"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h1 className="font-serif text-5xl md:text-6xl mb-4">Exclusive Offers</h1>
                    <p className="font-sans tracking-widest uppercase">Limited Time Packages</p>
                </div>
            </div>
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Offer 1 */}
                    <div className="flex flex-col md:flex-row bg-white shadow-lg overflow-hidden h-auto md:h-64">
                        <div className="md:w-1/2 relative h-48 md:h-auto">
                            <Image src="/assets/original/img-19d5d333-9bb4-484d-aa83-21bda3a68653.webp" alt="Offer" fill className="object-cover" />
                        </div>
                        <div className="md:w-1/2 p-6 flex flex-col justify-center">
                            <span className="text-xs text-brand-gold font-bold uppercase mb-2">Stay Package</span>
                            <h3 className="font-serif text-2xl mb-2">Weekend Getaway</h3>
                            <p className="text-sm text-gray-600 mb-4">Enjoy 20% off on weekend stays including breakfast.</p>
                            <button className="text-brand-dark font-medium border-b border-brand-dark pb-1 self-start hover:text-brand-gold hover:border-brand-gold">Book Now</button>
                        </div>
                    </div>
                    {/* Offer 2 */}
                    <div className="flex flex-col md:flex-row bg-white shadow-lg overflow-hidden h-auto md:h-64">
                        <div className="md:w-1/2 relative h-48 md:h-auto">
                            <Image src="/assets/original/img-ba3bd1f8-58b5-4636-a132-ced69ad01250.jpg" alt="Offer" fill className="object-cover" />
                        </div>
                        <div className="md:w-1/2 p-6 flex flex-col justify-center">
                            <span className="text-xs text-brand-gold font-bold uppercase mb-2">Dining</span>
                            <h3 className="font-serif text-2xl mb-2">Sunday Brunch</h3>
                            <p className="text-sm text-gray-600 mb-4">All you can eat international buffet every Sunday.</p>
                            <button className="text-brand-dark font-medium border-b border-brand-dark pb-1 self-start hover:text-brand-gold hover:border-brand-gold">Book Table</button>
                        </div>
                    </div>
                </div>
            </Section>
            <Footer />
        </main>
    );
}
