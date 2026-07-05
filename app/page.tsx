'use client';
import { useState, useCallback } from 'react';

import Loader from '@/components/ui/Loader';
import CursorGlow from '@/components/ui/CursorGlow';
import Navbar from '@/components/ui/Navbar';

import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';
import Showcase from '@/components/sections/Showcase';
import Portfolio from '@/components/sections/Portfolio';
import Process from '@/components/sections/Process';
import Features from '@/components/sections/Features';
import WhyUs from '@/components/sections/WhyUs';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {/* Loader */}
      {!loaded && <Loader onComplete={handleLoaderComplete} />}

      {/* Cursor glow — desktop only */}
      <CursorGlow />

      {/* Main site */}
      <div className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Services />
          <Showcase />
          <Portfolio />
          <Process />
          <Features />
          <WhyUs />
          <Testimonials />
          <Pricing />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
