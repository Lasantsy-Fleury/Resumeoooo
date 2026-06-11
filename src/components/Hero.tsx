export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[10%] w-[700px] h-[700px] bg-brand-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-coral-200/30 rounded-full blur-[100px]" />
        <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] bg-mint-200/20 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/70 backdrop-blur border border-brand-200 text-brand-700 text-sm font-medium mb-8 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-mint-500" />
              </span>
              Open source · No signup required
            </div>

            {/* Headline */}
            <h1 className="font-heading text-[2.75rem] sm:text-6xl lg:text-7xl font-bold text-ink-950 leading-[1.08] tracking-[-0.02em] mb-7">
              Read less.
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-600">Understand</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-brand-200/60 -z-0 rounded-sm" />
              </span>
              {' '}more.
            </h1>

            {/* Subheadline */}
            <p className="max-w-lg mx-auto lg:mx-0 text-lg sm:text-xl text-ink-500 leading-relaxed mb-10">
              Upload any document — PDF, TXT, or URL — and get instant AI summaries
              plus a contextual chatbot that <em className="font-medium text-ink-700 not-italic">actually reads</em> your file.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#try"
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-ink-900 text-brand-50 font-semibold text-base shadow-xl shadow-ink-900/15 hover:shadow-ink-900/25 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  Try it free
                  <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-ink-800 to-ink-900 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-ink-200 text-ink-700 font-semibold text-base hover:border-ink-400 hover:bg-white/50 transition-all duration-300"
              >
                See how it works
              </a>
            </div>

            {/* Social proof micro */}
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

          {/* Right: Product mockup */}
          <div className="relative animate-float">
            <div className="absolute -inset-6 bg-gradient-to-br from-brand-300/20 via-coral-200/15 to-mint-200/10 rounded-3xl blur-2xl" />
            <div className="relative bg-white rounded-2xl shadow-2xl shadow-ink-900/[0.08] border border-ink-100 overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-5 py-3.5 bg-ink-50 border-b border-ink-100">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-coral-300" />
                  <div className="w-3 h-3 rounded-full bg-brand-300" />
                  <div className="w-3 h-3 rounded-full bg-mint-300" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-white border border-ink-100 text-xs text-ink-400 font-mono">
                    resumeoooo.app
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Summary side */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-brand-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-ink-800">Summary</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2.5 bg-ink-50 rounded-full w-full" />
                    <div className="h-2.5 bg-ink-50 rounded-full w-5/6" />
                    <div className="h-2.5 bg-brand-100 rounded-full w-4/5" />
                    <div className="h-2.5 bg-ink-50 rounded-full w-full" />
                    <div className="h-2.5 bg-ink-50 rounded-full w-3/4" />
                    <div className="h-2.5 bg-ink-50 rounded-full w-2/3" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['AI', 'NLP', 'RAG', 'LLM'].map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 text-[11px] font-medium border border-brand-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Chat side */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-mint-50 flex items-center justify-center">
                      <svg className="w-4 h-4 text-mint-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-ink-800">Chat</span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-ink-100 flex-shrink-0 flex items-center justify-center text-[9px] font-bold text-ink-500">U</div>
                      <div className="bg-ink-50 rounded-2xl rounded-tl-sm px-3 py-2 text-xs text-ink-600 max-w-[80%]">
                        Key findings?
                      </div>
                    </div>
                    <div className="flex gap-2 justify-end">
                      <div className="bg-ink-900 text-white rounded-2xl rounded-tr-sm px-3 py-2 text-xs max-w-[80%]">
                        Three main factors were identified...
                      </div>
                      <div className="w-6 h-6 rounded-full bg-brand-100 flex-shrink-0 flex items-center justify-center text-[9px] font-bold text-brand-600">R</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-ink-100 flex-shrink-0 flex items-center justify-center text-[9px] font-bold text-ink-500">U</div>
                      <div className="bg-ink-50 rounded-2xl rounded-tl-sm px-3 py-2 text-xs text-ink-600 max-w-[80%]">
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
