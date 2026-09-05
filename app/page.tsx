'use client';
import { useState, useCallback } from 'react';

import Loader from '@/components/ui/Loader';
import CursorGlow from '@/components/ui/CursorGlow';
import Navbar from '@/components/ui/Navbar';

import Hero from '@/components/sections/Hero';
import Portfolio from '@/components/sections/Portfolio';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
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
          <Portfolio />
          <Process />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
