'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

import { countries } from '@/lib/countries';

interface NavbarProps {
  country: string;
  onChangeCountry: (code: string) => void;
  userName?: string;
}

export default function Navbar({ country, onChangeCountry, userName }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 40);
      setHidden(current > lastScroll && current > 120);
      setLastScroll(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  const selectedCountryData = countries.find(c => c.code === country) || countries[0];

  return (
    <motion.header
      animate={{ y: hidden && !menuOpen ? -100 : 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
    >
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={`w-full max-w-5xl rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'bg-cream/85 backdrop-blur-xl border border-mocha/8 shadow-warm-md'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-2.5">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold-dk flex items-center justify-center text-white font-cormorant font-semibold text-sm group-hover:scale-110 transition-transform select-none">
              H
            </div>
            <span className="font-cormorant text-mocha font-semibold text-xl tracking-wider">
              Hadiva <span className="text-gold-dk">Studio</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-taupe hover:text-mocha transition-colors duration-200 tracking-wide font-light relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA & Selector */}
          <div className="hidden md:flex items-center gap-4">
            {/* Elegant flag country dropdown selector */}
            <div className="relative group font-jost text-xs">
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-mocha/10 bg-cream/70 text-mocha hover:border-gold-dk hover:text-gold-dk transition-all focus:outline-none shadow-sm">
                <span>{selectedCountryData.flag}</span>
                <span className="font-medium">{selectedCountryData.currency}</span>
                <span className="text-[8px] text-taupe-lt transition-transform duration-300 group-hover:rotate-180">▼</span>
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-cream border border-mocha/5 rounded-2xl shadow-gold-sm opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 overflow-hidden py-1.5 z-30">
                {countries.map(c => (
                  <button
                    key={c.code}
                    onClick={() => onChangeCountry(c.code)}
                    className={`w-full flex items-center justify-between px-4 py-2 hover:bg-gold/10 text-left text-xs transition-colors ${
                      country === c.code ? 'text-gold-dk font-semibold bg-gold/5' : 'text-mocha'
                    }`}
                  >
                    <span>{c.flag} {c.name}</span>
                    <span className="text-[10px] text-taupe">{c.currency}</span>
                  </button>
                ))}
              </div>
            </div>

            {userName && userName !== 'Guest' && (
              <span className="text-xs text-mocha font-light tracking-wide italic mr-1">
                Hi, {userName} 🌸
              </span>
            )}

            <a
              href="#contact"
              className="px-5 py-1.5 rounded-full border border-gold/60 text-gold-dk text-xs tracking-wider uppercase font-jost font-medium hover:bg-gold hover:text-white transition-all duration-300"
            >
              Start Project
            </a>
          </div>

          {/* Mobile burger */}
          <div className="md:hidden flex items-center gap-3">
            {/* Quick flag indicator */}
            <span className="text-sm select-none">{selectedCountryData.flag}</span>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 p-2 text-mocha focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-mocha rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-mocha rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-mocha rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-mocha/8 px-6 pb-5 bg-cream/95 rounded-b-2xl font-jost"
            >
              <div className="flex flex-col gap-4 pt-4">
                {navLinks.map(link => (
                  <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
                    className="text-taupe hover:text-mocha transition-colors text-sm tracking-wide">
                    {link.label}
                  </a>
                ))}

                {/* Mobile Flag list */}
                <div className="border-t border-mocha/5 pt-3.5 mt-1">
                  <p className="text-[10px] text-taupe tracking-wider uppercase mb-2.5 font-medium">Select Location</p>
                  <div className="grid grid-cols-3 gap-2">
                    {countries.map(c => (
                      <button
                        key={c.code}
                        onClick={() => {
                          onChangeCountry(c.code);
                          setMenuOpen(false);
                        }}
                        className={`px-2 py-1.5 rounded-xl border text-[10px] flex items-center justify-center gap-1.5 transition-all ${
                          country === c.code
                            ? 'border-gold bg-gold/10 text-gold-dk font-semibold'
                            : 'border-mocha/5 bg-cream/50 text-mocha'
                        }`}
                      >
                        <span>{c.flag}</span>
                        <span>{c.currency}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {userName && userName !== 'Guest' && (
                  <p className="text-xs text-mocha font-light tracking-wide italic pt-1">
                    Hi, {userName} 🌸
                  </p>
                )}

                <a href="#contact" onClick={() => setMenuOpen(false)}
                  className="mt-2 px-5 py-2.5 rounded-full bg-mocha text-white text-sm font-medium text-center tracking-wide">
                  Start Project
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
}
