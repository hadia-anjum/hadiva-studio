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

    const hearts = Array.from({ length: 25 }, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -(Math.random() * 0.4 + 0.1),
      size: Math.random() * 8 + 4,
      op: Math.random() * 0.15 + 0.05,
      hue: Math.random() * 20 + 340,
    }));

    let id: number;
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      hearts.forEach(h => {
        h.x += h.vx;
        h.y += h.vy;
        if (h.y < -20) {
          h.y = c.height + 20;
          h.x = Math.random() * c.width;
        }
        ctx.save();
        ctx.translate(h.x, h.y);
        ctx.beginPath();
        const s = h.size;
        ctx.moveTo(0, s * 0.3);
        ctx.bezierCurveTo(-s * 0.5, -s * 0.3, -s, s * 0.1, 0, s);
        ctx.bezierCurveTo(s, s * 0.1, s * 0.5, -s * 0.3, 0, s * 0.3);
        ctx.fillStyle = `hsla(${h.hue}, 80%, 75%, ${h.op})`;
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

      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-[400px] h-[400px] blob-pink animate-blob pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-[350px] h-[350px] blob-lavender animate-blob pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] blob-peach animate-blob pointer-events-none" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-28">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <div className="h-px w-8 bg-rose/40" />
          <span className="text-rose text-[11px] tracking-[0.4em] uppercase font-poppins font-light">
            hadiva studio
          </span>
          <div className="h-px w-8 bg-rose/40" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-playfair text-charcoal font-semibold leading-[1.15] mb-4"
        >
          <span className="block text-4xl sm:text-6xl lg:text-7xl">Pinterest-Inspired</span>
          <span className="block text-3xl sm:text-5xl lg:text-6xl pink-text-gradient mt-2">Custom Packaging</span>
        </motion.h1>

        {/* Cursive accent */}
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="font-dancing text-rose-dk text-2xl sm:text-3xl mb-6"
        >
          crafted with love in Pakistan 🇵🇰
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-gray text-sm sm:text-base max-w-lg mx-auto mb-10 leading-relaxed font-light tracking-wide"
        >
          Aesthetic gift boxes, wedding hampers, birthday packages &amp; custom brand packaging — designed to make every unboxing unforgettable 🎁
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#portfolio"
            className="group relative px-9 py-3.5 rounded-full bg-charcoal text-white font-medium text-xs tracking-widest uppercase overflow-hidden hover:bg-charcoal/90 transition-colors duration-300"
          >
            <span className="relative z-10">See Our Work</span>
            <div className="absolute inset-0 bg-rose/15 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
          </a>

          <a
            href="https://instagram.com/hadivastudio"
            target="_blank" rel="noopener noreferrer"
            className="px-9 py-3.5 rounded-full bg-gradient-to-r from-rose to-hot-pink text-white font-medium text-xs tracking-widest uppercase hover:shadow-pink-lg hover:scale-105 transition-all duration-300"
          >
            DM on Instagram 📩
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-16 flex flex-col items-center gap-2 text-gray-lt"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-light">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-rose/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
