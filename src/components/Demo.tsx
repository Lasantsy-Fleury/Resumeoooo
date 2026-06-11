import { useState, useRef, useEffect } from 'react';

export default function Demo() {
  const [fileName, setFileName] = useState('');
  const [isSummarized, setIsSummarized] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isTyping]);

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
    if (!chatInput.trim() || isTyping) return;
    const userMsg = chatInput.trim();
    setChatMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
    setChatInput('');
    setIsTyping(true);
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          text: `Based on "${fileName}", the topic you asked about relates to the key findings in section 2. The document outlines three core methodologies that directly address this question.`,
        },
      ]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <section id="demo" className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-[0.15em] mb-4">
            Try it yourself
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-ink-950 tracking-[-0.02em] mb-5">
            Interactive demo
          </h2>
          <p className="text-lg text-ink-500 leading-relaxed">
            Upload a PDF or paste text to see Résuméoooo in action. A live preview of the actual interface.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -inset-5 bg-gradient-to-r from-brand-200/25 via-coral-200/20 to-mint-200/15 rounded-3xl blur-2xl" />
          <div className="relative bg-white rounded-2xl shadow-2xl shadow-ink-900/[0.08] border border-ink-100 overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-5 py-3.5 bg-ink-50 border-b border-ink-100">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-coral-300" />
                <div className="w-3 h-3 rounded-full bg-brand-300" />
                <div className="w-3 h-3 rounded-full bg-mint-300" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-white border border-ink-100 text-xs text-ink-400 font-mono">
                  Résuméoooo — Demo
                </div>
              </div>
            </div>

            {!isSummarized ? (
              /* Upload zone */
              <div className="p-12 sm:p-16">
                <label className="flex flex-col items-center gap-5 cursor-pointer group">
                  <div className="w-20 h-20 rounded-2xl bg-brand-50 border-2 border-dashed border-brand-300 flex items-center justify-center group-hover:bg-brand-100 group-hover:border-brand-400 transition-all duration-300 scale-100 group-hover:scale-105">
                    <svg className="w-9 h-9 text-brand-400 group-hover:text-brand-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-base font-semibold text-ink-800 mb-1">
                      Drop your file here or click to browse
                    </p>
                    <p className="text-sm text-ink-400">Supports PDF, TXT, and URLs</p>
                  </div>
                  <div className="flex gap-2">
                    {['PDF', 'TXT', 'URL'].map((fmt) => (
                      <span key={fmt} className="px-3.5 py-1.5 rounded-full bg-ink-50 text-xs font-medium text-ink-500 border border-ink-100">
                        {fmt}
                      </span>
                    ))}
                  </div>
                  <input type="file" accept=".pdf,.txt" onChange={handleFileDemo} className="hidden" />
                </label>
              </div>
            ) : (
              /* Results */
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-ink-100">
                {/* Summary panel */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-brand-50 border border-brand-200 flex items-center justify-center">
                        <svg className="w-4 h-4 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-ink-800">Summary</span>
                    </div>
                    <span className="text-xs text-ink-400 font-mono truncate max-w-[120px]">{fileName}</span>
                  </div>

                  <div className="mb-5">
                    <p className="text-[11px] font-semibold text-brand-600 uppercase tracking-wider mb-2">Extractive</p>
                    <p className="text-sm text-ink-600 leading-relaxed">
                      The document discusses key methodologies in natural language processing, focusing on extractive and abstractive summarization techniques. It highlights combining classical ML approaches with modern LLM-based methods.
                    </p>
                  </div>

                  <div className="mb-5">
                    <p className="text-[11px] font-semibold text-coral-600 uppercase tracking-wider mb-2">Abstractive</p>
                    <p className="text-sm text-ink-600 leading-relaxed">
                      This paper presents a hybrid approach to document summarization leveraging both traditional ML algorithms and cutting-edge large language models, demonstrating that combining extractive methods with LLM outputs produces more coherent summaries.
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold text-ink-400 uppercase tracking-wider mb-2">Keywords</p>
                    <div className="flex flex-wrap gap-1.5">
                      {['NLP', 'Summarization', 'TextRank', 'LLM', 'RAG', 'ML'].map((kw) => (
                        <span key={kw} className="px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 text-[11px] font-medium border border-brand-200">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Chat panel */}
                <div className="p-6 flex flex-col">
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className="w-7 h-7 rounded-lg bg-mint-50 border border-mint-200 flex items-center justify-center">
                      <svg className="w-4 h-4 text-mint-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-ink-800">Chat</span>
                  </div>

                  <div className="flex-1 space-y-3 mb-4 min-h-[180px] max-h-[260px] overflow-y-auto">
                    {chatMessages.length === 0 && !isTyping && (
                      <div className="flex flex-col items-center justify-center h-full text-ink-300">
                        <svg className="w-8 h-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <p className="text-xs">Ask a question about your document...</p>
                      </div>
                    )}
                    {chatMessages.map((msg, i) => (
                      <div key={i} className={`flex gap-2 ${msg.role === 'ai' ? 'justify-end' : ''}`}>
                        {msg.role === 'user' && (
                          <div className="w-6 h-6 rounded-full bg-ink-100 flex-shrink-0 flex items-center justify-center text-[9px] font-bold text-ink-500">U</div>
                        )}
                        <div className={`text-xs px-3 py-2 rounded-2xl max-w-[80%] ${msg.role === 'user' ? 'bg-ink-50 text-ink-600 rounded-tl-sm' : 'bg-ink-900 text-white rounded-tr-sm'}`}>
                          {msg.text}
                        </div>
                        {msg.role === 'ai' && (
                          <div className="w-6 h-6 rounded-full bg-brand-100 flex-shrink-0 flex items-center justify-center text-[9px] font-bold text-brand-600">R</div>
                        )}
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex gap-2 justify-end">
                        <div className="bg-ink-900 text-white rounded-2xl rounded-tr-sm px-4 py-2.5">
                          <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-brand-100 flex-shrink-0 flex items-center justify-center text-[9px] font-bold text-brand-600">R</div>
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </div>

                  <form onSubmit={handleChat} className="flex gap-2">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Ask about your document..."
                      disabled={isTyping}
                      className="flex-1 px-4 py-2.5 rounded-xl border border-ink-200 bg-white text-sm text-ink-800 placeholder-ink-300 focus:outline-none focus:ring-2 focus:ring-brand-400/40 focus:border-brand-400 transition-all disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={isTyping || !chatInput.trim()}
                      className="px-4 py-2.5 rounded-xl bg-ink-900 text-white text-sm font-medium hover:bg-ink-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
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
