import { useState } from 'react';
import { KeyRound, Zap, ShieldCheck, Check, Server, Calculator, Sparkles, ExternalLink } from 'lucide-react';
import { PROVIDERS } from '../data/content.ts';

interface ProvidersProps {
  onNotify: (type: 'success' | 'info' | 'error', msg: string) => void;
}

export function Providers({ onNotify }: ProvidersProps) {
  const [selectedProvider, setSelectedProvider] = useState<string>('groq');
  const [dailyQueries, setDailyQueries] = useState<number>(30);

  // BYOK monthly cost calculation vs standard $20/month SaaS
  // Average query = 1,200 input tokens + 350 output tokens = 1,550 tokens
  // 30 queries/day * 30 days = 900 queries/mo ~ 1.4M tokens
  // On Groq Llama 3.3 70B (~$0.59/1M): ~$0.82/month
  // On DeepSeek V3 (~$0.20/1M): ~$0.28/month
  // On OpenAI GPT-4o-mini (~$0.30/1M): ~$0.42/month
  // On GPT-4o (~$3.50/1M): ~$4.90/month
  const monthlyQueries = dailyQueries * 30;
  const estimatedTokensM = (monthlyQueries * 1500) / 1000000;
  const groqCost = Math.max(0.05, estimatedTokensM * 0.59).toFixed(2);
  const deepseekCost = Math.max(0.03, estimatedTokensM * 0.22).toFixed(2);
  const saasCompetitorCost = 20.00;
  const savedAmount = (saasCompetitorCost - parseFloat(groqCost)).toFixed(2);

  return (
    <section id="providers" className="py-24 md:py-32 relative border-t border-white/[0.06] bg-[#040812]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-4">
            <KeyRound className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono font-medium text-slate-300 uppercase tracking-wider">
              Bring Your Own Key (BYOK)
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Connect Your Preferred AI Provider
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-4">
            Bring your own API key. Choose your preferred AI provider. Never pay high subscription markups again.
          </p>
          <p className="text-xs text-slate-400 max-w-xl mx-auto bg-white/[0.03] border border-white/[0.06] p-3 rounded-xl font-mono">
            Note: All providers with OpenAI-compatible endpoints are supported out of the box. Direct native Anthropic or Google Gemini keys are accessed through OpenRouter, LiteLLM, or custom proxies.
          </p>
        </div>

        {/* Provider Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PROVIDERS.map((prov) => {
            const isSelected = selectedProvider === prov.id;
            return (
              <div
                key={prov.id}
                onClick={() => {
                  setSelectedProvider(prov.id);
                  onNotify('info', `Selected ${prov.name} — ${prov.category}`);
                }}
                className={`group relative rounded-2xl p-6 sm:p-7 transition-all duration-200 cursor-pointer border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0B1325] border-cyan-500/50 shadow-xl shadow-cyan-950/30 ring-1 ring-cyan-500/30'
                    : 'bg-[#070D1A]/90 border-white/[0.08] hover:border-white/20 hover:bg-[#0A1122]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-white font-sans group-hover:text-cyan-200 transition-colors">
                      {prov.name}
                    </span>
                    {prov.badge && (
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-white/[0.05] text-cyan-300 border border-white/[0.08]">
                        {prov.badge}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-mono text-cyan-400 block mb-2">{prov.category}</span>
                  <p className="text-xs text-slate-400 leading-relaxed mb-5">
                    {prov.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      Recommended Models:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prov.models.map((m, i) => (
                        <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/[0.04]">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Latency: <strong className="text-emerald-400 font-semibold">{prov.latency}</strong></span>
                  <span className={`text-[11px] ${isSelected ? 'text-cyan-400 font-medium' : 'text-slate-400'}`}>
                    {isSelected ? '✓ Selected in Simulator' : 'Click to preview'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive BYOK Cost Savings Calculator */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-white/[0.1] bg-gradient-to-br from-[#080E1C] to-[#040810] p-6 sm:p-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.08]">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                BYOK vs. Closed AI Browser Subscriptions
              </h3>
              <p className="text-xs text-slate-400">
                Calculate your estimated monthly savings when paying wholesale API tokens instead of a $20/month flat fee.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Slider control */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between items-center text-sm font-medium text-slate-300 mb-2">
                  <span>Your estimated daily queries:</span>
                  <span className="font-mono text-base font-bold text-cyan-400">
                    {dailyQueries} queries / day
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="5"
                  value={dailyQueries}
                  onChange={(e) => setDailyQueries(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                  <span>Light (5)</span>
                  <span>Moderate (30)</span>
                  <span>Power User (150)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>Monthly Queries:</span>
                  <span className="font-mono font-semibold text-white">{monthlyQueries.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Token Consumption:</span>
                  <span className="font-mono text-slate-300">~{estimatedTokensM.toFixed(2)}M tokens</span>
                </div>
                <div className="flex justify-between">
                  <span>Typical Closed AI Browser Fee:</span>
                  <span className="font-mono text-rose-400">$20.00 / month</span>
                </div>
              </div>
            </div>

            {/* Savings Result Card */}
            <div className="md:col-span-5 p-6 rounded-2xl bg-[#091122] border border-emerald-500/30 text-center space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block">
                Estimated Monthly Spend on Groq/DeepSeek
              </span>
              <div className="text-4xl font-extrabold text-white font-mono tracking-tight">
                ${groqCost}
                <span className="text-xs text-slate-400 font-sans font-normal"> / mo</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Save ${savedAmount}/month (~95%)</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed pt-2">
                With NEXUS, you only pay your provider for what you use. Zero middleman markup, no annual contracts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
