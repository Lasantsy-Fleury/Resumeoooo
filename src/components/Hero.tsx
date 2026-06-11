export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-primary-400/20 via-primary-500/10 to-accent-400/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-accent-400/15 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-sm font-medium mb-8 border border-primary-200 dark:border-primary-800">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
          </span>
          Powered by AI — Free &amp; Open Source
        </div>

        {/* Headline */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-surface-900 dark:text-white leading-[1.1] mb-6">
          Understand any document
          <br />
          <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent">
            in seconds
          </span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-surface-600 dark:text-surface-200 leading-relaxed mb-10">
          Upload a PDF, TXT, or paste a URL — Résuméoooo instantly generates
          extractive &amp; abstractive summaries, then lets you chat with your
          document using a context-aware AI.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#try"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary-600 text-white font-semibold text-base shadow-xl shadow-primary-600/25 hover:bg-primary-700 hover:shadow-primary-600/40 transition-all hover:-translate-y-0.5"
          >
            Try it free
            <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-surface-300 dark:border-surface-700 text-surface-700 dark:text-surface-200 font-semibold text-base hover:bg-surface-100 dark:hover:bg-surface-800 transition-all"
          >
            See how it works
          </a>
        </div>

        {/* Hero visual — mockup */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-accent-400/20 to-primary-500/20 rounded-2xl blur-2xl" />
          <div className="relative bg-white dark:bg-surface-900 rounded-2xl shadow-2xl border border-surface-200 dark:border-surface-800 overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-surface-500 font-mono">Résuméoooo — Document Assistant</span>
            </div>
            {/* Content mockup */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {/* Summary side */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-md bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-surface-900 dark:text-white">Summary</span>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-surface-100 dark:bg-surface-800 rounded-full w-full" />
                  <div className="h-3 bg-surface-100 dark:bg-surface-800 rounded-full w-5/6" />
                  <div className="h-3 bg-surface-100 dark:bg-surface-800 rounded-full w-4/5" />
                  <div className="h-3 bg-primary-100 dark:bg-primary-900/30 rounded-full w-3/4" />
                  <div className="h-3 bg-surface-100 dark:bg-surface-800 rounded-full w-full" />
                  <div className="h-3 bg-surface-100 dark:bg-surface-800 rounded-full w-2/3" />
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['AI', 'NLP', 'Summarization', 'RAG'].map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium border border-primary-200 dark:border-primary-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Chat side */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-md bg-accent-400/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-surface-900 dark:text-white">Chat</span>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <div className="w-7 h-7 rounded-full bg-surface-200 dark:bg-surface-700 flex-shrink-0 flex items-center justify-center text-xs font-bold text-surface-600 dark:text-surface-300">U</div>
                    <div className="bg-surface-100 dark:bg-surface-800 rounded-2xl rounded-tl-sm px-3 py-2 text-xs text-surface-700 dark:text-surface-300 max-w-[80%]">
                      What are the key findings?
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <div className="bg-primary-600 text-white rounded-2xl rounded-tr-sm px-3 py-2 text-xs max-w-[80%]">
                      The study identifies three main factors...
                    </div>
                    <div className="w-7 h-7 rounded-full bg-primary-100 dark:bg-primary-900/40 flex-shrink-0 flex items-center justify-center text-xs font-bold text-primary-600 dark:text-primary-400">R</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-7 h-7 rounded-full bg-surface-200 dark:bg-surface-700 flex-shrink-0 flex items-center justify-center text-xs font-bold text-surface-600 dark:text-surface-300">U</div>
                    <div className="bg-surface-100 dark:bg-surface-800 rounded-2xl rounded-tl-sm px-3 py-2 text-xs text-surface-700 dark:text-surface-300 max-w-[80%]">
                      Can you explain the methodology?
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
