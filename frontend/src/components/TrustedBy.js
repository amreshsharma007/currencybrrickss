import Marquee from 'react-fast-marquee';

const industries = [
  'Airlines',
  'E-Commerce',
  'SaaS',
  'Marketplaces',
  'Hospitality',
  'Logistics',
  'FinTech',
];

const companies = [
  'Apex Global',
  'TrustCo Finance',
  'CapVest',
  'NovaPay',
  'Orbis Finance',
  'Sterling Capital',
  'Latitude FX',
  'Meridian Group',
];

export default function TrustedBy() {
  return (
    <section data-testid="trusted-by-section" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-6">
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
          Trusted by industry leaders worldwide
        </p>
        {/* Industry pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-5">
          {industries.map((ind) => (
            <span
              key={ind}
              className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-500 bg-slate-50 border border-slate-100"
            >
              {ind}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <Marquee gradient gradientColor="#ffffff" gradientWidth={80} speed={35} pauseOnHover>
          {companies.map((name, i) => (
            <div
              key={i}
              data-testid={`trusted-logo-${i}`}
              className="mx-12 md:mx-16 text-xl md:text-2xl font-heading font-semibold text-slate-200 hover:text-brand-blue transition-colors duration-500 cursor-default select-none whitespace-nowrap"
            >
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
