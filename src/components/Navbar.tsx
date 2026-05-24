'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';

export default function Navbar({ dict, lang }: { dict: any; lang: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    // Helper to switch languages without losing the current page path
    const switchLanguage = (newLang: string) => {
        const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
        router.push(newPath);
    };

    const navLinks = [
        { name: dict.navigation.home, href: `/${lang}` },
        { name: dict.navigation.about, href: `/${lang}/about` },
        { name: dict.navigation.services, href: `/${lang}/services` },
        { name: dict.navigation.contact, href: `/${lang}/contact` },
    ];

    return (
        <nav className="w-full bg-brand-cream sticky top-0 z-50 shadow-sm border-b border-brand-sand">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">

                    {/* Logo Section */}
                    <Link href={`/${lang}`} className="flex items-center gap-3">
                        <div className="relative w-16 h-16 md:w-20 md:h-20">
                            <Image
                                src="/images/logo.png"
                                alt="Summit Law Chambers Logo"
                                fill
                                sizes="(max-width: 768px) 64px, 80px"
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif text-2xl md:text-3xl font-bold text-brand-blue leading-tight tracking-wide uppercase">
                                Summit
                            </span>
                            <span className="text-xs md:text-sm text-brand-gold tracking-widest font-medium uppercase">
                                Law Chambers
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-brand-blue hover:text-brand-gold transition-colors duration-300 font-medium text-sm"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Language Switcher */}
                        <div className="flex items-center gap-2 text-brand-blue border-l pl-6 border-gray-300">
                            <Globe size={18} className="text-brand-gold" />
                            <select
                                value={lang}
                                onChange={(e) => switchLanguage(e.target.value)}
                                className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer uppercase"
                            >
                                <option value="en">EN</option>
                                <option value="fr">FR</option>
                                <option value="rw">RW</option>
                            </select>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-brand-blue">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation (Framer Motion) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-brand-cream border-t border-brand-sand overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-4 shadow-inner">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 text-base font-medium text-brand-blue hover:bg-brand-sand hover:text-brand-gold rounded-md transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            {/* Mobile Language Switcher */}
                            <div className="flex items-center gap-2 px-3 py-2">
                                <Globe size={18} className="text-brand-gold" />
                                <select
                                    value={lang}
                                    onChange={(e) => {
                                        switchLanguage(e.target.value);
                                        setIsOpen(false);
                                    }}
                                    className="bg-brand-sand px-2 py-1 rounded text-sm focus:outline-none w-full uppercase"
                                >
                                    <option value="en">English</option>
                                    <option value="fr">Français</option>
                                    <option value="rw">Kinyarwanda</option>
                                </select>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}