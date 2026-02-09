"use client";

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-brand-dark text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="mb-6 md:mb-0">
                        <div className="text-2xl font-serif font-bold text-brand-gold">JHL COLLECTIONS</div>
                    </div>
                    <div className="flex gap-6">
                        <Link href="#" aria-label="Facebook" className="hover:text-brand-gold-hover transition-colors"><Facebook /></Link>
                        <Link href="#" aria-label="Instagram" className="hover:text-brand-gold-hover transition-colors"><Instagram /></Link>
                        <Link href="#" aria-label="Twitter" className="hover:text-brand-gold-hover transition-colors"><Twitter /></Link>
                        <Link href="#" aria-label="Youtube" className="hover:text-brand-gold-hover transition-colors"><Youtube /></Link>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 border-t border-gray-700 pt-8">
                    <div>
                        <h3 className="font-serif text-lg mb-4 text-brand-gold">{t.footer.contact}</h3>
                        <p className="text-sm opacity-80 mb-2">Gading Serpong, Tangerang</p>
                        <p className="text-sm opacity-80">+62 21 3950 3000</p>
                    </div>
                    <div>
                        <h3 className="font-serif text-lg mb-4 text-brand-gold">{t.footer.quickLinks}</h3>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li><Link href="/" className="hover:text-brand-gold">{t.nav.home}</Link></li>
                            <li><Link href="/rooms" className="hover:text-brand-gold">{t.nav.rooms}</Link></li>
                            <li><Link href="/dining" className="hover:text-brand-gold">{t.nav.dining}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-serif text-lg mb-4 text-brand-gold">{t.footer.legal}</h3>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li><Link href="/privacy-policy" className="hover:text-brand-gold">{t.footer.privacyPolicy}</Link></li>
                            <li><Link href="#" className="hover:text-brand-gold">{t.footer.termsOfService}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-serif text-lg mb-4 text-brand-gold">{t.footer.newsletter}</h3>
                        <p className="text-sm opacity-80 mb-4">{t.footer.subscribe}</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder={t.footer.placeholder}
                                className="bg-white/10 px-4 py-2 rounded-l w-full focus:outline-none border border-transparent focus:border-brand-gold"
                            />
                            <button className="bg-brand-gold text-brand-dark px-4 py-2 rounded-r hover:bg-white transition-colors font-bold">
                                {t.footer.join}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-center text-xs opacity-50 pt-8 border-t border-gray-800 space-y-2">
                    <p>© {new Date().getFullYear()} JHL Solitaire Gading Serpong. {t.footer.rights}</p>
                    <div className="text-[10px] tracking-widest uppercase font-bold text-red-500/50 mt-4 border border-red-900/30 inline-block px-4 py-2 rounded bg-red-950/10">
                        Property of VyleraLabs.com • Product Demo for JHL Group • Unauthorized Copying Prohibited
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
