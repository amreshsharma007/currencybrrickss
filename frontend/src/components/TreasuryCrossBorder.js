import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const features = [
  'Settle supplier invoices in any local currency',
  'Manage multi-currency treasury operations centrally',
  'Automate FX conversion with programmable rules',
  'Full audit trail and transaction-level reporting',
];

export default function TreasuryCrossBorder() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section data-testid="treasury-section" className="py-24 md:py-32 bg-slate-50/50">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left text */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue mb-4">
                Treasury & Cross-Border
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-ink leading-[1.1]">
                Scale globally without the banking friction.
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-500 text-base md:text-lg leading-relaxed"
            >
              CurrencyBricks gives your finance team a single control plane for every cross-border transaction — whether you're moving working capital, settling supplier invoices, or managing multi-currency treasury operations with precision.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              {features.map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                  <span className="text-brand-ink/80 text-[15px]">{f}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              href="#contact"
              data-testid="treasury-cta"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:gap-3 transition-all duration-300"
            >
              Explore Global Coverage
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-blue/10">
              <img
                src="https://static.prod-images.emergentagent.com/jobs/7cea2fbb-30e9-44e7-8198-b69be8d5e762/images/1543bbfc9f391b26ed8ac32335779e7bea4d923ef208232e387801aa6548de49.png"
                alt="Global Treasury Network"
                className="w-full h-auto"
                loading="lazy"
              />
              {/* Glassmorphism overlay card */}
              <div className="absolute bottom-6 left-6 right-6 px-5 py-4 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20">
                <div className="flex items-center justify-between text-white text-sm">
                  <div>
                    <div className="text-white/60 text-xs">Settlement time</div>
                    <div className="font-heading font-bold text-lg">0.3s average</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/60 text-xs">Coverage</div>
                    <div className="font-heading font-bold text-lg">Multi-currency</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
