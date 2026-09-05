'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  code: string;
  image?: string;
  color?: string;
  featured?: boolean;
  shortDesc: string;
  details: {
    instructions: string[];
    sizeTip: string;
    customizationTip: string;
  };
}

const categories = ['All', 'Custom Packaging', 'Cosmetics & Skincare', 'Boxes', 'Birthday', 'Corporate'];

const items: PortfolioItem[] = [
  {
    id: 1,
    title: 'Wrapping Tissue Paper ♡',
    category: 'Custom Packaging',
    code: 'ARTICLE Nº 01',
    image: '/items/wrapping-tissue-paper.jpg',
    featured: true,
    shortDesc: 'Aesthetic custom-printed wrapping tissue paper with elegant bow patterns & luxury finish.',
    details: {
      instructions: [
        'Take a screenshot of this item.',
        'Send the screenshot directly to our Instagram DM (@hadivastudio).',
      ],
      sizeTip: 'Kindly specify your required tissue paper sheet size and dimensions.',
      customizationTip: 'For custom logo or pattern printing, share your logo vector file, brand name, or reference picture with us.',
    },
  },
  {
    id: 2,
    title: 'TUCK END Box for Cosmetics, Lip Balms & Skincare',
    category: 'Cosmetics & Skincare',
    code: 'ARTICLE Nº 02',
    image: '/items/tuck-end-box.jpg',
    featured: true,
    shortDesc: 'Custom-printed TUCK END packaging box designed for lip balms, cosmetics, and skincare products.',
    details: {
      instructions: [
        'Take a screenshot of this item.',
        'Send the screenshot directly to our Instagram DM (@hadivastudio).',
      ],
      sizeTip: 'Kindly specify your required TUCK END box dimensions (Length × Width × Height).',
      customizationTip: 'For custom branding, share your logo, artwork files, or design reference picture with us.',
    },
  },
  {
    id: 3,
    title: 'Nail Art Display Card',
    category: 'Cosmetics & Skincare',
    code: 'ARTICLE Nº 03',
    image: '/items/nail-art-display-card.jpg',
    featured: true,
    shortDesc: 'Custom-printed aesthetic nail art display card with elegant ribbon bow header & textured finish.',
    details: {
      instructions: [
        'Take a screenshot of this item.',
        'Send the screenshot directly to our Instagram DM (@hadivastudio).',
      ],
      sizeTip: 'Kindly specify your required display card size and dimensions.',
      customizationTip: 'For custom branding or text printing, share your logo vector file, brand text, or reference picture with us.',
    },
  },
  {
    id: 4,
    title: 'Birthday Card',
    category: 'Birthday',
    code: 'ARTICLE Nº 04',
    image: '/items/birthday-card.jpg',
    featured: true,
    shortDesc: 'Aesthetic custom-designed birthday greeting card with scallop border & disco ball artwork.',
    details: {
      instructions: [
        'Take a screenshot of this item.',
        'Send the screenshot directly to our Instagram DM (@hadivastudio).',
      ],
      sizeTip: 'Kindly specify your required card size and dimensions (e.g. 5x7 inches, A5).',
      customizationTip: 'Share your custom birthday name, age/milestone number, color theme, or reference picture with us.',
    },
  },
  {
    id: 5,
    title: 'Butterfly Die-Cut Business Card',
    category: 'Corporate',
    code: 'ARTICLE Nº 05',
    image: '/items/butterfly-business-card.jpg',
    featured: true,
    shortDesc: 'Custom purple butterfly die-cut business card with QR code integration & social handles.',
    details: {
      instructions: [
        'Take a screenshot of this item.',
        'Send the screenshot directly to our Instagram DM (@hadivastudio).',
      ],
      sizeTip: 'Kindly specify your required card dimensions and die-cut shape preferences.',
      customizationTip: 'Share your business logo, social media handles, QR code link, or custom reference design.',
    },
  },
  {
    id: 6,
    title: 'Rigid Mailer Boxes',
    category: 'Boxes',
    code: 'ARTICLE Nº 06',
    image: '/items/rigid-mailer-box.jpg',
    featured: true,
    shortDesc: 'Custom-printed aesthetic pink rigid mailer box for shipping, e-commerce & brand packaging.',
    details: {
      instructions: [
        'Take a screenshot of this item.',
        'Send the screenshot directly to our Instagram DM (@hadivastudio).',
      ],
      sizeTip: 'Kindly specify your required mailer box dimensions (Length × Width × Height).',
      customizationTip: 'For custom branding, share your logo, artwork files, color theme, or reference picture with us.',
    },
  },
  {
    id: 7,
    title: 'Cup Holder',
    category: 'Custom Packaging',
    code: 'ARTICLE Nº 07',
    image: '/items/cup-holder.jpg',
    featured: true,
    shortDesc: 'Custom-printed takeaway drink & coffee cup holder for cafes, events & brand packaging.',
    details: {
      instructions: [
        'Take a screenshot of this item.',
        'Send the screenshot directly to our Instagram DM (@hadivastudio).',
      ],
      sizeTip: 'Kindly specify your required cup holder size & cup capacity (e.g. 2-cup or 4-cup holder).',
      customizationTip: 'For custom branding or printing, share your cafe/brand logo vector file or reference picture with us.',
    },
  },
  {
    id: 8,
    title: 'Menu Card',
    category: 'Custom Packaging',
    code: 'ARTICLE Nº 08',
    image: '/items/menu-card.jpg',
    featured: true,
    shortDesc: 'Aesthetic custom-designed dinner & cocktail menu card with bow accents & die-cut shapes.',
    details: {
      instructions: [
        'Take a screenshot of this item.',
        'Send the screenshot directly to our Instagram DM (@hadivastudio).',
      ],
      sizeTip: 'Kindly specify your required menu card size and dimensions (e.g. 4×8 inches, A5).',
      customizationTip: 'For custom branding or text printing, share your menu text, logo, color palette, or reference picture with us.',
    },
  },
  {
    id: 9,
    title: 'Big Boxes',
    category: 'Boxes',
    code: 'ARTICLE Nº 09',
    image: '/items/big-boxes.jpg',
    featured: true,
    shortDesc: 'Luxury rigid magnetic gift box available in every color & standard 12×10 inches size.',
    details: {
      instructions: [
        'Take a screenshot of this item.',
        'Send the screenshot directly to our Instagram DM (@hadivastudio).',
      ],
      sizeTip: 'Standard size is 12×10 inches (or specify your required custom dimensions).',
      customizationTip: 'Available in every color! Share your preferred color, logo printing, or reference picture with us.',
    },
  },
];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const filtered = active === 'All' ? items : items.filter(i => i.category === active);

  return (
    <section id="portfolio" className="py-24 bg-cream relative overflow-hidden font-jost">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-6 bg-rose-dk/40" />
              <span className="text-rose-dk text-[10px] tracking-[0.4em] uppercase font-medium">portfolio &amp; articles</span>
              <div className="h-px w-6 bg-rose-dk/40" />
            </div>
            <h2 className="font-cormorant text-charcoal text-4xl sm:text-6xl font-light italic">
              Featured <span className="font-normal not-italic pink-text-gradient uppercase tracking-[0.1em]">Articles</span>
            </h2>
            <p className="text-gray text-xs sm:text-sm mt-3 max-w-md mx-auto font-light leading-relaxed">
              Click on any picture or card to preview full details, dimensions, and ordering guidelines.
            </p>
          </motion.div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-[11px] tracking-[0.2em] uppercase font-light transition-all duration-300 ${
                active === cat
                  ? 'bg-charcoal text-blush shadow-pink-sm'
                  : 'border border-rose-lt/40 text-gray hover:border-rose-dk hover:text-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-3xl overflow-hidden border border-rose-lt/30 bg-blush flex flex-col justify-between hover:shadow-pink-md hover:border-rose-dk/40 transition-all duration-500 cursor-pointer"
              >
                {/* Clickable Image Box */}
                {item.image ? (
                  <div className="relative w-full h-80 overflow-hidden bg-white/50 cursor-pointer">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-black/10 opacity-40 group-hover:opacity-60 transition-opacity" />
                    
                    {/* Hover Clickable Zoom Badge */}
                    <div className="absolute top-3 right-3 bg-charcoal/70 backdrop-blur-sm text-blush text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                      <span>Expand Picture</span>
                      <span>🔍</span>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-64 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>
                )}

                {/* Content Overlay/Card Info */}
                <div className="p-6 flex flex-col justify-between flex-grow bg-blush">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-rose-dk font-medium">{item.category}</span>
                    <span className="text-[10px] font-cormorant italic text-gray-lt">{item.code}</span>
                  </div>

                  <h3 className="font-cormorant text-charcoal text-2xl font-light italic leading-snug group-hover:text-rose-dk transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray text-xs font-light leading-relaxed line-clamp-2 mb-4">
                    {item.shortDesc}
                  </p>

                  <div className="pt-3 border-t border-rose-lt/20 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-charcoal group-hover:text-rose-dk transition-colors font-medium">
                      View Details &amp; Order
                    </span>
                    <span className="text-xs text-rose-dk group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="https://instagram.com/hadivastudio"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-rose-dk/40 text-charcoal text-xs tracking-[0.25em] uppercase font-medium hover:bg-charcoal hover:text-blush hover:border-charcoal transition-all duration-300"
          >
            Explore More on Instagram
          </a>
        </div>
      </div>

      {/* ITEM DETAIL MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-cream border border-rose-lt/40 rounded-3xl overflow-hidden shadow-pink-lg my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-charcoal/80 hover:bg-charcoal text-blush flex items-center justify-center text-sm transition-all shadow-md"
              >
                ✕
              </button>

              {/* Clickable Image inside Modal */}
              {selectedItem.image && (
                <div
                  onClick={() => setFullscreenImage(selectedItem.image || null)}
                  className="relative w-full h-80 sm:h-96 bg-white cursor-pointer group"
                >
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-charcoal/75 text-blush text-[10px] tracking-[0.2em] uppercase font-medium backdrop-blur-sm opacity-90 group-hover:opacity-100 transition-opacity">
                      Click to view full picture 🔍
                    </span>
                  </div>
                </div>
              )}

              {/* Details Content */}
              <div className="p-8 font-jost text-left">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-rose-dk font-medium">{selectedItem.category}</span>
                  <span className="text-xs font-cormorant italic text-gray-lt">{selectedItem.code}</span>
                </div>

                <h3 className="font-cormorant text-charcoal text-3xl sm:text-4xl font-light italic mb-3">
                  {selectedItem.title}
                </h3>

                <p className="text-gray text-xs sm:text-sm font-light leading-relaxed mb-6">
                  {selectedItem.shortDesc}
                </p>

                {/* Instructions & Specs Box */}
                <div className="p-6 rounded-2xl bg-blush border border-rose-lt/30 space-y-4 mb-8">
                  <h4 className="font-cormorant text-charcoal text-xl font-medium tracking-wide uppercase">
                    How To Order &amp; Customization Details
                  </h4>

                  <div className="space-y-2 text-xs text-gray font-light">
                    <p className="font-medium text-charcoal uppercase tracking-wider text-[11px]">Ordering Steps:</p>
                    <ul className="list-disc list-inside space-y-1.5 pl-1">
                      {selectedItem.details.instructions.map((step, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-rose-lt/20 text-xs text-gray font-light">
                    <p className="font-medium text-charcoal uppercase tracking-wider text-[11px] mb-1">Required Size / Dimensions:</p>
                    <p className="leading-relaxed">{selectedItem.details.sizeTip}</p>
                  </div>

                  <div className="pt-2 border-t border-rose-lt/20 text-xs text-gray font-light">
                    <p className="font-medium text-charcoal uppercase tracking-wider text-[11px] mb-1">Customization &amp; Logo:</p>
                    <p className="leading-relaxed">{selectedItem.details.customizationTip}</p>
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://instagram.com/hadivastudio"
                    target="_blank" rel="noopener noreferrer"
                    className="flex-1 py-3.5 rounded-full bg-charcoal text-blush text-center text-xs font-medium uppercase tracking-[0.2em] hover:bg-rose-dk transition-all duration-300 shadow-soft-sm"
                  >
                    DM on Instagram to Order
                  </a>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-6 py-3.5 rounded-full border border-rose-lt/50 text-gray text-xs font-medium uppercase tracking-[0.15em] hover:border-charcoal hover:text-charcoal transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FULLSCREEN LIGHTBOX VIEW */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreenImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setFullscreenImage(null)}
              aria-label="Close full picture"
              className="absolute top-6 right-6 text-white text-2xl font-light w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-all z-10"
            >
              ✕
            </button>
            <div className="relative w-full max-w-4xl h-[85vh]">
              <Image
                src={fullscreenImage}
                alt="Full preview"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
