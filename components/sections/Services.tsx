'use client';
import { motion } from 'framer-motion';

const services = [
  { icon: '💍', title: 'Event Microsites', desc: 'Mini-sites for Weddings, Shaadi, and Birthdays with countdowns, maps, music, galleries, and RSVP.', tag: 'Most Popular' },
  { icon: '💼', title: 'Small Business Websites', desc: 'Custom high-end landing pages, product launch showcases, and responsive websites to elevate your brand presence.' },
  { icon: '👶', title: 'Baby memory Website', desc: 'Beautiful milestone trackers for name reveals, monthly growth photos, and family wishes.' },
  { icon: '❤️', title: 'Digital Proposals', desc: 'Bespoke proposal websites with custom timelines, music, and playful interactive YES/NO buttons.' },
  { icon: '🎓', title: 'Graduation Portfolios', desc: 'QR-enabled professional portfolios displaying CV credentials, projects, and achievements.' },
  { icon: '💌', title: 'Digital Greeting Cards', desc: 'Interactive premium cards with animations, custom typing effects, music, and voice notes.' },
  { icon: '🍽️', title: 'QR Menu Websites', desc: 'Elegant digital menus for restaurants and cafes with quick navigation, images, and reviews.' },
  { icon: '🕊️', title: 'Memorial Tributes', desc: 'Timeless memory timelines, photo boards, and space for family tributes to celebrate loved ones.' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 marble-bg-2 relative overflow-hidden">
      {/* Decorative botanical/wreath elements */}
      <div className="absolute top-[-80px] right-[-80px] w-80 h-80 gold-ring opacity-15 rotate-slow hidden lg:block" />
      <div className="absolute bottom-[-60px] left-[-60px] w-64 h-64 gold-ring opacity-15 rotate-slow hidden lg:block" style={{ animationDirection: 'reverse' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-6 bg-gold/50" />
              <span className="text-gold-dk text-[10px] tracking-[0.35em] uppercase font-jost font-light">our offerings</span>
              <div className="h-px w-6 bg-gold/50" />
            </div>
            <h2 className="font-cormorant text-mocha text-3xl sm:text-5xl font-light uppercase tracking-wider">
              Featured <span className="text-gold-dk italic font-normal normal-case">Services</span>
            </h2>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 font-jost">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              id={`service-${service.title.toLowerCase().replace(/\s/g, '-')}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-3xl bg-cream border border-mocha/5 hover:border-gold/40 hover:shadow-warm-md transition-all duration-500 cursor-default"
            >
              {service.tag && (
                <span className="absolute top-3 right-3 text-[9px] tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-gold/15 text-gold-dk border border-gold/30 font-medium">
                  {service.tag}
                </span>
              )}

              <div className="text-4xl mb-4 group-hover:scale-105 transition-transform duration-300">{service.icon}</div>
              <h3 className="font-cormorant text-mocha font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-taupe text-xs leading-relaxed font-light">{service.desc}</p>

              <div className="mt-5">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-[10px] tracking-widest uppercase text-gold-dk hover:text-mocha transition-colors group/link font-medium"
                >
                  Inquire
                  <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </a>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(201,169,110,0.06),transparent_70%)]" />
            </motion.div>
          ))}

          {/* Custom Design CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="p-6 rounded-3xl bg-gradient-to-br from-mocha via-mocha-2 to-mocha border border-mocha flex flex-col justify-between shadow-warm-md"
          >
            <div>
              <div className="text-4xl mb-4">🌸</div>
              <h3 className="font-cormorant text-white font-semibold text-lg mb-2">Custom Vision?</h3>
              <p className="text-white/70 text-xs leading-relaxed font-light">Have a highly tailored design in mind? Let's curate it together.</p>
            </div>
            <a
              href="#contact"
              className="mt-6 px-5 py-2.5 rounded-full bg-gold text-mocha text-xs font-semibold text-center hover:bg-gold-lt transition-colors tracking-wide uppercase font-medium"
            >
              Let's Chat
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
