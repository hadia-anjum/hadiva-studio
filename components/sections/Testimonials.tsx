'use client';
import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Ayesha Khan', location: 'Lahore', quote: 'The bridal hamper was absolutely exquisite. The rose gold palette and refined custom ribboning were Pinterest-worthy in every sense. All our guests complimented the craftsmanship.', event: 'Bridal Nikkah Hamper' },
  { name: 'Fatima Rehman', location: 'Karachi', quote: 'Ordered a custom birthday keepsake box and the presentation was immaculate. The unboxing experience was truly memorable.', event: 'Birthday Keepsake Box' },
  { name: 'Zainab Ahmed', location: 'Islamabad', quote: 'Hadiva Studio designed executive gift suites for our firm. Professional, punctual, and beautifully branded.', event: 'Corporate Gift Suite' },
  { name: 'Maryam Soomro', location: 'Lahore', quote: 'The festive hamper set exceeded expectations. Elegant pastel detailing and custom packaging.', event: 'Festive Hamper Set' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent(c => (c + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length), []);

  return (
    <section id="testimonials" className="py-24 bg-blush relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 font-jost">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-6 bg-rose-dk/40" />
              <span className="text-rose-dk text-[10px] tracking-[0.4em] uppercase font-medium">client praise</span>
              <div className="h-px w-6 bg-rose-dk/40" />
            </div>
            <h2 className="font-cormorant text-charcoal text-4xl sm:text-6xl font-light italic">
              Client <span className="font-normal not-italic pink-text-gradient uppercase tracking-[0.1em]">Reviews</span>
            </h2>
          </motion.div>
        </div>

        {/* Testimonial slider */}
        <div className="relative max-w-2xl mx-auto text-center">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            {/* Minimal SVG star rating */}
            <div className="flex justify-center gap-1.5 mb-6 text-rose-dk">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
            </div>

            <blockquote className="font-cormorant text-xl sm:text-3xl text-charcoal font-light italic leading-relaxed mb-8">
              &ldquo;{testimonials[current].quote}&rdquo;
            </blockquote>

            <div>
              <p className="text-charcoal font-medium text-xs tracking-[0.25em] uppercase">{testimonials[current].name}</p>
              <p className="text-gray text-[11px] font-light mt-0.5 tracking-wider">{testimonials[current].location}</p>
              <span className="inline-block mt-3 text-[9px] tracking-[0.2em] uppercase px-4 py-1 rounded-full border border-rose-lt/40 text-rose-dk font-medium bg-cream">
                {testimonials[current].event}
              </span>
            </div>
          </motion.div>

          {/* Navigation controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-rose-lt/40 flex items-center justify-center text-gray hover:border-rose-dk hover:text-charcoal transition-all text-xs"
            >
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-1.5 bg-rose-dk' : 'w-1.5 h-1.5 bg-rose-lt/40'}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-rose-lt/40 flex items-center justify-center text-gray hover:border-rose-dk hover:text-charcoal transition-all text-xs"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
