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

const categories = ['All', 'Custom Packaging', 'Boxes', 'Cosmetics & Skincare', 'Wedding', 'Corporate'];

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
    title: 'Rose Quartz Gift Box',
    category: 'Boxes',
    code: 'ARTICLE Nº 03',
    color: 'from-rose-lt/40 via-blush to-blush-2',
    shortDesc: 'Handcrafted luxury rigid gift box in soft blush tones.',
    details: {
      instructions: [
        'Take a screenshot of this item.',
        'Send the screenshot directly to our Instagram DM (@hadivastudio).',
      ],
      sizeTip: 'Kindly specify your required box size (Length × Width × Height).',
      customizationTip: 'For custom branding or personalized ribbons, share your logo or reference design.',
    },
  },
  {
    id: 4,
    title: 'Bridal Nikkah Hamper',
    category: 'Wedding',
    code: 'ARTICLE Nº 04',
    color: 'from-lavender/40 via-blush to-rose-lt/30',
    shortDesc: 'Bespoke trousseau hamper box for bridal & nikkah gifts.',
    details: {
      instructions: [
        'Take a screenshot of this item.',
        'Send the screenshot directly to our Instagram DM (@hadivastudio).',
      ],
      sizeTip: 'Kindly specify your required hamper dimensions.',
      customizationTip: 'Share your color theme, monogram, or reference picture for custom styling.',
    },
  },
  {
    id: 5,
    title: 'Monogram Executive Suite',
    category: 'Corporate',
    code: 'ARTICLE Nº 05',
    color: 'from-blush-2 via-cream to-rose-lt/20',
    shortDesc: 'Premium corporate welcome & client appreciation box set.',
    details: {
      instructions: [
        'Take a screenshot of this item.',
        'Send the screenshot directly to our Instagram DM (@hadivastudio).',
      ],
      sizeTip: 'Kindly specify your required box size & quantity.',
      customizationTip: 'Share your corporate logo file and branding guidelines.',
    },
  },
  {
    id: 6,
    title: 'Silk Ribboned Gift Box',
    category: 'Boxes',
    code: 'ARTICLE Nº 06',
    color: 'from-peach/40 via-blush to-rose-lt/40',
    shortDesc: 'Chic gift packaging box with custom printed satin ribbon.',
    details: {
      instructions: [
        'Take a screenshot of this item.',
        'Send the screenshot directly to our Instagram DM (@hadivastudio).',
      ],
      sizeTip: 'Kindly specify your required box dimensions.',
      customizationTip: 'Share your ribbon text, logo, or design reference picture.',
    },
  },
];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

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
              Click on any item to view details, size guidelines, and ordering instructions.
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
                {/* Image or Gradient */}
                {item.image ? (
                  <div className="relative w-full h-80 overflow-hidden bg-white/50">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-black/10 opacity-40 group-hover:opacity-60 transition-opacity" />
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-md overflow-y-auto"
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
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-charcoal/70 hover:bg-charcoal text-blush flex items-center justify-center text-sm transition-all"
              >
                ✕
              </button>

              {/* Image if available */}
              {selectedItem.image && (
                <div className="relative w-full h-72 sm:h-96 bg-white">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                  />
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
                    How To Order &amp; Customization
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
    </section>
  );
}
