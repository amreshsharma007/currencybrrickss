import { Globe } from 'lucide-react';

const platformLinks = [
  'Global Payments',
  'FX Management',
  'Treasury',
  'Card Schemes',
  'Pricing',
];

const developerLinks = [
  'API Reference',
  'SDKs',
  'Webhooks',
  'Sandbox',
  'Changelog',
];

const companyLinks = [
  'About',
  'Customers',
  'Compliance',
  'Careers',
  'Contact',
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="relative bg-[#0a1966] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-white/8">
          {/* Brand column */}
          <div className="md:col-span-4 space-y-5">
            <a href="/" data-testid="footer-logo" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-gold flex items-center justify-center">
                <Globe className="w-5 h-5 text-brand-ink" />
              </div>
              <span className="text-xl font-heading font-bold text-white tracking-tight">
                CurrencyBricks
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              The cutting-edge financial technology platform streamlining global commerce for B2B enterprises — in every local currency, without intermediaries.
            </p>
          </div>

          {/* Link columns */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/30 mb-5">
              Platform
            </h4>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    data-testid={`footer-link-${link.toLowerCase().replace(/\s/g, '-')}`}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/30 mb-5">
              Developers
            </h4>
            <ul className="space-y-3">
              {developerLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    data-testid={`footer-link-${link.toLowerCase().replace(/\s/g, '-')}`}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/30 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    data-testid={`footer-link-${link.toLowerCase().replace(/\s/g, '-')}`}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            &copy; 2026 CurrencyBricks Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" data-testid="footer-privacy" className="text-xs text-white/25 hover:text-white/50 transition-colors">
              Privacy Policy
            </a>
            <a href="#" data-testid="footer-terms" className="text-xs text-white/25 hover:text-white/50 transition-colors">
              Terms of Service
            </a>
            <a href="#" data-testid="footer-cookies" className="text-xs text-white/25 hover:text-white/50 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Watermark */}
        <div className="mt-16 text-center">
          <span className="font-heading text-7xl md:text-9xl font-bold text-white/[0.02] select-none">
            CurrencyBricks
          </span>
        </div>
      </div>
    </footer>
  );
}
