'use client';
import { motion } from 'framer-motion';

const services = [
  { number: '01', title: 'Bespoke Gift Boxes', desc: 'Curated luxury gift boxes designed for birthdays, anniversaries, and intimate personal celebrations.' },
  { number: '02', title: 'Bridal & Nikkah Hampers', desc: 'Aesthetic bridal trousseau, nikkah, mehndi, and barat hampers tailored to your wedding aesthetic.' },
  { number: '03', title: 'Celebration Packages', desc: 'Chic birthday and graduation surprise boxes crafted to make moments memorable.' },
  { number: '04', title: 'Corporate Gift Suites', desc: 'Executive welcome kits, client appreciation packaging, and branded corporate hampers.' },
  { number: '05', title: 'Festive & Eid Editions', desc: 'Limited festive hampers, Ramadan gift sets, and custom mithai box packaging.' },
  { number: '06', title: 'Custom Brand Packaging', desc: 'Bespoke packaging design for small businesses — boxes, sleeves, cards, and ribboning.' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-blush relative overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-6 bg-rose-dk/40" />
              <span className="text-rose-dk text-[10px] tracking-[0.4em] uppercase font-jost font-medium">expertise</span>
              <div className="h-px w-6 bg-rose-dk/40" />
            </div>
            <h2 className="font-cormorant text-charcoal text-4xl sm:text-6xl font-light italic">
              Our <span className="font-normal not-italic pink-text-gradient uppercase tracking-[0.1em]">Offerings</span>
            </h2>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 font-jost">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group p-8 rounded-3xl bg-cream border border-rose-lt/30 hover:border-rose-dk/40 hover:shadow-pink-sm transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <span className="font-cormorant text-rose-dk italic text-2xl font-light block mb-4">{service.number}</span>
                <h3 className="font-cormorant text-charcoal text-2xl font-medium tracking-wide mb-3">{service.title}</h3>
                <p className="text-gray text-xs leading-relaxed font-light">{service.desc}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-rose-lt/20">
                <a
                  href="https://instagram.com/hadivastudio"
                  target="_blank" rel="noopener noreferrer"
                  className="text-[10px] tracking-[0.25em] uppercase text-rose-dk font-medium hover:text-charcoal transition-colors inline-flex items-center gap-2"
                >
                  Inquire via Instagram <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
