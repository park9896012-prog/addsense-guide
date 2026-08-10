import React from 'react';
import { Language, ActiveView } from '../types';
import { UI_STRINGS } from '../i18n/translations';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  DollarSign, 
  FileCode, 
  Layers,
  Mail
} from 'lucide-react';

interface HeroSectionProps {
  lang: Language;
  setActiveView: (view: ActiveView) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang, setActiveView }) => {
  const t = UI_STRINGS;

  return (
    <div className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800/80 pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-emerald-400 shadow-xl">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>{t.hero.badge[lang]}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
            {lang === 'ko' ? (
              <>
                웹사이트 개발 후 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">구글 애드센스 연동</span> 및 수익 창출 완벽 가이드
              </>
            ) : (
              <>
                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">Google AdSense Integration</span> & Website Monetization
              </>
            )}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            {t.hero.description[lang]}
          </p>

          {/* Contact Email Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-400">
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.hero.contactEmailNotice[lang]}</span>
          </div>

          {/* Action CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => setActiveView('chapters')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>{t.hero.startGuideBtn[lang]}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveView('audit')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-emerald-500/50 shadow-md transition-all duration-200 flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t.hero.runAuditBtn[lang]}</span>
            </button>
          </div>
        </div>

        {/* Feature Cards Grid (4 Core Interactive Modules) */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div 
            onClick={() => setActiveView('chapters')}
            className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all duration-200 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-1 group-hover:text-emerald-400 transition-colors">
              {lang === 'ko' ? '6단계 연동 가이드' : '6-Step Guide'}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === 'ko' ? '개발 준비, 스크립트 연동, React 적용법까지 실전 상세 해설' : 'Detailed walkthroughs for HTML5, React, and server-side setup.'}
            </p>
          </div>

          <div 
            onClick={() => setActiveView('audit')}
            className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all duration-200 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-1 group-hover:text-blue-400 transition-colors">
              {lang === 'ko' ? '승인 요건 진단기' : 'Approval Auditor'}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === 'ko' ? '개인정보처리방침, DART쿠키, 메타태그 통과 점수 실시간 확인' : 'Instantly calculate your site’s readiness score for AdSense approval.'}
            </p>
          </div>

          <div 
            onClick={() => setActiveView('adstxt')}
            className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all duration-200 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileCode className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-1 group-hover:text-amber-400 transition-colors">
              {lang === 'ko' ? 'ads.txt 자동 생성' : 'ads.txt Generator'}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === 'ko' ? 'Publisher ID 입력만으로 크롤러 오류 예방 파일 다운로드' : 'Generate standardized ads.txt to prevent earnings-at-risk errors.'}
            </p>
          </div>

          <div 
            onClick={() => setActiveView('calculator')}
            className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all duration-200 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-1 group-hover:text-purple-400 transition-colors">
              {lang === 'ko' ? '수익 실시간 계산기' : 'Revenue Estimator'}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === 'ko' ? '방문자수, CTR, CPC 기반 달러/원화 월 예상 수익 계산' : 'Estimate monthly earnings based on traffic, CTR, and CPC rates.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
