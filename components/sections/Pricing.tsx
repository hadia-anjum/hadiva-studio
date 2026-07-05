'use client';
import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(201,169,110,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 font-jost text-center">
        {/* Header */}
        <div className="mb-14">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-6 bg-gold/50" />
              <span className="text-gold-dk text-[10px] tracking-[0.35em] uppercase font-light">investment</span>
              <div className="h-px w-6 bg-gold/50" />
            </div>
            <h2 className="font-cormorant text-mocha text-3xl sm:text-5xl font-light uppercase tracking-wider">
              Bespoke <span className="text-gold-dk italic font-normal normal-case">Pricing</span>
            </h2>
            <p className="text-taupe mt-4 max-w-md mx-auto text-xs sm:text-sm font-light leading-relaxed">
              Every digital memory and interactive platform we design is uniquely tailored.
            </p>
          </motion.div>
        </div>

        {/* Pricing Card Notice */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-2xl mx-auto p-10 rounded-[2.5rem] bg-ivory/50 border border-mocha/5 shadow-warm-md"
        >
          {/* Decorative gold ring */}
          <div className="absolute top-3 right-3 text-3xl select-none opacity-60">✨</div>
          
          <div className="text-4xl mb-6">💎</div>
          <h3 className="font-cormorant text-mocha font-semibold text-2xl mb-4">Tailored to Your Vision</h3>
          
          <p className="text-taupe text-sm leading-relaxed font-light mb-8 max-w-md mx-auto">
            Since every digital invitation, baby memory timeline, graduation portfolio, and small business website we curate is uniquely personalized, we do not believe in one-size-fits-all package rates.
          </p>

          {/* Golden notice box */}
          <div className="p-5.5 rounded-2xl bg-gold/10 border border-gold/30 text-mocha text-sm font-medium tracking-wide leading-relaxed mb-8 max-w-lg mx-auto italic font-cormorant">
            "Prices are customized and decided based on your specific project requirements, features, and styling choices."
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:hadiaanjum61@gmal.com"
              className="px-8 py-3.5 rounded-full bg-mocha text-white text-xs font-semibold tracking-widest uppercase hover:bg-mocha-2 transition-all duration-300 shadow-md"
            >
              Email Directly
            </a>
            <a
              href="https://instagram.com/hadivastudio"
              target="_blank" rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border border-mocha/15 text-mocha text-xs font-semibold tracking-widest uppercase hover:bg-mocha/5 transition-all duration-300"
            >
              DM on Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
