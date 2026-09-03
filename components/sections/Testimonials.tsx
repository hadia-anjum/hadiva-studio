'use client';
import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Ayesha K.', location: 'Lahore', stars: 5, quote: 'The wedding hamper was absolutely stunning! My dulhan loved every detail. The rose gold packaging was Pinterest-perfect and all my guests were asking where I got it from!', event: 'Wedding Hamper', avatar: '👰' },
  { name: 'Fatima R.', location: 'Karachi', stars: 5, quote: 'I ordered a birthday surprise box for my best friend and she literally cried happy tears! The attention to detail and the aesthetic packaging was beyond beautiful.', event: 'Birthday Box', avatar: '🎂' },
  { name: 'Zainab A.', location: 'Islamabad', stars: 5, quote: 'Hadiva Studio did our corporate welcome kits for 50 employees and every single person was impressed. Professional, elegant, and delivered right on time!', event: 'Corporate Kit', avatar: '💼' },
  { name: 'Maryam S.', location: 'Lahore', stars: 5, quote: 'The Eid hamper set was gorgeous! Beautiful pastel packaging with custom ribbons. My family was so impressed. Already planning my next order for Ramadan!', event: 'Eid Hamper', avatar: '🌙' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(0);

  const next = useCallback(() => setCurrent(c => (c + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length), []);

  return (
    <section id="testimonials" className="py-24 bg-blush relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,143,171,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-6 bg-rose/40" />
              <span className="text-rose text-[10px] tracking-[0.35em] uppercase font-light">kind words</span>
              <div className="h-px w-6 bg-rose/40" />
            </div>
            <h2 className="font-playfair text-charcoal text-3xl sm:text-5xl font-semibold">
              Happy <span className="pink-text-gradient">Customers</span> 💕
            </h2>
          </motion.div>
        </div>

        {/* Testimonial slider */}
        <div className="relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl mx-auto text-center"
            onTouchStart={e => { touchStart.current = e.touches[0].clientX; }}
            onTouchEnd={e => {
              const diff = touchStart.current - e.changedTouches[0].clientX;
              if (Math.abs(diff) > 40) {
                if (diff > 0) next();
                else prev();
              }
            }}
          >
            <div className="text-5xl mb-5 select-none">{testimonials[current].avatar}</div>
            <div className="flex justify-center gap-1 mb-4 select-none">
              {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                <span key={i} className="text-rose text-lg">★</span>
              ))}
            </div>
            <blockquote className="font-playfair text-lg sm:text-2xl text-charcoal/90 italic leading-relaxed mb-6 px-4">
              &ldquo;{testimonials[current].quote}&rdquo;
            </blockquote>
            <div>
              <p className="text-charcoal font-semibold text-sm tracking-wider uppercase">{testimonials[current].name}</p>
              <p className="text-gray text-xs mt-0.5">{testimonials[current].location}</p>
              <span className="inline-block mt-3 text-[9px] tracking-widest uppercase px-3.5 py-1 rounded-full border border-rose/30 text-rose-dk font-medium bg-white">
                {testimonials[current].event}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-5 mt-10">
          <button
            type="button"
            onClick={prev}
            className="w-10 h-10 rounded-full border border-rose-lt/40 flex items-center justify-center text-gray hover:border-rose/60 hover:text-rose transition-all"
          >
            ←
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2 bg-gradient-to-r from-rose to-hot-pink' : 'w-2 h-2 bg-rose-lt/30 hover:bg-rose-lt/50'}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="w-10 h-10 rounded-full border border-rose-lt/40 flex items-center justify-center text-gray hover:border-rose/60 hover:text-rose transition-all"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
