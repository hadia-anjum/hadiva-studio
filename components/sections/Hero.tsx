'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    c.width = window.innerWidth;
    c.height = window.innerHeight;

    const petals = Array.from({ length: 30 }, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: Math.random() * 0.4 + 0.15,
      size: Math.random() * 5 + 2,
      angle: Math.random() * Math.PI * 2,
      va: (Math.random() - 0.5) * 0.015,
      op: Math.random() * 0.25 + 0.05,
      hue: Math.random() * 30 + 15, // soft warm rose/gold hues
    }));

    let id: number;
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      petals.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.va;
        if (p.y > c.height + 20) {
          p.y = -20;
          p.x = Math.random() * c.width;
        }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size, p.size * 1.7, 0, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 40%, 80%, ${p.op})`;
        ctx.fill();
        ctx.restore();
      });
      id = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden marble-bg">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Decorative gold circles & lines matching Squarespace/Webgency aesthetic */}
      <div className="absolute top-16 right-12 w-[420px] h-[420px] gold-ring opacity-20 animate-spin-slow hidden lg:block" />
      <div className="absolute top-24 right-20 w-[340px] h-[340px] gold-ring opacity-15 hidden lg:block" style={{ animationDirection: 'reverse' }} />
      <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] gold-ring opacity-15 animate-spin-slow hidden lg:block" />

      {/* Soft warm botanical/wreath ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-56 h-56 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-44 h-44 rounded-full bg-gold/4 blur-2xl pointer-events-none" />

      {/* Vertical elegant center line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-gold/30 z-[2]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-transparent to-gold/30 z-[2]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-28">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <div className="h-px w-8 bg-gold/50" />
          <span className="text-gold-dk text-[11px] tracking-[0.4em] uppercase font-jost font-light">
            hadiva studio
          </span>
          <div className="h-px w-8 bg-gold/50" />
        </motion.div>

        {/* Main luxury headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-cormorant text-mocha font-light leading-[1.2] mb-8 uppercase tracking-[0.1em]"
        >
          <span className="block text-4xl sm:text-6xl lg:text-8xl">Crafting Timeless</span>
          <span className="block text-3xl sm:text-5xl lg:text-7xl text-gold-dk font-normal tracking-[0.15em] mt-2">Digital Weddings</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-taupe text-sm sm:text-base max-w-lg mx-auto mb-10 leading-relaxed font-light tracking-wide font-jost"
        >
          Premium interactive microsites and digital guest experiences with live RSVPs, countdowns, galleries, and background music — designed to leave a lasting impression.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center font-jost"
        >
          <MagneticButton
            href="#portfolio"
            className="group relative px-9 py-3.5 rounded-full bg-mocha text-white font-medium text-xs tracking-widest uppercase overflow-hidden hover:bg-mocha-2 transition-colors duration-300"
          >
            <span className="relative z-10">View Portfolio</span>
            <div className="absolute inset-0 bg-gold/15 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="px-9 py-3.5 rounded-full border border-gold/60 text-gold-dk font-medium text-xs tracking-widest uppercase hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
          >
            Start Project
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-2 text-taupe"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-light font-jost">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent"
          />
        </motion.div>
      </div>

      {/* Side aesthetic decorations */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 z-[2]">
        {['interactive', 'bespoke', 'refined'].map((t, i) => (
          <motion.span
            key={t}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + i * 0.1 }}
            className="text-taupe/40 text-[9px] tracking-[0.3em] uppercase font-jost"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            {t}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
