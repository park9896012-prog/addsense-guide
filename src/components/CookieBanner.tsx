import React, { useState, useEffect } from 'react';
import { Language, ActiveView } from '../types';
import { UI_STRINGS } from '../i18n/translations';
import { Cookie, X, Check } from 'lucide-react';

interface CookieBannerProps {
  lang: Language;
  setActiveView: (view: ActiveView) => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ lang, setActiveView }) => {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const isAccepted = localStorage.getItem('adsense_guide_cookie_consent');
    if (!isAccepted) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('adsense_guide_cookie_consent', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-slate-900/95 border border-slate-700/80 rounded-2xl p-4 shadow-2xl backdrop-blur text-xs text-slate-300 space-y-3 animate-in fade-in slide-in-from-bottom duration-300">
      <div className="flex items-start gap-3">
        <Cookie className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-bold text-white text-sm">
            {lang === 'ko' ? '쿠키 및 개인정보 수집 안내' : 'Cookie & AdSense Consent'}
          </h4>
          <p className="text-slate-300 leading-relaxed text-[11px]">
            {UI_STRINGS.cookie.text[lang]}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-1 border-t border-slate-800">
        <button
          onClick={() => setActiveView('privacy')}
          className="text-[11px] text-emerald-400 hover:underline font-semibold"
        >
          {UI_STRINGS.cookie.privacyLink[lang]}
        </button>

        <button
          onClick={handleAccept}
          className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md transition-colors flex items-center gap-1"
        >
          <Check className="w-3.5 h-3.5" />
          <span>{UI_STRINGS.cookie.accept[lang]}</span>
        </button>
      </div>
    </div>
  );
};
