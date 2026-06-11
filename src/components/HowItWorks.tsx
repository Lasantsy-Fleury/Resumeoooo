const steps = [
  {
    number: '01',
    title: 'Upload your document',
    description: 'Drop a PDF file, paste plain text, or provide a URL. Résuméoooo handles PDF parsing, text extraction, and cleaning automatically.',
    visual: (
      <div className="flex flex-col items-center gap-5 p-8">
        <div className="w-28 h-36 rounded-xl border-2 border-dashed border-accent/30 bg-accent/[0.03] flex flex-col items-center justify-center gap-2">
          <svg className="w-9 h-9 text-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
          <span className="text-xs text-accent/60 font-medium">Drop file</span>
        </div>
        <div className="flex gap-2">
          {['PDF', 'TXT', 'URL'].map((fmt) => (
            <span key={fmt} className="px-3 py-1 rounded-full bg-surface-card text-xs font-medium text-ink-muted border border-surface-divider">
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
    visual: (
      <div className="p-6 space-y-5">
        <div>
          <div className="flex items-center gap-2 mb-2.5">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-[11px] font-semibold text-ink-muted uppercase tracking-wider">Extractive</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-2.5 bg-surface-card rounded-full w-full" />
            <div className="h-2.5 bg-surface-card rounded-full w-11/12" />
            <div className="h-2.5 bg-accent-pill rounded-full w-4/5" />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2.5">
            <div className="w-2 h-2 rounded-full bg-accent/60" />
            <span className="text-[11px] font-semibold text-ink-muted uppercase tracking-wider">Abstractive</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-2.5 bg-surface-card rounded-full w-full" />
            <div className="h-2.5 bg-surface-card rounded-full w-5/6" />
            <div className="h-2.5 bg-accent-pill/60 rounded-full w-3/5" />
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {['Key1', 'Key2', 'Key3', 'Key4'].map((kw) => (
            <span key={kw} className="px-2 py-0.5 rounded-full bg-accent-pill text-accent text-[10px] font-medium">
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
    visual: (
      <div className="p-5 space-y-3">
        {[
          { role: 'user', text: 'What is the main conclusion?' },
          { role: 'ai', text: 'Based on the document, the main finding is that...' },
          { role: 'user', text: 'Show me data from section 3' },
        ].map((msg, i) => (
          <div key={i} className={`flex gap-2 ${msg.role === 'ai' ? 'justify-end' : ''}`}>
            {msg.role === 'user' && (
              <div className="w-6 h-6 rounded-full bg-surface-card flex-shrink-0 flex items-center justify-center text-[9px] font-bold text-ink-muted">U</div>
            )}
            <div className={`text-xs px-3 py-2 rounded-2xl max-w-[75%] ${
              msg.role === 'user'
                ? 'bg-surface-card text-ink-body rounded-tl-sm'
                : 'bg-accent text-white rounded-tr-sm'
            }`}>
              {msg.text}
            </div>
            {msg.role === 'ai' && (
              <div className="w-6 h-6 rounded-full bg-accent-pill flex-shrink-0 flex items-center justify-center text-[9px] font-bold text-accent">R</div>
            )}
          </div>
        ))}
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">
            How it works
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink tracking-[-0.02em] mb-5">
            Three steps to
            <br className="hidden sm:block" /> document mastery
          </h2>
          <p className="text-lg text-ink-body leading-relaxed">
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
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent-pill text-accent font-mono font-bold text-lg mb-6">
                  {step.number}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-ink mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-ink-body leading-relaxed max-w-md mx-auto lg:mx-0">
                  {step.description}
                </p>
              </div>

              {/* Visual */}
              <div className="flex-1 w-full max-w-md">
                <div className="relative rounded-2xl bg-white border border-surface-divider overflow-hidden" style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)' }}>
                  {step.visual}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
