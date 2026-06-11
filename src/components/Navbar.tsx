import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-surface-950/80 backdrop-blur-xl border-b border-surface-200/50 dark:border-surface-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-shadow">
              R
            </div>
            <span className="font-heading font-bold text-lg text-surface-900 dark:text-white">
              Résuméoooo
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-surface-700 dark:text-surface-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-surface-700 dark:text-surface-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              How it works
            </a>
            <a href="#demo" className="text-sm font-medium text-surface-700 dark:text-surface-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Demo
            </a>
            <a
              href="#try"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 transition-all hover:-translate-y-0.5"
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
            className="md:hidden p-2 rounded-lg text-surface-700 dark:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-surface-200 dark:border-surface-800 mt-2 pt-4 space-y-3">
            <a href="#features" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-surface-700 dark:text-surface-200 hover:text-primary-600 dark:hover:text-primary-400">Features</a>
            <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-surface-700 dark:text-surface-200 hover:text-primary-600 dark:hover:text-primary-400">How it works</a>
            <a href="#demo" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-surface-700 dark:text-surface-200 hover:text-primary-600 dark:hover:text-primary-400">Demo</a>
            <a
              href="#try"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600 text-white text-sm font-semibold"
            >
              Try it free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
