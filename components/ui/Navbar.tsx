'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#testimonials' },
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
        className={`w-full max-w-5xl rounded-full transition-all duration-500 ${
          scrolled
            ? 'bg-cream/85 backdrop-blur-xl border border-rose-lt/30 shadow-pink-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-7 py-3">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-charcoal flex items-center justify-center text-blush font-cormorant font-light text-base tracking-tighter group-hover:scale-105 transition-transform">
              H
            </div>
            <span className="font-cormorant text-charcoal text-xl tracking-[0.1em] font-medium uppercase">
              Hadiva <span className="text-rose-dk font-normal italic lowercase">Studio</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-gray hover:text-charcoal transition-colors duration-200 tracking-[0.2em] uppercase font-light relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-rose-dk group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://instagram.com/hadivastudio"
              target="_blank" rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-charcoal text-blush text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-rose-dk hover:text-white transition-all duration-300"
            >
              DM on Instagram
            </a>
          </div>

          {/* Mobile burger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 p-2 text-charcoal focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-charcoal rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-charcoal rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-charcoal rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
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
              className="md:hidden overflow-hidden border-t border-rose-lt/30 px-6 pb-6 bg-cream/95 backdrop-blur-xl rounded-b-3xl"
            >
              <div className="flex flex-col gap-4 pt-4 text-center">
                {navLinks.map(link => (
                  <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
                    className="text-gray hover:text-charcoal transition-colors text-xs tracking-[0.2em] uppercase font-light">
                    {link.label}
                  </a>
                ))}

                <a href="https://instagram.com/hadivastudio" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
                  className="mt-2 px-5 py-3 rounded-full bg-charcoal text-blush text-xs tracking-[0.2em] uppercase font-medium text-center">
                  DM on Instagram
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
}
