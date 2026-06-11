const steps = [
  {
    number: '01',
    title: 'Upload your document',
    description: 'Drop a PDF file, paste plain text, or provide a URL. Résuméoooo handles PDF parsing, text extraction, and cleaning automatically.',
    visual: (
      <div className="flex flex-col items-center gap-4 p-8">
        <div className="w-32 h-40 rounded-xl border-2 border-dashed border-primary-300 dark:border-primary-700 bg-primary-50 dark:bg-primary-900/20 flex flex-col items-center justify-center gap-2">
          <svg className="w-10 h-10 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
          <span className="text-xs text-primary-500 font-medium">Drop file</span>
        </div>
        <div className="flex gap-3">
          {['PDF', 'TXT', 'URL'].map((fmt) => (
            <span key={fmt} className="px-3 py-1 rounded-full bg-surface-100 dark:bg-surface-800 text-xs font-medium text-surface-600 dark:text-surface-300">
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
      <div className="p-6 space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-primary-500" />
            <span className="text-xs font-semibold text-surface-700 dark:text-surface-300 uppercase tracking-wider">Extractive</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-2.5 bg-surface-100 dark:bg-surface-800 rounded-full w-full" />
            <div className="h-2.5 bg-surface-100 dark:bg-surface-800 rounded-full w-11/12" />
            <div className="h-2.5 bg-primary-200 dark:bg-primary-800/50 rounded-full w-4/5" />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-accent-500" />
            <span className="text-xs font-semibold text-surface-700 dark:text-surface-300 uppercase tracking-wider">Abstractive</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-2.5 bg-surface-100 dark:bg-surface-800 rounded-full w-full" />
            <div className="h-2.5 bg-surface-100 dark:bg-surface-800 rounded-full w-5/6" />
            <div className="h-2.5 bg-accent-400/30 rounded-full w-3/5" />
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {['Key1', 'Key2', 'Key3', 'Key4'].map((kw) => (
            <span key={kw} className="px-2 py-0.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-[10px] font-medium">
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
      <div className="p-4 space-y-3">
        {[
          { role: 'user', text: 'What is the main conclusion?' },
          { role: 'ai', text: 'Based on the document, the main finding is that...' },
          { role: 'user', text: 'Show me data from section 3' },
        ].map((msg, i) => (
          <div key={i} className={`flex gap-2 ${msg.role === 'ai' ? 'justify-end' : ''}`}>
            {msg.role === 'user' && (
              <div className="w-6 h-6 rounded-full bg-surface-200 dark:bg-surface-700 flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-surface-500">U</div>
            )}
            <div className={`text-xs px-3 py-2 rounded-2xl max-w-[75%] ${msg.role === 'user' ? 'bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-300 rounded-tl-sm' : 'bg-primary-600 text-white rounded-tr-sm'}`}>
              {msg.text}
            </div>
            {msg.role === 'ai' && (
              <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/40 flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-primary-500">R</div>
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">
            How it works
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-surface-900 dark:text-white tracking-tight mb-4">
            Three steps to
            <br className="hidden sm:block" /> document mastery
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-surface-600 dark:text-surface-200">
            From raw document to actionable insights in under a minute.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text */}
              <div className="flex-1 text-center lg:text-left">
                <span className="text-sm font-mono font-medium text-primary-500">
                  {step.number}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-surface-900 dark:text-white mt-2 mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-surface-600 dark:text-surface-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Visual */}
              <div className="flex-1 w-full max-w-md">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-br from-primary-500/10 to-accent-400/10 rounded-2xl blur-xl" />
                  <div className="relative bg-white dark:bg-surface-900 rounded-xl shadow-xl border border-surface-200 dark:border-surface-700">
                    {step.visual}
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
