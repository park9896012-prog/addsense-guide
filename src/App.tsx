import React, { useState, useEffect } from 'react';
import { Language, ActiveView } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { ChapterGuide } from './components/ChapterGuide';
import { InteractiveAuditTool } from './components/InteractiveAuditTool';
import { RevenueCalculator } from './components/RevenueCalculator';
import { AdsTxtGenerator } from './components/AdsTxtGenerator';
import { AdHeatmapVisualizer } from './components/AdHeatmapVisualizer';
import { AdSenseFaq } from './components/AdSenseFaq';
import { ContactSection } from './components/ContactSection';
import { PolicyPageModal } from './components/PolicyPageModal';
import { CookieBanner } from './components/CookieBanner';

export default function App() {
  // 1. Language Detection Logic: Detect navigator.language (Korean if starting with 'ko', English otherwise)
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined' && navigator.language) {
      return navigator.language.toLowerCase().startsWith('ko') ? 'ko' : 'en';
    }
    return 'ko';
  });

  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [policyModalView, setPolicyModalView] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  // Handle policy modals from footer/links
  useEffect(() => {
    if (activeView === 'privacy' || activeView === 'terms' || activeView === 'disclaimer') {
      setPolicyModalView(activeView);
    }
  }, [activeView]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Global Header */}
      <Header
        lang={lang}
        onLanguageChange={(newLang) => setLang(newLang)}
        activeView={activeView}
        setActiveView={setActiveView}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activeView === 'home' && (
          <div className="space-y-12">
            <HeroSection lang={lang} setActiveView={setActiveView} />
            <ChapterGuide lang={lang} />
            <div className="bg-slate-900/50 border-y border-slate-800/80 py-8">
              <InteractiveAuditTool lang={lang} />
            </div>
            <RevenueCalculator lang={lang} />
            <AdsTxtGenerator lang={lang} />
            <AdHeatmapVisualizer lang={lang} />
            <AdSenseFaq lang={lang} />
            <ContactSection lang={lang} />
          </div>
        )}

        {activeView === 'chapters' && <ChapterGuide lang={lang} />}
        {activeView === 'audit' && <InteractiveAuditTool lang={lang} />}
        {activeView === 'calculator' && <RevenueCalculator lang={lang} />}
        {activeView === 'adstxt' && <AdsTxtGenerator lang={lang} />}
        {activeView === 'heatmap' && <AdHeatmapVisualizer lang={lang} />}
        {activeView === 'faq' && <AdSenseFaq lang={lang} />}
        {activeView === 'contact' && <ContactSection lang={lang} />}
      </main>

      {/* Policy Modal */}
      {policyModalView && (
        <PolicyPageModal
          view={policyModalView}
          lang={lang}
          onClose={() => {
            setPolicyModalView(null);
            if (['privacy', 'terms', 'disclaimer'].includes(activeView)) {
              setActiveView('home');
            }
          }}
        />
      )}

      {/* Cookie Consent Banner */}
      <CookieBanner lang={lang} setActiveView={setActiveView} />

      {/* Global Footer */}
      <Footer lang={lang} setActiveView={setActiveView} />
    </div>
  );
}
