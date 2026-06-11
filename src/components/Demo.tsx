import { useState } from 'react';

export default function Demo() {
  const [fileName, setFileName] = useState('');
  const [isSummarized, setIsSummarized] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([]);
  const [chatInput, setChatInput] = useState('');

  const handleFileDemo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setIsSummarized(true);
      setChatMessages([]);
    }
  };

  const handleChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = chatInput.trim();
    setChatMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
    setChatInput('');
    // Simulated AI response
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          text: `Based on the document "${fileName}", the topic you mentioned relates to the key findings presented in section 2. The main points revolve around the core themes identified in the summary above.`,
        },
      ]);
    }, 800);
  };

  return (
    <section id="demo" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">
            Try it yourself
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-surface-900 dark:text-white tracking-tight mb-4">
            Interactive demo
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-surface-600 dark:text-surface-300">
            Upload a PDF or paste text to see Résuméoooo in action. This is a live preview of the actual interface.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-accent-400/20 to-primary-500/20 rounded-2xl blur-2xl" />
          <div className="relative bg-white dark:bg-surface-900 rounded-2xl shadow-2xl border border-surface-200 dark:border-surface-800 overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-surface-500 font-mono">Résuméoooo — Demo</span>
            </div>

            {!isSummarized ? (
              /* Upload zone */
              <div className="p-12 sm:p-16">
                <label className="flex flex-col items-center gap-4 cursor-pointer group">
                  <div className="w-20 h-20 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                    <svg className="w-10 h-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-base font-semibold text-surface-900 dark:text-white mb-1">
                      Drop your file here or click to browse
                    </p>
                    <p className="text-sm text-surface-500">Supports PDF, TXT, and URLs</p>
                  </div>
                  <div className="flex gap-2 mt-2">
                    {['PDF', 'TXT', 'URL'].map((fmt) => (
                      <span key={fmt} className="px-3 py-1 rounded-full bg-surface-100 dark:bg-surface-800 text-xs font-medium text-surface-600 dark:text-surface-300">
                        {fmt}
                      </span>
                    ))}
                  </div>
                  <input
                    type="file"
                    accept=".pdf,.txt"
                    onChange={handleFileDemo}
                    className="hidden"
                  />
                </label>
              </div>
            ) : (
              /* Results */
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-surface-200 dark:divide-surface-700">
                {/* Summary panel */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-surface-900 dark:text-white">Summary</span>
                    </div>
                    <span className="text-xs text-surface-500 font-mono truncate max-w-[120px]">{fileName}</span>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2">Extractive</p>
                    <p className="text-sm text-surface-700 dark:text-surface-300 leading-relaxed">
                      The document discusses key methodologies in natural language processing, focusing on extractive and abstractive summarization techniques. It highlights the importance of combining classical ML approaches with modern LLM-based methods for optimal results.
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-accent-500 uppercase tracking-wider mb-2">Abstractive</p>
                    <p className="text-sm text-surface-700 dark:text-surface-300 leading-relaxed">
                      This paper presents a hybrid approach to document summarization that leverages both traditional machine learning algorithms and cutting-edge large language models. The authors demonstrate that combining extractive methods like TextRank with abstractive LLM outputs produces more coherent and informative summaries.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-2">Keywords</p>
                    <div className="flex flex-wrap gap-1.5">
                      {['NLP', 'Summarization', 'TextRank', 'LLM', 'RAG', 'ML'].map((kw) => (
                        <span key={kw} className="px-2.5 py-0.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium border border-primary-200 dark:border-primary-800">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Chat panel */}
                <div className="p-6 flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-md bg-accent-400/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-surface-900 dark:text-white">Chat</span>
                  </div>

                  <div className="flex-1 space-y-3 mb-4 min-h-[160px] max-h-[240px] overflow-y-auto">
                    {chatMessages.length === 0 && (
                      <p className="text-xs text-surface-400 text-center py-8">
                        Ask a question about your document...
                      </p>
                    )}
                    {chatMessages.map((msg, i) => (
                      <div key={i} className={`flex gap-2 ${msg.role === 'ai' ? 'justify-end' : ''}`}>
                        {msg.role === 'user' && (
                          <div className="w-6 h-6 rounded-full bg-surface-200 dark:bg-surface-700 flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-surface-500">U</div>
                        )}
                        <div className={`text-xs px-3 py-2 rounded-2xl max-w-[80%] ${msg.role === 'user' ? 'bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-300 rounded-tl-sm' : 'bg-primary-600 text-white rounded-tr-sm'}`}>
                          {msg.text}
                        </div>
                        {msg.role === 'ai' && (
                          <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/40 flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-primary-500">R</div>
                        )}
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleChat} className="flex gap-2">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Ask about your document..."
                      className="flex-1 px-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-800 text-sm text-surface-900 dark:text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-colors"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
