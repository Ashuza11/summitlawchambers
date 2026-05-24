import Navbar from '@/components/Navbar';
import { getDictionary } from '../dictionaries';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'fr' }, { lang: 'rw' }];
}

// NEXT.JS FIX: params is now a Promise
type Props = {
    children: React.ReactNode;
    params: Promise<{ lang: 'en' | 'fr' | 'rw' }>;
};

export default async function LangLayout({ children, params }: Props) {
    // Await the params to resolve the Promise
    const resolvedParams = await params;
    const lang = resolvedParams.lang;

    // Now it safely passes the string to the dictionary
    const dict = await getDictionary(lang);

    return (
        <div className="min-h-screen flex flex-col bg-brand-cream">
            <Navbar dict={dict} lang={lang} />
            <main className="flex-grow w-full">{children}</main>
            <Footer dict={dict} lang={lang} />
        </div>
    );
}