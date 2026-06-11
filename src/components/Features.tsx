const features = [
  {
    icon: '📄',
    title: 'Multi-format upload',
    description: 'Drop a PDF, paste TXT, or provide a URL — Résuméoooo extracts and processes text from any source automatically.',
    color: 'brand',
  },
  {
    icon: '⚡',
    title: 'Dual AI summarization',
    description: 'Get both extractive (TextRank / TF-IDF) and abstractive (LLM) summaries for maximum clarity and insight.',
    color: 'coral',
  },
  {
    icon: '💬',
    title: 'Contextual chat',
    description: 'Ask questions about your document and get accurate, context-aware answers. The LLM only uses the provided text.',
    color: 'mint',
  },
  {
    icon: '🔑',
    title: 'Keyword extraction',
    description: 'Automatically identify key terms and concepts from your document for quick scanning and topic discovery.',
    color: 'brand',
  },
  {
    icon: '🔒',
    title: 'Privacy-first design',
    description: 'All processing can run locally with Ollama. Your documents never leave your machine unless you choose otherwise.',
    color: 'mint',
  },
  {
    icon: '🛠️',
    title: 'Open source & extensible',
    description: 'Built with FastAPI, React, and modern ML tools. Fully documented API, easy to extend and self-host.',
    color: 'coral',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  brand: { bg: 'bg-brand-50', border: 'border-brand-200', text: 'text-brand-600' },
  coral: { bg: 'bg-coral-50', border: 'border-coral-200', text: 'text-coral-600' },
  mint: { bg: 'bg-mint-50', border: 'border-mint-200', text: 'text-mint-600' },
};

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-[0.15em] mb-4">
            Features
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-ink-950 tracking-[-0.02em] mb-5">
            Everything you need to
            <br className="hidden sm:block" /> master any document
          </h2>
          <p className="text-lg text-ink-500 leading-relaxed">
            A complete AI-powered pipeline — from raw text to actionable insight in seconds.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {features.map((feature) => {
            const c = colorMap[feature.color];
            return (
              <div
                key={feature.title}
                className="group relative p-6 rounded-2xl bg-brand-50/50 border border-ink-100 hover:border-ink-200 hover:shadow-lg hover:shadow-ink-900/[0.04] transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-11 h-11 rounded-xl ${c.bg} ${c.border} border flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg text-ink-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-ink-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
