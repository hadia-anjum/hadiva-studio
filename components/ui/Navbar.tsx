'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
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
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 font-poppins"
    >
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={`w-full max-w-5xl rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl border border-rose-lt/40 shadow-pink-md'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-2.5">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="text-2xl group-hover:scale-110 transition-transform select-none">🎀</span>
            <span className="font-playfair text-charcoal font-semibold text-xl tracking-wide">
              Hadiva <span className="text-rose">Studio</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray hover:text-charcoal transition-colors duration-200 tracking-wide font-light relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-rose group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://instagram.com/hadivastudio"
              target="_blank" rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-rose to-hot-pink text-white text-xs tracking-wider uppercase font-medium hover:shadow-pink-md hover:scale-105 transition-all duration-300"
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
              className="md:hidden overflow-hidden border-t border-rose-lt/30 px-6 pb-5 bg-white/90 backdrop-blur-xl rounded-b-2xl"
            >
              <div className="flex flex-col gap-4 pt-4">
                {navLinks.map(link => (
                  <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
                    className="text-gray hover:text-charcoal transition-colors text-sm tracking-wide">
                    {link.label}
                  </a>
                ))}

                <a href="https://instagram.com/hadivastudio" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
                  className="mt-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-rose to-hot-pink text-white text-sm font-medium text-center tracking-wide">
                  DM on Instagram 📩
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
}
