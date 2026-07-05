'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const iv = setInterval(() => {
      setProgress(p => {
        const next = p + Math.random() * 12 + 6;
        if (next >= 100) {
          clearInterval(iv);
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 900);
          }, 450);
          return 100;
        }
        return next;
      });
    }, 110);
    return () => clearInterval(iv);
  }, [onComplete]);

  // Framer Motion variants for staggered text loading
  const textContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } },
  };

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] marble-bg flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle slow scaling vignette background */}
          <motion.div 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 4, ease: 'easeOut' }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(8,6,3,0.06)_100%)] pointer-events-none"
          />

          {/* Decorative luxury gold rings */}
          <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] gold-ring opacity-15 rotate-slow" />
          <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] gold-ring opacity-15 rotate-slow" style={{ animationDirection: 'reverse' }} />

          {/* Luxury Logo & Animated Crest */}
          <div className="text-center mb-12 relative z-10 flex flex-col items-center justify-center">
            {/* SVG Crest Reveal */}
            <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="rgba(201, 169, 110, 0.4)"
                  strokeWidth="1.5"
                  fill="transparent"
                  strokeDasharray="283"
                  initial={{ strokeDashoffset: 283 }}
                  animate={{ strokeDashoffset: 283 - (283 * Math.min(progress, 100)) / 100 }}
                  transition={{ ease: 'easeOut', duration: 0.5 }}
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="rgba(201, 169, 110, 0.15)"
                  strokeWidth="0.75"
                  fill="transparent"
                />
              </svg>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-dk flex items-center justify-center text-white font-cormorant font-light text-3xl shadow-gold-sm"
              >
                H
              </motion.div>
            </div>

            {/* Brand Title & Tagline with Staggered Fade-in */}
            <motion.div
              variants={textContainer}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center"
            >
              <motion.p 
                variants={textItem}
                className="font-cormorant text-mocha text-4xl md:text-5xl font-light tracking-[0.25em] uppercase"
              >
                Hadiva
              </motion.p>
              <motion.div 
                variants={textItem}
                className="flex items-center justify-center gap-3 mt-1.5 w-full"
              >
                <div className="h-px w-8 bg-gold/40" />
                <span className="text-gold-dk text-[10px] tracking-[0.45em] uppercase font-jost font-light">Studio</span>
                <div className="h-px w-8 bg-gold/40" />
              </motion.div>
              <motion.p 
                variants={textItem}
                className="text-taupe text-[9px] tracking-[0.35em] uppercase font-jost font-light mt-6"
              >
                Crafting Timeless Digital Experiences
              </motion.p>
            </motion.div>
          </div>

          {/* Sleek Minimal Progress line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative z-10 w-52 md:w-64"
          >
            <div className="h-px bg-mocha/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-gold/40 via-gold to-gold-lt rounded-full relative"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
            <div className="flex items-center justify-between text-taupe text-[9px] mt-3 tracking-widest uppercase font-light">
              <span>{progress < 100 ? 'Curating Experience' : 'Welcome'}</span>
              <span className="font-jost">{Math.min(Math.round(progress), 100)}%</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
