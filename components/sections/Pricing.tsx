import { motion } from 'framer-motion';
import { getLocalPrice } from '@/lib/countries';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    desc: 'Perfect for simple, elegant digital invitations.',
    features: [
      'Digital Invitation Page',
      'Basic Animations',
      'Countdown Timer',
      'WhatsApp & Link Share',
      'QR Code Generation',
      '3 Revision Rounds',
      '6 Months Hosting',
    ],
    excluded: ['RSVP System', 'Background Music', 'Photo Gallery', 'Love Story', 'Google Maps Embed', 'Guest Book'],
    cta: 'Get Started',
    popular: false,
  },
  {
    id: 'premium',
    name: 'Premium',
    desc: 'Our most popular — a complete luxury experience.',
    features: [
      'Full Event Microsite',
      'Premium Animations',
      'Live Countdown Timer',
      'RSVP System',
      'Background Music',
      'Photo Gallery (20 photos)',
      'Love Story Section',
      'Google Maps Embed',
      'QR Code Generation',
      'Unlimited Revisions',
      '12 Months Hosting',
    ],
    excluded: ['Guest Book', 'Video Embed'],
    cta: 'Start Premium',
    popular: true,
  },
  {
    id: 'luxury',
    name: 'Luxury',
    desc: 'The ultimate all-inclusive wedding digital experience.',
    features: [
      'Everything in Premium',
      'Unlimited Photos',
      'Video Embed',
      'Guest Book',
      'Digital Guestbook',
      'Multi-language Support',
      'Live RSVP Dashboard',
      'Custom Domain Setup',
      'Priority Support 24/7',
      'Lifetime Hosting',
      'PDF Keepsake Version',
    ],
    excluded: [],
    cta: 'Go Luxury',
    popular: false,
  },
];

interface PricingProps {
  country?: string;
}

export default function Pricing({ country = 'PK' }: PricingProps) {
  return (
    <section id="pricing" className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(201,169,110,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-6 bg-gold/50" />
              <span className="text-gold-dk text-[10px] tracking-[0.35em] uppercase font-jost font-light">investment</span>
              <div className="h-px w-6 bg-gold/50" />
            </div>
            <h2 className="font-cormorant text-mocha text-3xl sm:text-5xl font-light uppercase tracking-wider">
              Simple &amp; Transparent <span className="text-gold-dk italic font-normal normal-case">Pricing</span>
            </h2>
            <p className="text-taupe mt-4 max-w-md mx-auto text-xs sm:text-sm font-light font-jost leading-relaxed">
              No hidden management fees. Just beautiful, premium digital guest journeys.
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start font-jost">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              id={`pricing-${plan.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-3xl border p-7 transition-all duration-500 bg-cream/40 ${
                plan.popular
                  ? 'border-gold bg-gradient-to-b from-gold/10 to-cream shadow-warm-md'
                  : 'border-mocha/5 hover:border-gold/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4.5 py-1 rounded-full bg-gold text-mocha text-[9px] font-bold tracking-widest uppercase shadow-sm">
                  Most Popular
                </div>
              )}

              <div className="mb-5">
                <p className="text-taupe text-[10px] tracking-widest uppercase mb-1 font-medium">{plan.name}</p>
                <div className="flex items-end gap-2">
                  <span className="font-cormorant text-mocha text-3xl font-semibold">
                    {getLocalPrice(plan.id, country).symbol} {getLocalPrice(plan.id, country).amount}
                  </span>
                  {country !== 'US' && (
                    <span className="text-taupe text-xs mb-1">
                      ~${plan.id === 'starter' ? '19' : plan.id === 'premium' ? '38' : '64'}
                    </span>
                  )}
                </div>
                <p className="text-taupe text-xs mt-2 font-light">{plan.desc}</p>
              </div>

              <div className="h-px bg-mocha/5 mb-5" />

              <ul className="flex flex-col gap-2.5 mb-6 font-jost">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-xs text-mocha font-light">
                    <span className="text-gold-dk mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
                {plan.excluded.map(f => (
                  <li key={f} className="flex items-start gap-2 text-xs text-taupe-lt line-through font-light">
                    <span className="text-taupe-lt/50 mt-0.5 flex-shrink-0">✗</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                  plan.popular
                    ? 'bg-mocha text-white hover:bg-mocha-2 font-medium'
                    : 'border border-mocha/10 text-mocha hover:border-gold/50 hover:text-gold-dk font-medium'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
