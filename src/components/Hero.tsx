import { useState } from 'react';
import { Download, ArrowRight, Check, Bot, Globe, Shield, Terminal, RefreshCw, Sparkles, Copy, CheckCheck } from 'lucide-react';
import { DOWNLOAD_URL, DOWNLOAD_FILENAME, EXTENSION_VERSION } from '../data/content.ts';

interface HeroProps {
  onDownload: () => void;
  onNotify: (type: 'success' | 'info' | 'error', msg: string) => void;
}

export function Hero({ onDownload, onNotify }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'research' | 'summary' | 'form'>('research');
  const [isCopied, setIsCopied] = useState(false);

  const mockTasks = {
    research: {
      prompt: "Research the best AI tools for developers.",
      model: "groq / llama-3.3-70b",
      latency: "185ms",
      steps: [
        { label: "Decomposing intent into web queries", status: "done" },
        { label: "Inspecting active DOM headings & benchmark tables", status: "done" },
        { label: "Filtering top 4 developer coding assistants", status: "done" },
        { label: "Synthesizing speed, context & cost comparisons", status: "done" },
      ],
      output: [
        { name: "Cursor / Copilot", metric: "SWE-bench 68.2%", note: "Best for whole-repo semantic context" },
        { name: "Claude Code", metric: "Terminal Agent", note: "Multi-file git refactor automation" },
        { name: "NEXUS Agent", metric: "Chrome Extension", note: "DOM-aware browser automation & BYOK" },
      ],
      summary: "Completed in 4 steps. Extracted 12 developer workflows with 0% token markup."
    },
    summary: {
      prompt: "Read this webpage and summarize the important information.",
      model: "openai / gpt-4o",
      latency: "620ms",
      steps: [
        { label: "Bypassing cookie walls & overlay banners", status: "done" },
        { label: "Extracting 3,400 words of technical article text", status: "done" },
        { label: "Identifying 4 key architectural takeaways", status: "done" },
        { label: "Validating claims against primary author citations", status: "done" },
      ],
      output: [
        { name: "Core Finding", metric: "3.4x Error Drop", note: "Surface codes with real-time syndrome decoders" },
        { name: "Overhead", metric: "320:1 Qubit Ratio", note: "Down from previous 1000:1 requirement" },
        { name: "Timeline", metric: "Production 2028", note: "Viable quantum chemistry simulation target" },
      ],
      summary: "Parsed 14 semantic sections. Condensed 18 min read into a 2 min executive brief."
    },
    form: {
      prompt: "Fill out the developer registration form with my saved profile.",
      model: "deepseek / deepseek-chat",
      latency: "410ms",
      steps: [
        { label: "Scanning DOM for input, select & button tags", status: "done" },
        { label: "Resolving labels to profile keys (Name, Email, Role)", status: "done" },
        { label: "Populating 5 fields with keyboard event dispatch", status: "done" },
        { label: "Halting before 'Submit' for human review", status: "done" },
      ],
      output: [
        { name: "Full Name", metric: "Populated", note: "Verified accessibility tag label" },
        { name: "Work Email", metric: "Populated", note: "dev@nexus-agent.local" },
        { name: "Submit Button", metric: "Pending Review", note: "Safety pause: awaiting human click" },
      ],
      summary: "5 form fields auto-populated. Halted before submission for your safety."
    }
  };

  const currentTask = mockTasks[activeTab];

  const handleCopySummary = () => {
    navigator.clipboard.writeText(`[NEXUS Research Output]\nPrompt: ${currentTask.prompt}\n${currentTask.summary}`);
    setIsCopied(true);
    onNotify('success', 'Summary copied to clipboard');
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] md:w-[900px] md:h-[500px] bg-gradient-to-tr from-violet-600/15 via-indigo-600/10 to-cyan-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-40 -z-20 radial-mask" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Top Copy */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-6 animate-in fade-in duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span className="text-[11px] font-mono font-medium tracking-wider text-slate-300 uppercase">
              Your Personal AI Browser Agent
            </span>
            <span className="text-slate-600 text-[10px]">/</span>
            <span className="text-[11px] font-mono text-cyan-400 font-medium">Chrome Extension</span>
          </div>

          {/* Large Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.08] text-balance">
            Your Browser.{' '}
            <span className="block text-slate-300">Your Intelligence.</span>
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Your Control.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Meet NEXUS — the AI browser agent that understands websites, takes action, and transforms how you work online.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-8">
            <a
              href={DOWNLOAD_URL}
              onClick={onDownload}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-xl shadow-violet-950/50 hover:shadow-cyan-950/50 transition-all duration-200 transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Download className="w-4 h-4" />
              <span>Download for Chrome</span>
              <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-black/20 text-cyan-200 ml-1">
                {EXTENSION_VERSION}
              </span>
            </a>

            <a
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
            >
              <span>Explore Features</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Proof / Feature tags */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-cyan-400" /> Bring Your Own Key (BYOK)
            </span>
            <span className="text-slate-700 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-400" /> 100% Local Storage
            </span>
            <span className="text-slate-700 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-violet-400" /> Zero Subscription Fees
            </span>
          </div>
        </div>

        {/* Product Mockup: Chrome Window with NEXUS Side Panel */}
        <div className="relative mx-auto max-w-6xl">
          {/* Subtle outer glow frame */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-violet-500/20 via-cyan-500/10 to-transparent blur-xl -z-10" />

          {/* Browser Container */}
          <div className="rounded-2xl border border-white/[0.1] bg-[#070D18] shadow-2xl overflow-hidden">
            {/* Browser Top Window Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0A101D] border-b border-white/[0.06]">
              {/* Left: Window Controls */}
              <div className="flex items-center gap-2 w-24">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80 border border-[#E0443E]/60" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80 border border-[#DEA123]/60" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]/80 border border-[#1AAB29]/60" />
              </div>

              {/* Center: Address Bar */}
              <div className="flex-1 max-w-lg mx-auto">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#040810] border border-white/[0.08] text-xs text-slate-400">
                  <Globe className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span className="truncate text-slate-300 font-mono text-[11px]">
                    https://devinsider.io/reports/ai-engineering-stack-2026
                  </span>
                  <span className="ml-auto text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    HTTPS
                  </span>
                </div>
              </div>

              {/* Right: Chrome Extensions bar & NEXUS Icon */}
              <div className="flex items-center gap-2.5 w-28 justify-end text-slate-400">
                <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-violet-500/10 border border-violet-500/30 text-[11px] text-violet-300 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                  <span>NEXUS</span>
                </div>
              </div>
            </div>

            {/* Browser Viewport Split: Main Webpage (Left 60%) + NEXUS Side Panel (Right 40%) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
              {/* Left Pane: Webpage Being Browsed */}
              <div className="lg:col-span-7 p-6 sm:p-8 bg-[#040810]/70 border-b lg:border-b-0 lg:border-r border-white/[0.06] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
                    <span>DEV INSIDER RESEARCH</span>
                    <span>·</span>
                    <span>OCTOBER 2026 EDITION</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                    State of Developer AI Tooling: The Shift to Local & BYOK Agents
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    Engineering organizations are rapidly moving away from closed, proprietary web wrappers in favor of browser agents that communicate directly with inference engines via private API keys.
                  </p>

                  {/* Mock Article Data Table */}
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 mb-6 overflow-x-auto">
                    <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center justify-between">
                      <span>TABLE 1: BENCHMARK MATRIX (SWE-BENCH & DOM CONTROL)</span>
                      <span className="text-cyan-400">DOM Node #table-412</span>
                    </div>
                    <table className="w-full text-left text-xs font-mono">
                      <thead>
                        <tr className="border-b border-white/[0.08] text-slate-400">
                          <th className="pb-2">Architecture</th>
                          <th className="pb-2">Latency</th>
                          <th className="pb-2">API Pricing</th>
                          <th className="pb-2">Autonomy</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/[0.04] text-slate-300">
                        <tr>
                          <td className="py-2 text-white font-semibold">Groq (Llama-3.3)</td>
                          <td className="py-2 text-emerald-400">180ms</td>
                          <td className="py-2">$0.59 / 1M</td>
                          <td className="py-2">DOM + Script</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-white font-semibold">OpenAI (GPT-4o)</td>
                          <td className="py-2 text-slate-300">650ms</td>
                          <td className="py-2">$2.50 / 1M</td>
                          <td className="py-2">Full Planner</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-white font-semibold">DeepSeek (V3)</td>
                          <td className="py-2 text-cyan-400">420ms</td>
                          <td className="py-2">$0.14 / 1M</td>
                          <td className="py-2">Reasoning Chain</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Interactive Task Selector Pills */}
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block mb-2 uppercase tracking-wider">
                      Switch Simulated Task in Side Panel:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setActiveTab('research')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          activeTab === 'research'
                            ? 'bg-violet-600/30 border border-violet-500/50 text-white shadow-sm'
                            : 'bg-white/[0.03] border border-white/[0.06] text-slate-400 hover:text-white'
                        }`}
                      >
                        Research Developer AI
                      </button>
                      <button
                        onClick={() => setActiveTab('summary')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          activeTab === 'summary'
                            ? 'bg-violet-600/30 border border-violet-500/50 text-white shadow-sm'
                            : 'bg-white/[0.03] border border-white/[0.06] text-slate-400 hover:text-white'
                        }`}
                      >
                        Summarize Webpage
                      </button>
                      <button
                        onClick={() => setActiveTab('form')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          activeTab === 'form'
                            ? 'bg-violet-600/30 border border-violet-500/50 text-white shadow-sm'
                            : 'bg-white/[0.03] border border-white/[0.06] text-slate-400 hover:text-white'
                        }`}
                      >
                        Form Autofill & Safety
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Page DOM: 3,420 tokens</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Ready for Automation
                  </span>
                </div>
              </div>

              {/* Right Pane: The NEXUS Chrome Side Panel */}
              <div className="lg:col-span-5 bg-[#0B1120] p-4 sm:p-5 flex flex-col justify-between border-t lg:border-t-0">
                {/* Side Panel Header */}
                <div className="pb-3 border-b border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-white text-[10px] font-bold">
                      NX
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white tracking-tight block leading-none">
                        NEXUS Assistant
                      </span>
                      <span className="text-[10px] font-mono text-cyan-400">
                        {currentTask.model}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-white/[0.04]">
                      {currentTask.latency}
                    </span>
                    <button
                      onClick={() => onNotify('info', `Simulating refreshed DOM scan with ${currentTask.model}`)}
                      className="p-1 rounded text-slate-400 hover:text-white transition-colors"
                      title="Rescan Page"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Side Panel Conversation / Task Execution Flow */}
                <div className="py-4 space-y-3.5 overflow-y-auto max-h-[380px] pr-1">
                  {/* User Message Bubble */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] text-slate-300 shrink-0 font-medium mt-0.5">
                      You
                    </div>
                    <div className="p-3 rounded-xl rounded-tl-sm bg-white/[0.05] border border-white/[0.08] text-xs text-slate-200">
                      {currentTask.prompt}
                    </div>
                  </div>

                  {/* Agent Task Planner Breakdown */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-violet-600/30 border border-violet-500/40 flex items-center justify-center text-violet-300 shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Terminal className="w-3 h-3 text-cyan-400" />
                        <span>Execution Plan & Activity</span>
                      </div>

                      {/* Execution Steps */}
                      <div className="space-y-1.5 bg-[#050A14] p-2.5 rounded-lg border border-white/[0.06] text-[11px]">
                        {currentTask.steps.map((st, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-slate-300">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="truncate">{st.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* Structured Result Card */}
                      <div className="p-3 rounded-xl bg-violet-950/20 border border-violet-500/20 space-y-2">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-semibold text-white">Extracted Findings</span>
                          <span className="text-[10px] font-mono text-emerald-400">Status: Completed</span>
                        </div>

                        <div className="space-y-1 text-xs">
                          {currentTask.output.map((item, i) => (
                            <div key={i} className="flex items-center justify-between py-1 border-b border-white/[0.04] last:border-0 text-[11px]">
                              <span className="text-slate-300 font-medium">{item.name}</span>
                              <span className="text-cyan-300 font-mono text-[10px]">{item.metric}</span>
                            </div>
                          ))}
                        </div>

                        <p className="text-[11px] text-slate-400 pt-1 leading-relaxed">
                          {currentTask.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Side Panel Footer & Input Preview */}
                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-2">
                  <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-xl bg-[#040810] border border-white/[0.08] text-xs text-slate-400">
                    <span className="text-slate-500 font-mono text-xs">/</span>
                    <input
                      readOnly
                      value={currentTask.prompt}
                      className="bg-transparent border-0 text-slate-200 text-xs focus:outline-none w-full truncate"
                    />
                  </div>
                  <button
                    onClick={handleCopySummary}
                    className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors"
                    title="Copy Output"
                  >
                    {isCopied ? <CheckCheck className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
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
