'use client';
import { motion } from 'framer-motion';

const socials = [
  {
    name: 'Instagram', href: 'https://instagram.com/hadivastudio',
    icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
  },
  {
    name: 'Pinterest', href: 'https://pinterest.com/hadivastudio',
    icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>,
  },
];

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-mocha/5 py-14 px-4 font-jost">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand & Logo */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 justify-center md:justify-start mb-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold-dk flex items-center justify-center text-white font-cormorant font-bold text-sm select-none">
                H
              </div>
              <span className="font-cormorant text-mocha font-semibold text-lg tracking-wider">
                Hadiva <span className="text-gold-dk">Studio</span>
              </span>
            </div>
            <p className="text-taupe text-xs font-light tracking-wide">
              Crafting Timeless Digital Memory Experiences
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-taupe font-medium uppercase tracking-wider">
            {[['#portfolio', 'Portfolio'], ['#services', 'Services'], ['#templates', 'Templates'], ['#pricing', 'Pricing'], ['#faq', 'FAQ'], ['#contact', 'Contact']].map(([href, label]) => (
              <a key={label} href={href} className="hover:text-gold-dk transition-colors">{label}</a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(s => (
              <a
                key={s.name}
                href={s.href}
                target="_blank" rel="noopener noreferrer"
                aria-label={s.name}
                className="w-9 h-9 rounded-full border border-mocha/10 bg-cream flex items-center justify-center text-taupe hover:text-gold-dk hover:border-gold/30 hover:scale-105 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-mocha/5 mt-10 pt-6 text-center">
          <p className="text-taupe-lt text-[11px] font-light tracking-wider">
            © {new Date().getFullYear()} Hadiva Studio. All rights reserved.
            {' '}Made with 🌸 and lots of love.
          </p>
        </div>
      </div>
    </footer>
  );
}
