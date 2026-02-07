
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-dark text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="mb-6 md:mb-0">
                        {/* Logo Placeholder - In a real scenario we'd use the image */}
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
                        <h4 className="font-serif text-lg mb-4 text-brand-gold">Contact</h4>
                        <p className="text-sm opacity-80 mb-2">Gading Serpong, Tangerang</p>
                        <p className="text-sm opacity-80">+62 21 3950 3000</p>
                    </div>
                    <div>
                        <h4 className="font-serif text-lg mb-4 text-brand-gold">Quick Links</h4>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li><Link href="/" className="hover:text-brand-gold">Home</Link></li>
                            <li><Link href="#" className="hover:text-brand-gold">Rooms</Link></li>
                            <li><Link href="#" className="hover:text-brand-gold">Dining</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-serif text-lg mb-4 text-brand-gold">Legal</h4>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li><Link href="#" className="hover:text-brand-gold">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-brand-gold">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-serif text-lg mb-4 text-brand-gold">Newsletter</h4>
                        <p className="text-sm opacity-80 mb-4">Subscribe for exclusive offers.</p>
                        <div className="flex">
                            <input type="email" placeholder="Your email" className="bg-white/10 px-4 py-2 rounded-l w-full focus:outline-none border border-transparent focus:border-brand-gold" />
                            <button className="bg-brand-gold text-brand-dark px-4 py-2 rounded-r hover:bg-white transition-colors font-bold">Join</button>
                        </div>
                    </div>
                </div>

                <div className="text-center text-xs opacity-50 pt-8 border-t border-gray-800">
                    © {new Date().getFullYear()} JHL Solitaire Gading Serpong. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
