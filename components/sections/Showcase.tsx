'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mini interactive wedding website inside the device mockup (Rethemed to Warm Cream & Gold Luxury)
function WeddingDemoContent() {
  const [tab, setTab] = useState<'home' | 'rsvp' | 'gallery' | 'story'>('home');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const [musicOn, setMusicOn] = useState(false);
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpDone, setRsvpDone] = useState(false);

  useEffect(() => {
    const weddingDate = new Date();
    weddingDate.setMonth(weddingDate.getMonth() + 3);
    weddingDate.setDate(15);

    const tick = () => {
      const now = Date.now();
      const diff = weddingDate.getTime() - now;
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const handleRSVP = (e: React.FormEvent) => {
    e.preventDefault();
    if (rsvpName.trim()) setRsvpDone(true);
  };

  const galleryImages = [
    { bg: 'from-rose-100 to-pink-200', emoji: '🌹' },
    { bg: 'from-amber-100 to-yellow-200', emoji: '🌸' },
    { bg: 'from-orange-100 to-amber-200', emoji: '💍' },
    { bg: 'from-stone-100 to-ivory-3', emoji: '✨' },
    { bg: 'from-orange-50 to-champagne', emoji: '🕊️' },
    { bg: 'from-red-100 to-rose-200', emoji: '❤️' },
  ];

  return (
    <div className="h-full flex flex-col bg-[#FCFBF9] text-mocha overflow-hidden select-none font-light">
      {/* Demo header */}
      <div className="bg-[#FAF8F5]/95 backdrop-blur px-4 py-3 border-b border-mocha/5 text-center flex-shrink-0">
        <div className="flex items-center justify-center gap-2 mb-0.5">
          <div className="h-px w-6 bg-gold/50" />
          <span className="text-gold-dk text-[8px] tracking-[0.25em] uppercase font-jost">The Wedding of</span>
          <div className="h-px w-6 bg-gold/50" />
        </div>
        <p className="font-cormorant text-base font-semibold text-mocha leading-tight">Amara & Sebastian</p>
        <p className="text-[8px] text-taupe tracking-wider mt-0.5">October 15, 2025 · Grand Ballroom, Jakarta</p>
        <div className="flex items-center justify-center gap-2 mt-1.5">
          <button 
            type="button"
            onClick={() => setMusicOn(!musicOn)}
            className={`text-[8px] px-2.5 py-0.5 rounded-full border transition-all flex items-center gap-1 font-jost ${
              musicOn ? 'border-gold/60 text-gold-dk bg-gold/10' : 'border-mocha/10 text-taupe'
            }`}
          >
            {musicOn ? '🎵 Playing' : '🎵 Music'}
          </button>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="flex border-b border-mocha/5 flex-shrink-0 overflow-x-auto scrollbar-hide">
        {(['home', 'story', 'gallery', 'rsvp'] as const).map(t => (
          <button 
            key={t} 
            type="button"
            onClick={() => setTab(t)}
            className={`flex-1 py-2 text-[8px] tracking-widest uppercase transition-all min-w-[55px] font-jost ${
              tab === t ? 'text-gold-dk font-medium border-b border-gold-dk' : 'text-taupe hover:text-mocha'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden bg-[#FCFBF9]">
        <AnimatePresence mode="wait">
          {tab === 'home' && (
            <motion.div key="home" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-4 flex flex-col gap-4">
              {/* Hero visual */}
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-ivory to-cream h-24 flex items-center justify-center border border-mocha/5">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.12)_0%,transparent_70%)]" />
                <div className="text-center relative z-10">
                  <div className="text-2xl mb-1">💍</div>
                  <p className="font-cormorant text-gold-dk text-sm tracking-widest uppercase font-semibold select-none">Save the Date</p>
                </div>
              </div>

              {/* Countdown */}
              <div>
                <p className="text-[7px] text-taupe tracking-widest uppercase text-center mb-1.5 font-jost">Counting Down</p>
                <div className="grid grid-cols-4 gap-1">
                  {[
                    { value: timeLeft.days, label: 'Days' },
                    { value: timeLeft.hours, label: 'Hours' },
                    { value: timeLeft.mins, label: 'Mins' },
                    { value: timeLeft.secs, label: 'Secs' },
                  ].map(({ value, label }) => (
                    <div key={label} className="text-center bg-cream rounded-lg py-1.5 border border-mocha/5">
                      <p className="font-cormorant text-mocha text-base font-semibold leading-none">{String(value).padStart(2, '0')}</p>
                      <p className="text-[7px] text-taupe mt-0.5 tracking-wide font-jost">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Venue */}
              <div className="rounded-xl border border-mocha/5 bg-cream p-3">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-xs">📍</span>
                  <p className="text-[8px] text-gold-dk tracking-wider uppercase font-jost font-medium">Venue</p>
                </div>
                <p className="text-[10px] text-mocha font-medium">Grand Ballroom Shangri-La</p>
                <p className="text-[8px] text-taupe">Jl. Sudirman No. 1, Jakarta</p>
                <div className="mt-2 w-full h-10 rounded-lg bg-gold/15 flex items-center justify-center border border-gold/30">
                  <span className="text-[8px] text-gold-dk font-jost uppercase tracking-wider font-semibold">🗺️ View on Maps</span>
                </div>
              </div>
            </motion.div>
          )}

          {tab === 'story' && (
            <motion.div key="story" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-4 flex flex-col gap-4">
              <p className="text-[8px] text-gold-dk tracking-[0.2em] uppercase text-center mb-1 font-jost font-medium">Our Story</p>
              {[
                { year: '2019', title: 'First Meeting ✨', desc: 'We met at a coffee shop in Bandung. Sebastian spilled his latte, and Amara handed him her napkin.' },
                { year: '2021', title: 'First Trip Together 🌍', desc: 'Bali trip changed everything. Under the stars, Sebastian knew she was the one.' },
                { year: '2023', title: 'The Proposal 💍', desc: 'A candlelit dinner, a nervous speech, and a yes that echoed forever.' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -10 : 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                  className="flex gap-2.5">
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-5 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-gold-dk text-[6px] font-bold">{item.year.slice(-2)}</span>
                    </div>
                    {i < 2 && <div className="w-px flex-1 bg-gold/10 mt-1" />}
                  </div>
                  <div className="pb-2">
                    <p className="text-[7px] text-taupe font-jost">{item.year}</p>
                    <p className="text-[9px] text-mocha font-semibold mt-0.5">{item.title}</p>
                    <p className="text-[7px] text-taupe leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {tab === 'gallery' && (
            <motion.div key="gallery" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-4">
              <p className="text-[8px] text-gold-dk tracking-[0.2em] uppercase text-center mb-3.5 font-jost font-medium">Gallery</p>
              <div className="grid grid-cols-3 gap-1.5">
                {galleryImages.map((img, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                    className={`aspect-square rounded-lg bg-gradient-to-br ${img.bg} flex items-center justify-center cursor-pointer border border-mocha/5 shadow-sm`}>
                    <span className="text-lg">{img.emoji}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-[7px] text-taupe text-center mt-3 font-jost">Tap photos to enlarge ↗</p>
            </motion.div>
          )}

          {tab === 'rsvp' && (
            <motion.div key="rsvp" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-4">
              <p className="text-[8px] text-gold-dk tracking-[0.2em] uppercase text-center mb-3 font-jost font-medium">RSVP</p>
              {rsvpDone ? (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-6">
                  <div className="text-3xl mb-2">🎉</div>
                  <p className="text-mocha text-xs font-semibold">Thank you, {rsvpName}!</p>
                  <p className="text-taupe text-[8px] mt-1 font-jost">We can't wait to celebrate with you.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleRSVP} className="flex flex-col gap-2 font-jost">
                  <div>
                    <label className="text-[7px] text-taupe tracking-wider uppercase block mb-0.5">Your Name</label>
                    <input value={rsvpName} onChange={e => setRsvpName(e.target.value)}
                      placeholder="Enter your name..."
                      className="w-full bg-cream border border-mocha/10 rounded-lg px-2.5 py-1.5 text-[9px] text-mocha placeholder:text-taupe-lt focus:outline-none focus:border-gold/40 transition-colors" />
                  </div>
                  <div>
                    <label className="text-[7px] text-taupe tracking-wider uppercase block mb-0.5">Will you attend?</label>
                    <div className="grid grid-cols-2 gap-1.5">
                      <button type="submit" className="py-1.5 rounded-lg bg-mocha text-white text-[8px] font-semibold hover:bg-mocha-2 transition-colors">
                        ✓ Attending
                      </button>
                      <button type="button" onClick={() => setRsvpDone(true)} className="py-1.5 rounded-lg border border-mocha/10 text-taupe text-[8px] hover:border-mocha/20 transition-colors">
                        ✗ Decline
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="text-[7px] text-taupe tracking-wider block mb-0.5 uppercase">Guest Count</label>
                    <div className="flex gap-1">
                      {[1, 2, 3, '4+'].map(n => (
                        <button key={n} type="button" className="flex-1 py-1 rounded-lg border border-mocha/10 text-taupe text-[8px] hover:border-gold/40 hover:text-gold-dk transition-all">{n}</button>
                      ))}
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Device switcher
type Device = 'phone' | 'tablet' | 'laptop';

export default function Showcase() {
  const [device, setDevice] = useState<Device>('phone');

  const deviceConfig = {
    phone: {
      outer: 'w-[200px] h-[400px]',
      screen: 'rounded-[28px] border-[8px]',
      notch: true,
    },
    tablet: {
      outer: 'w-[300px] h-[400px]',
      screen: 'rounded-[18px] border-[10px]',
      notch: false,
    },
    laptop: {
      outer: 'w-[480px] h-[300px]',
      screen: 'rounded-t-[10px] border-[8px] border-b-0',
      notch: false,
    },
  };

  const cfg = deviceConfig[device];

  return (
    <section id="showcase" className="py-24 bg-ivory relative overflow-hidden">
      {/* Decorative botanical details */}
      <div className="absolute top-1/2 left-[-100px] w-96 h-96 gold-ring opacity-10 rotate-slow pointer-events-none" />
      <div className="absolute top-1/3 right-[-120px] w-[450px] h-[450px] gold-ring opacity-15 pointer-events-none" style={{ animationDirection: 'reverse' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-6 bg-gold/50" />
              <span className="text-gold-dk text-[10px] tracking-[0.35em] uppercase font-jost font-light">Interactive Showcase</span>
              <div className="h-px w-6 bg-gold/50" />
            </div>
            <h2 className="font-cormorant text-mocha text-3xl sm:text-5xl font-light uppercase tracking-wider mb-4">
              See It In <span className="text-gold-dk italic font-normal normal-case">Action</span>
            </h2>
            <p className="text-taupe max-w-xl mx-auto text-xs sm:text-sm font-light leading-relaxed font-jost">
              This is a fully interactive demonstration of our premium layouts. We design custom solutions for weddings, milestones, portfolios, and small business brand landing pages. Toggle the device view to see the responsiveness.
            </p>
          </motion.div>
        </div>

        {/* Device switcher */}
        <div className="flex justify-center gap-2 mb-10 font-jost">
          {(['phone', 'tablet', 'laptop'] as Device[]).map(d => (
            <motion.button
              key={d}
              onClick={() => setDevice(d)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-[10px] tracking-widest uppercase transition-all duration-300 ${
                device === d 
                  ? 'bg-mocha text-white font-semibold shadow-warm-sm' 
                  : 'border border-mocha/10 text-taupe hover:border-gold/50 hover:text-gold-dk'
              }`}
            >
              {d === 'phone' ? '📱' : d === 'tablet' ? '📲' : '💻'} {d}
            </motion.button>
          ))}
        </div>

        {/* Device mockup */}
        <div className="flex justify-center items-center">
          <motion.div
            key={device}
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            {/* Device outer shell */}
            <div className={`relative ${cfg.outer}`}>
              {/* Screen with elegant mocha/gold frame border */}
              <div className={`absolute inset-0 ${cfg.screen} border-mocha bg-cream overflow-hidden shadow-warm-lg`}>
                {/* Notch */}
                {cfg.notch && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3 bg-mocha rounded-b-xl z-20 flex items-center justify-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-taupe" />
                    <div className="w-2.5 h-1 rounded-full bg-taupe-lt" />
                  </div>
                )}
                {/* Demo content */}
                <div className={cfg.notch ? 'pt-3 h-full' : 'h-full'}>
                  <WeddingDemoContent />
                </div>
              </div>

              {/* Laptop base */}
              {device === 'laptop' && (
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[110%] h-3 bg-mocha rounded-b-xl border-t border-mocha-2/20" />
              )}

              {/* Side buttons for phone */}
              {device === 'phone' && (
                <>
                  <div className="absolute -right-1.5 top-20 w-1.5 h-12 bg-mocha rounded-full" />
                  <div className="absolute -left-1.5 top-16 w-1.5 h-8 bg-mocha rounded-full" />
                  <div className="absolute -left-1.5 top-28 w-1.5 h-8 bg-mocha rounded-full" />
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* Features lists footer */}
        <div className="flex flex-wrap justify-center gap-2.5 mt-12 font-jost">
          {['⏱ Live Countdown', '📩 RSVP Form', '🖼 Photo Gallery', '💕 Love Story', '🎵 Music Toggle', '📍 Venue Maps'].map(f => (
            <span key={f} className="text-[10px] tracking-wider uppercase text-taupe px-3 py-1.5 rounded-full border border-mocha/5 bg-cream/50 shadow-warm-sm">{f}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
