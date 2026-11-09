import { useState } from 'react';
import { Download, BookOpen, Check, Copy, CheckCheck, ShieldCheck, AlertCircle, Sparkles, ExternalLink } from 'lucide-react';
import { DOWNLOAD_URL, DOWNLOAD_FILENAME, EXTENSION_VERSION, GITHUB_REPO_URL } from '../data/content.ts';

interface DownloadSectionProps {
  onNotify: (type: 'success' | 'info' | 'error', msg: string) => void;
}

export function DownloadSection({ onNotify }: DownloadSectionProps) {
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'completed'>('idle');
  const [copiedLink, setCopiedLink] = useState(false);

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!DOWNLOAD_URL || DOWNLOAD_URL.trim() === '') {
      e.preventDefault();
      onNotify('error', 'Download link is not configured. Please report to support.');
      return;
    }

    setDownloadState('downloading');
    onNotify('info', `Starting download: ${DOWNLOAD_FILENAME}`);

    setTimeout(() => {
      setDownloadState('completed');
      onNotify('success', `${DOWNLOAD_FILENAME} download initiated. Follow the installation guide below.`);
      setTimeout(() => setDownloadState('idle'), 6000);
    }, 1200);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(DOWNLOAD_URL);
    setCopiedLink(true);
    onNotify('success', 'Direct download URL copied to clipboard');
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="download" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-violet-600/20 via-indigo-600/15 to-cyan-500/20 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-[#080E1E] border border-white/[0.12] shadow-2xl text-center overflow-hidden">
          {/* Subtle grid pattern inside card */}
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] backdrop-blur-md mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono font-medium text-slate-300 uppercase tracking-wider">
              Google Chrome Extension · {EXTENSION_VERSION}
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
            Ready to Upgrade Your Browser?
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
            Install NEXUS and experience a smarter way to browse. Bring your own API key and turn any webpage into an interactive, actionable workspace.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={DOWNLOAD_URL}
              download={DOWNLOAD_FILENAME}
              onClick={handleDownloadClick}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-semibold text-white transition-all duration-200 shadow-xl focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                downloadState === 'downloading'
                  ? 'bg-violet-700 cursor-wait'
                  : downloadState === 'completed'
                  ? 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-950/50'
                  : 'bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-violet-950/50 hover:shadow-cyan-950/50 transform hover:-translate-y-0.5'
              }`}
            >
              {downloadState === 'downloading' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Preparing Download...</span>
                </>
              ) : downloadState === 'completed' ? (
                <>
                  <Check className="w-5 h-5 text-white" />
                  <span>Download Initiated!</span>
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  <span>Download NEXUS for Chrome</span>
                </>
              )}
            </a>

            <a
              href="#install"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
            >
              <BookOpen className="w-4 h-4 text-slate-400" />
              <span>Installation Guide</span>
            </a>
          </div>

          {/* Download File Information Strip */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="text-slate-500">File:</span> {DOWNLOAD_FILENAME}
            </span>
            <span className="text-slate-700 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="text-slate-500">Manifest:</span> Chrome MV3 (SidePanel API)
            </span>
            <span className="text-slate-700 hidden sm:inline">·</span>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
            >
              {copiedLink ? <CheckCheck className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Link Copied' : 'Copy Direct ZIP Link'}</span>
            </button>
            <span className="text-slate-700 hidden sm:inline">·</span>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors"
            >
              <span>GitHub Release</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
