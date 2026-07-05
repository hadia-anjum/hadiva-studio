'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface OnboardingProps {
  onComplete: (profile: { name: string; country: string }) => void;
}

import { countries } from '@/lib/countries';

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('PK');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete({ name: name.trim() || 'Guest', country });
  };

  return (
    <div className="fixed inset-0 z-[9999] marble-bg flex items-center justify-center p-4">
      {/* Background decorations */}
      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] gold-ring opacity-15 rotate-slow pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] gold-ring opacity-10 rotate-slow pointer-events-none" style={{ animationDirection: 'reverse' }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-md p-8 rounded-[2.5rem] bg-cream border border-mocha/5 shadow-gold-md relative z-10 font-jost text-center"
      >
        {/* Monogram logo badge */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-dk flex items-center justify-center text-white font-cormorant font-semibold text-3xl mx-auto mb-6 shadow-gold-sm select-none">
          H
        </div>

        <h2 className="font-cormorant text-mocha text-3xl font-light uppercase tracking-wider mb-2">
          Hadiva <span className="text-gold-dk italic font-normal normal-case">Studio</span>
        </h2>
        <p className="text-taupe text-xs leading-relaxed font-light mb-8 max-w-xs mx-auto">
          Welcome to our interactive workspace. Please share your details to customize your currency, local pricing, and event showcases.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
          {/* Name Input */}
          <div>
            <label className="text-[10px] text-taupe tracking-wider uppercase block mb-1.5 font-medium">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. Alia"
              className="w-full bg-cream border border-mocha/10 rounded-2xl px-4 py-3.5 text-xs text-mocha placeholder:text-taupe-lt focus:outline-none focus:border-gold/60 focus:bg-gold/5 transition-all duration-300"
            />
          </div>

          {/* Country Selection */}
          <div>
            <label className="text-[10px] text-taupe tracking-wider uppercase block mb-1.5 font-medium">Select Location</label>
            <div className="relative">
              <select
                value={country}
                onChange={e => setCountry(e.target.value)}
                className="w-full bg-cream border border-mocha/10 rounded-2xl px-4 py-3.5 text-xs text-mocha focus:outline-none focus:border-gold/60 focus:bg-gold/5 transition-all duration-300 appearance-none cursor-pointer"
              >
                {countries.map(c => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.name} ({c.currency} - {c.symbol})
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gold-dk">
                ▼
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full py-4 rounded-2xl bg-mocha text-white font-semibold text-xs tracking-widest uppercase shadow-md hover:bg-mocha-2 transition-all duration-300 mt-2"
          >
            Enter Studio
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
