import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, Code2, Scale, ShieldCheck } from 'lucide-react';

const capabilities = [
  {
    icon: Globe,
    label: 'GLOBAL NETWORK',
    title: 'Move money anywhere.',
    description:
      'Accept and move money anywhere in the world through direct partnerships with major global card schemes — no intermediaries, no surprises.',
    span: 'md:col-span-7',
  },
  {
    icon: Code2,
    label: 'PROGRAMMABILITY',
    title: 'API-first architecture.',
    description:
      'A richly documented API lets your engineering team embed automated payment flows directly into your existing stack in days, not quarters.',
    span: 'md:col-span-5',
  },
  {
    icon: Scale,
    label: 'GLOBAL NOTARY',
    title: 'Notarised cross-border assurance.',
    description:
      'Our platform provides global notary services in partnership with leading law firms — ensuring every transaction carries legally recognised, tamper-proof verification across jurisdictions.',
    span: 'md:col-span-5',
  },
  {
    icon: ShieldCheck,
    label: 'COMPLIANCE',
    title: 'Built for regulated markets.',
    description:
      'AML controls, PCI DSS Level 1, and full audit trails baked into every payment — so your compliance team can breathe easy.',
    span: 'md:col-span-7',
  },
];

export default function PlatformCapabilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="platform" data-testid="platform-section" className="py-24 md:py-32 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue mb-4">
            Platform Capabilities
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-brand-ink max-w-xl leading-[1.1]">
            Every layer of global commerce, unified.
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            const isGold = i % 2 === 0;
            return (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                data-testid={`capability-${cap.label.toLowerCase().replace(/\s/g, '-')}`}
                className={`${cap.span} col-span-1 group relative rounded-2xl p-8 md:p-10 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 ${
                  isGold
                    ? 'bg-brand-gold border border-brand-gold-hover'
                    : 'bg-brand-blue border border-brand-blue-hover'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  isGold
                    ? 'bg-white/20 border border-white/20'
                    : 'bg-white/10 border border-white/15'
                }`}>
                  <Icon className={`w-5 h-5 ${isGold ? 'text-brand-ink' : 'text-white'}`} />
                </div>
                <p className={`text-[11px] font-semibold tracking-[0.15em] uppercase mb-3 ${
                  isGold ? 'text-brand-ink/60' : 'text-white/60'
                }`}>
                  {cap.label}
                </p>
                <h3 className={`font-heading text-xl md:text-2xl font-bold mb-3 ${
                  isGold ? 'text-brand-ink' : 'text-white'
                }`}>
                  {cap.title}
                </h3>
                <p className={`leading-relaxed text-[15px] ${
                  isGold ? 'text-brand-ink/70' : 'text-white/70'
                }`}>
                  {cap.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
