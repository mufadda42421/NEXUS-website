import { useState, useEffect } from 'react';
import { Play, RotateCcw, Check, Sparkles, Terminal, FileText, ArrowRight, Eye, Layers, Copy, CheckCheck } from 'lucide-react';

interface ProductShowcaseProps {
  onNotify: (type: 'success' | 'info' | 'error', msg: string) => void;
}

export function ProductShowcase({ onNotify }: ProductShowcaseProps) {
  const [currentStep, setCurrentStep] = useState<number>(3); // default to final state so it's immediately rich
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= 3) {
            setIsPlaying(false);
            return 3;
          }
          return prev + 1;
        });
      }, 2200);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlaySimulation = () => {
    setCurrentStep(0);
    setIsPlaying(true);
    onNotify('info', 'Started interactive simulation: "Read & Summarize Webpage"');
  };

  const handleCopySummary = () => {
    const text = `NEXUS Executive Summary:
1. Architectural Shift: Local-first BYOK agents reduce browser AI costs by 90%+.
2. Latency: Groq LPU inference achieves ~180ms per DOM extraction.
3. Privacy: Zero third-party telemetry, 100% encrypted in chrome.storage.local.`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    onNotify('success', 'Summary copied to clipboard');
    setTimeout(() => setIsCopied(false), 2000);
  };

  const stepsMeta = [
    { id: 0, title: '1. User Command', desc: 'Natural language input in Chrome side panel' },
    { id: 1, title: '2. NEXUS Thinking', desc: 'DOM element parsing & noise reduction' },
    { id: 2, title: '3. Reading Webpage', desc: 'Extracting structured data and metrics' },
    { id: 3, title: '4. Final Summary', desc: 'Actionable executive synthesis' },
  ];

  return (
    <section id="showcase" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-4">
            <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-wider">
              Interactive Product Demo
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Experience NEXUS in Action
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6">
            Watch how NEXUS inspects real webpages, plans step-by-step DOM traversal, and delivers immediate answers right in your side panel.
          </p>

          {/* Controls Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-xl bg-[#090F1C] border border-white/[0.08]">
            {stepsMeta.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentStep(s.id);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  currentStep === s.id
                    ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                {s.title}
              </button>
            ))}
            <div className="h-4 w-[1px] bg-white/[0.1] hidden sm:block" />
            <button
              onClick={handlePlaySimulation}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 transition-colors"
            >
              {isPlaying ? <RotateCcw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Playing...' : 'Play Simulation'}</span>
            </button>
          </div>
        </div>

        {/* Realistic Browser Window */}
        <div className="rounded-2xl border border-white/[0.1] bg-[#050A14] shadow-2xl overflow-hidden">
          {/* Top Chrome Window Toolbar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0A101E] border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-slate-500 text-xs ml-2 font-mono hidden sm:inline">Chrome SidePanel API</span>
            </div>

            <div className="flex-1 max-w-md mx-4">
              <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#040810] border border-white/[0.06] text-xs font-mono text-slate-400 truncate">
                <span className="text-emerald-400 text-[10px]">🔒</span>
                <span className="truncate">https://ai-research.dev/whitepapers/browser-agent-benchmarks</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/30">
                Active DOM Tab
              </span>
            </div>
          </div>

          {/* Browser Workspace: Article (Left) vs NEXUS Panel (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            {/* Left: Webpage with DOM highlight annotations depending on step */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-[#040811]/90 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
                  <span>SYSTEM ARCHITECTURE REVIEW</span>
                  <span>·</span>
                  <span>VOLUME 18</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  Autonomous Browser Execution: Evaluating DOM Traversal and Token Efficiency
                </h3>

                {/* Paragraph 1: Highlighted in step 1 & 2 */}
                <div
                  className={`p-3 rounded-xl transition-all duration-300 mb-4 text-xs sm:text-sm leading-relaxed ${
                    currentStep >= 1
                      ? 'bg-violet-950/30 border border-violet-500/30 text-slate-200'
                      : 'text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-violet-400 mb-1">
                    <span>&lt;section id=&quot;executive-findings&quot;&gt;</span>
                    {currentStep >= 1 && <span className="text-emerald-400">✓ Parsed by NEXUS Reader</span>}
                  </div>
                  Modern web pages contain over 60% clutter—tracking beacons, iframe advertisements, and complex nested wrapper divs. Intelligent browser agents sanitize the DOM tree into clean Markdown or JSON before passing tokens to the model context.
                </div>

                {/* Paragraph 2: Highlighted in step 2 & 3 */}
                <div
                  className={`p-3 rounded-xl transition-all duration-300 mb-4 text-xs sm:text-sm leading-relaxed ${
                    currentStep >= 2
                      ? 'bg-cyan-950/30 border border-cyan-500/30 text-slate-200'
                      : 'text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 mb-1">
                    <span>&lt;div class=&quot;metrics-benchmark&quot;&gt;</span>
                    {currentStep >= 2 && <span className="text-emerald-400">✓ Extracted Metrics (3 Data Points)</span>}
                  </div>
                  Across 500 tested workflows, local-first BYOK extensions demonstrated an average latency of 180ms on Groq and 420ms on DeepSeek, reducing operational overhead by 92% compared to monthly recurring SaaS subscriptions.
                </div>

                {/* Simulated Article Footer */}
                <div className="text-xs text-slate-500 italic">
                  Published by the Distributed Web Standards Group · 2,410 words total
                </div>
              </div>

              {/* Status bar */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  DOM Node: <code>#main-article</code> (Cleaned)
                </span>
                <span className="text-cyan-400">
                  {currentStep === 0 && 'Awaiting Command'}
                  {currentStep === 1 && 'Sanitizing 182 DOM elements...'}
                  {currentStep === 2 && 'Extracting key takeaways...'}
                  {currentStep === 3 && 'Task Complete'}
                </span>
              </div>
            </div>

            {/* Right: The NEXUS Chrome Side Panel Live View */}
            <div className="lg:col-span-5 bg-[#090F1E] border-t lg:border-t-0 lg:border-l border-white/[0.08] p-5 flex flex-col justify-between">
              {/* Panel Top bar */}
              <div className="pb-3 border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-violet-600 flex items-center justify-center text-white text-xs font-bold">
                    NX
                  </div>
                  <span className="text-xs font-bold text-white tracking-tight">NEXUS Side Panel</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono">
                  <span className="text-slate-400">Provider:</span>
                  <span className="text-cyan-400 font-semibold">Groq (Llama-3.3)</span>
                </div>
              </div>

              {/* Chat & Execution Stream */}
              <div className="py-4 space-y-3.5 flex-1">
                {/* 1. User Command */}
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] text-white shrink-0 mt-0.5">
                    You
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.06] border border-white/[0.08] text-xs text-white">
                    Read this webpage and summarize the important information.
                  </div>
                </div>

                {/* 2. Thinking State (Visible if currentStep >= 1) */}
                {currentStep >= 1 && (
                  <div className="flex items-start gap-2.5 animate-in fade-in duration-300">
                    <div className="w-6 h-6 rounded-full bg-violet-600/30 border border-violet-500/40 flex items-center justify-center text-violet-300 shrink-0 mt-0.5">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex-1 space-y-1.5 text-xs">
                      <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400">
                        <Terminal className="w-3 h-3 text-cyan-400" />
                        <span>NEXUS DOM Parser</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#040812] border border-white/[0.06] font-mono text-[11px] text-slate-300 space-y-1">
                        <div className="text-slate-400">▶ Scanning window.document active DOM...</div>
                        <div className="text-cyan-400">✓ Stripped 3 ad containers and 1 sticky nav</div>
                        <div className="text-emerald-400">✓ Ingested 2,410 words of main content</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Extracting & Final Summary (Visible if currentStep >= 2) */}
                {currentStep >= 2 && (
                  <div className="flex items-start gap-2.5 animate-in fade-in duration-300">
                    <div className="w-6 h-6 rounded-full bg-cyan-600/30 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0 mt-0.5">
                      <FileText className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex-1 space-y-2 text-xs">
                      <div className="p-3 rounded-xl bg-violet-950/20 border border-violet-500/30 text-slate-200 space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-semibold text-white">
                          <span>Executive Summary</span>
                          <span className="text-emerald-400 font-mono text-[10px]">Ready</span>
                        </div>

                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          The paper evaluates modern browser automation architectures, demonstrating that local-first BYOK extensions outperform cloud intermediaries across three core dimensions:
                        </p>

                        <ul className="space-y-1.5 text-[11px] text-slate-300 font-sans">
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span><strong>92% Cost Reduction:</strong> Wholesale API tokens cost ~$0.15/month vs $20/month subscription toll gates.</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span><strong>180ms Latency:</strong> Direct dispatch to Groq LPU eliminates proxy serialization delays.</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span><strong>Zero-Leak Privacy:</strong> Keys &amp; session tokens are isolated in local browser storage.</span>
                          </li>
                        </ul>

                        <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
                          <span className="text-[10px] font-mono text-slate-400">3 citations attached</span>
                          <button
                            onClick={handleCopySummary}
                            className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/[0.06] hover:bg-white/[0.1] text-slate-300 hover:text-white text-[10px] font-medium transition-colors"
                          >
                            {isCopied ? <CheckCheck className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                            <span>{isCopied ? 'Copied' : 'Copy'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Command Input */}
              <div className="pt-3 border-t border-white/[0.08]">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#040810] border border-white/[0.08] text-xs">
                  <input
                    readOnly
                    value="Ask NEXUS a follow-up question or click another page..."
                    className="bg-transparent border-0 text-slate-400 text-xs focus:outline-none w-full truncate"
                  />
                  <button
                    onClick={() => onNotify('info', 'Follow-up query simulation triggered')}
                    className="p-1 rounded-md bg-violet-600/40 text-violet-200 hover:bg-violet-600 hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
