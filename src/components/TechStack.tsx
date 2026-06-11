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

export default function TechStack() {
  return (
    <section className="py-20 bg-brand-50/50 border-t border-ink-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-[0.15em] mb-4">
            Built with
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
            Modern, proven technologies
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 stagger-children">
          {tech.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-2.5 p-5 rounded-xl bg-white border border-ink-100 hover:border-brand-200 hover:shadow-md hover:shadow-ink-900/[0.04] transition-all duration-300 hover:-translate-y-0.5 text-center"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm font-semibold text-ink-800">
                {item.name}
              </span>
              <span className="text-xs text-ink-400">{item.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
