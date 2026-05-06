import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, RefreshCw, Code2, Lock, ArrowRight } from 'lucide-react';

const devFeatures = [
  { icon: Zap, label: 'Webhooks & event triggers' },
  { icon: RefreshCw, label: 'Real-time settlement' },
  { icon: Code2, label: 'SDKs for 10+ languages' },
  { icon: Lock, label: 'Encrypted API endpoints' },
];

export default function DeveloperFirst() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="developers" data-testid="developer-section" className="py-24 md:py-32 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Code window */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="code-window">
              <div className="code-dots">
                <div className="code-dot bg-red-400/80" />
                <div className="code-dot bg-yellow-400/80" />
                <div className="code-dot bg-green-400/80" />
                <span className="ml-4 text-slate-500 text-xs font-mono">currencybricks-sdk.js</span>
              </div>
              <pre className="code-content text-white/90">
<code><span className="code-keyword">const</span> <span className="code-variable">UB</span> <span className="code-bracket">=</span> <span className="code-keyword">require</span><span className="code-bracket">(</span><span className="code-string">'@currencybricks/sdk'</span><span className="code-bracket">)</span>;{'\n'}{'\n'}<span className="code-keyword">const</span> <span className="code-variable">client</span> <span className="code-bracket">=</span> <span className="code-keyword">new</span> <span className="code-variable">UB</span><span className="code-bracket">(</span><span className="code-bracket">{'{'}</span>{'\n'}  <span className="code-variable">apiKey</span>: process.env.<span className="code-variable">UB_API_KEY</span>,{'\n'}<span className="code-bracket">{'}'}</span><span className="code-bracket">)</span>;{'\n'}{'\n'}<span className="code-keyword">const</span> <span className="code-variable">payment</span> <span className="code-bracket">=</span> <span className="code-keyword">await</span> client.payments.<span className="code-variable">create</span><span className="code-bracket">(</span><span className="code-bracket">{'{'}</span>{'\n'}  <span className="code-variable">amount</span>: <span className="code-number">125000</span>,{'\n'}  <span className="code-variable">currency</span>: <span className="code-string">'EUR'</span>,{'\n'}  <span className="code-variable">sourceCurrency</span>: <span className="code-string">'USD'</span>,{'\n'}  <span className="code-variable">recipient</span>: <span className="code-bracket">{'{'}</span>{'\n'}    <span className="code-variable">accountId</span>: <span className="code-string">'rec_9xKpL2mN'</span>,{'\n'}    <span className="code-variable">country</span>: <span className="code-string">'DE'</span>,{'\n'}  <span className="code-bracket">{'}'}</span>,{'\n'}  <span className="code-variable">reference</span>: <span className="code-string">'INV-2025-0441'</span>,{'\n'}<span className="code-bracket">{'}'}</span><span className="code-bracket">)</span>;{'\n'}{'\n'}<span className="code-comment">// Real-time settlement status</span>{'\n'}console.<span className="code-variable">log</span>(payment.<span className="code-variable">status</span>); <span className="code-comment">// "settled"</span>{'\n'}console.<span className="code-variable">log</span>(payment.<span className="code-variable">settledAt</span>); <span className="code-comment">// 2025-04-08T04:12:01Z</span></code>
              </pre>
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-1 rounded-[20px] bg-gradient-to-r from-brand-blue/20 via-brand-gold/15 to-brand-blue/20 blur-xl -z-10 opacity-60" />
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-8"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue mb-4">
                Developer-First
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-ink leading-[1.1]">
                Integrate payments directly into your stack.
              </h2>
            </div>

            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Our programmable APIs let you embed automated payment flows into any existing software stack — with webhooks, event-driven triggers, and SDKs for every major language. Money moves with unprecedented speed and precision.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {devFeatures.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} data-testid={`dev-feature-${i}`} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-blue/5 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-brand-blue" />
                    </div>
                    <span className="text-sm text-brand-ink/80 font-medium">{feat.label}</span>
                  </div>
                );
              })}
            </div>

            <a
              href="#contact"
              data-testid="developer-cta"
              className="group inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:gap-3 transition-all duration-300"
            >
              View API Documentation
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
