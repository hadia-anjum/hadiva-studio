'use client';
import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999] w-64 h-64 rounded-full transition-transform duration-100 ease-out"
      style={{
        left: pos.x - 128,
        top: pos.y - 128,
        background: 'radial-gradient(circle, rgba(255,143,171,0.08) 0%, transparent 70%)',
      }}
    />
  );
}
