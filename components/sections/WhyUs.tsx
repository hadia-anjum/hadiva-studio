'use client';
import { motion } from 'framer-motion';

const reasons = [
  { icon: '👑', title: 'Luxury UI Design', desc: 'Every layout is designed to feel boutique, elegant, and completely tailored to your event.' },
  { icon: '⚡', title: 'Express Delivery', desc: 'Receive your drafted invitation within 48 to 72 hours, with instant updates live.' },
  { icon: '🌍', title: 'Global Execution', desc: 'We serve couples across 15+ countries, supporting diverse languages and formats.' },
  { icon: '♾️', title: 'Limitless Refinements', desc: 'We revise until you are fully satisfied, ensuring no compromises are made.' },
  { icon: '📱', title: 'Seamless Responsive', desc: 'Looks stunning on mobile, tablet, or desktop. Optimized for touch navigation.' },
  { icon: '💎', title: 'Bespoke Experience', desc: 'Attentive, concierge-level support from our design team from query to launch.' },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(201,169,110,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-6 bg-gold/50" />
              <span className="text-gold-dk text-[10px] tracking-[0.35em] uppercase font-jost font-light">why hadiva</span>
              <div className="h-px w-6 bg-gold/50" />
            </div>
            <h2 className="font-cormorant text-mocha text-3xl sm:text-5xl font-light uppercase tracking-wider">
              Why Partner With <span className="text-gold-dk italic font-normal normal-case">Us</span>?
            </h2>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 font-jost">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-3xl border border-mocha/5 bg-ivory/40 hover:border-gold/30 hover:shadow-warm-md transition-all duration-500"
            >
              <div className="text-4xl mb-4 group-hover:scale-105 transition-transform duration-300 select-none">{r.icon}</div>
              <h3 className="font-cormorant text-mocha font-semibold text-lg mb-2">{r.title}</h3>
              <p className="text-taupe text-xs leading-relaxed font-light">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
