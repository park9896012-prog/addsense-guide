import React, { useState } from 'react';
import { Language } from '../types';
import { FAQ_ITEMS } from '../data/faqData';
import { GLOSSARY_TERMS } from '../data/glossaryData';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';

interface AdSenseFaqProps {
  lang: Language;
}

export const AdSenseFaq: React.FC<AdSenseFaqProps> = ({ lang }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'faq' | 'glossary'>('faq');

  const filteredFaqs = FAQ_ITEMS.filter(item => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      item.question[lang].toLowerCase().includes(term) ||
      item.answer[lang].toLowerCase().includes(term)
    );
  });

  const filteredGlossary = GLOSSARY_TERMS.filter(item => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      item.term.toLowerCase().includes(term) ||
      item.definition[lang].toLowerCase().includes(term)
    );
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10 text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
          <HelpCircle className="w-4 h-4" />
          <span>{lang === 'ko' ? '자주 묻는 질문 & 용어 사전' : 'FAQ & Monetization Glossary'}</span>
        </div>
        <h2 className="text-3xl font-black text-white">
          {lang === 'ko' ? '애드센스 문제 해결 및 핵심 용어' : 'AdSense Rejection Solutions & Terms'}
        </h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          {lang === 'ko'
            ? '거절 사유별 실전 해결 방법, 정산 기준, 무효 클릭 방지 및 핵심 수익 지표 용어를 한곳에서 확인하세요.'
            : 'Find actionable step-by-step fixes for AdSense review failures, payout policies, and revenue metrics.'}
        </p>
      </div>

      {/* Tabs & Search Filter */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('faq')}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'faq' ? 'bg-emerald-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>{lang === 'ko' ? '자주 묻는 질문 (FAQ)' : 'Frequently Asked Questions'}</span>
            </button>
            <button
              onClick={() => setActiveTab('glossary')}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'glossary' ? 'bg-emerald-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>{lang === 'ko' ? '수익 용어 사전 (Glossary)' : 'Monetization Terms'}</span>
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={lang === 'ko' ? '검색어 입력...' : 'Search term...'}
              className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Content based on Active Tab */}
        {activeTab === 'faq' ? (
          <div className="space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-white hover:bg-slate-800/50 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-emerald-400 font-mono">Q.</span>
                      <span>{faq.question[lang]}</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-emerald-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 space-y-3 text-xs border-t border-slate-800/80 bg-slate-950/60">
                      <p className="text-slate-300 leading-relaxed font-medium">
                        {faq.answer[lang]}
                      </p>

                      {faq.solution && (
                        <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-300 space-y-1">
                          <span className="font-bold flex items-center gap-1 text-emerald-400">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            {lang === 'ko' ? '실전 해결 가이드' : 'Actionable Fix'}
                          </span>
                          <p>{faq.solution[lang]}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredGlossary.map((item, idx) => (
              <div key={idx} className="p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white text-base">
                    {item.term}
                  </h4>
                  {item.abbr && (
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-emerald-400 text-xs font-mono font-bold">
                      {item.abbr}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.definition[lang]}
                </p>

                {item.example && (
                  <div className="p-2.5 bg-slate-950 rounded-lg text-[11px] text-slate-400 border border-slate-800 font-mono">
                    💡 {item.example[lang]}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
