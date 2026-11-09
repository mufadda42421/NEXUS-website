import { useState } from 'react';
import { AlertTriangle, Copy, CheckCheck, CheckCircle2, Download, ExternalLink, Terminal, Sparkles, FolderArchive, Layers, Sliders, PlayCircle } from 'lucide-react';
import { INSTALL_STEPS, DOWNLOAD_URL, DOWNLOAD_FILENAME } from '../data/content.ts';

interface InstallationGuideProps {
  onDownload: () => void;
  onNotify: (type: 'success' | 'info' | 'error', msg: string) => void;
}

export function InstallationGuide({ onDownload, onNotify }: InstallationGuideProps) {
  const [completedSteps, setCompletedSteps] = useState<number[]>([1]);
  const [copiedUrl, setCopiedUrl] = useState(false);

  const toggleStep = (stepNumber: number) => {
    if (completedSteps.includes(stepNumber)) {
      setCompletedSteps(completedSteps.filter((s) => s !== stepNumber));
    } else {
      setCompletedSteps([...completedSteps, stepNumber]);
      onNotify('success', `Marked Step ${stepNumber} as complete`);
    }
  };

  const handleCopyChromeUrl = () => {
    navigator.clipboard.writeText('chrome://extensions');
    setCopiedUrl(true);
    onNotify('success', 'Copied "chrome://extensions" to clipboard! Paste in a new tab.');
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  const stepIcons = [
    <Download key="1" className="w-5 h-5 text-cyan-400" />,
    <FolderArchive key="2" className="w-5 h-5 text-indigo-400" />,
    <Layers key="3" className="w-5 h-5 text-violet-400" />,
    <Sliders key="4" className="w-5 h-5 text-amber-400" />,
    <Terminal key="5" className="w-5 h-5 text-emerald-400" />,
    <FolderArchive key="6" className="w-5 h-5 text-teal-400" />,
    <PlayCircle key="7" className="w-5 h-5 text-purple-400" />,
  ];

  const progressPercent = Math.round((completedSteps.length / INSTALL_STEPS.length) * 100);

  return (
    <section id="install" className="py-24 md:py-32 relative border-t border-white/[0.06] bg-[#040812]/90">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-4">
            <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-wider">
              Developer Installation
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Step-by-Step Installation Guide
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6">
            Follow these 7 quick steps to load NEXUS into Google Chrome. Track your progress using the interactive checklist below.
          </p>

          {/* Progress Tracker bar */}
          <div className="max-w-md mx-auto bg-white/[0.04] border border-white/[0.08] p-3 rounded-xl flex items-center gap-3">
            <div className="flex-1 bg-slate-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-violet-500 to-cyan-400 h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-xs font-mono text-cyan-300 shrink-0">
              {completedSteps.length} of {INSTALL_STEPS.length} Completed ({progressPercent}%)
            </span>
          </div>
        </div>

        {/* IMPORTANT NOTICE: Developer / Unpacked Installation Warning */}
        <div className="mb-12 rounded-2xl p-5 sm:p-6 bg-amber-950/20 border border-amber-500/30 flex items-start gap-4 text-slate-300 text-xs sm:text-sm">
          <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1.5">
            <h4 className="font-bold text-amber-200 text-sm">
              Developer / Unpacked Installation Notice
            </h4>
            <p className="text-slate-300 leading-relaxed">
              NEXUS is distributed as an <strong>open-source developer extension (unpacked)</strong> rather than through the Chrome Web Store. This ensures that you have 100% visibility into the source code, no third-party store telemetry, and immediate access to the latest updates and experimental AI models without store review lag.
            </p>
          </div>
        </div>

        {/* Step List */}
        <div className="space-y-4">
          {INSTALL_STEPS.map((step, idx) => {
            const isCompleted = completedSteps.includes(step.step);

            return (
              <div
                key={step.step}
                className={`group rounded-2xl p-5 sm:p-6 border transition-all duration-200 ${
                  isCompleted
                    ? 'bg-[#060D1A]/90 border-cyan-500/30'
                    : 'bg-[#070D18]/80 border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Left: Step number, icon, and title */}
                  <div className="flex items-start sm:items-center gap-3.5">
                    <button
                      onClick={() => toggleStep(step.step)}
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors shrink-0 mt-0.5 sm:mt-0 ${
                        isCompleted
                          ? 'bg-cyan-500 text-[#030712]'
                          : 'border border-white/20 text-transparent hover:border-cyan-400'
                      }`}
                      title={isCompleted ? 'Mark incomplete' : 'Mark complete'}
                      aria-label={`Toggle completion for Step ${step.step}`}
                    >
                      <CheckCheck className="w-4 h-4" />
                    </button>

                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0">
                      {stepIcons[idx]}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-cyan-400">
                          STEP {step.step}
                        </span>
                        <span className="text-slate-600 text-xs">·</span>
                        <h3 className="text-base font-bold text-white tracking-tight">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                        {step.instruction}
                      </p>
                    </div>
                  </div>

                  {/* Right: Quick action buttons per step */}
                  <div className="flex items-center gap-2 shrink-0 sm:self-center pl-10 sm:pl-0">
                    {step.step === 1 && (
                      <a
                        href={DOWNLOAD_URL}
                        download={DOWNLOAD_FILENAME}
                        onClick={onDownload}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download ZIP</span>
                      </a>
                    )}

                    {step.step === 3 && (
                      <button
                        onClick={handleCopyChromeUrl}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-cyan-300 hover:text-cyan-200 border border-white/[0.08] text-xs font-mono transition-colors"
                      >
                        {copiedUrl ? <CheckCheck className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedUrl ? 'Copied URL!' : 'Copy chrome://extensions'}</span>
                      </button>
                    )}

                    {step.tip && (
                      <span className="hidden md:inline text-[11px] font-mono text-slate-400 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.04] max-w-xs truncate">
                        Tip: {step.tip}
                      </span>
                    )}
                  </div>
                </div>

                {step.tip && (
                  <div className="md:hidden mt-2 pt-2 border-t border-white/[0.04] text-[11px] text-slate-400 font-mono">
                    💡 Tip: {step.tip}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
