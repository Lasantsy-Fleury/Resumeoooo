export default function CTA() {
  return (
    <section id="try" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-ink" />
      {/* Subtle accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-accent/[0.08] rounded-full blur-[120px]" />

      <div className="relative max-w-3xl mx-auto px-6 sm:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-[-0.02em] mb-6 leading-[1.15]">
          Ready to understand
          <br /> any document instantly?
        </h2>
        <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Join thousands of students and professionals who save hours every week.
          No signup required — just upload and go.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#demo" className="btn-primary bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20">
            Try the demo
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a href="#features" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/15 text-gray-300 font-semibold text-base hover:border-white/30 hover:text-white transition-all duration-300">
            Learn more
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
            <span>No API key needed</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
            <span>Your data stays private</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>100% free &amp; open source</span>
          </div>
        </div>
      </div>
    </section>
  );
}
