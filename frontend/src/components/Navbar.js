import { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Features', href: '#platform' },
  { label: 'Industries', href: '#industries' },
  { label: 'Solutions', href: '#developers' },
  { label: 'About', href: '#security' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      data-testid="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="/" data-testid="nav-logo" className="flex items-center gap-2.5 group">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
              scrolled ? 'bg-brand-blue' : 'bg-white/15 backdrop-blur-sm border border-white/20'
            }`}>
              <Globe className={`w-5 h-5 ${scrolled ? 'text-white' : 'text-white'}`} />
            </div>
            <span className={`text-xl font-heading font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-brand-ink' : 'text-white'
            }`}>
              CurrencyBricks
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
                className={`text-sm font-medium transition-colors duration-300 hover:opacity-100 ${
                  scrolled ? 'text-slate-600 hover:text-brand-blue' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              data-testid="nav-login-button"
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled ? 'text-brand-blue' : 'text-white/90 hover:text-white'
              }`}
            >
              Log in
            </a>
            <a
              href="#contact"
              data-testid="nav-cta-button"
              className="px-5 py-2.5 rounded-full bg-brand-gold text-brand-ink text-sm font-semibold hover:bg-brand-gold-hover transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/25 hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-brand-ink' : 'text-white'
            }`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-xl"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-brand-ink font-medium hover:text-brand-blue transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <a href="#contact" className="block text-brand-blue font-medium">Log in</a>
                <a href="#contact" className="block w-full text-center px-5 py-3 rounded-full bg-brand-gold text-brand-ink font-semibold">
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
