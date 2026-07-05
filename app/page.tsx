'use client';
import { useState, useCallback, useEffect } from 'react';

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
import Onboarding from '@/components/ui/Onboarding';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [profile, setProfile] = useState<{ name: string; country: string } | null>(null);

  useEffect(() => {
    // Check if user already entered their profile
    const saved = localStorage.getItem('hadiva-profile');
    if (saved) {
      try {
        setProfile(JSON.parse(saved));
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const handleLoaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  const handleOnboardingComplete = useCallback((userProfile: { name: string; country: string }) => {
    setProfile(userProfile);
    localStorage.setItem('hadiva-profile', JSON.stringify(userProfile));
  }, []);

  const handleCountryChange = useCallback((newCountry: string) => {
    setProfile(p => {
      const next = p ? { ...p, country: newCountry } : { name: 'Guest', country: newCountry };
      localStorage.setItem('hadiva-profile', JSON.stringify(next));
      return next;
    });
  }, []);

  // Show onboarding setup screen once the splash screen completes, if no profile exists
  const showOnboarding = loaded && !profile;

  return (
    <>
      {/* Loader */}
      {!loaded && <Loader onComplete={handleLoaderComplete} />}

      {/* Onboarding Selector Screen */}
      {showOnboarding && <Onboarding onComplete={handleOnboardingComplete} />}

      {/* Cursor glow — desktop only */}
      <CursorGlow />

      {/* Main site */}
      <div className={`transition-opacity duration-700 ${loaded && profile ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <Navbar 
          country={profile?.country || 'PK'} 
          onChangeCountry={handleCountryChange} 
          userName={profile?.name} 
        />
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
          <Pricing country={profile?.country || 'PK'} />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
