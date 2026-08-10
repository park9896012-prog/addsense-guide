import React, { useState } from 'react';
import { Language } from '../types';
import { 
  Layout, 
  MousePointer, 
  Eye, 
  TrendingUp, 
  Code, 
  Copy, 
  Check, 
  AlertCircle,
  Sparkles
} from 'lucide-react';

interface AdHeatmapVisualizerProps {
  lang: Language;
}

export const AdHeatmapVisualizer: React.FC<AdHeatmapVisualizerProps> = ({ lang }) => {
  const [selectedZone, setSelectedZone] = useState<'top' | 'mid' | 'sidebar' | 'bottom' | 'auto'>('top');
  const [copied, setCopied] = useState(false);

  const zoneDetails = {
    top: {
      title: { ko: '본문 상단 (제목 직후)', en: 'Header Top Banner (Below Title)' },
      viewability: '92%',
      ctrImpact: '45% (수익의 핵심)',
      recommendType: '반응형 디스플레이 (300x250 또는 가로형)',
      policyNote: {
        ko: '콘텐츠 제목 및 본문 첫 줄이 모바일 화면에서 잘리지 않고 광고와 구분되도록 여백(margin)을 확보해야 합니다.',
        en: 'Ensure article title remains visible on mobile screens above the fold without pushing text completely offscreen.'
      },
      snippet: `<div className="my-4 flex justify-center min-h-[90px]">
  <ins className="adsbygoogle"
       style={{ display: 'block', width: '100%' }}
       data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
       data-ad-slot="1234567890"
       data-ad-format="auto"
       data-full-width-responsive="true" />
</div>`
    },
    mid: {
      title: { ko: '본문 중간 삽입 (In-Article)', en: 'Mid-Content In-Article Ad' },
      viewability: '78%',
      ctrImpact: '30%',
      recommendType: '아티클 내 광고 (In-article Ad)',
      policyNote: {
        ko: '단락과 단락 사이에 doğal스럽게 삽입되어야 하며, 이미지나 클릭 버튼 바로 위에 밀착 배치되어 유도 클릭이 되지 않도록 주의하세요.',
        en: 'Insert naturally between text paragraphs. Avoid placing directly above download buttons to prevent accidental clicks.'
      },
      snippet: `<div className="my-8 text-center min-h-[250px]">
  <ins className="adsbygoogle"
       style={{ display: 'block', textAlign: 'center' }}
       data-ad-layout="in-article"
       data-ad-format="fluid"
       data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
       data-ad-slot="0987654321" />
</div>`
    },
    sidebar: {
      title: { ko: '사이드바 스티키 (Desktop Sidebar)', en: 'Desktop Sidebar Sticky Unit' },
      viewability: '85%',
      ctrImpact: '15%',
      recommendType: '300x600 하프페이지 또는 300x250 사각형',
      policyNote: {
        ko: '데스크톱 가로 해상도(1024px 이상)에서만 노출하고, 모바일에서는 자동으로 숨겨지도록 CSS 반응형 처리를 해주세요.',
        en: 'Only render on desktop viewports (>1024px width). Use responsive breakpoints to hide on mobile screens.'
      },
      snippet: `<div className="hidden lg:block sticky top-20 min-h-[600px]">
  <ins className="adsbygoogle"
       style={{ display: 'inline-block', width: '300px', height: '600px' }}
       data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
       data-ad-slot="1122334455" />
</div>`
    },
    bottom: {
      title: { ko: '본문 하단 (결론 직후)', en: 'Article Bottom Action Zone' },
      viewability: '65%',
      ctrImpact: '10%',
      recommendType: '일치하는 콘텐츠 (Matched Content) / 디스플레이',
      policyNote: {
        ko: '글을 모두 읽은 독자가 관련 글과 함께 자연스럽게 이동하도록 본문 마지막 문단 직후에 배치합니다.',
        en: 'Placed immediately after article conclusions where readers finish reading and seek next actions.'
      },
      snippet: `<div className="mt-8 border-t border-slate-800 pt-6">
  <ins className="adsbygoogle"
       style={{ display: 'block' }}
       data-ad-format="autorelaxed"
       data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
       data-ad-slot="9988776655" />
</div>`
    },
    auto: {
      title: { ko: '자동 광고 (Auto Ads) - 앵커 / 전면', en: 'Auto Ads (Anchor & Vignette Overlays)' },
      viewability: '95%',
      ctrImpact: 'AI 자동 최적화',
      recommendType: '구글 AI 자동 오버레이',
      policyNote: {
        ko: '모바일 하단 앵커 광고 및 페이지 이동 시 나타나는 전면 광고는 구글 시스템이 승인 정책을 자동으로 준수하여 표출합니다.',
        en: 'Mobile bottom anchors and full-screen page transition vignette ads managed automatically by Google AI.'
      },
      snippet: `<!-- index.html <head> 내부 한 줄 설정으로 자동 동작 -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
        crossorigin="anonymous"></script>`
    }
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const current = zoneDetails[selectedZone];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10 text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
          <Layout className="w-4 h-4" />
          <span>{lang === 'ko' ? '골든 존 광고 배치 시뮬레이터' : 'Golden Zone Ad Placement Simulator'}</span>
        </div>
        <h2 className="text-3xl font-black text-white">
          {lang === 'ko' ? '수익 극대화 및 정책 준수 광고 배치 지도' : 'Interactive Ad Placement Heatmap & Generator'}
        </h2>
        <p className="text-sm text-slate-300">
          {lang === 'ko'
            ? '웹사이트 레이아웃의 구역을 클릭하여 해당 영역의 예상 시선 집중도, CTR 기여도 및 정책 준수 코드를 확인하세요.'
            : 'Click on website layout zones to reveal viewability rates, CTR impact, and policy-compliant code.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Interactive Webpage Wireframe Mockup */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
            🖥️ {lang === 'ko' ? '웹사이트 와이어프레임 (클릭하여 구역 탐색)' : 'Interactive Webpage Wireframe'}
          </span>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3 font-sans text-xs">
            {/* Header Mock */}
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between text-slate-400">
              <span className="font-bold text-white">[My Web Application]</span>
              <span className="text-[10px]">Home | About | Contact</span>
            </div>

            {/* Zone 1: Top Ad Slot */}
            <div
              onClick={() => setSelectedZone('top')}
              className={`p-3 rounded-lg border-2 border-dashed transition-all cursor-pointer text-center ${
                selectedZone === 'top'
                  ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold shadow'
                  : 'bg-emerald-950/20 border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10'
              }`}
            >
              🔥 1. 본문 상단 광고 슬롯 (Golden Zone #1)
            </div>

            {/* Content Area Grid */}
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-8 space-y-3">
                <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                <div className="space-y-1">
                  <div className="h-2 bg-slate-800 rounded w-full"></div>
                  <div className="h-2 bg-slate-800 rounded w-5/6"></div>
                </div>

                {/* Zone 2: Mid Article Ad Slot */}
                <div
                  onClick={() => setSelectedZone('mid')}
                  className={`p-3 rounded-lg border-2 border-dashed transition-all cursor-pointer text-center ${
                    selectedZone === 'mid'
                      ? 'bg-purple-500/20 border-purple-400 text-purple-300 font-bold shadow'
                      : 'bg-purple-950/20 border-purple-500/40 text-purple-400 hover:bg-purple-500/10'
                  }`}
                >
                  ⚡ 2. 본문 중간 아티클 광고 (Mid-Content)
                </div>

                <div className="space-y-1">
                  <div className="h-2 bg-slate-800 rounded w-full"></div>
                  <div className="h-2 bg-slate-800 rounded w-4/5"></div>
                </div>

                {/* Zone 4: Bottom Ad Slot */}
                <div
                  onClick={() => setSelectedZone('bottom')}
                  className={`p-3 rounded-lg border-2 border-dashed transition-all cursor-pointer text-center ${
                    selectedZone === 'bottom'
                      ? 'bg-blue-500/20 border-blue-400 text-blue-300 font-bold shadow'
                      : 'bg-blue-950/20 border-blue-500/40 text-blue-400 hover:bg-blue-500/10'
                  }`}
                >
                  📌 4. 본문 하단 추천 광고 (Bottom Zone)
                </div>
              </div>

              {/* Sidebar Zone 3 */}
              <div className="col-span-4">
                <div
                  onClick={() => setSelectedZone('sidebar')}
                  className={`h-full p-3 rounded-lg border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center text-center ${
                    selectedZone === 'sidebar'
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold shadow'
                      : 'bg-amber-950/20 border-amber-500/40 text-amber-400 hover:bg-amber-500/10'
                  }`}
                >
                  <span className="text-[11px] font-bold">🏛️ 3. 사이드바 스티키 슬롯</span>
                </div>
              </div>
            </div>

            {/* Zone 5: Auto Ads Bar */}
            <div
              onClick={() => setSelectedZone('auto')}
              className={`p-2 rounded-lg border border-slate-700 transition-all cursor-pointer text-center text-[11px] ${
                selectedZone === 'auto'
                  ? 'bg-teal-500/20 border-teal-400 text-teal-300 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              🤖 5. 구글 자동 광고 (Auto Ads / Mobile Anchor Bar)
            </div>
          </div>
        </div>

        {/* Right Zone Metrics & Code Snippet */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>{current.title[lang]}</span>
              </h3>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-emerald-400 text-xs font-mono font-bold">
                {current.recommendType}
              </span>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-blue-400" />
                  예상 노출 시선도 (Viewability)
                </span>
                <span className="text-lg font-bold text-blue-400 font-mono">
                  {current.viewability}
                </span>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  수익 CTR 기여 비율
                </span>
                <span className="text-lg font-bold text-emerald-400 font-mono">
                  {current.ctrImpact}
                </span>
              </div>
            </div>

            {/* Policy Check note */}
            <div className="p-3.5 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-200 space-y-1">
              <span className="font-bold text-amber-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                정책 준수 점검 사항:
              </span>
              <p className="leading-relaxed">{current.policyNote[lang]}</p>
            </div>

            {/* Code Snippet */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <span>해당 구역 전용 연동 코드 (HTML / React)</span>
                <button
                  onClick={() => handleCopyCode(current.snippet)}
                  className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs transition-colors flex items-center gap-1"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? '복사됨' : '복사하기'}</span>
                </button>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                <pre>{current.snippet}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
