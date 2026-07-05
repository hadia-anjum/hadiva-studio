'use client';
import { motion } from 'framer-motion';

const features = [
  { icon: '🍽️', title: 'Interactive QR Menus' },
  { icon: '📅', title: 'Appointment Booking' },
  { icon: '📱', title: 'Mobile-First Layouts' },
  { icon: '🗺️', title: 'Google Maps' },
  { icon: '✨', title: 'Services Catalog' },
  { icon: '📸', title: 'Instagram Galleries' },
  { icon: '🪄', title: 'Micro Animations' },
  { icon: '💬', title: 'WhatsApp Contact' },
  { icon: '⭐', title: 'Review Boards' },
  { icon: '⚡', title: 'High Performance' },
  { icon: '🎨', title: 'Bespoke Branding' },
  { icon: '💌', title: 'Live Event RSVPs' },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-ivory relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream to-ivory pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-6 bg-gold/50" />
              <span className="text-gold-dk text-[10px] tracking-[0.35em] uppercase font-jost font-light">everything included</span>
              <div className="h-px w-6 bg-gold/50" />
            </div>
            <h2 className="font-cormorant text-mocha text-3xl sm:text-5xl font-light uppercase tracking-wider">
              Premium <span className="text-gold-dk italic font-normal normal-case">Features</span>
            </h2>
            <p className="text-taupe mt-4 max-w-md mx-auto text-xs sm:text-sm font-light font-jost leading-relaxed">
              Every bespoke website and digital invitation comes equipped with high-end, responsive utilities.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 font-jost">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              whileHover={{ scale: 1.04, borderColor: 'rgba(201,169,110,0.5)' }}
              className="group flex flex-col items-center text-center p-5 rounded-3xl border border-mocha/5 bg-cream hover:bg-gold/5 transition-all duration-300 cursor-default shadow-warm-sm"
            >
              <div className="text-3xl mb-3 group-hover:scale-105 transition-transform duration-355 select-none">{f.icon}</div>
              <p className="text-taupe text-[11px] tracking-widest uppercase font-medium group-hover:text-mocha transition-colors duration-300">{f.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
