import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Building2, CreditCard, Smartphone } from 'lucide-react';

const methods = [
  {
    icon: TrendingUp,
    title: 'Real-Time FX Rates',
    description: 'Live mid-market rates, zero markup',
  },
  {
    icon: Building2,
    title: 'Bank Account',
    description: 'Direct deposits to 4B+ accounts',
  },
  {
    icon: CreditCard,
    title: 'Push to Card',
    description: 'Instant transfers to debit cards',
  },
  {
    icon: Smartphone,
    title: 'Digital Wallet',
    description: 'Support for major digital wallets',
  },
];

const fxRates = [
  { pair: 'EUR / USD', rate: '1.0842', change: '+0.12%', up: true },
  { pair: 'GBP / USD', rate: '1.2634', change: '+0.08%', up: true },
  { pair: 'USD / JPY', rate: '149.32', change: '-0.15%', up: false },
  { pair: 'USD / INR', rate: '83.41', change: '-0.03%', up: false },
];

export default function PayoutMethods() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [selectedMethod, setSelectedMethod] = useState(0);

  return (
    <section data-testid="payout-section" className="py-24 md:py-32 bg-slate-50/50">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-blue leading-[1.1]">
              Multiple ways to deliver funds
            </h2>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Give your partners the flexibility to receive payments the way they prefer — with real-time FX rates and the widest range of payout methods in the industry.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {methods.map((method, i) => {
                const Icon = method.icon;
                const isSelected = selectedMethod === i;
                return (
                  <div
                    key={method.title}
                    data-testid={`payout-method-${i}`}
                    className={`flex items-center gap-3 p-4 rounded-xl border bg-white transition-all duration-300 cursor-pointer ${
                      isSelected ? 'border-brand-gold/40 shadow-sm' : 'border-slate-100 hover:border-brand-gold/30 hover:shadow-sm'
                    }`}
                    onClick={() => setSelectedMethod(i)}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isSelected ? 'bg-brand-gold/15' : 'bg-brand-gold/10'
                    }`}>
                      <Icon className="w-4.5 h-4.5 text-brand-gold" />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-brand-ink text-sm">{method.title}</div>
                      <div className="text-xs text-slate-400">{method.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="relative w-[300px] md:w-[340px]">
              <div className="rounded-[40px] border-[3px] border-slate-200 bg-white p-4 shadow-2xl shadow-brand-blue/10">
                {/* Notch */}
                <div className="w-24 h-6 bg-slate-100 rounded-full mx-auto mb-4" />

                {/* App screen — switches based on selection */}
                <div className="space-y-5 px-2">
                  {selectedMethod === 0 ? (
                    /* Real-Time FX Rates screen */
                    <>
                      <div className="text-center">
                        <p className="text-xs text-slate-400 font-medium">Live FX Rates</p>
                        <p className="text-lg font-heading font-bold text-brand-blue mt-1">Real-Time Market Data</p>
                      </div>

                      <div className="space-y-2.5">
                        {fxRates.map((fx, i) => (
                          <motion.div
                            key={fx.pair}
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                            className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-white"
                          >
                            <div>
                              <div className="text-sm font-semibold text-brand-ink">{fx.pair}</div>
                              <div className="text-xs text-slate-400 font-mono">{fx.rate}</div>
                            </div>
                            <div className={`text-xs font-semibold px-2 py-1 rounded-md ${
                              fx.up
                                ? 'text-emerald-600 bg-emerald-50'
                                : 'text-red-500 bg-red-50'
                            }`}>
                              {fx.change}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <div className="text-center">
                        <span className="text-[10px] text-slate-300">Updated 2s ago</span>
                      </div>
                    </>
                  ) : (
                    /* Payout selection screen */
                    <>
                      <div className="text-center">
                        <p className="text-xs text-slate-400 font-medium">Select payout method</p>
                        <p className="text-3xl font-heading font-bold text-brand-blue mt-1">$2,450.00</p>
                      </div>

                      <div className="space-y-3">
                        {methods.filter((_, i) => i !== 0).map((method, i) => {
                          const Icon = method.icon;
                          const idx = i + 1;
                          const isSelected2 = selectedMethod === idx;
                          return (
                            <div
                              key={idx}
                              onClick={() => setSelectedMethod(idx)}
                              className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all duration-300 ${
                                isSelected2
                                  ? 'border-brand-gold/40 bg-brand-gold/5'
                                  : 'border-slate-100 bg-white'
                              }`}
                            >
                              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                                isSelected2 ? 'bg-brand-gold/15' : 'bg-slate-50'
                              }`}>
                                <Icon className={`w-4 h-4 ${isSelected2 ? 'text-brand-gold' : 'text-slate-400'}`} />
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-medium text-brand-ink">{method.title}</div>
                                <div className="text-xs text-slate-400">{method.description}</div>
                              </div>
                              {isSelected2 && (
                                <div className="w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center">
                                  <div className="w-2 h-2 rounded-full bg-white" />
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      <button className="w-full py-3.5 rounded-xl bg-brand-gold text-brand-ink font-semibold text-sm hover:bg-brand-gold-hover transition-colors">
                        Confirm Selection
                      </button>
                    </>
                  )}
                </div>

                {/* Home bar */}
                <div className="w-28 h-1 bg-slate-200 rounded-full mx-auto mt-4" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
