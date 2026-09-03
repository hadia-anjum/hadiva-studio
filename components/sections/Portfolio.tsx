'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Gift Boxes', 'Wedding', 'Birthday', 'Corporate', 'Eid & Ramadan'];

const items = [
  { id: 1, title: 'Rose Gold Gift Box', category: 'Gift Boxes', emoji: '🎁', color: 'from-rose-lt to-blush-2' },
  { id: 2, title: 'Nikkah Hamper Set', category: 'Wedding', emoji: '💍', color: 'from-lavender to-blush' },
  { id: 3, title: 'Birthday Surprise Box', category: 'Birthday', emoji: '🎂', color: 'from-peach to-blush' },
  { id: 4, title: 'Corporate Welcome Kit', category: 'Corporate', emoji: '💼', color: 'from-mint to-blush' },
  { id: 5, title: 'Eid Mithai Box', category: 'Eid & Ramadan', emoji: '🌙', color: 'from-rose-lt to-lavender' },
  { id: 6, title: 'Bridal Trousseau Box', category: 'Wedding', emoji: '👰', color: 'from-blush-2 to-rose-lt' },
  { id: 7, title: 'Baby Shower Hamper', category: 'Gift Boxes', emoji: '👶', color: 'from-lavender to-mint' },
  { id: 8, title: 'Anniversary Package', category: 'Gift Boxes', emoji: '❤️', color: 'from-rose-lt to-peach' },
  { id: 9, title: 'Ramadan Gift Set', category: 'Eid & Ramadan', emoji: '✨', color: 'from-peach to-lavender' },
  { id: 10, title: 'Graduation Celebration', category: 'Birthday', emoji: '🎓', color: 'from-mint to-rose-lt' },
  { id: 11, title: 'Client Appreciation Box', category: 'Corporate', emoji: '⭐', color: 'from-blush to-peach' },
  { id: 12, title: 'Mehndi Night Hamper', category: 'Wedding', emoji: '🌸', color: 'from-rose-lt to-blush-2' },
];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? items : items.filter(i => i.category === active);

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blush to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-6 bg-rose/40" />
              <span className="text-rose text-[10px] tracking-[0.35em] uppercase font-light">our work</span>
              <div className="h-px w-6 bg-rose/40" />
            </div>
            <h2 className="font-playfair text-charcoal text-3xl sm:text-5xl font-semibold">
              Packaging <span className="pink-text-gradient">Portfolio</span>
            </h2>
            <p className="text-gray mt-4 max-w-md mx-auto text-xs sm:text-sm font-light leading-relaxed">
              A glimpse of our aesthetic, Pinterest-inspired creations 🎀
            </p>
          </motion.div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                active === cat
                  ? 'bg-gradient-to-r from-rose to-hot-pink text-white shadow-pink-sm'
                  : 'bg-rose-lt/20 text-gray hover:bg-rose-lt/40 hover:text-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`break-inside-avoid group relative rounded-3xl overflow-hidden border border-rose-lt/20 cursor-pointer hover:shadow-pink-md transition-shadow duration-500 ${
                  i % 3 === 0 ? 'aspect-[3/4]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/5]'
                }`}
              >
                {/* Gradient placeholder */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />

                {/* Emoji icon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl sm:text-6xl mb-3 group-hover:scale-110 transition-transform duration-300 select-none">{item.emoji}</span>
                  <span className="text-charcoal/60 text-xs font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.title}
                  </span>
                </div>

                {/* Hover pink overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-rose/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category badge */}
                <span className="absolute top-3 left-3 text-[9px] px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm text-rose-dk font-medium tracking-wide">
                  {item.category}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="text-gray text-sm mb-4 font-light">Want to see more? Check out our Instagram for daily updates 📸</p>
          <a
            href="https://instagram.com/hadivastudio"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-rose to-hot-pink text-white text-xs font-semibold tracking-widest uppercase hover:shadow-pink-lg hover:scale-105 transition-all duration-300"
          >
            Follow @hadivastudio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
