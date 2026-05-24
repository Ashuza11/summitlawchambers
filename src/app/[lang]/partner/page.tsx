'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, ShieldCheck, Globe, ChevronRight, Briefcase, Zap, Scale } from 'lucide-react';

export default function PartnerPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = use(params);

    return (
        <div className="w-full bg-brand-cream">

            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Link href={`/${lang}`} className="hover:text-brand-gold transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-brand-blue font-medium">Managing Partner</span>
                </div>
            </div>

            {/* Hero Split Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="flex flex-col md:flex-row min-h-[600px] shadow-xl overflow-hidden">

                    {/* Left Side - Image */}
                    <div className="relative w-full md:w-1/2 min-h-[400px] md:min-h-full">
                        <Image
                            src="/shema_m_Patners.jpg"
                            alt="Shema - Managing Partner"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover object-top"
                            priority
                        />
                    </div>

                    {/* Right Side - Info Box */}
                    <div className="w-full md:w-1/2 bg-brand-blue text-brand-cream p-10 md:p-16 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-2">Shema</h1>
                            <p className="text-brand-gold text-lg md:text-xl tracking-wide mb-8">Managing Partner</p>

                            <Link href={`/${lang}/contact`}>
                                <button className="bg-brand-gold text-brand-blue font-bold px-8 py-3 mb-10 hover:bg-white transition-colors duration-300">
                                    Contact Shema
                                </button>
                            </Link>

                            <div className="w-full h-px bg-brand-gold/30 mb-10" />

                            {/* Credentials */}
                            <div className="space-y-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <GraduationCap className="w-6 h-6 text-brand-gold shrink-0" />
                                    <span className="text-brand-sand/90">LL.M. (Distinction) -<br />Top-tier Law School</span>
                                </div>
                                <div className="flex items-start gap-4">
                                    <GraduationCap className="w-6 h-6 text-brand-gold shrink-0" />
                                    <span className="text-brand-sand/90">LL.B. (Hons.) - Bachelor of Laws</span>
                                </div>
                            </div>

                            {/* Expertise Highlights */}
                            <div>
                                <h3 className="text-brand-gold font-serif text-xl font-bold mb-4 flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5" /> Expertise
                                </h3>
                                <ul className="space-y-3 text-brand-sand/90">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-brand-gold rounded-full" /> Commercial Law
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-brand-gold rounded-full" /> Energy & Mining
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-brand-gold rounded-full" /> Corporate Transactions & Litigation
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Detailed Info Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    {/* Left Column - Bio & Languages */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="font-serif text-4xl font-bold text-brand-blue leading-tight">
                            Distinguished Advocate<br />Guiding Your Legal Success
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Shema is a distinguished attorney with a Distinction in LL.M. from a top-tier law school and a Bachelor of Laws (LL.B.) with honors. He brings extensive knowledge and skilled expertise in Commercial Law, Energy and Mining Law, as well as Corporate Transactions and Litigation.
                        </p>

                        <div className="bg-brand-sand p-6 border-l-4 border-brand-gold mt-8">
                            <div className="flex items-center gap-3 mb-3">
                                <Globe className="w-6 h-6 text-brand-gold" />
                                <h3 className="font-serif text-xl font-bold text-brand-blue">Languages</h3>
                            </div>
                            <p className="text-gray-700 font-medium">Fluent Kinyarwanda, English</p>
                            <p className="text-gray-600">Working Knowledge of French</p>
                        </div>
                    </motion.div>

                    {/* Right Column - Expertise Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        {[
                            { title: "Commercial Law", desc: "Expert in complex business transactions, contract negotiation, and corporate governance.", icon: <Briefcase className="w-6 h-6 text-brand-gold" /> },
                            { title: "Energy & Mining", desc: "Specialized knowledge in the legal aspects of the energy and mining sectors.", icon: <Zap className="w-6 h-6 text-brand-gold" /> },
                            { title: "Corporate Transactions & Litigation", desc: "Extensive experience in mergers and acquisitions, corporate restructuring, and high-stakes litigation.", icon: <Scale className="w-6 h-6 text-brand-gold" /> }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-brand-sand p-6 flex gap-6 hover:shadow-md transition-shadow">
                                <div className="mt-1">{item.icon}</div>
                                <div>
                                    <h4 className="font-serif text-xl font-bold text-brand-blue mb-2">{item.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </section>
        </div>
    );
}