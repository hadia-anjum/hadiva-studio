'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(255,143,171,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        {/* Header */}
        <div className="mb-14">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-6 bg-rose/40" />
              <span className="text-rose text-[10px] tracking-[0.35em] uppercase font-light">get in touch</span>
              <div className="h-px w-6 bg-rose/40" />
            </div>
            <h2 className="font-playfair text-charcoal text-3xl sm:text-5xl font-semibold">
              Let&apos;s <span className="pink-text-gradient">Connect</span> 💌
            </h2>
            <p className="text-gray mt-4 max-w-md mx-auto text-xs sm:text-sm font-light leading-relaxed">
              Ready to create something beautiful? Slide into our DMs — we love hearing your ideas!
            </p>
          </motion.div>
        </div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-[2.5rem] bg-blush border border-rose-lt/30 shadow-soft-md max-w-md mx-auto"
        >
          <div className="text-5xl mb-5 select-none">🎀</div>
          <h3 className="font-playfair text-charcoal font-semibold text-xl mb-2">Order Through Instagram</h3>
          <p className="text-gray text-sm font-light leading-relaxed mb-6">
            Just DM us your requirements — occasion, color theme, budget — and we will handle the rest!
          </p>

          {/* Instagram DM button */}
          <a
            href="https://instagram.com/hadivastudio"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 rounded-full bg-gradient-to-r from-rose to-hot-pink text-white text-sm font-semibold uppercase tracking-wider hover:shadow-pink-lg hover:scale-105 transition-all duration-300 mb-4"
          >
            DM @hadivastudio 📩
          </a>

          {/* Email fallback */}
          <a
            href="mailto:hadiaanjum61@gmail.com"
            className="flex items-center justify-center gap-2 py-3.5 rounded-full border border-rose/40 text-rose-dk text-xs font-semibold uppercase tracking-wider hover:bg-rose-lt/20 transition-all"
          >
            Email Us
          </a>

          {/* Price note */}
          <div className="mt-6 p-4 rounded-2xl bg-white/60 border border-rose-lt/20">
            <p className="text-gray text-xs font-light italic leading-relaxed">
              ✨ Prices depend on your specific requirements — size, items, theme, and customization level. DM us for a custom quote!
            </p>
          </div>

          {/* Location */}
          <p className="mt-5 text-gray-lt text-xs tracking-wide">
            📍 Based in Pakistan 🇵🇰 — Delivering Nationwide
          </p>
        </motion.div>
      </div>
    </section>
  );
}
