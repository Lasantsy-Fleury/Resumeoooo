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
    <section className="py-20 bg-surface-50 dark:bg-surface-900/50 border-t border-surface-200 dark:border-surface-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">
            Built with
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-surface-900 dark:text-white">
            Modern, proven technologies
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {tech.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700 text-center"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm font-semibold text-surface-900 dark:text-white">
                {item.name}
              </span>
              <span className="text-xs text-surface-500">{item.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
