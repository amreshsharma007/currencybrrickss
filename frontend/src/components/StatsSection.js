import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: '50+', label: 'Currencies', suffix: '' },
  { value: '0.3s', label: 'Settlement', suffix: '' },
  { value: '99.99%', label: 'Uptime', suffix: '' },
  { value: '10x', label: 'Faster', suffix: '' },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section data-testid="stats-section" className="py-20 md:py-28 bg-slate-50/50">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center"
              data-testid={`stat-${stat.label.toLowerCase()}`}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-blue tracking-tight">
                {stat.value}
              </div>
              <div className="mt-2 text-sm md:text-base font-medium text-slate-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
