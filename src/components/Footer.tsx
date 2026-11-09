import { ArrowUp, Github, Heart, Shield, Terminal, Download, Mail } from 'lucide-react';
import { DOWNLOAD_URL, GITHUB_REPO_URL, EXTENSION_VERSION } from '../data/content.ts';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenSignIn: () => void;
  onDownload: () => void;
  onNotify: (type: 'success' | 'info' | 'error', msg: string) => void;
}

export function Footer({ onOpenPrivacy, onOpenSignIn, onDownload, onNotify }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNotify('info', 'Opening developer contact channel: jaorawalamufaddal7@gmail.com');
    window.location.href = 'mailto:jaorawalamufaddal7@gmail.com?subject=NEXUS%20Chrome%20Extension%20Inquiry';
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#02050E] pt-16 pb-12 relative text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-[#030712] rounded-[7px] flex items-center justify-center">
                  <span className="font-extrabold text-xs text-white">NX</span>
                </div>
              </div>
              <span className="text-lg font-bold tracking-tight text-white font-sans">
                NEXUS
              </span>
            </a>

            <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
              Your Browser. Your Intelligence. Your Control.
            </p>

            <p className="text-slate-400 max-w-sm leading-relaxed text-[11px]">
              Intelligent Chrome extension agent built on open Bring Your Own Key (BYOK) architecture. 100% local-first and zero telemetry.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <button
                onClick={handleContactClick}
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors"
                aria-label="Email Developer"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold block">
              Product
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-white transition-colors">Product Showcase</a>
              </li>
              <li>
                <a href="#providers" className="hover:text-white transition-colors">Supported Providers</a>
              </li>
              <li>
                <a
                  href={DOWNLOAD_URL}
                  onClick={onDownload}
                  className="hover:text-white transition-colors flex items-center gap-1 text-cyan-400"
                >
                  <Download className="w-3 h-3" />
                  <span>Download ZIP</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Documentation & Setup */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold block">
              Installation &amp; Guides
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#install" className="hover:text-white transition-colors">Installation Guide</a>
              </li>
              <li>
                <a href="#install" className="hover:text-white transition-colors">Developer Mode Setup</a>
              </li>
              <li>
                <a href="#providers" className="hover:text-white transition-colors">BYOK Configuration</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ &amp; Troubleshooting</a>
              </li>
              <li>
                <a
                  href={GITHUB_REPO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub Releases ({EXTENSION_VERSION})
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Architecture & Trust */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold block">
              Privacy &amp; Legal
            </span>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSignIn}
                  className="hover:text-white transition-colors text-left"
                >
                  BYOK Architecture
                </button>
              </li>
              <li>
                <button
                  onClick={handleContactClick}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact &amp; Feedback
                </button>
              </li>
              <li>
                <span className="text-slate-400 block text-[11px]">License: Open Source</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} NEXUS. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">Manifest V3 · Chrome SidePanel</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors p-1 rounded"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
