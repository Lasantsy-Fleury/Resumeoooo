const testimonials = [
  {
    quote: "Résuméoooo cut my literature review time in half. The dual summary approach gives me both quick highlights and deep understanding.",
    name: 'Sarah Chen',
    role: 'PhD Student, Computer Science',
    avatar: 'SC',
    avatarColor: 'bg-brand-500',
  },
  {
    quote: "I process dozens of reports weekly. The contextual chat feature means I find exactly what I need without re-reading entire documents.",
    name: 'Marc Dubois',
    role: 'Business Analyst',
    avatar: 'MD',
    avatarColor: 'bg-coral-500',
  },
  {
    quote: "As a teacher, I use Résuméoooo to quickly digest research papers and prepare summaries for my students. It's incredibly accurate.",
    name: 'Amina Benali',
    role: 'High School Teacher',
    avatar: 'AB',
    avatarColor: 'bg-mint-600',
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
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20 stagger-children">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-brand-50/70 border border-ink-100 hover:border-brand-200 transition-colors duration-300">
              <div className="font-heading text-3xl sm:text-4xl font-bold text-ink-950 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-ink-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-[0.15em] mb-4">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950">
            Loved by students &amp; professionals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 stagger-children">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 bg-brand-50/50 rounded-2xl border border-ink-100 hover:border-ink-200 hover:shadow-lg hover:shadow-ink-900/[0.04] transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-brand-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-ink-600 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-ink-100">
                <div className={`w-10 h-10 rounded-full ${t.avatarColor} flex items-center justify-center text-white text-xs font-bold shadow-md`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-800">{t.name}</p>
                  <p className="text-xs text-ink-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
