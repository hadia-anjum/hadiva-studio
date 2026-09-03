'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Gift Boxes', 'Wedding', 'Birthday', 'Corporate', 'Eid & Festive'];

const items = [
  { id: 1, title: 'Rose Quartz Gift Box', category: 'Gift Boxes', code: 'Nº 01', color: 'from-rose-lt/40 via-blush to-blush-2' },
  { id: 2, title: 'Bridal Nikkah Hamper', category: 'Wedding', code: 'Nº 02', color: 'from-lavender/40 via-blush to-rose-lt/30' },
  { id: 3, title: 'Velvet Birthday Surprise', category: 'Birthday', code: 'Nº 03', color: 'from-peach/40 via-blush to-blush-2' },
  { id: 4, title: 'Monogram Executive Kit', category: 'Corporate', code: 'Nº 04', color: 'from-blush-2 via-cream to-rose-lt/20' },
  { id: 5, title: 'Festive Mithai Box Set', category: 'Eid & Festive', code: 'Nº 05', color: 'from-rose-lt/30 via-peach/30 to-blush' },
  { id: 6, title: 'Silk Bridal Trousseau', category: 'Wedding', code: 'Nº 06', color: 'from-blush-2 via-lavender/30 to-rose-lt/40' },
  { id: 7, title: 'Baby Celebration Box', category: 'Gift Boxes', code: 'Nº 07', color: 'from-lavender/30 via-blush to-peach/30' },
  { id: 8, title: 'Satin Anniversary Package', category: 'Gift Boxes', code: 'Nº 08', color: 'from-rose-lt/40 via-blush to-peach/40' },
  { id: 9, title: 'Ramadan Keepsake Box', category: 'Eid & Festive', code: 'Nº 09', color: 'from-peach/40 via-blush to-lavender/30' },
  { id: 10, title: 'Custom Brand Box Kit', category: 'Corporate', code: 'Nº 10', color: 'from-blush-2 via-blush to-rose-lt/30' },
];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? items : items.filter(i => i.category === active);

  return (
    <section id="portfolio" className="py-24 bg-cream relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-6 bg-rose-dk/40" />
              <span className="text-rose-dk text-[10px] tracking-[0.4em] uppercase font-jost font-medium">portfolio</span>
              <div className="h-px w-6 bg-rose-dk/40" />
            </div>
            <h2 className="font-cormorant text-charcoal text-4xl sm:text-6xl font-light italic">
              Selected <span className="font-normal not-italic pink-text-gradient uppercase tracking-[0.1em]">Creations</span>
            </h2>
          </motion.div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-14 font-jost">
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
                className="group relative rounded-3xl overflow-hidden border border-rose-lt/30 bg-blush p-8 aspect-[4/5] flex flex-col justify-between hover:shadow-pink-md hover:border-rose-dk/40 transition-all duration-500 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex justify-between items-center">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-rose-dk font-jost font-medium">{item.category}</span>
                  <span className="text-xs font-cormorant italic text-gray-lt">{item.code}</span>
                </div>

                <div className="relative z-10 text-center py-8">
                  <h3 className="font-cormorant text-charcoal text-2xl sm:text-3xl font-light italic leading-snug group-hover:text-rose-dk transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gray mt-2 font-jost font-light">Custom Handcrafted Packaging</p>
                </div>

                <div className="relative z-10 flex justify-center">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-charcoal border-b border-charcoal/20 pb-0.5 group-hover:border-rose-dk group-hover:text-rose-dk transition-all font-jost">
                    Inquire via Instagram →
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-16 font-jost">
          <a
            href="https://instagram.com/hadivastudio"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-rose-dk/40 text-charcoal text-xs tracking-[0.25em] uppercase font-medium hover:bg-charcoal hover:text-blush hover:border-charcoal transition-all duration-300"
          >
            Explore More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
