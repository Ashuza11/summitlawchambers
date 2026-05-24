import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer({ dict, lang }: { dict: any; lang: string }) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-blue text-brand-sand pt-16 pb-8 border-t-[4px] border-brand-gold">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12">

                    {/* Brand & Bio Section */}
                    <div className="md:col-span-4 space-y-6">
                        <Link href={`/${lang}`} className="inline-flex items-center gap-3">
                            {/* Added Logo Here */}
                            <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0">
                                <Image
                                    src="/images/logo.png"
                                    alt="Summit Law Chambers Logo"
                                    fill
                                    sizes="(max-width: 768px) 48px, 56px"
                                    // Add brightness-0 and invert to turn the PNG white
                                    className="object-contain brightness-0 invert"
                                />
                            </div>

                            {/* Text Container */}
                            <div className="flex flex-col justify-center">
                                <span className="font-serif text-2xl font-bold text-brand-cream leading-tight tracking-wide uppercase">
                                    Summit
                                </span>
                                <span className="text-xs text-brand-gold tracking-widest font-medium uppercase">
                                    Law Chambers
                                </span>
                            </div>
                        </Link>
                        <p className="text-brand-sand/80 text-sm leading-relaxed max-w-sm">
                            Providing exceptional legal services, bold guidance, and reliable counsel. We are committed to achieving the best possible outcomes for our clients through integrity and expertise.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="md:col-span-4 lg:col-span-3 lg:col-start-6 space-y-6">
                        <h3 className="font-serif text-xl font-bold text-brand-gold">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: dict.navigation?.home || 'Home', href: `/${lang}` },
                                { name: dict.navigation?.about || 'About Us', href: `/${lang}/about` },
                                { name: dict.navigation?.services || 'Services', href: `/${lang}/services` },
                                { name: dict.navigation?.contact || 'Contact', href: `/${lang}/contact` },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-brand-sand/80 hover:text-brand-gold transition-colors duration-300 text-sm font-medium"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="md:col-span-4 space-y-6">
                        <h3 className="font-serif text-xl font-bold text-brand-gold">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-brand-sand/80 text-sm">
                                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                                <span>
                                    KG 123 Ave, Batsinda<br />
                                    Kigali, Rwanda
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-brand-sand/80 text-sm">
                                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                                <span>+250 788 XXX XXX</span>
                            </li>
                            <li className="flex items-center gap-3 text-brand-sand/80 text-sm">
                                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                                <span>info@summitlaw.rw</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Copyright Bar */}
                <div className="pt-8 border-t border-brand-sand/20 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-brand-sand/60 text-xs text-center md:text-left">
                        &copy; {currentYear} Summit Law Chambers. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-brand-sand/60">
                        <Link href={`/${lang}/privacy`} className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
                        <Link href={`/${lang}/terms`} className="hover:text-brand-gold transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}