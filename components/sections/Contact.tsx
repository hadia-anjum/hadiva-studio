'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const packages = ['Starter – IDR 299K', 'Premium – IDR 599K', 'Luxury – IDR 999K', 'Custom Package'];
const eventTypes = ['Wedding Website', 'Engagement', 'Birthday', 'Baby Shower', 'Business Launch', 'Other'];

const inputCls = 'w-full bg-cream border border-mocha/10 rounded-2xl px-4 py-3.5 text-xs text-mocha placeholder:text-taupe-lt focus:outline-none focus:border-gold/60 focus:bg-gold/5 transition-all duration-300';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '', date: '', package: '', event: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hadiva Studio Inquiry - ${form.name}`);
    const body = encodeURIComponent(
      `Hi Hadiva Studio! 🌸\n\nName: ${form.name}\nEmail: ${form.email || 'N/A'}\nContact Number: ${form.whatsapp}\nEvent Type: ${form.event}\nDate: ${form.date}\nPackage: ${form.package}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:hadiaanjum61@gmal.com?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-ivory relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(201,169,110,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 font-jost">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-6 bg-gold/50" />
              <span className="text-gold-dk text-[10px] tracking-[0.35em] uppercase font-light">get in touch</span>
              <div className="h-px w-6 bg-gold/50" />
            </div>
            <h2 className="font-cormorant text-mocha text-3xl sm:text-5xl font-light uppercase tracking-wider">
              Start Your <span className="text-gold-dk italic font-normal normal-case">Journey</span>
            </h2>
            <p className="text-taupe mt-4 max-w-md mx-auto text-xs sm:text-sm font-light leading-relaxed">
              Tell us about your dream invitation layout. We'll curate something extraordinary.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="p-7 rounded-3xl border border-mocha/5 bg-cream shadow-warm-sm">
              <h3 className="font-cormorant text-mocha font-semibold text-xl mb-6">Contact Info</h3>
              <div className="flex flex-col gap-5">
                {[
                  { icon: '📸', label: 'Instagram', value: '@hadivastudio', href: 'https://instagram.com/hadivastudio' },
                  { icon: '✉️', label: 'Email', value: 'hadiaanjum61@gmal.com', href: 'mailto:hadiaanjum61@gmal.com' },
                  { icon: '🕐', label: 'Response Time', value: 'Within 1–2 hours', href: null },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-xl mt-0.5 select-none">{item.icon}</span>
                    <div>
                      <p className="text-[10px] text-taupe tracking-wider uppercase font-medium">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer"
                          className="text-xs text-mocha hover:text-gold-dk transition-colors font-light">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-xs text-mocha font-light">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <a href="mailto:hadiaanjum61@gmal.com" 
              id="contact-email-btn"
              className="flex items-center justify-center gap-2 py-3.5 rounded-2xl border border-gold/45 bg-cream text-gold-dk text-xs font-semibold uppercase tracking-wider hover:bg-gold hover:text-white transition-all shadow-sm">
              Email Us Directly
            </a>

            <a href="https://instagram.com/hadivastudio" target="_blank" rel="noopener noreferrer"
              id="contact-instagram"
              className="flex items-center justify-center gap-2 py-3.5 rounded-2xl border border-mocha/10 bg-cream text-mocha text-xs font-semibold uppercase tracking-wider hover:bg-mocha/5 transition-all shadow-sm">
              DM on Instagram
            </a>
          </motion.div>

          {/* Right Column Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-7 rounded-3xl border border-mocha/5 bg-cream flex flex-col gap-4 shadow-warm-md">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-taupe tracking-wider uppercase block mb-1.5 font-medium">Full Name *</label>
                  <input id="contact-name" required value={form.name} onChange={set('name')} placeholder="Your name" className={inputCls} />
                </div>
                <div>
                  <label className="text-[10px] text-taupe tracking-wider uppercase block mb-1.5 font-medium">Email</label>
                  <input id="contact-email" type="email" value={form.email} onChange={set('email')} placeholder="your@email.com" className={inputCls} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-taupe tracking-wider uppercase block mb-1.5 font-medium">Contact Number *</label>
                  <input id="contact-whatsapp-number" required value={form.whatsapp} onChange={set('whatsapp')} placeholder="Phone or WhatsApp number" className={inputCls} />
                </div>
                <div>
                  <label className="text-[10px] text-taupe tracking-wider uppercase block mb-1.5 font-medium">Event Date *</label>
                  <input id="contact-date" type="date" required value={form.date} onChange={set('date')} className={inputCls} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-taupe tracking-wider uppercase block mb-1.5 font-medium">Event Type</label>
                  <select id="contact-event" value={form.event} onChange={set('event')} className={`${inputCls} appearance-none cursor-pointer`}>
                    <option value="">Select type...</option>
                    {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] text-taupe tracking-wider uppercase block mb-1.5 font-medium">Package</label>
                  <select id="contact-package" value={form.package} onChange={set('package')} className={`${inputCls} appearance-none cursor-pointer`}>
                    <option value="">Select package...</option>
                    {packages.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-[10px] text-taupe tracking-wider uppercase block mb-1.5 font-medium">Your Vision</label>
                <textarea id="contact-message" rows={4} value={form.message} onChange={set('message')} placeholder="Describe your dream invitation — theme, colors, style, special wishes..." className={`${inputCls} resize-none`} />
              </div>

              <motion.button
                id="contact-submit"
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-2xl bg-mocha text-white font-semibold text-xs tracking-widest uppercase shadow-md hover:bg-mocha-2 transition-all duration-300"
              >
                {submitted ? '✅ Opening Mail Client...' : '💌 Send Inquiry'}
              </motion.button>

              <p className="text-center text-[10px] text-taupe font-light">
                By submitting, a pre-filled email draft will open for you to send.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
