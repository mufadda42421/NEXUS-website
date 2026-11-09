import { useState } from 'react';
import { Download, KeyRound, Sparkles, Terminal, ArrowRight, CheckCircle2, ChevronRight, Copy } from 'lucide-react';
import { HOW_IT_WORKS_STEPS, DOWNLOAD_URL } from '../data/content.ts';

interface HowItWorksProps {
  onDownload: () => void;
  onNotify: (type: 'success' | 'info' | 'error', msg: string) => void;
}

export function HowItWorks({ onDownload, onNotify }: HowItWorksProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepPreviews = [
    {
      title: 'Load Extension in Chrome',
      content: (
        <div className="space-y-3 font-mono text-xs">
          <div className="p-3 rounded-xl bg-[#040812] border border-white/[0.08]">
            <div className="flex items-center justify-between text-slate-400 mb-2 pb-2 border-b border-white/[0.06]">
              <span className="text-[11px] text-cyan-300">chrome://extensions</span>
              <span className="text-[10px] text-emerald-400">Developer mode: ON</span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <div>
                <span className="text-white font-sans font-semibold block text-xs">NEXUS Chrome Extension v1.0.0</span>
                <span className="text-slate-500 text-[11px]">ID: fkmf...nexus | SidePanel &amp; Scripting API enabled</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 text-[10px] font-sans">Active</span>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2 pt-2">
            <span className="text-slate-400 text-xs font-sans">Grab the ZIP file from our release</span>
            <a
              href={DOWNLOAD_URL}
              onClick={onDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-sans font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download ZIP</span>
            </a>
          </div>
        </div>
      )
    },
    {
      title: 'Configure Your API Key',
      content: (
        <div className="space-y-3 font-mono text-xs">
          <div className="p-3.5 rounded-xl bg-[#040812] border border-white/[0.08] space-y-3">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-300 font-sans font-semibold">Select AI Engine</span>
              <span className="text-cyan-400 text-[10px]">Zero Markup BYOK</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 font-sans text-xs">
              <span className="p-2 rounded bg-violet-600/30 border border-violet-500/40 text-center text-white font-medium">Groq</span>
              <span className="p-2 rounded bg-white/[0.04] border border-white/[0.06] text-center text-slate-400">OpenAI</span>
              <span className="p-2 rounded bg-white/[0.04] border border-white/[0.06] text-center text-slate-400">DeepSeek</span>
            </div>
            <div>
              <label className="text-[10px] text-slate-400 block mb-1">API Key (Stored only in local storage)</label>
              <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#070D18] border border-white/[0.06] text-slate-300">
                <span className="tracking-widest">gsk_9f81a••••••••••••••</span>
                <span className="text-emerald-400 text-[10px]">Encrypted</span>
              </div>
            </div>
          </div>
          <p className="text-[11px] font-sans text-slate-400">
            Keys are stored locally with <code className="text-cyan-300">chrome.storage.local</code> and dispatched direct to providers.
          </p>
        </div>
      )
    },
    {
      title: 'Command Your Browser Agent',
      content: (
        <div className="space-y-3 font-mono text-xs">
          <div className="p-3.5 rounded-xl bg-[#040812] border border-white/[0.08] space-y-2.5">
            <div className="flex items-center gap-2 text-slate-400 text-[11px]">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-sans font-medium text-slate-300">Command Prompt</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">Cmd+Shift+X</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#070D18] border border-white/[0.06] text-slate-200 font-sans text-xs">
              &quot;Find the pricing tiers on this SaaS landing page and compare the annual savings per user.&quot;
            </div>
            <div className="text-[11px] text-emerald-400 flex items-center gap-1.5 font-sans">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>NEXUS automatically extracts DOM table and executes multi-step math</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 relative border-t border-white/[0.06] bg-[#040811]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-4">
            <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-wider">
              Quick Setup
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Up and Running in 3 Steps
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            No complex developer tooling or dependencies needed. Install the extension, plug in your API key, and start browsing with intelligence.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => {
                  setActiveStep(idx);
                  onNotify('info', `Previewing Step ${step.number}: ${step.title}`);
                }}
                className={`relative rounded-2xl p-6 transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-[#0B1325] border-cyan-500/50 shadow-xl shadow-cyan-950/20 ring-1 ring-cyan-500/30'
                    : 'bg-[#060C18]/80 border-white/[0.08] hover:border-white/20 hover:bg-[#081020]'
                }`}
              >
                {/* Step index */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl font-black font-mono tracking-tight ${
                    isActive ? 'text-cyan-400' : 'text-slate-600'
                  }`}>
                    {step.number}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-white/[0.04] text-slate-500'
                  }`}>
                    {idx === 0 && <Download className="w-4 h-4" />}
                    {idx === 1 && <KeyRound className="w-4 h-4" />}
                    {idx === 2 && <Sparkles className="w-4 h-4" />}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mb-2">
                  {step.tagline}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {step.description}
                </p>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="truncate">{step.detailSnippet}</span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'translate-x-1 text-cyan-400' : 'text-slate-600'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Step Preview Stage */}
        <div className="max-w-3xl mx-auto rounded-2xl border border-white/[0.1] bg-[#070D18] p-6 sm:p-8 shadow-2xl">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <h4 className="text-sm font-bold text-white tracking-tight">
                Interactive Preview: Step {activeStep + 1} — {stepPreviews[activeStep].title}
              </h4>
            </div>
            <div className="flex items-center gap-2">
              {activeStep > 0 && (
                <button
                  onClick={() => setActiveStep(activeStep - 1)}
                  className="px-2.5 py-1 text-xs text-slate-400 hover:text-white rounded bg-white/[0.04] hover:bg-white/[0.08]"
                >
                  Previous
                </button>
              )}
              {activeStep < 2 ? (
                <button
                  onClick={() => setActiveStep(activeStep + 1)}
                  className="px-2.5 py-1 text-xs text-cyan-300 hover:text-cyan-200 rounded bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20"
                >
                  Next Step
                </button>
              ) : (
                <a
                  href="#install"
                  className="px-2.5 py-1 text-xs text-violet-300 hover:text-violet-200 rounded bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/20"
                >
                  View Full Guide
                </a>
              )}
            </div>
          </div>

          {stepPreviews[activeStep].content}
        </div>
      </div>
    </section>
  );
}
