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
          ? 'bg-brand-50/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 rounded-lg bg-brand-600 rotate-6 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-lg bg-brand-500 flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg leading-none">R</span>
              </div>
            </div>
            <span className="font-heading font-bold text-xl text-ink-900 tracking-tight">
              Résuméoooo
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#features" className="fancy-underline text-[15px] font-medium text-ink-600 hover:text-ink-900 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="fancy-underline text-[15px] font-medium text-ink-600 hover:text-ink-900 transition-colors">
              How it works
            </a>
            <a href="#demo" className="fancy-underline text-[15px] font-medium text-ink-600 hover:text-ink-900 transition-colors">
              Demo
            </a>
            <a
              href="#try"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink-900 text-brand-50 text-[15px] font-semibold hover:bg-ink-800 transition-all duration-300 hover:shadow-lg hover:shadow-ink-900/20 active:scale-[0.97]"
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
            className="md:hidden p-2 rounded-lg text-ink-700 hover:bg-brand-100 transition-colors"
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
            mobileOpen ? 'max-h-64 pb-5' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1 pt-3 border-t border-ink-100">
            {[
              { href: '#features', label: 'Features' },
              { href: '#how-it-works', label: 'How it works' },
              { href: '#demo', label: 'Demo' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-[15px] font-medium text-ink-600 hover:text-ink-900 hover:bg-brand-100 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#try"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-ink-900 text-brand-50 text-[15px] font-semibold"
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
