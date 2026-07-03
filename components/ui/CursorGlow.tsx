'use client';
import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<{ x: number; y: number; el: HTMLDivElement }[]>([]);
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.innerWidth < 768) return;

    // Create trail dots
    const numTrails = 8;
    const trails: { x: number; y: number; el: HTMLDivElement }[] = [];
    for (let i = 0; i < numTrails; i++) {
      const el = document.createElement('div');
      el.style.cssText = `
        position: fixed; pointer-events: none; z-index: 9998; border-radius: 50%;
        width: ${8 - i * 0.7}px; height: ${8 - i * 0.7}px;
        background: rgba(212, 175, 55, ${0.4 - i * 0.04});
        transition: transform 0.1s ease; transform: translate(-50%, -50%);
        left: -100px; top: -100px;
      `;
      document.body.appendChild(el);
      trails.push({ x: -100, y: -100, el });
    }
    trailsRef.current = trails;

    const handleMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + 'px';
        glowRef.current.style.top = e.clientY + 'px';
      }
    };

    let rafId: number;
    const animateTrails = () => {
      let x = posRef.current.x;
      let y = posRef.current.y;
      trails.forEach((trail, i) => {
        trail.x += (x - trail.x) * (0.15 - i * 0.01);
        trail.y += (y - trail.y) * (0.15 - i * 0.01);
        trail.el.style.left = trail.x + 'px';
        trail.el.style.top = trail.y + 'px';
        x = trail.x; y = trail.y;
      });
      rafId = requestAnimationFrame(animateTrails);
    };
    animateTrails();

    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(rafId);
      trails.forEach(t => t.el.remove());
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="hidden md:block fixed pointer-events-none z-[9997]"
      style={{
        width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        transition: 'left 0.12s ease, top 0.12s ease',
        left: '-200px', top: '-200px',
      }}
    />
  );
}
