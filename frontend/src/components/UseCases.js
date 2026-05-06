import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShoppingCart, Code2, Store, Truck, ArrowRight } from 'lucide-react';

const industries = [
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Streamline cross-border supplier payments and marketplace settlements with automated multi-currency processing.',
    href: '#contact',
  },
  {
    icon: Code2,
    title: 'SaaS & Tech',
    description: 'Automate subscription payouts, SaaS revenue disbursements, and global contractor payments at scale.',
    href: '#contact',
  },
  {
    icon: Store,
    title: 'Marketplaces',
    description: 'Manage seller payouts seamlessly across multiple currencies and regions with real-time settlement.',
    href: '#contact',
  },
  {
    icon: Truck,
    title: 'Supply Chain & Logistics',
    description: 'Handle freight invoices, carrier payments, and cross-border trade finance with full audit trails.',
    href: '#contact',
  },
];

export default function UseCases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="industries" data-testid="usecases-section" className="py-24 md:py-32 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-blue leading-[1.1]">
            Built for your industry
          </h2>
          <p className="mt-5 text-slate-500 text-base md:text-lg leading-relaxed">
            CurrencyBricks adapts to the unique requirements of your sector with specialized workflows and compliance features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-testid={`usecase-${item.title.toLowerCase().replace(/[&\s]+/g, '-')}`}
                className="group p-7 rounded-2xl border border-slate-100 hover:border-brand-blue/15 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 bg-white"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-heading text-lg font-bold text-brand-blue mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {item.description}
                </p>
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-brand-gold font-semibold text-sm group-hover:gap-2.5 transition-all duration-300"
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
