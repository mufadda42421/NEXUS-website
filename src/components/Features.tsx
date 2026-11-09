import { useState } from 'react';
import { Bot, FileSearch, MousePointerClick, GitFork, KeyRound, ShieldCheck, Check, Sparkles, Terminal } from 'lucide-react';
import { FEATURES } from '../data/content.ts';

interface FeaturesProps {
  onNotify: (type: 'success' | 'info' | 'error', msg: string) => void;
}

export function Features({ onNotify }: FeaturesProps) {
  const [selectedFeature, setSelectedFeature] = useState<string>('agent');

  const iconMap: Record<string, React.ReactNode> = {
    Bot: <Bot className="w-6 h-6 text-violet-400" />,
    FileSearch: <FileSearch className="w-6 h-6 text-cyan-400" />,
    MousePointerClick: <MousePointerClick className="w-6 h-6 text-emerald-400" />,
    GitFork: <GitFork className="w-6 h-6 text-indigo-400" />,
    KeyRound: <KeyRound className="w-6 h-6 text-amber-400" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-teal-400" />,
  };

  return (
    <section id="features" className="py-24 md:py-32 relative">
      {/* Background glow spot */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-xs font-mono font-medium text-slate-300 uppercase tracking-wider">
              Autonomous Browser Intelligence
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Engineered for Precision Web Automation
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            NEXUS merges browser automation with state-of-the-art language models, delivering an agent that understands the web as a human does.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feat) => {
            const isSelected = selectedFeature === feat.id;
            return (
              <div
                key={feat.id}
                onClick={() => {
                  setSelectedFeature(feat.id);
                  onNotify('info', `Inspecting ${feat.title} architectural capabilities`);
                }}
                className={`group relative rounded-2xl p-6 sm:p-8 bg-[#080E1C]/90 border transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden ${feat.colSpan} ${
                  isSelected
                    ? 'border-violet-500/50 shadow-xl shadow-violet-950/30 ring-1 ring-violet-500/30'
                    : 'border-white/[0.08] hover:border-white/20 hover:bg-[#0B1325]/90'
                }`}
              >
                {/* Subtle gradient hover highlight */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-40 h-40 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform">
                      {iconMap[feat.icon]}
                    </div>
                    {feat.badge && (
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06]">
                        {feat.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white mb-1.5 tracking-tight group-hover:text-cyan-200 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mb-3">{feat.tagline}</p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {feat.description}
                  </p>
                </div>

                {/* Sub-capabilities list */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <ul className="space-y-2">
                    {feat.details.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Micro Terminal Snippet for Marquee Cards */}
                  {feat.id === 'agent' && (
                    <div className="mt-4 p-3 rounded-lg bg-[#040812] border border-white/[0.06] font-mono text-[11px] text-slate-400">
                      <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1 border-b border-white/[0.04] pb-1">
                        <span>AGENT_DISPATCH_PIPELINE</span>
                        <span className="text-emerald-400">STATUS: READY</span>
                      </div>
                      <div className="text-violet-300">
                        &gt; nex.plan(&quot;extract quarterly revenue tables&quot;)
                      </div>
                      <div className="text-slate-400 pl-3">
                        ✓ Found table#financials-2026 (12 rows, 6 cols)
                      </div>
                      <div className="text-cyan-400 pl-3">
                        ✓ Dispatched to Groq Llama-3.3-70b (184ms)
                      </div>
                    </div>
                  )}

                  {feat.id === 'multistep' && (
                    <div className="mt-4 p-3 rounded-lg bg-[#040812] border border-white/[0.06] font-mono text-[11px]">
                      <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                        <Terminal className="w-3 h-3 text-cyan-400" />
                        <span className="text-[10px]">MULTISTEP_TRACE</span>
                      </div>
                      <div className="space-y-1 text-slate-300 text-[10px]">
                        <div>[1/4] Navigate to /docs/api-reference</div>
                        <div>[2/4] Wait for #endpoint-search input element</div>
                        <div>[3/4] Filter endpoints by &quot;authentication&quot;</div>
                        <div className="text-emerald-400">[4/4] Output cURL examples to side panel</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
