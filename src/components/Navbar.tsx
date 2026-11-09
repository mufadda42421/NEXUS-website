import { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { DOWNLOAD_URL } from '../data/content.ts';

interface NavbarProps {
  onOpenSignIn: () => void;
  onDownload: () => void;
}

export function Navbar({ onOpenSignIn, onDownload }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'AI Providers', href: '#providers' },
    { label: 'Installation', href: '#install' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030712]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg py-1 px-1.5"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 p-[1px] shadow-sm shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-shadow">
              <div className="w-full h-full bg-[#030712] rounded-[7px] flex items-center justify-center">
                <span className="font-extrabold text-xs tracking-tighter bg-gradient-to-br from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
                  NX
                </span>
              </div>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold tracking-tight text-white font-sans">
                NEXUS
              </span>
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                AGENT
              </span>
            </div>
          </a>

          {/* Zone 2: Single-line Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded px-1.5 py-1 text-slate-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSignIn}
              type="button"
              className="text-xs font-medium text-slate-400 hover:text-white px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:ring-1 focus-visible:ring-white/20"
            >
              Sign In
            </button>
            <a
              href={DOWNLOAD_URL}
              onClick={onDownload}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 rounded-lg shadow-md shadow-violet-900/30 hover:shadow-cyan-900/30 transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Extension</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={DOWNLOAD_URL}
              onClick={onDownload}
              className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-lg transition-colors whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors focus-visible:ring-2 focus-visible:ring-violet-500"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 pt-2 pb-6 bg-[#0B1121]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1 max-w-md mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/[0.05] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            ))}
            <div className="h-[1px] bg-white/[0.08] my-2" />
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenSignIn();
              }}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              Sign In (BYOK Info)
            </button>
            <a
              href={DOWNLOAD_URL}
              onClick={() => {
                setIsMobileMenuOpen(false);
                onDownload();
              }}
              className="mt-2 flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-lg shadow-violet-900/30 transition-all text-center"
            >
              <Download className="w-4 h-4" />
              <span>Download NEXUS for Chrome</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
