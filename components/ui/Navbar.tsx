'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
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

  return (
    <motion.header
      animate={{ y: hidden && !menuOpen ? -100 : 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 font-jost"
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

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="px-5 py-1.5 rounded-full border border-gold/60 text-gold-dk text-xs tracking-wider uppercase font-medium hover:bg-gold hover:text-white transition-all duration-300"
            >
              Start Project
            </a>
          </div>

          {/* Mobile burger */}
          <div className="md:hidden flex items-center">
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
