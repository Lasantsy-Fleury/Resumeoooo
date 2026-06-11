const steps = [
  {
    number: '01',
    title: 'Upload your document',
    description: 'Drop a PDF file, paste plain text, or provide a URL. Résuméoooo handles PDF parsing, text extraction, and cleaning automatically.',
    icon: (
      <div className="flex flex-col items-center gap-5 p-8">
        <div className="w-28 h-36 rounded-xl border-2 border-dashed border-brand-300 bg-brand-50 flex flex-col items-center justify-center gap-2">
          <svg className="w-9 h-9 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
          <span className="text-xs text-brand-500 font-medium">Drop file</span>
        </div>
        <div className="flex gap-2">
          {['PDF', 'TXT', 'URL'].map((fmt) => (
            <span key={fmt} className="px-3 py-1 rounded-full bg-ink-50 text-xs font-medium text-ink-500 border border-ink-100">
              {fmt}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: '02',
    title: 'Get instant summaries',
    description: 'Résuméoooo runs two parallel pipelines: TextRank for extractive highlights and an LLM for a natural-language abstractive summary.',
    icon: (
      <div className="p-6 space-y-5">
        <div>
          <div className="flex items-center gap-2 mb-2.5">
            <div className="w-2 h-2 rounded-full bg-brand-500" />
            <span className="text-[11px] font-semibold text-ink-600 uppercase tracking-wider">Extractive</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-2.5 bg-ink-50 rounded-full w-full" />
            <div className="h-2.5 bg-ink-50 rounded-full w-11/12" />
            <div className="h-2.5 bg-brand-100 rounded-full w-4/5" />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2.5">
            <div className="w-2 h-2 rounded-full bg-coral-500" />
            <span className="text-[11px] font-semibold text-ink-600 uppercase tracking-wider">Abstractive</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-2.5 bg-ink-50 rounded-full w-full" />
            <div className="h-2.5 bg-ink-50 rounded-full w-5/6" />
            <div className="h-2.5 bg-coral-100 rounded-full w-3/5" />
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {['Key1', 'Key2', 'Key3', 'Key4'].map((kw) => (
            <span key={kw} className="px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 text-[10px] font-medium border border-brand-200">
              {kw}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: '03',
    title: 'Chat with your document',
    description: 'Ask questions in natural language. The AI uses your document as its sole source — no hallucinations, no off-topic answers.',
    icon: (
      <div className="p-5 space-y-3">
        {[
          { role: 'user', text: 'What is the main conclusion?' },
          { role: 'ai', text: 'Based on the document, the main finding is that...' },
          { role: 'user', text: 'Show me data from section 3' },
        ].map((msg, i) => (
          <div key={i} className={`flex gap-2 ${msg.role === 'ai' ? 'justify-end' : ''}`}>
            {msg.role === 'user' && (
              <div className="w-6 h-6 rounded-full bg-ink-100 flex-shrink-0 flex items-center justify-center text-[9px] font-bold text-ink-500">U</div>
            )}
            <div className={`text-xs px-3 py-2 rounded-2xl max-w-[75%] ${msg.role === 'user' ? 'bg-ink-50 text-ink-600 rounded-tl-sm' : 'bg-ink-900 text-white rounded-tr-sm'}`}>
              {msg.text}
            </div>
            {msg.role === 'ai' && (
              <div className="w-6 h-6 rounded-full bg-brand-100 flex-shrink-0 flex items-center justify-center text-[9px] font-bold text-brand-600">R</div>
            )}
          </div>
        ))}
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-brand-50/50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-[0.15em] mb-4">
            How it works
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-ink-950 tracking-[-0.02em] mb-5">
            Three steps to
            <br className="hidden sm:block" /> document mastery
          </h2>
          <p className="text-lg text-ink-500 leading-relaxed">
            From raw document to actionable insights in under a minute.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-20 sm:space-y-28">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-100 text-brand-700 font-mono font-bold text-sm mb-5">
                  {step.number}
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-ink-500 leading-relaxed max-w-md mx-auto lg:mx-0">
                  {step.description}
                </p>
              </div>

              {/* Visual */}
              <div className="flex-1 w-full max-w-md">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-brand-200/30 to-coral-200/20 rounded-2xl blur-xl" />
                  <div className="relative bg-white rounded-xl shadow-xl shadow-ink-900/[0.06] border border-ink-100 overflow-hidden">
                    {step.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
