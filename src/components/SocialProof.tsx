const testimonials = [
  {
    quote: "Résuméoooo cut my literature review time in half. The dual summary approach gives me both quick highlights and deep understanding.",
    name: 'Sarah Chen',
    role: 'PhD Student, Computer Science',
    avatar: 'SC',
    avatarBg: 'bg-accent',
  },
  {
    quote: "I process dozens of reports weekly. The contextual chat feature means I find exactly what I need without re-reading entire documents.",
    name: 'Marc Dubois',
    role: 'Business Analyst',
    avatar: 'MD',
    avatarBg: 'bg-accent/80',
  },
  {
    quote: "As a teacher, I use Résuméoooo to quickly digest research papers and prepare summaries for my students. It's incredibly accurate.",
    name: 'Amina Benali',
    role: 'High School Teacher',
    avatar: 'AB',
    avatarBg: 'bg-accent/60',
  },
];

const stats = [
  { value: '10K+', label: 'Documents processed' },
  { value: '95%', label: 'Accuracy rate' },
  { value: '< 30s', label: 'Avg. processing time' },
  { value: 'Free', label: 'Open source' },
];

export default function SocialProof() {
  return (
    <section className="py-24 sm:py-32 bg-surface-card">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20 stagger-children">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-white border border-surface-divider" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-ink-muted font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink">
            Loved by students &amp; professionals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 stagger-children">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl bg-white border border-surface-divider flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
            >
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-ink-body text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-surface-divider">
                <div className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-white text-xs font-bold`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
