'use client';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Choose Package', desc: 'Browse our curated packages and pick the one that matches your scale and vision.', icon: '📦' },
  { num: '02', title: 'Share Details', desc: 'Provide event details, story timelines, photo galleries, and playlist choices.', icon: '📝' },
  { num: '03', title: 'Design & Curation', desc: 'Our creative team designs your bespoke digital experience with extreme attention to detail.', icon: '🎨' },
  { num: '04', title: 'Review & Polish', desc: 'Preview the draft online and request adjustments. We refine until it feels perfect.', icon: '✍️' },
  { num: '05', title: 'Launch & Share', desc: 'Your custom link and QR codes are ready to broadcast to friends and family.', icon: '🚀' },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,169,110,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-6 bg-gold/50" />
              <span className="text-gold-dk text-[10px] tracking-[0.35em] uppercase font-jost font-light">the workflow</span>
              <div className="h-px w-6 bg-gold/50" />
            </div>
            <h2 className="font-cormorant text-mocha text-3xl sm:text-5xl font-light uppercase tracking-wider">
              Simple &amp; <span className="text-gold-dk italic font-normal normal-case">Refined</span> Process
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold/45 via-gold/15 to-transparent hidden md:block" />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex gap-6 md:gap-8 items-start relative font-jost"
              >
                {/* Step node */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full border border-gold/40 bg-cream flex items-center justify-center shadow-warm-sm relative z-10">
                    <span className="text-2xl select-none">{step.icon}</span>
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gold-dk text-white text-[9px] font-bold flex items-center justify-center z-20">
                    {i + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <span className="text-gold-dk text-[10px] tracking-widest font-light font-jost uppercase">{step.num}</span>
                  <h3 className="font-cormorant text-mocha text-xl font-semibold mt-0.5 mb-1.5">{step.title}</h3>
                  <p className="text-taupe text-xs leading-relaxed font-light max-w-md">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
