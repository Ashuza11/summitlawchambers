'use client';

import { use, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Gavel, Scale } from 'lucide-react';

export default function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);

  // 1. Setup the carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Note: Ensure your images are actually inside a "public/images" folder if you use this path. 
  // If they are directly in "public", remove the "/images" part.
  const heroImages = [
    '/images/shema_show1.png',
    '/images/shema_show2.png'
  ];

  // 2. Automate the slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [heroImages.length]);

  const services = [
    {
      title: 'Corporate Law',
      description: 'Expert guidance on business formation, contracts and compliance.',
      icon: <Briefcase className="w-8 h-8 text-brand-gold mb-4" strokeWidth={1.5} />,
    },
    {
      title: 'Litigation',
      description: 'Aggressive representation in civil and criminal cases.',
      icon: <Gavel className="w-8 h-8 text-brand-gold mb-4" strokeWidth={1.5} />,
    },
    {
      title: 'Personal Injury',
      description: 'Helping clients obtain fair compensation for injuries.',
      icon: <Scale className="w-8 h-8 text-brand-gold mb-4" strokeWidth={1.5} />,
    },
  ];

  return (
    <div className="w-full">

      {/* Hero Carousel Section */}
      <section className="relative w-full h-[50vh] md:h-[65vh] lg:h-[75vh] bg-brand-blue overflow-hidden">
        <AnimatePresence mode="sync">
          {heroImages.map((src, index) => (
            index === currentImageIndex && (
              <motion.div
                key={src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={src}
                  alt={`Summit Law Chambers Courthouse - Slide ${index + 1}`}
                  fill
                  sizes="100vw"
                  className="object-cover opacity-90"
                  priority={index === 0} // Only prioritize the FIRST image for performance
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Subtle overlay for text contrast (kept strictly above the images with z-10) */}
        <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

        {/* Optional: Carousel Indicator Dots at the bottom */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentImageIndex
                ? 'bg-brand-gold w-8'
                : 'bg-white/50 hover:bg-white/80'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-24">

        {/* About Us Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 pr-0 md:pr-12">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-blue mb-6">
              About Us
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
              Summit Law Chambers is a leading law firm dedicated to providing exceptional legal services. Our team of experienced attorneys is committed to delivering bold guidance and reliable counsel to our clients.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end md:mt-16">
            <button className="bg-brand-blue text-brand-cream px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg">
              Learn More
            </button>
          </div>
        </section>

        {/* Our Services Section */}
        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-blue mb-10 text-center md:text-left">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-brand-sand p-8 md:p-10 flex flex-col items-center text-center border border-transparent hover:border-brand-gold/30 transition-all cursor-pointer"
              >
                {service.icon}
                <h3 className="font-serif text-xl font-bold text-brand-blue mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}