import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, BarChart3, Users, DollarSign } from 'lucide-react';

const reasons = [
  {
    icon: BarChart3,
    title: 'Enhanced Program Management',
    subtitle: '360° visibility',
    content:
      'Get complete visibility into every cross-border transaction with real-time dashboards, automated reconciliation, and granular reporting across all your payment corridors.',
  },
  {
    icon: Users,
    title: 'Empowering Customer Control',
    subtitle: '12+ payout methods',
    content:
      'Offer your partners and suppliers their preferred payout method — from direct bank transfers and push-to-card to digital wallets across multiple regions.',
  },
  {
    icon: DollarSign,
    title: 'Reduced Operational Costs',
    subtitle: '40% cost reduction',
    content:
      'Eliminate intermediary bank fees, reduce FX markups, and automate manual payment operations. Our clients save an average of 40% on cross-border payment costs.',
  },
];

export default function WhyChoose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section data-testid="why-choose-section" className="py-24 md:py-32 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8 lg:sticky lg:top-32"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-blue leading-[1.1]">
              Why choose CurrencyBricks?
            </h2>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Built for enterprises that demand excellence, CurrencyBricks delivers measurable results that impact your bottom line.
            </p>

            <div className="flex gap-6">
              <div className="p-5 rounded-2xl border border-slate-100 flex-1">
                <div className="text-3xl md:text-4xl font-heading font-bold text-brand-blue">99.9%</div>
                <div className="text-sm text-slate-500 mt-1">Uptime SLA</div>
              </div>
              <div className="p-5 rounded-2xl border border-slate-100 flex-1">
                <div className="text-3xl md:text-4xl font-heading font-bold text-brand-blue">24/7</div>
                <div className="text-sm text-slate-500 mt-1">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Right accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              const isOpen = openIndex === i;
              const isGold = i % 2 === 0;
              return (
                <div
                  key={reason.title}
                  data-testid={`why-choose-item-${i}`}
                  className={`rounded-2xl transition-all duration-400 ${
                    isGold
                      ? 'bg-brand-gold border border-brand-gold-hover'
                      : 'bg-brand-blue border border-brand-blue-hover'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center gap-4 p-5 md:p-6 text-left"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isGold ? 'bg-white/20' : 'bg-white/10'
                    }`}>
                      <Icon className={`w-5 h-5 ${isGold ? 'text-brand-ink' : 'text-white'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`font-heading font-bold text-base md:text-lg ${
                        isGold ? 'text-brand-ink' : 'text-white'
                      }`}>
                        {reason.title}
                      </div>
                      <div className={`text-sm font-medium ${
                        isGold ? 'text-brand-ink/60' : 'text-white/60'
                      }`}>{reason.subtitle}</div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${
                        isGold ? 'text-brand-ink/50' : 'text-white/50'
                      } ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6 pl-[76px] md:pl-[88px]">
                          <p className={`text-sm leading-relaxed ${
                            isGold ? 'text-brand-ink/70' : 'text-white/70'
                          }`}>{reason.content}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
