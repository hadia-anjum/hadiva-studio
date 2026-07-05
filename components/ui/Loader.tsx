'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const iv = setInterval(() => {
      setProgress(p => {
        const next = p + Math.random() * 10 + 4;
        if (next >= 100) {
          clearInterval(iv);
          setTimeout(() => { setDone(true); setTimeout(onComplete, 700); }, 400);
          return 100;
        }
        return next;
      });
    }, 130);
    return () => clearInterval(iv);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] marble-bg flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Decorative gold rings */}
          <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] gold-ring opacity-20 rotate-slow" />
          <div className="absolute bottom-[-60px] right-[-60px] w-[250px] h-[250px] gold-ring opacity-15 rotate-slow" style={{animationDirection:'reverse'}} />
          <div className="absolute top-1/2 right-1/4 w-[180px] h-[180px] gold-ring opacity-10 rotate-slow" />

          {/* Gold blob decoration */}
          <div className="absolute top-1/4 left-1/3 w-32 h-32 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full bg-gold/8 blur-2xl" />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-10 relative z-10 flex flex-col items-center justify-center"
          >
            <motion.div 
              animate={{ scale: [1, 1.02, 1] }} 
              transition={{ duration: 3, repeat: Infinity }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-dk flex items-center justify-center text-white font-cormorant font-light text-3xl mb-4 shadow-gold-sm">
                H
              </div>
              <p className="font-cormorant text-mocha text-3xl md:text-4xl font-light tracking-[0.25em] uppercase">
                Hadiva
              </p>
              <p className="text-gold-dk text-[10px] tracking-[0.4em] uppercase font-jost font-light mt-1">
                Studio
              </p>
              <p className="text-taupe text-[10px] tracking-[0.3em] uppercase font-jost font-light mt-5">
                Crafting Timeless Digital Weddings
              </p>
            </motion.div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative z-10 w-56 md:w-72"
          >
            <div className="h-px bg-mocha/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-gold/60 via-gold to-gold-lt rounded-full relative"
                style={{ width: `${Math.min(progress, 100)}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_6px_rgba(201,169,110,0.8)]" />
              </motion.div>
            </div>
            <p className="text-center text-taupe text-xs mt-4 tracking-widest uppercase font-light">
              {progress < 100 ? 'Preparing Your Experience...' : 'Welcome ✦'}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
