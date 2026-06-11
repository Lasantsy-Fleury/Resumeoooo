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
          {[
            { icon: '🔑', text: 'No API key needed' },
            { icon: '🔒', text: 'Your data stays private' },
            { icon: '💚', text: '100% free & open source' },
          ].map((badge) => (
            <div key={badge.text} className="flex items-center gap-2 text-gray-500 text-sm">
              <span>{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
