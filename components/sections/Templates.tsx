'use client';
import { motion } from 'framer-motion';

const templates = [
  { name: 'Minimal', emoji: '⬜', desc: 'Clean, spacious, timeless.', palette: ['#FAFAFA', '#E5E5E5', '#1A1A1A'], gradient: 'from-[#FAF8F5] to-[#EFE9DF]' },
  { name: 'Royal', emoji: '👑', desc: 'Deep indigo & gold accents.', palette: ['#1E1B4B', '#C9A96E', '#FFFFFF'], gradient: 'from-[#1E1B4B] to-[#2E2B5B]' },
  { name: 'Luxury', emoji: '✨', desc: 'Moody charcoal & gold foil.', palette: ['#0A0A0A', '#C9A96E', '#8C7040'], gradient: 'from-stone-900 to-stone-950' },
  { name: 'Floral', emoji: '🌸', desc: 'Soft romantic botanical blooms.', palette: ['#FFF0F5', '#F5C6D6', '#6E3C4E'], gradient: 'from-[#FFF0F5] to-[#FCE4EC]' },
  { name: 'Islamic', emoji: '🕌', desc: 'Arabesque geometry & patterns.', palette: ['#064E3B', '#C9A96E', '#FFFFFF'], gradient: 'from-[#064E3B] to-[#0A5C45]' },
  { name: 'Classic', emoji: '🎀', desc: 'Ivory parchment and warm gold.', palette: ['#FFF8F0', '#EFE9DF', '#3D2B1F'], gradient: 'from-[#FFF8F0] to-[#EFE9DF]' },
  { name: 'Dark', emoji: '🖤', desc: 'Moody charcoal, white stars.', palette: ['#111111', '#888888', '#FFFFFF'], gradient: 'from-zinc-800 to-zinc-950' },
  { name: 'Modern', emoji: '🔷', desc: 'Contemporary layouts, bold lines.', palette: ['#0F172A', '#3B82F6', '#E2E8F0'], gradient: 'from-slate-100 to-slate-250' },
];

export default function Templates() {
  return (
    <section id="templates" className="py-24 bg-ivory relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-6 bg-gold/50" />
              <span className="text-gold-dk text-[10px] tracking-[0.35em] uppercase font-jost font-light">Design styles</span>
              <div className="h-px w-6 bg-gold/50" />
            </div>
            <h2 className="font-cormorant text-mocha text-3xl sm:text-5xl font-light uppercase tracking-wider">
              Choose Your <span className="text-gold-dk italic font-normal normal-case">Aesthetic</span>
            </h2>
            <p className="text-taupe mt-4 max-w-md mx-auto text-xs sm:text-sm font-light font-jost leading-relaxed">
              Every design is fully customizable to match your unique color scheme and typography.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 font-jost">
          {templates.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl overflow-hidden border border-mocha/5 hover:border-gold/40 hover:shadow-warm-md transition-all duration-500 cursor-pointer bg-cream"
            >
              {/* Preview */}
              <div className={`bg-gradient-to-br ${t.gradient} h-36 relative flex flex-col items-center justify-center p-3`}>
                {/* Color swatches */}
                <div className="absolute top-3 right-3 flex gap-1">
                  {t.palette.map((c, j) => (
                    <div key={j} className="w-2.5 h-2.5 rounded-full border border-white/20" style={{ background: c }} />
                  ))}
                </div>
                {/* Mock invitation layout details */}
                <div className="text-3xl mb-2 select-none">{t.emoji}</div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-12 h-px bg-white/20" />
                  <div className="w-8 h-px bg-white/10" />
                </div>
              </div>
              {/* Info */}
              <div className="p-4 bg-cream border-t border-mocha/5">
                <p className="font-cormorant text-mocha font-semibold text-base">{t.name}</p>
                <p className="text-taupe text-[11px] mt-0.5 font-light leading-normal">{t.desc}</p>
                <div className="flex gap-2 mt-4">
                  <a href="#showcase" className="flex-1 text-center py-1.5 rounded-full border border-mocha/10 text-taupe text-[9px] hover:border-gold/30 hover:text-gold-dk transition-colors tracking-widest uppercase font-medium">Preview</a>
                  <a href="#contact" className="flex-1 text-center py-1.5 rounded-full bg-mocha text-white text-[9px] hover:bg-mocha-2 transition-colors tracking-widest uppercase font-medium font-jost">Order</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
