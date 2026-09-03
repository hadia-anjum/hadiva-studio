'use client';
import { motion } from 'framer-motion';

const services = [
  { emoji: '🎁', title: 'Custom Gift Boxes', desc: 'Beautifully curated gift boxes for birthdays, anniversaries, and every special moment.' },
  { emoji: '💍', title: 'Wedding Hampers', desc: 'Aesthetic bridal, nikkah, mehndi, and barat hamper sets that steal the show.' },
  { emoji: '🎂', title: 'Birthday Packages', desc: 'Fun, colorful, Pinterest-worthy birthday surprise boxes your loved ones will adore.' },
  { emoji: '💼', title: 'Corporate Gifts', desc: 'Professional welcome kits, client appreciation boxes, and branded packaging.' },
  { emoji: '🌙', title: 'Eid & Ramadan Specials', desc: 'Festive packaging for Eid gifts, Ramadan hampers, and mithai boxes.' },
  { emoji: '✨', title: 'Brand Packaging', desc: 'Custom packaging solutions for small businesses — labels, boxes, and complete branding.' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-blush relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] blob-lavender pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] blob-peach pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-6 bg-rose/40" />
              <span className="text-rose text-[10px] tracking-[0.35em] uppercase font-light">what we create</span>
              <div className="h-px w-6 bg-rose/40" />
            </div>
            <h2 className="font-playfair text-charcoal text-3xl sm:text-5xl font-semibold">
              Our <span className="pink-text-gradient">Services</span>
            </h2>
            <p className="text-gray mt-4 max-w-md mx-auto text-xs sm:text-sm font-light leading-relaxed">
              From intimate gift boxes to grand wedding hampers — we package your love 💕
            </p>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative p-7 rounded-3xl bg-white border border-rose-lt/20 hover:border-rose/40 hover:shadow-pink-md transition-all duration-500 cursor-default"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 select-none">{service.emoji}</div>
              <h3 className="font-playfair text-charcoal font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray text-sm leading-relaxed font-light">{service.desc}</p>

              <div className="mt-5">
                <a href="https://instagram.com/hadivastudio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-rose hover:text-hot-pink transition-colors group/link">
                  DM to Order
                  <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </a>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(255,143,171,0.08),transparent_70%)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
