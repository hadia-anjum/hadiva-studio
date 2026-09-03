'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-cream relative overflow-hidden font-jost">
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        {/* Header */}
        <div className="mb-14">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-6 bg-rose-dk/40" />
              <span className="text-rose-dk text-[10px] tracking-[0.4em] uppercase font-medium">inquiries</span>
              <div className="h-px w-6 bg-rose-dk/40" />
            </div>
            <h2 className="font-cormorant text-charcoal text-4xl sm:text-6xl font-light italic">
              Begin Your <span className="font-normal not-italic pink-text-gradient uppercase tracking-[0.1em]">Order</span>
            </h2>
            <p className="text-gray mt-4 max-w-md mx-auto text-xs sm:text-sm font-light leading-relaxed">
              Every creation is uniquely handcrafted. Connect with us directly on Instagram to discuss your vision.
            </p>
          </motion.div>
        </div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-10 rounded-3xl bg-blush border border-rose-lt/30 shadow-soft-md max-w-lg mx-auto"
        >
          <span className="font-cormorant text-rose-dk text-3xl font-light italic block mb-3">Order Through Instagram</span>
          <p className="text-gray text-xs font-light leading-relaxed mb-8 max-w-sm mx-auto">
            Just DM us your requirements — occasion, color theme, budget — and we will handle the rest!
          </p>

          {/* Instagram DM button ONLY */}
          <a
            href="https://instagram.com/hadivastudio"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-4 rounded-full bg-charcoal text-blush text-xs font-medium uppercase tracking-[0.25em] hover:bg-rose-dk transition-all duration-300 shadow-soft-sm"
          >
            DM @hadivastudio
          </a>

          {/* Price note */}
          <div className="mt-8 p-4 rounded-2xl bg-cream/70 border border-rose-lt/30">
            <p className="text-gray text-[11px] font-light leading-relaxed italic">
              Pricing is customized based on box style, dimensions, curated items, and personalized detailing. DM us for a custom quote!
            </p>
          </div>

          <p className="mt-6 text-gray-lt text-[10px] tracking-[0.25em] uppercase">
            Based in Pakistan — Nationwide Dispatch
          </p>
        </motion.div>
      </div>
    </section>
  );
}
