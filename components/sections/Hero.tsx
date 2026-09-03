'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    c.width = window.innerWidth;
    c.height = window.innerHeight;

    // Glowing ambient particles (soft rose dust)
    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: -(Math.random() * 0.3 + 0.1),
      size: Math.random() * 3 + 1,
      op: Math.random() * 0.25 + 0.05,
      hue: Math.random() * 15 + 350,
    }));

    let id: number;
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) {
          p.y = c.height + 10;
          p.x = Math.random() * c.width;
        }
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 40%, 75%, ${p.op})`;
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-blush">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Decorative ambient blurred glows */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] blob-pink animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] blob-lavender animate-blob pointer-events-none" style={{ animationDelay: '3s' }} />

      {/* Center line aesthetic accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-28 bg-gradient-to-b from-transparent to-rose-lt/40 z-[2]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-32 pb-16">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <div className="h-px w-8 bg-rose-dk/40" />
          <span className="text-rose-dk text-[10px] tracking-[0.4em] uppercase font-jost font-medium">
            Hadiva Studio — Bespoke Packaging
          </span>
          <div className="h-px w-8 bg-rose-dk/40" />
        </motion.div>

        {/* Main luxury headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="leading-[1.1] mb-3"
        >
          <span className="block font-cormorant font-light italic text-charcoal text-5xl sm:text-7xl lg:text-8xl tracking-[0.02em]">
            Pinterest-Inspired
          </span>
          <span className="block font-cormorant font-normal uppercase pink-text-gradient text-3xl sm:text-5xl lg:text-6xl tracking-[0.15em] mt-2">
            Custom Packaging
          </span>
        </motion.h1>

        {/* Stylish Script Accent — crafted with love in pakistan */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-script text-rose-dk text-4xl sm:text-5xl tracking-wide mb-6 font-normal"
        >
          crafted with love in pakistan
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-gray text-xs sm:text-sm max-w-lg mx-auto mb-10 leading-relaxed font-light tracking-wide font-jost"
        >
          Aesthetic gift boxes, bridal hampers, birthday packages &amp; custom brand packaging — designed to elevate every unboxing experience.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center font-jost"
        >
          <a
            href="#portfolio"
            className="group relative px-9 py-3.5 rounded-full bg-charcoal text-blush font-medium text-xs tracking-[0.2em] uppercase overflow-hidden hover:bg-rose-dk transition-colors duration-300"
          >
            <span className="relative z-10">See Our Work</span>
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
          </a>

          <a
            href="https://instagram.com/hadivastudio"
            target="_blank" rel="noopener noreferrer"
            className="px-9 py-3.5 rounded-full border border-rose-dk/40 bg-white/60 backdrop-blur-sm text-charcoal font-medium text-xs tracking-[0.2em] uppercase hover:bg-rose-dk hover:text-white hover:border-rose-dk transition-all duration-300 shadow-soft-sm"
          >
            DM on Instagram
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-20 flex flex-col items-center gap-2 text-gray-lt"
        >
          <span className="text-[9px] tracking-[0.35em] uppercase font-light font-jost">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-rose-dk/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
