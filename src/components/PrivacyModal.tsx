import { X, Lock, Shield, HardDrive, EyeOff } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto p-6 md:p-8 bg-[#0B1121] border border-white/10 rounded-2xl shadow-2xl text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">NEXUS Privacy Guarantee</h3>
            <p className="text-xs text-slate-400">Local-First · Zero Tracking · Sovereign Keys</p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
            <div className="flex items-center gap-2 font-semibold text-white">
              <HardDrive className="w-4 h-4 text-cyan-400" />
              <span>1. Local Key & Preference Storage</span>
            </div>
            <p className="text-slate-400">
              Your API keys (OpenAI, OpenRouter, Groq, DeepSeek) are saved in your Chrome browser instance using <code className="text-cyan-300">chrome.storage.local</code>. They never leave your machine except when directly making calls to the specified provider endpoint.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
            <div className="flex items-center gap-2 font-semibold text-white">
              <EyeOff className="w-4 h-4 text-violet-400" />
              <span>2. Zero Telemetry & Middleman Routing</span>
            </div>
            <p className="text-slate-400">
              NEXUS maintains no analytical servers, tracking cookies, or logging databases. The web requests sent to execute DOM parsing and natural language workflows pass directly from your client browser to the model API you configured.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
            <div className="flex items-center gap-2 font-semibold text-white">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>3. Explicit Permissions & Human in the Loop</span>
            </div>
            <p className="text-slate-400">
              NEXUS only interacts with the active tab when you explicitly trigger the side panel or invoke a keyboard shortcut. Sensitive actions like submitting payments, deleting data, or sending emails require your explicit confirmation.
            </p>
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t border-white/[0.08]">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            Close Privacy Overview
          </button>
        </div>
      </div>
    </div>
  );
}
