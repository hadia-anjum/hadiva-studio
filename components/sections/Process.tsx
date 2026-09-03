'use client';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Connect via Instagram', desc: 'Direct message us on Instagram with your occasion details, theme inspiration, and desired timeline.' },
  { num: '02', title: 'Consultation & Concept', desc: 'We collaborate to curate your bespoke color palette, box style, ribbons, and personalized details.' },
  { num: '03', title: 'Handcrafted Delivery', desc: 'Each piece is meticulously crafted and safely dispatched to your address anywhere in Pakistan.' },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-cream relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 font-jost">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-6 bg-rose-dk/40" />
              <span className="text-rose-dk text-[10px] tracking-[0.4em] uppercase font-medium">the experience</span>
              <div className="h-px w-6 bg-rose-dk/40" />
            </div>
            <h2 className="font-cormorant text-charcoal text-4xl sm:text-6xl font-light italic">
              How It <span className="font-normal not-italic pink-text-gradient uppercase tracking-[0.1em]">Works</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="p-8 rounded-3xl bg-blush border border-rose-lt/30 relative flex flex-col justify-between"
            >
              <div>
                <span className="font-cormorant text-rose-dk italic text-4xl font-light block mb-4">{step.num}</span>
                <h3 className="font-cormorant text-charcoal text-2xl font-medium tracking-wide mb-3">{step.title}</h3>
                <p className="text-gray text-xs leading-relaxed font-light">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
