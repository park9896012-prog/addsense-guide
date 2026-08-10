import React from 'react';
import { Language, ActiveView } from '../types';
import { UI_STRINGS } from '../i18n/translations';
import { Mail, ShieldCheck, FileText, Lock, AlertCircle, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  lang: Language;
  setActiveView: (view: ActiveView) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, setActiveView }) => {
  const t = UI_STRINGS;

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <span className="text-white font-bold text-lg">
                {lang === 'ko' ? '구글 애드센스 연동 가이드' : 'Google AdSense Integration Guide'}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              {lang === 'ko'
                ? '웹사이트 개발 직후부터 구글 애드센스 정책 100% 통과, 스크립트 연동, ads.txt 설정 및 실전 수익 창출까지 가장 쉽고 상세하게 설명하는 정통 전문 가이드 플랫폼입니다.'
                : 'The definitive educational platform for web developers to master Google AdSense approval, script setup, ads.txt configuration, and monetization strategy.'}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{t.footer.complianceBadge[lang]}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
              {lang === 'ko' ? '핵심 가이드 & 도구' : 'Core Tools'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => setActiveView('chapters')} 
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  {t.nav.chapters[lang]}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveView('audit')} 
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                  {t.nav.audit[lang]}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveView('calculator')} 
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  {t.nav.calculator[lang]}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveView('adstxt')} 
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  {t.nav.adstxt[lang]}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveView('faq')} 
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <AlertCircle className="w-3.5 h-3.5 text-slate-500" />
                  {t.nav.faq[lang]}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Legal Policies */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
              {lang === 'ko' ? '문의 및 정책 필수항목' : 'Support & Legal'}
            </h4>
            <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-2">
              <span className="text-xs text-slate-400 block">{t.footer.contactLabel[lang]}</span>
              <a
                href="mailto:ju9896012@gmail.com"
                className="text-emerald-400 font-medium text-sm hover:underline flex items-center gap-1.5 break-all"
              >
                <Mail className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>ju9896012@gmail.com</span>
              </a>
            </div>

            <div className="pt-2 flex flex-col space-y-1.5 text-sm">
              <button
                onClick={() => setActiveView('privacy')}
                className="text-left text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5 text-slate-500" />
                <span>{t.footer.privacy[lang]}</span>
              </button>
              <button
                onClick={() => setActiveView('terms')}
                className="text-left text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-slate-500" />
                <span>{t.footer.terms[lang]}</span>
              </button>
              <button
                onClick={() => setActiveView('disclaimer')}
                className="text-left text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              >
                <AlertCircle className="w-3.5 h-3.5 text-slate-500" />
                <span>{t.footer.disclaimer[lang]}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright & AdSense trademark note */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {lang === 'ko' ? '구글 애드센스 연동 가이드' : 'Google AdSense Integration Guide'}. {t.footer.rights[lang]}</p>
          <div className="flex items-center gap-4">
            <span>Contact: ju9896012@gmail.com</span>
            <span className="text-slate-700">|</span>
            <span className="text-emerald-500 font-semibold">Bilingual KR / EN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
