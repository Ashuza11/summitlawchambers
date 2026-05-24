'use client';
import { use } from 'react';

export default function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = use(params);

    return (
        <div className="w-full min-h-[60vh] flex items-center justify-center bg-brand-cream">
            <div className="text-center">
                <h1 className="font-serif text-5xl font-bold text-brand-blue mb-4">Contact Us</h1>
                <p className="text-brand-gold text-lg tracking-widest uppercase">Content Coming Soon</p>
            </div>
        </div>
    );
}