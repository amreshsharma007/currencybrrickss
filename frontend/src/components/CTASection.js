import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" data-testid="cta-section" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0a1966 0%, #1434cb 50%, #102693 100%)',
        }}
      />
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: 'url(https://static.prod-images.emergentagent.com/jobs/7cea2fbb-30e9-44e7-8198-b69be8d5e762/images/fae33708a7194be0815727e80d098b28d1d09b39acea33283a6a2e5dc7bf98ea.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[120px]" />

      <div ref={ref} className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
        >
          Ready to scale globally
          <br />
          with confidence?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg text-white/65 leading-relaxed max-w-xl mx-auto"
        >
          Join hundreds of B2B enterprises using CurrencyBricks to streamline cross-border payments, eliminate hidden fees, and power their global treasury operations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#"
            data-testid="cta-request-demo"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-gold text-brand-ink font-semibold text-base hover:bg-brand-gold-hover transition-all duration-300 hover:shadow-xl hover:shadow-brand-gold/25 hover:-translate-y-0.5"
          >
            Request a Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#"
            data-testid="cta-api-docs"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium text-base hover:bg-white/10 transition-all duration-300"
          >
            View API Docs
          </a>
        </motion.div>
      </div>
    </section>
  );
}
