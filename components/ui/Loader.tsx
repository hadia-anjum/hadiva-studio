'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => { setDone(true); setTimeout(onComplete, 800); }, 300);
          return 100;
        }
        return prev + Math.random() * 12 + 4;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-[#0D0A06] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />

          {/* Floating petals */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl pointer-events-none select-none"
              style={{ left: `${10 + i * 12}%`, top: `${20 + (i % 3) * 20}%` }}
              animate={{ y: [-10, 10, -10], opacity: [0.15, 0.4, 0.15], rotate: [0, 15, 0] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
            >
              {['🌸', '✨', '🌿', '💫', '🌺', '✦', '❋', '⋆'][i]}
            </motion.div>
          ))}

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-12 relative z-10"
          >
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="font-playfair text-gold text-5xl md:text-7xl font-bold tracking-widest mb-2">
                HADIVA
              </p>
              <p className="text-stone-400 text-xs tracking-[0.5em] uppercase font-light">
                Studio
              </p>
            </motion.div>

            <motion.div
              className="mt-4 flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50" />
              <span className="text-gold/60 text-xs tracking-widest">✦</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50" />
            </motion.div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative z-10 w-64 md:w-80"
          >
            <div className="h-px bg-stone-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-gold/50 via-gold to-amber-300 rounded-full relative"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: 'easeOut' }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(255,215,0,0.8)]" />
              </motion.div>
            </div>
            <p className="text-center text-stone-600 text-xs mt-4 tracking-widest uppercase font-light">
              {progress < 100 ? 'Crafting Your Experience...' : 'Welcome ✦'}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
