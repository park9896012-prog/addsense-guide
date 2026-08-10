import React, { useState } from 'react';
import { Language } from '../types';
import { CHAPTERS } from '../data/chaptersData';
import { 
  CheckCircle, 
  Copy, 
  Check, 
  Lightbulb, 
  AlertTriangle, 
  Code, 
  Layout, 
  ChevronRight, 
  ChevronLeft,
  Search,
  BookOpen,
  ArrowRight
} from 'lucide-react';

interface ChapterGuideProps {
  lang: Language;
}

export const ChapterGuide: React.FC<ChapterGuideProps> = ({ lang }) => {
  const [activeChapterId, setActiveChapterId] = useState<string>(CHAPTERS[0].id);
  const [completedChapters, setCompletedChapters] = useState<Record<string, boolean>>({});
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const currentChapterIndex = CHAPTERS.findIndex(c => c.id === activeChapterId);
  const currentChapter = CHAPTERS[currentChapterIndex] || CHAPTERS[0];

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIndex(index);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  const toggleChapterComplete = (id: string) => {
    setCompletedChapters(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(completedChapters).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / CHAPTERS.length) * 100);

  const filteredChapters = CHAPTERS.filter(ch => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      ch.title[lang].toLowerCase().includes(term) ||
      ch.subtitle[lang].toLowerCase().includes(term) ||
      ch.summary[lang].toLowerCase().includes(term)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Title & Progress Header */}
      <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{lang === 'ko' ? '단계별 연동 가이드' : 'Step-by-Step Integration Masterclass'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {lang === 'ko' ? '구글 애드센스 연동 실전 가이드' : 'Google AdSense Integration Walkthrough'}
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            {lang === 'ko' ? '기본 개념부터 애드센스 승인, React/HTML 코드 연결, 수익화 최적화까지' : 'From zero to AdSense approval, script implementation, and revenue scaling.'}
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl min-w-[260px]">
          <div className="flex items-center justify-between text-xs font-semibold mb-2">
            <span className="text-slate-300">
              {lang === 'ko' ? '학습 진행률' : 'Guide Completion'}
            </span>
            <span className="text-emerald-400 font-bold">{completedCount} / {CHAPTERS.length} ({progressPercent}%)</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-emerald-500 to-teal-400 h-2 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Layout Grid (Chapter Navigation Sidebar + Content Area) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sidebar: Chapter List & Search */}
        <div className="lg:col-span-4 space-y-4">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={lang === 'ko' ? '장 또는 내용 검색...' : 'Search chapters...'}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Chapter Selector List */}
          <div className="space-y-2">
            {filteredChapters.map((ch) => {
              const isSelected = ch.id === activeChapterId;
              const isDone = completedChapters[ch.id];

              return (
                <div
                  key={ch.id}
                  onClick={() => setActiveChapterId(ch.id)}
                  className={`p-4 rounded-xl border transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 border-emerald-500/60 shadow-lg shadow-emerald-500/5'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                      }`}>
                        {ch.number}
                      </span>
                      <div>
                        <h4 className={`text-sm font-bold leading-snug ${
                          isSelected ? 'text-white' : 'text-slate-300'
                        }`}>
                          {ch.title[lang]}
                        </h4>
                        <span className="text-[11px] text-slate-500 block mt-0.5">
                          ⏱ {ch.readTime[lang]}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleChapterComplete(ch.id);
                      }}
                      className="p-1 hover:text-emerald-400 text-slate-600 transition-colors"
                      title={isDone ? '완료 취소' : '학습 완료 표시'}
                    >
                      <CheckCircle className={`w-5 h-5 ${isDone ? 'text-emerald-400 fill-emerald-500/10' : 'text-slate-700'}`} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Content Area: Detailed Chapter Steps */}
        <div className="lg:col-span-8 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8">
          {/* Chapter Header Banner */}
          <div className="border-b border-slate-800 pb-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                Chapter {currentChapter.number}
              </span>
              <button
                onClick={() => toggleChapterComplete(currentChapter.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                  completedChapters[currentChapter.id]
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-600'
                }`}
              >
                <CheckCircle className="w-3.5 h-3.5" />
                <span>
                  {completedChapters[currentChapter.id]
                    ? (lang === 'ko' ? '학습 완료됨' : 'Completed')
                    : (lang === 'ko' ? '완료로 표시' : 'Mark Complete')}
                </span>
              </button>
            </div>

            <h3 className="text-2xl font-bold text-white">
              {currentChapter.title[lang]}
            </h3>
            <p className="text-sm text-slate-300">
              {currentChapter.subtitle[lang]}
            </p>
            <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed mt-3">
              <span className="font-semibold text-emerald-400 block mb-1">
                📌 {lang === 'ko' ? '장 요약' : 'Chapter Summary'}
              </span>
              {currentChapter.summary[lang]}
            </div>
          </div>

          {/* Chapter Steps rendering */}
          <div className="space-y-8">
            {currentChapter.steps.map((step, idx) => (
              <div key={idx} className="space-y-4 pb-8 border-b border-slate-800/60 last:border-0 last:pb-0">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold text-sm flex items-center justify-center shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {step.title[lang]}
                    </h4>
                    <p className="text-sm text-slate-300 mt-1 font-medium">
                      {step.description[lang]}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed pl-10">
                  {step.detail[lang]}
                </p>

                {/* Code Snippet Box if available */}
                {step.codeSnippet && (
                  <div className="ml-0 sm:ml-10 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="font-mono">{step.codeLanguage || 'code'}</span>
                      </div>
                      <button
                        onClick={() => handleCopy(step.codeSnippet!, idx)}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-xs"
                      >
                        {copiedCodeIndex === idx ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 font-medium">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Code</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                      <code>{step.codeSnippet}</code>
                    </pre>
                  </div>
                )}

                {/* Pro Tip Callout */}
                {step.proTip && (
                  <div className="ml-0 sm:ml-10 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-amber-400">
                      <Lightbulb className="w-4 h-4" />
                      <span>{lang === 'ko' ? '프로의 실전 팁 (Pro Tip)' : 'Pro Tip'}</span>
                    </div>
                    <p>{step.proTip[lang]}</p>
                  </div>
                )}

                {/* Warning Callout */}
                {step.warning && (
                  <div className="ml-0 sm:ml-10 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-200 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-red-400">
                      <AlertTriangle className="w-4 h-4" />
                      <span>{lang === 'ko' ? '주의 / 정책 위반 경고' : 'Policy Caution'}</span>
                    </div>
                    <p>{step.warning[lang]}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Previous / Next Chapter Buttons */}
          <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
            <button
              disabled={currentChapterIndex === 0}
              onClick={() => setActiveChapterId(CHAPTERS[currentChapterIndex - 1].id)}
              className="px-4 py-2.5 rounded-xl border border-slate-800 text-sm font-semibold text-slate-300 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{lang === 'ko' ? '이전 장' : 'Previous Chapter'}</span>
            </button>

            <span className="text-xs text-slate-500">
              {currentChapterIndex + 1} / {CHAPTERS.length}
            </span>

            <button
              disabled={currentChapterIndex === CHAPTERS.length - 1}
              onClick={() => setActiveChapterId(CHAPTERS[currentChapterIndex + 1].id)}
              className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-bold shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              <span>{lang === 'ko' ? '다음 장' : 'Next Chapter'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
