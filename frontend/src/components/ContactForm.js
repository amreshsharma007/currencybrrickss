import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const benefits = [
  'See a live demo tailored to your industry',
  'Get answers to your specific questions',
  'Receive a custom implementation proposal',
  'Learn about pricing and timelines',
];

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-24 md:py-32 bg-white">
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
              Ready to get started?
            </h2>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Schedule a personalized demo to see how CurrencyBricks can transform your cross-border payment operations.
            </p>
            <ul className="space-y-4">
              {benefits.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  <span className="text-brand-ink/80 text-[15px]">{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              data-testid="contact-form"
              className="p-8 rounded-2xl border border-slate-100 bg-white shadow-lg shadow-brand-blue/5 space-y-5"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-brand-ink mb-1.5">First name *</label>
                  <input
                    type="text"
                    placeholder="John"
                    data-testid="contact-first-name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-ink placeholder:text-slate-300 focus:outline-none focus:border-brand-blue/40 focus:ring-2 focus:ring-brand-blue/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-ink mb-1.5">Last name *</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    data-testid="contact-last-name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-ink placeholder:text-slate-300 focus:outline-none focus:border-brand-blue/40 focus:ring-2 focus:ring-brand-blue/10 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-ink mb-1.5">Work email *</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  data-testid="contact-email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-ink placeholder:text-slate-300 focus:outline-none focus:border-brand-blue/40 focus:ring-2 focus:ring-brand-blue/10 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-ink mb-1.5">Phone number</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  data-testid="contact-phone"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-ink placeholder:text-slate-300 focus:outline-none focus:border-brand-blue/40 focus:ring-2 focus:ring-brand-blue/10 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-brand-ink mb-1.5">Company *</label>
                  <input
                    type="text"
                    placeholder="Acme Inc."
                    data-testid="contact-company"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-ink placeholder:text-slate-300 focus:outline-none focus:border-brand-blue/40 focus:ring-2 focus:ring-brand-blue/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-ink mb-1.5">Job title</label>
                  <input
                    type="text"
                    placeholder="CFO"
                    data-testid="contact-job-title"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-brand-ink placeholder:text-slate-300 focus:outline-none focus:border-brand-blue/40 focus:ring-2 focus:ring-brand-blue/10 transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                data-testid="contact-submit-button"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-brand-gold text-brand-ink font-semibold text-base hover:bg-brand-gold-hover transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/25"
              >
                {submitted ? 'Thank you!' : 'Book a Demo'}
                {!submitted && <ArrowRight className="w-4 h-4" />}
              </button>

              <p className="text-xs text-center text-slate-400">
                By submitting this form, you agree to our{' '}
                <a href="#" className="text-brand-gold hover:underline">Privacy Policy</a>.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
