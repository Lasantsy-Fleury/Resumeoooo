export default function CTA() {
  return (
    <section id="try" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-ink-950" />
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      {/* Warm glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-500/15 rounded-full blur-[120px]" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.02em] mb-6 leading-[1.15]">
          Ready to understand
          <br /> any document instantly?
        </h2>
        <p className="text-lg sm:text-xl text-ink-300 max-w-xl mx-auto mb-10 leading-relaxed">
          Join thousands of students and professionals who save hours every week.
          No signup required — just upload and go.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#demo"
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-brand-500 text-white font-bold text-base shadow-xl shadow-brand-500/20 hover:shadow-brand-500/30 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              Try the demo
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-ink-700 text-ink-300 font-semibold text-base hover:border-ink-500 hover:text-white transition-all duration-300"
          >
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
            <div key={badge.text} className="flex items-center gap-2 text-ink-400 text-sm">
              <span>{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
