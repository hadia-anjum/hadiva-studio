'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 500, suffix: '+', label: 'Digital Invitations', icon: '💌' },
  { value: 150, suffix: '+', label: 'Event Microsites', icon: '🌐' },
  { value: 15, suffix: '+', label: 'Countries Served', icon: '🌍' },
  { value: 100, suffix: '%', label: 'Custom Designs', icon: '✨' },
];

function CountUp({ end, suffix, start }: { end: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let current = 0;
    const duration = 2000;
    const step = (end / duration) * 16;
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [start, end]);
  return <span>{count}{suffix}</span>;
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-cream border-t border-b border-mocha/5 relative overflow-hidden">
      {/* Decorative marble radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-6 bg-gold/50" />
            <span className="text-gold-dk text-[10px] tracking-[0.35em] uppercase font-jost font-light">Our Milestones</span>
            <div className="h-px w-6 bg-gold/50" />
          </div>
          <h2 className="font-cormorant text-mocha text-3xl sm:text-4xl font-light uppercase tracking-wider">
            Trusted by <span className="text-gold-dk italic font-normal normal-case">Thousands</span> Worldwide
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group text-center p-6 rounded-3xl bg-ivory/40 border border-mocha/5 hover:border-gold/40 hover:shadow-gold-sm transition-all duration-500"
            >
              <div className="text-3xl mb-2 group-hover:scale-105 transition-transform duration-300">{stat.icon}</div>
              <div className="font-cormorant text-mocha text-3xl sm:text-4xl font-semibold mb-1">
                <CountUp end={stat.value} suffix={stat.suffix} start={inView} />
              </div>
              <p className="text-taupe text-xs tracking-wider font-light font-jost uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
