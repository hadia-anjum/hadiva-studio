'use client';
import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 768) return;
    const numTrails = 7;
    const trails: { x: number; y: number; el: HTMLDivElement }[] = [];
    for (let i = 0; i < numTrails; i++) {
      const el = document.createElement('div');
      el.style.cssText = `position:fixed;pointer-events:none;z-index:9998;border-radius:50%;width:${7-i*0.6}px;height:${7-i*0.6}px;background:rgba(201,169,110,${0.5-i*0.06});transform:translate(-50%,-50%);left:-100px;top:-100px;transition: transform 0.05s ease;`;
      document.body.appendChild(el);
      trails.push({ x: -100, y: -100, el });
    }
    const pos = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX; pos.y = e.clientY;
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + 'px';
        glowRef.current.style.top = e.clientY + 'px';
      }
    };
    let raf: number;
    const loop = () => {
      let x = pos.x, y = pos.y;
      trails.forEach((t, i) => {
        t.x += (x - t.x) * (0.15 - i * 0.01);
        t.y += (y - t.y) * (0.15 - i * 0.01);
        t.el.style.left = t.x + 'px';
        t.el.style.top = t.y + 'px';
        x = t.x; y = t.y;
      });
      raf = requestAnimationFrame(loop);
    };
    loop();
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      trails.forEach(t => t.el.remove());
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="hidden md:block fixed pointer-events-none z-[9997]"
      style={{
        width: '280px',
        height: '280px',
        background: 'radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        transition: 'left 0.1s ease, top 0.1s ease',
        left: '-200px',
        top: '-200px',
      }}
    />
  );
}
