import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const features = [
  'Real-time payment status tracking',
  'Multi-currency wallet management',
  'Instant push notifications',
  'Biometric-secured approvals',
];

export default function MobileExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section data-testid="mobile-section" className="py-24 md:py-32 bg-slate-50/50">
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
              A mobile-first experience your teams will love
            </h2>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Give your finance team complete control over cross-border payments with our intuitive mobile interface. Real-time tracking, instant notifications, and multi-currency management — all at their fingertips.
            </p>
            <ul className="space-y-4">
              {features.map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0" />
                  <span className="text-brand-ink/80 text-[15px]">{f}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="relative w-[300px] md:w-[340px]">
              {/* Phone frame */}
              <div className="rounded-[40px] border-[3px] border-slate-200 bg-white p-4 shadow-2xl shadow-brand-blue/10">
                {/* Notch */}
                <div className="w-24 h-6 bg-slate-100 rounded-full mx-auto mb-4" />

                {/* App screen */}
                <div className="space-y-5 px-2">
                  {/* Header */}
                  <div className="text-center">
                    <p className="text-xs text-slate-400 font-medium">Payment Status</p>
                    <p className="text-3xl font-heading font-bold text-brand-blue mt-1">$125,000.00</p>
                  </div>

                  {/* Progress bar */}
                  <div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '75%' } : {}}
                        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                        className="h-full bg-brand-gold rounded-full"
                      />
                    </div>
                    <p className="text-xs text-slate-400 mt-1.5 text-center">Processing - 75% complete</p>
                  </div>

                  {/* Status items */}
                  <div className="space-y-3">
                    {[
                      { label: 'Invoice Verified', status: 'complete' },
                      { label: 'FX Converted', status: 'complete' },
                      { label: 'Settlement in Progress', status: 'active' },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-3 p-3 rounded-xl border ${
                          item.status === 'active'
                            ? 'border-brand-gold/30 bg-brand-gold/5'
                            : 'border-slate-100 bg-white'
                        }`}
                      >
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            item.status === 'active' ? 'bg-brand-gold animate-pulse' : 'bg-green-400'
                          }`}
                        />
                        <span className="text-sm text-brand-ink/80 font-medium">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Home bar */}
                <div className="w-28 h-1 bg-slate-200 rounded-full mx-auto mt-6" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
