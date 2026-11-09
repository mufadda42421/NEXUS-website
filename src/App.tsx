import { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Features } from './components/Features.tsx';
import { HowItWorks } from './components/HowItWorks.tsx';
import { ProductShowcase } from './components/ProductShowcase.tsx';
import { Providers } from './components/Providers.tsx';
import { DownloadSection } from './components/DownloadSection.tsx';
import { InstallationGuide } from './components/InstallationGuide.tsx';
import { FAQ } from './components/FAQ.tsx';
import { Footer } from './components/Footer.tsx';
import { SignInModal } from './components/SignInModal.tsx';
import { PrivacyModal } from './components/PrivacyModal.tsx';
import { ToastContainer, ToastMessage } from './components/Toast.tsx';
import { DOWNLOAD_URL, DOWNLOAD_FILENAME } from './data/content.ts';

export default function App() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const addToast = useCallback((type: 'success' | 'info' | 'error', message: string) => {
    const id = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    setToasts((prev) => [...prev, { id, type, message }]);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const handleGlobalDownload = useCallback(() => {
    if (!DOWNLOAD_URL || DOWNLOAD_URL.trim() === '') {
      addToast('error', 'Download link is not configured. Please check your setup.');
      return;
    }

    // Trigger direct download via temporary anchor element
    const link = document.createElement('a');
    link.href = DOWNLOAD_URL;
    link.setAttribute('download', DOWNLOAD_FILENAME);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    addToast('success', `Initiated download for ${DOWNLOAD_FILENAME}!`);
  }, [addToast]);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col relative selection:bg-violet-600/30 selection:text-cyan-200">
      {/* Sticky Top Navigation */}
      <Navbar
        onOpenSignIn={() => setIsSignInOpen(true)}
        onDownload={handleGlobalDownload}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with realistic Chrome + NEXUS side panel mockup */}
        <Hero
          onDownload={handleGlobalDownload}
          onNotify={addToast}
        />

        {/* 2. Features Bento Grid */}
        <Features
          onNotify={addToast}
        />

        {/* 3. How It Works Timeline */}
        <HowItWorks
          onDownload={handleGlobalDownload}
          onNotify={addToast}
        />

        {/* 4. Product Showcase: Real interactive browser task execution */}
        <ProductShowcase
          onNotify={addToast}
        />

        {/* 5. AI Providers & BYOK Cost Calculator */}
        <Providers
          onNotify={addToast}
        />

        {/* 6. Primary Download Conversion CTA */}
        <DownloadSection
          onNotify={addToast}
        />

        {/* 7. Installation Guide (7-Step Developer Mode Checklist) */}
        <InstallationGuide
          onDownload={handleGlobalDownload}
          onNotify={addToast}
        />

        {/* 8. Frequently Asked Questions */}
        <FAQ
          onNotify={addToast}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenSignIn={() => setIsSignInOpen(true)}
        onDownload={handleGlobalDownload}
        onNotify={addToast}
      />

      {/* Modals */}
      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        onDownload={handleGlobalDownload}
      />

      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      {/* Floating Notifications */}
      <ToastContainer
        toasts={toasts}
        onDismiss={dismissToast}
      />
    </div>
  );
}
