'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const petals: Array<{ x: number; y: number; vx: number; vy: number; size: number; angle: number; vAngle: number; opacity: number; color: string }> = [];
    const colors = ['rgba(212,175,55,', 'rgba(255,228,196,', 'rgba(245,222,179,', 'rgba(255,239,213,'];

    for (let i = 0; i < 35; i++) {
      petals.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: Math.random() * 0.5 + 0.2,
        size: Math.random() * 6 + 3,
        angle: Math.random() * Math.PI * 2,
        vAngle: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.4 + 0.05,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petals.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.angle += p.vAngle;
        if (p.y > canvas.height + 20) { p.y = -20; p.x = Math.random() * canvas.width; }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size, p.size * 1.6, 0, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.opacity + ')';
        ctx.fill();
        ctx.restore();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080603]">
      {/* Canvas petals */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Rich dark background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_60%,rgba(212,175,55,0.07)_0%,transparent_70%)] z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_30%_20%,rgba(255,228,196,0.04)_0%,transparent_60%)] z-[1]" />

      {/* Gold decorative lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-gold/30 z-[2]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-transparent to-gold/30 z-[2]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24">
        {/* Label badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold/60" />
          <span className="text-gold/80 text-xs tracking-[0.4em] uppercase font-light">
            Luxury Digital Invitations
          </span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold/60" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-playfair text-white font-bold leading-[1.1] mb-6"
        >
          <span className="text-5xl sm:text-6xl lg:text-8xl block">Crafting</span>
          <span className="text-5xl sm:text-6xl lg:text-8xl block text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-300 to-gold">
            Timeless
          </span>
          <span className="text-5xl sm:text-6xl lg:text-8xl block">Digital Weddings</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-stone-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light tracking-wide"
        >
          Interactive wedding websites with live RSVP, countdowns, galleries, and music — 
          experiences your guests will never forget.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <MagneticButton
            href="#portfolio"
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-gold via-amber-400 to-gold text-black font-semibold text-sm tracking-widest uppercase overflow-hidden"
          >
            <span className="relative z-10">View Portfolio</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="px-8 py-4 rounded-full border border-white/20 text-white text-sm font-light tracking-widest uppercase hover:border-gold/50 hover:text-gold transition-all duration-300"
          >
            Start Your Project
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-20 flex flex-col items-center gap-2 text-stone-600"
        >
          <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-gold/40 to-transparent"
          />
        </motion.div>
      </div>

      {/* Side decorations */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-[2]">
        {['RSVP', 'LIVE', 'MUSIC'].map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + i * 0.1 }}
            className="text-stone-700 text-xs tracking-widest uppercase writing-mode-vertical"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            {t}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
