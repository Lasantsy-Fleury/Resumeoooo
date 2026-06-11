const tech = [
  {
    name: 'React',
    role: 'Frontend UI',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="2" />
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    role: 'Styling',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5 1.76.44 2.94 2.06 3.5 3.5.56 1.44.83 3.11.83 4.5h3c0-2.67-1.33-4.33-5-4-1 .08-1.83.42-2.5 1-.67.58-1 1.42-1 2.5H5c0-2.5 1.5-4.5 4-5.5 1.17-.47 2.5-.67 4-.5 2.5.28 4.5 2 5.5 4.5.5 1.25.5 2.75.5 4h3" />
      </svg>
    ),
  },
  {
    name: 'FastAPI',
    role: 'Backend API',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      </svg>
    ),
  },
  {
    name: 'scikit-learn',
    role: 'ML Pipeline',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="3" />
        <circle cx="6" cy="6" r="1.5" />
        <circle cx="18" cy="6" r="1.5" />
        <circle cx="6" cy="18" r="1.5" />
        <circle cx="18" cy="18" r="1.5" />
        <line x1="8.5" y1="8.5" x2="10" y2="10" />
        <line x1="15.5" y1="8.5" x2="14" y2="10" />
        <line x1="8.5" y1="15.5" x2="10" y2="14" />
        <line x1="15.5" y1="15.5" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    name: 'TextRank / Sumy',
    role: 'Extractive Summary',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="4" width="18" height="2" rx="1" />
        <rect x="3" y="9" width="14" height="2" rx="1" />
        <rect x="3" y="14" width="16" height="2" rx="1" />
        <rect x="3" y="19" width="10" height="2" rx="1" />
      </svg>
    ),
  },
  {
    name: 'Ollama / OpenAI',
    role: 'Abstractive LLM',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <circle cx="6.5" cy="6.5" r="1" fill="currentColor" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        <circle cx="6.5" cy="17.5" r="1" fill="currentColor" />
        <circle cx="17.5" cy="17.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'NLTK',
    role: 'Text Processing',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M4 6h16M4 12h16M4 18h10" />
        <circle cx="18" cy="18" r="2" />
      </svg>
    ),
  },
  {
    name: 'SQLite',
    role: 'Data Storage',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
      </svg>
    ),
  },
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
              <div className="text-ink-muted">
                {item.icon}
              </div>
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
