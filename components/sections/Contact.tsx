'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-ivory relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(201,169,110,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 font-jost text-center">
        {/* Header */}
        <div className="mb-14">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-6 bg-gold/50" />
              <span className="text-gold-dk text-[10px] tracking-[0.35em] uppercase font-light">get in touch</span>
              <div className="h-px w-6 bg-gold/50" />
            </div>
            <h2 className="font-cormorant text-mocha text-3xl sm:text-5xl font-light uppercase tracking-wider">
              Start Your <span className="text-gold-dk italic font-normal normal-case">Project</span>
            </h2>
            <p className="text-taupe mt-4 max-w-md mx-auto text-xs sm:text-sm font-light leading-relaxed">
              Reach out directly via Instagram DM or Email. We'll curate something extraordinary for your brand or event.
            </p>
          </motion.div>
        </div>

        {/* Centered Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-[2.5rem] border border-mocha/5 bg-cream shadow-warm-md text-left max-w-md mx-auto"
        >
          <h3 className="font-cormorant text-mocha font-semibold text-xl mb-6 text-center">Contact Channels</h3>
          
          <div className="flex flex-col gap-6 mb-8">
            {[
              { icon: '📸', label: 'Instagram', value: '@hadivastudio', href: 'https://instagram.com/hadivastudio' },
              { icon: '✉️', label: 'Email Address', value: 'hadiaanjum61@gmal.com', href: 'mailto:hadiaanjum61@gmal.com' },
              { icon: '🕐', label: 'Response Time', value: 'Within 1–2 hours', href: null },
            ].map(item => (
              <div key={item.label} className="flex items-start gap-4">
                <span className="text-2xl mt-0.5 select-none">{item.icon}</span>
                <div>
                  <p className="text-[10px] text-taupe tracking-wider uppercase font-medium">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-mocha hover:text-gold-dk transition-colors font-light">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-mocha font-light">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <a
              href="https://instagram.com/hadivastudio"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 rounded-full bg-mocha text-white text-xs font-semibold uppercase tracking-wider hover:bg-mocha-2 transition-all shadow-sm"
            >
              DM on Instagram
            </a>
            <a
              href="mailto:hadiaanjum61@gmal.com"
              className="flex items-center justify-center gap-2 py-3.5 rounded-full border border-gold/60 text-gold-dk text-xs font-semibold uppercase tracking-wider hover:bg-gold hover:text-white transition-all shadow-sm"
            >
              Email Us Directly
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
