'use client';
import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

const categories = ['All', 'Business', 'Wedding', 'Nikkah', 'Events'];

const items = [
  { id: 1, title: 'Bakehouse Cafe & Bakery', cat: 'Business', emoji: '🥐', gradient: 'from-[#FAF8F5] via-[#F3EFE9] to-[#E9DFD3]', accent: 'amber', year: '2025' },
  { id: 2, title: 'Amara & Sebastian', cat: 'Wedding', emoji: '💍', gradient: 'from-[#FAF8F5] via-[#F3EFE9] to-[#E9DFD3]', accent: 'rose', year: '2025' },
  { id: 3, title: 'Aura Studio Co-Working', cat: 'Business', emoji: '🏢', gradient: 'from-[#F7F8FA] via-[#ECEDF2] to-[#D9DCE8]', accent: 'indigo', year: '2025' },
  { id: 4, title: 'Nadia & Rizky', cat: 'Nikkah', emoji: '🕌', gradient: 'from-[#F7FAF6] via-[#EDF3EC] to-[#DBE7DA]', accent: 'emerald', year: '2025' },
  { id: 5, title: 'Lumina Skincare Brand', cat: 'Business', emoji: '🧴', gradient: 'from-[#FAF7F8] via-[#F5ECED] to-[#E8D9DC]', accent: 'pink', year: '2024' },
  { id: 6, title: 'Sofia Birthday Bash', cat: 'Events', emoji: '🎂', gradient: 'from-[#FAF7FC] via-[#F2ECF5] to-[#E3D9E8]', accent: 'violet', year: '2024' },
  { id: 7, title: 'Baby Nara Milestone', cat: 'Events', emoji: '👶', gradient: 'from-[#F7FAFC] via-[#ECF3F5] to-[#D9E5E8]', accent: 'sky', year: '2024' },
  { id: 8, title: 'Zen Dental Clinic', cat: 'Business', emoji: '🦷', gradient: 'from-[#F6FAF9] via-[#ECF5F3] to-[#D9E8E4]', accent: 'teal', year: '2025' },
  { id: 9, title: 'Layla & Daniel', cat: 'Wedding', emoji: '🌹', gradient: 'from-[#FCFAF7] via-[#F5EFE6] to-[#EADEC9]', accent: 'amber', year: '2025' },
];

export default function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? items : items.filter(i => i.cat === active);

  return (
    <section id="portfolio" className="py-24 bg-cream relative overflow-hidden">
      {/* Background marble accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(201,169,110,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-6 bg-gold/50" />
              <span className="text-gold-dk text-[10px] tracking-[0.35em] uppercase font-jost font-light">our creations</span>
              <div className="h-px w-6 bg-gold/50" />
            </div>
            <h2 className="font-cormorant text-mocha text-3xl sm:text-5xl font-light uppercase tracking-wider">
              Bespoke <span className="text-gold-dk italic font-normal normal-case">Portfolio</span>
            </h2>
          </motion.div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 font-jost">
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className={`px-4 py-1.5 rounded-full text-[10px] tracking-widest uppercase transition-all duration-300 ${
                active === cat 
                  ? 'bg-mocha text-white font-semibold shadow-warm-sm' 
                  : 'border border-mocha/10 text-taupe hover:border-gold/30 hover:text-gold-dk'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Masonry grid */}
        <LayoutGroup>
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-jost">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="group relative rounded-3xl overflow-hidden border border-mocha/5 hover:border-gold/40 hover:shadow-warm-md transition-all duration-500 cursor-pointer"
                  style={{ minHeight: i % 3 === 1 ? '270px' : '230px' }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-500">
                    {/* Wreath outline decoration */}
                    <div className="absolute inset-4 border border-gold/10 rounded-2xl group-hover:scale-98 transition-transform duration-500 pointer-events-none" />
                    <div className="text-5xl mb-3 group-hover:scale-105 transition-transform duration-500 select-none">{item.emoji}</div>
                    <div className="text-center relative z-10">
                      <p className="text-[8px] text-taupe tracking-[0.2em] uppercase mb-1">{item.cat} · {item.year}</p>
                      <p className="font-cormorant text-mocha font-semibold text-lg">{item.title}</p>
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cream/90 via-cream/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-center pb-6">
                    <span className="text-[10px] tracking-widest uppercase text-mocha border border-mocha/20 bg-cream px-5 py-2 rounded-full font-medium shadow-warm-sm">
                      View Demo ↗
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
