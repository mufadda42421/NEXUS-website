import { X, ShieldCheck, KeyRound, Cpu, Check } from 'lucide-react';
import { DOWNLOAD_URL } from '../data/content.ts';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export function SignInModal({ isOpen, onClose, onDownload }: SignInModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg p-6 md:p-8 bg-[#0B1121] border border-white/10 rounded-2xl shadow-2xl text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
            <KeyRound className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">Zero-Account Architecture</h3>
            <p className="text-xs text-slate-400">No login or cloud account required</p>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          NEXUS is engineered as a <strong>100% client-side, local-first</strong> tool. We don&apos;t require you to create an account, share your email, or authenticate against a centralized cloud server.
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-semibold text-slate-200 block mb-0.5">Bring Your Own Key (BYOK)</span>
              <span className="text-slate-400">Your OpenAI, OpenRouter, Groq, or DeepSeek API key is stored strictly in your browser&apos;s encrypted local storage.</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <Cpu className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-semibold text-slate-200 block mb-0.5">Direct Provider Communication</span>
              <span className="text-slate-400">Browser commands travel directly from your machine to your chosen AI provider without routing through intermediate proxy servers.</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-white/[0.08]">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-center"
          >
            Understood
          </button>
          <a
            href={DOWNLOAD_URL}
            onClick={() => {
              onDownload();
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all shadow-lg shadow-violet-900/30"
          >
            <Check className="w-4 h-4" />
            <span>Download Extension Instead</span>
          </a>
        </div>
      </div>
    </div>
  );
}
