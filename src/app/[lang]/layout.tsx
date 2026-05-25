import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getDictionary } from '../dictionaries';

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'fr' }, { lang: 'rw' }];
}

type Props = {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
};

export default async function LangLayout({ children, params }: Props) {
    const { lang } = await params;

    if (lang !== 'en' && lang !== 'fr' && lang !== 'rw') {
        throw new Error(`Unsupported lang: ${lang}`);
    }

    const dict = await getDictionary(lang);

    return (
        <div className="min-h-screen flex flex-col bg-brand-cream">
            <Navbar dict={dict} lang={lang} />
            <main className="flex-grow w-full">{children}</main>
            <Footer dict={dict} lang={lang} />
        </div>
    );
}