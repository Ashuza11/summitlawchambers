import Navbar from '@/components/Navbar';
import { getDictionary } from '../dictionaries';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'fr' }, { lang: 'rw' }];
}

// Define the type for the params specifically
type Params = { lang: 'en' | 'fr' | 'rw' };

// Define the type for the layout props
type LayoutProps = {
    children: React.ReactNode;
    params: Promise<Params>;
};

export default async function LangLayout({ children, params }: LayoutProps) {
    // 1. Await params
    const { lang } = await params;

    // 2. Await the dictionary
    const dict = await getDictionary(lang);

    return (
        <div className="min-h-screen flex flex-col bg-brand-cream">
            <Navbar dict={dict} lang={lang} />
            <main className="flex-grow w-full">{children}</main>
            <Footer dict={dict} lang={lang} />
        </div>
    );
}