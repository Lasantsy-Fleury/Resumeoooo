export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-[-20%] right-[5%] w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-20 items-center">
          {/* Left: Copy — left-aligned, editorial */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-accent-pill text-accent text-sm font-medium mb-8">
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM6.5 7h2v4.5h1V12h-3V7h.5z" />
              </svg>
              Open Source · No Signup Required
            </div>

            {/* Headline */}
            <h1 className="font-serif text-[2.75rem] sm:text-6xl lg:text-[4.5rem] text-ink leading-[1.1] tracking-[-0.02em] mb-7">
              Read less.
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-accent italic">Understand</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-accent/30 -z-0 rounded-sm" />
              </span>
              {' '}more.
            </h1>


            {/* Subheadline */}
            <p className="max-w-lg text-lg sm:text-xl text-ink-body leading-relaxed mb-10">
              Upload a PDF, TXT, or paste a URL — Résuméoooo instantly generates
              extractive &amp; abstractive summaries, then lets you{' '}
              <span className="text-ink font-medium">chat with your document</span> using a context-aware AI.
            </p>

            {/* CTA buttons — pill style */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a href="#try" className="btn-primary">
                Try it free
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#how-it-works" className="btn-ghost">
                See how it works
              </a>
            </div>

            {/* Stat badges — teal floating badges */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mt-10">
              <div className="flex -space-x-2">
                {['bg-brand-400', 'bg-coral-400', 'bg-mint-500', 'bg-ink-400'].map((bg, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${bg} border-2 border-brand-50 flex items-center justify-center text-white text-[10px] font-bold`}>
                    {['SC', 'MD', 'AB', 'JK'][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-ink-500">
                <span className="font-semibold text-ink-700">2,400+</span> documents summarized
              </p>
            </div>
          </div>

          {/* Right: Product mockup — floating card overlay with layered shadows */}
          <div className="relative animate-float">
            {/* Background card layer (offset, creates depth) */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-accent/5 border border-accent/10" />

            <div className="relative rounded-2xl bg-white border border-surface-divider overflow-hidden" style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.06)' }}>
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-5 py-3.5 bg-surface-card border-b border-surface-divider">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#f9b5a1]" />
                  <div className="w-3 h-3 rounded-full bg-surface-divider" />
                  <div className="w-3 h-3 rounded-full bg-accent/40" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-lg bg-white border border-surface-divider text-[11px] text-ink-muted font-mono">
                    resumeoooo.app
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Summary side */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-accent-pill flex items-center justify-center">
                      <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-ink">Summary</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2.5 bg-surface-card rounded-full w-full" />
                    <div className="h-2.5 bg-surface-card rounded-full w-5/6" />
                    <div className="h-2.5 bg-accent-pill rounded-full w-4/5" />
                    <div className="h-2.5 bg-surface-card rounded-full w-full" />
                    <div className="h-2.5 bg-surface-card rounded-full w-3/4" />
                    <div className="h-2.5 bg-surface-card rounded-full w-2/3" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['AI', 'NLP', 'RAG', 'LLM'].map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 rounded-full bg-accent-pill text-accent text-[11px] font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Chat side */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-accent-pill flex items-center justify-center">
                      <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-ink">Chat</span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-surface-card flex-shrink-0 flex items-center justify-center text-[9px] font-bold text-ink-muted">U</div>
                      <div className="bg-surface-card rounded-2xl rounded-tl-sm px-3 py-2 text-xs text-ink-body max-w-[80%]">
                        Key findings?
                      </div>
                    </div>
                    <div className="flex gap-2 justify-end">
                      <div className="bg-accent text-white rounded-2xl rounded-tr-sm px-3 py-2 text-xs max-w-[80%]">
                        Three main factors were identified...
                      </div>
                      <div className="w-6 h-6 rounded-full bg-accent-pill flex-shrink-0 flex items-center justify-center text-[9px] font-bold text-accent">R</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-surface-card flex-shrink-0 flex items-center justify-center text-[9px] font-bold text-ink-muted">U</div>
                      <div className="bg-surface-card rounded-2xl rounded-tl-sm px-3 py-2 text-xs text-ink-body max-w-[80%]">
                        Explain methodology?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
