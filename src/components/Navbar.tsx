import { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center shadow-md shadow-accent/20">
              <span className="text-white font-bold text-lg leading-none">R</span>
            </div>
            <span className="font-bold text-xl text-ink tracking-tight">
              Résuméoooo
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#features" className="text-[15px] font-medium text-ink-muted hover:text-ink transition-colors duration-200">
              Features
            </a>
            <a href="#how-it-works" className="text-[15px] font-medium text-ink-muted hover:text-ink transition-colors duration-200">
              How it works
            </a>
            <a href="#demo" className="text-[15px] font-medium text-ink-muted hover:text-ink transition-colors duration-200">
              Demo
            </a>
            <a
              href="#try"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-[15px] font-semibold hover:bg-accent/90 transition-all duration-300 shadow-md shadow-accent/20"
            >
              Try it free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-surface-card transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            mobileOpen ? 'max-h-72 pb-5' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1 pt-4 border-t border-surface-divider">
            {[
              { href: '#features', label: 'Features' },
              { href: '#how-it-works', label: 'How it works' },
              { href: '#demo', label: 'Demo' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-[15px] font-medium text-ink-muted hover:text-ink hover:bg-surface-card rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#try"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-[15px] font-semibold"
            >
              Try it free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
