import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield } from 'lucide-react';
import createGlobe from 'cobe';

function CobeGlobe() {
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);
  const globeRef = useRef(null);

  const setupGlobe = useCallback(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const size = 600;
    canvas.width = size * 2;
    canvas.height = size * 2;

    if (globeRef.current) {
      globeRef.current.destroy();
    }

    globeRef.current = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: size * 2,
      height: size * 2,
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 3,
      mapSamples: 20000,
      mapBrightness: 6,
      baseColor: [0.12, 0.25, 0.85],
      markerColor: [0.99, 0.73, 0.04],
      glowColor: [0.1, 0.2, 0.7],
      markers: [
        { location: [40.7128, -74.006], size: 0.08 },
        { location: [51.5074, -0.1278], size: 0.08 },
        { location: [35.6762, 139.6503], size: 0.07 },
        { location: [1.3521, 103.8198], size: 0.07 },
        { location: [-33.8688, 151.2093], size: 0.06 },
        { location: [19.076, 72.8777], size: 0.07 },
        { location: [55.7558, 37.6173], size: 0.06 },
        { location: [-23.5505, -46.6333], size: 0.06 },
        { location: [48.8566, 2.3522], size: 0.07 },
        { location: [25.2048, 55.2708], size: 0.07 },
      ],
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phiRef.current += 0.004;
        }
        state.phi = phiRef.current + pointerInteractionMovement.current;
        state.width = size * 2;
        state.height = size * 2;
      },
    });
  }, []);

  useEffect(() => {
    setupGlobe();
    return () => {
      if (globeRef.current) {
        globeRef.current.destroy();
      }
    };
  }, [setupGlobe]);

  return (
    <canvas
      ref={canvasRef}
      data-testid="hero-globe"
      style={{
        width: '100%',
        maxWidth: '520px',
        aspectRatio: '1',
        cursor: 'grab',
      }}
      onPointerDown={(e) => {
        pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
        if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing';
      }}
      onPointerUp={() => {
        pointerInteracting.current = null;
        if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
      }}
      onPointerOut={() => {
        pointerInteracting.current = null;
        if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
      }}
      onPointerMove={(e) => {
        if (pointerInteracting.current !== null) {
          const delta = e.clientX - pointerInteracting.current;
          pointerInteractionMovement.current = delta / 200;
        }
      }}
    />
  );
}

/* Animated token that moves along a curved path */
function PaymentArc({ delay, duration, fromLabel, toLabel, amount, startX, startY, endX, endY }) {
  const midX = (startX + endX) / 2;
  const midY = Math.min(startY, endY) - 60;
  const path = `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full absolute inset-0" viewBox="0 0 520 520" fill="none">
        {/* Arc path */}
        <path
          d={path}
          stroke="rgba(253, 187, 10, 0.2)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
        />
        {/* Animated token dot */}
        <circle r="5" fill="#fdbb0a">
          <animateMotion
            dur={`${duration}s`}
            repeatCount="indefinite"
            begin={`${delay}s`}
            path={path}
          />
        </circle>
        <circle r="10" fill="rgba(253, 187, 10, 0.2)">
          <animateMotion
            dur={`${duration}s`}
            repeatCount="indefinite"
            begin={`${delay}s`}
            path={path}
          />
        </circle>
      </svg>
      {/* From label */}
      <div
        className="absolute text-[9px] font-mono text-white/50 whitespace-nowrap"
        style={{ left: `${(startX / 520) * 100}%`, top: `${(startY / 520) * 100}%`, transform: 'translate(-50%, -150%)' }}
      >
        {fromLabel}
      </div>
      {/* To label */}
      <div
        className="absolute text-[9px] font-mono text-white/50 whitespace-nowrap"
        style={{ left: `${(endX / 520) * 100}%`, top: `${(endY / 520) * 100}%`, transform: 'translate(-50%, 80%)' }}
      >
        {toLabel}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a1966 0%, #1434cb 40%, #102693 100%)',
      }}
    >
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              Cross-Border Payments, Reimagined
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white"
            >
              The global tokenised payment
              <br />
              infrastructure for{' '}
              <span className="text-brand-gold">enterprise.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/65 leading-relaxed max-w-lg"
            >
              Tokenise sensitive payment credentials, move money in local currencies across borders, and automate payment flows directly in your stack — without banking friction.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                data-testid="hero-cta-start"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-brand-gold text-brand-ink font-semibold text-base hover:bg-brand-gold-hover transition-all duration-300 hover:shadow-xl hover:shadow-brand-gold/25 hover:-translate-y-0.5"
              >
                Start Moving Money Globally
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                data-testid="hero-cta-sales"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/20 text-white font-medium text-base hover:bg-white/10 transition-all duration-300"
              >
                Talk to Sales
              </a>
            </motion.div>
          </div>

          {/* Right globe with payment arcs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-[520px]">
              {/* Globe */}
              <CobeGlobe />

              {/* Payment token arcs overlaying the globe */}
              <div className="absolute inset-0">
                <PaymentArc
                  delay={0}
                  duration={4}
                  fromLabel="NYC"
                  toLabel="LDN"
                  amount="$45K"
                  startX={150}
                  startY={200}
                  endX={320}
                  endY={160}
                />
                <PaymentArc
                  delay={1.5}
                  duration={5}
                  fromLabel="SGP"
                  toLabel="DXB"
                  amount="$82K"
                  startX={380}
                  startY={300}
                  endX={200}
                  endY={350}
                />
                <PaymentArc
                  delay={3}
                  duration={4.5}
                  fromLabel="TKY"
                  toLabel="SYD"
                  amount="$23K"
                  startX={420}
                  startY={180}
                  endX={440}
                  endY={380}
                />
              </div>

              {/* Floating payment cards */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-6 right-4 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-lg border border-white/15 text-white text-xs"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="font-mono">$45,200</span>
                  <span className="text-white/40">USD→EUR</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -7, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-16 left-4 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-lg border border-white/15 text-white text-xs"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  <span className="font-mono">$82,000</span>
                  <span className="text-white/40">GBP→INR</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [-4, 8, -4] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 right-0 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-lg border border-white/15 text-white text-xs"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="font-mono">$23,500</span>
                  <span className="text-white/40">JPY→AUD</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
