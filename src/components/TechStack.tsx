const tech = [
  { name: 'React', role: 'Frontend UI', icon: '⚛️' },
  { name: 'Tailwind CSS', role: 'Styling', icon: '🎨' },
  { name: 'FastAPI', role: 'Backend API', icon: '⚡' },
  { name: 'scikit-learn', role: 'ML Pipeline', icon: '🤖' },
  { name: 'TextRank / Sumy', role: 'Extractive Summary', icon: '📊' },
  { name: 'Ollama / OpenAI', role: 'Abstractive LLM', icon: '🧠' },
  { name: 'NLTK', role: 'Text Processing', icon: '📝' },
  { name: 'SQLite', role: 'Data Storage', icon: '🗄️' },
];

const LOGOS = [
  'FastAPI', 'React', 'Tailwind', 'scikit-learn', 'Ollama', 'NLTK', 'SQLite', 'React',
  'FastAPI', 'Tailwind', 'scikit-learn', 'Ollama', 'NLTK', 'SQLite', 'React', 'FastAPI',
];

export default function TechStack() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">
            Built with
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-ink">
            Modern, proven technologies
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 stagger-children">
          {tech.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-2.5 p-5 rounded-2xl bg-white border border-surface-divider hover:border-accent/20 transition-all duration-300 hover:-translate-y-0.5 text-center"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm font-semibold text-ink">
                {item.name}
              </span>
              <span className="text-xs text-ink-muted">{item.role}</span>
            </div>
          ))}
        </div>

        {/* Logo marquee strip */}
        <div className="mt-16 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {LOGOS.map((name, i) => (
              <span
                key={i}
                className="mx-6 text-sm font-medium text-ink-muted/40 tracking-wide"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
