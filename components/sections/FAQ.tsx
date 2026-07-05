'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: 'How long does it take to build a wedding website?', a: 'Most websites are delivered within 48–72 hours after receiving all your details and photos. Rush delivery options are available.' },
  { q: 'Can I make changes after the website is live?', a: 'Yes! We offer unlimited revisions during the design process and support updates for up to 3 months after going live.' },
  { q: 'How do guests access the invitation?', a: 'Your guests receive a custom link and QR code. They can simply tap the QR code from a physical card, or click the link from WhatsApp, Instagram, or email.' },
  { q: 'Do you offer multilingual invitations?', a: 'Absolutely. We support invitations in English, Indonesian, Arabic, French, and many other languages. Just let us know.' },
  { q: 'Can the invitation play music automatically?', a: 'Yes, we can add background music that plays when guests open the invitation. We use royalty-free music or you can provide your own special song.' },
  { q: 'How does the RSVP system work?', a: 'Guests submit their attendance online. You receive instant notifications and can view the guest list with attendance status in real time.' },
  { q: 'Is the website mobile-friendly?', a: 'Yes, 100%. All our websites are designed mobile-first, meaning they look perfect on any phone, tablet, or desktop device.' },
  { q: 'What happens after the wedding?', a: 'Your website stays live for 12 months. After that, you can choose to extend hosting or download a PDF keepsake version.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-ivory relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 font-jost">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-6 bg-gold/50" />
              <span className="text-gold-dk text-[10px] tracking-[0.35em] uppercase font-light">common questions</span>
              <div className="h-px w-6 bg-gold/50" />
            </div>
            <h2 className="font-cormorant text-mocha text-3xl sm:text-5xl font-light uppercase tracking-wider">
              Frequently Asked <span className="text-gold-dk italic font-normal normal-case">Questions</span>
            </h2>
          </motion.div>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                open === i 
                  ? 'border-gold bg-cream shadow-warm-md' 
                  : 'border-mocha/5 bg-cream/70 hover:border-mocha/10'
              }`}
            >
              <button
                id={`faq-${i}`}
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none"
              >
                <span className={`font-semibold text-sm transition-colors duration-300 font-jost ${
                  open === i ? 'text-gold-dk' : 'text-mocha'
                }`}>{faq.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gold-dk text-xl flex-shrink-0 select-none font-light"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 text-taupe text-xs leading-relaxed font-light font-jost">
                      <div className="h-px bg-mocha/5 mb-4" />
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
