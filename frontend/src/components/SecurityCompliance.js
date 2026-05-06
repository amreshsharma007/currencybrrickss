import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Lock, Globe, FileCheck, KeyRound } from 'lucide-react';

const badges = [
  { icon: ShieldCheck, label: 'PCI DSS Level 1' },
  { icon: KeyRound, label: 'Payment Account Tokenisation' },
  { icon: Lock, label: 'AML Compliant' },
  { icon: FileCheck, label: 'GDPR & CCPA' },
];

export default function SecurityCompliance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="security" data-testid="security-section" className="py-24 md:py-32 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue mb-4">
            Security & Compliance
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-ink leading-[1.1]">
            Built for regulated markets.
          </h2>
          <p className="mt-5 text-slate-500 text-base md:text-lg leading-relaxed">
            CurrencyBricks uses payment account tokenisation to protect sensitive payment credentials — replacing card numbers and bank details with secure tokens so your data never travels in the clear.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-testid={`security-badge-${i}`}
                className="group flex flex-col items-center text-center p-8 rounded-2xl border border-slate-100 hover:border-brand-blue/15 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 bg-white"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/5 flex items-center justify-center mb-5 group-hover:bg-brand-blue/10 transition-colors duration-500">
                  <Icon className="w-6 h-6 text-brand-blue" />
                </div>
                <span className="font-heading font-semibold text-brand-ink text-sm md:text-base">
                  {badge.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
