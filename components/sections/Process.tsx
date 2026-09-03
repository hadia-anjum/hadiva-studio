'use client';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'DM Us on Instagram', desc: 'Send us a message on @hadivastudio with your idea, occasion, and budget. We respond within hours!', emoji: '📩' },
  { num: '02', title: 'Share Your Vision', desc: 'Tell us your color palette, theme, items to include, and any Pinterest inspo. We love mood boards!', emoji: '💭' },
  { num: '03', title: 'We Create & Deliver', desc: 'We handcraft your dream packaging and deliver it right to your doorstep across Pakistan!', emoji: '🎁' },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,143,171,0.05)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-6 bg-rose/40" />
              <span className="text-rose text-[10px] tracking-[0.35em] uppercase font-light">super simple</span>
              <div className="h-px w-6 bg-rose/40" />
            </div>
            <h2 className="font-playfair text-charcoal text-3xl sm:text-5xl font-semibold">
              How It <span className="pink-text-gradient">Works</span>
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-col gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="flex gap-6 items-start"
            >
              {/* Circle */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-lt to-blush-2 border border-rose/20 flex items-center justify-center">
                  <span className="text-2xl select-none">{step.emoji}</span>
                </div>
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-rose to-hot-pink text-white text-xs font-bold flex items-center justify-center shadow-pink-sm">{i + 1}</span>
              </div>

              {/* Content */}
              <div className="pt-2">
                <span className="text-rose/50 text-xs tracking-widest font-light">{step.num}</span>
                <h3 className="font-playfair text-charcoal text-xl font-semibold mt-1 mb-2">{step.title}</h3>
                <p className="text-gray text-sm leading-relaxed font-light max-w-md">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dotted connector line (desktop) */}
        <div className="absolute left-[calc(50%-20rem)] top-[12rem] bottom-[8rem] w-px border-l-2 border-dashed border-rose-lt/40 hidden md:block" />
      </div>
    </section>
  );
}
