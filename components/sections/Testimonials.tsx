'use client';
import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Ayesha M.', location: 'Lahore, Pakistan', stars: 5, quote: "We commissioned Hadiva Studio to create a website for our custom cake bakery. The experience was seamless. The layout is as premium as our pastries, and our custom orders have doubled since going live!", event: 'Bakery Brand Site', avatar: '🥐' },
  { name: 'Amara S.', location: 'Jakarta, Indonesia', stars: 5, quote: "Hadiva Studio completely transformed our wedding invitation into a digital masterpiece. Our guests couldn't stop praising the elegant botanical layout, background music, and smooth RSVP timeline.", event: 'Wedding Microsite', avatar: '👰' },
  { name: 'Daniel K.', location: 'Singapore', stars: 5, quote: "The QR Menu website created for our cafe is absolute perfection. It's incredibly fast, beautifully animated, and matches our physical branding flawlessly. Our customers absolutely love the interface!", event: 'Restaurant QR Menu', avatar: '☕' },
  { name: 'Zainab R.', location: 'Dubai, UAE', stars: 5, quote: "My graduation portfolio website is beautiful! The QR-enabled access makes sharing my design work with recruiters during networking events instant, professional, and memorable.", event: 'Creative Portfolio', avatar: '🎓' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(0);

  const next = useCallback(() => setCurrent(c => (c + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length), []);

  return (
    <section id="testimonials" className="py-24 bg-ivory relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-6 bg-gold/50" />
              <span className="text-gold-dk text-[10px] tracking-[0.35em] uppercase font-jost font-light">kind words</span>
              <div className="h-px w-6 bg-gold/50" />
            </div>
            <h2 className="font-cormorant text-mocha text-3xl sm:text-5xl font-light uppercase tracking-wider">
              Client <span className="text-gold-dk italic font-normal normal-case">Testimonials</span>
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
                <span key={i} className="text-gold text-lg">★</span>
              ))}
            </div>
            <blockquote className="font-cormorant text-lg sm:text-2xl text-mocha/90 italic leading-relaxed mb-6 px-4">
              &ldquo;{testimonials[current].quote}&rdquo;
            </blockquote>
            <div className="font-jost">
              <p className="text-mocha font-semibold text-sm tracking-wider uppercase">{testimonials[current].name}</p>
              <p className="text-taupe text-xs mt-0.5">{testimonials[current].location}</p>
              <span className="inline-block mt-3 text-[9px] tracking-widest uppercase px-3.5 py-1 rounded-full border border-gold/30 text-gold-dk font-medium bg-cream">
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
            className="w-10 h-10 rounded-full border border-mocha/10 flex items-center justify-center text-taupe hover:border-gold/40 hover:text-gold-dk transition-all"
          >
            ←
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                type="button"
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2 bg-gold' : 'w-2 h-2 bg-mocha/15 hover:bg-mocha/30'}`} 
              />
            ))}
          </div>
          <button 
            type="button"
            onClick={next}
            className="w-10 h-10 rounded-full border border-mocha/10 flex items-center justify-center text-taupe hover:border-gold/40 hover:text-gold-dk transition-all"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
