import React, { useState } from 'react';
import { Language } from '../types';
import { 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  Eye, 
  MousePointerClick, 
  HelpCircle,
  Sparkles,
  RefreshCw
} from 'lucide-react';

interface RevenueCalculatorProps {
  lang: Language;
}

export const RevenueCalculator: React.FC<RevenueCalculatorProps> = ({ lang }) => {
  const [pageviews, setPageviews] = useState<number>(5000);
  const [ctr, setCtr] = useState<number>(2.0); // 2.0%
  const [cpc, setCpc] = useState<number>(0.35); // $0.35
  const [currency, setCurrency] = useState<'USD' | 'KRW'>('KRW');

  const EXCHANGE_RATE = 1380; // 1 USD = 1380 KRW

  // Calculations
  const dailyClicks = Math.round(pageviews * (ctr / 100));
  const dailyUsd = dailyClicks * cpc;
  const monthlyUsd = dailyUsd * 30;
  const yearlyUsd = dailyUsd * 365;

  const pageRpmUsd = pageviews > 0 ? (dailyUsd / pageviews) * 1000 : 0;

  const formatCurrency = (usdVal: number) => {
    if (currency === 'KRW') {
      const krwVal = Math.round(usdVal * EXCHANGE_RATE);
      return `₩ ${krwVal.toLocaleString()}`;
    }
    return `$ ${usdVal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Niche Presets
  const applyPreset = (presetCtr: number, presetCpc: number) => {
    setCtr(presetCtr);
    setCpc(presetCpc);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Title Header */}
      <div className="mb-10 text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
          <Calculator className="w-4 h-4" />
          <span>{lang === 'ko' ? '애드센스 실시간 수익 계산기' : 'AdSense Live Revenue Estimator'}</span>
        </div>
        <h2 className="text-3xl font-black text-white">
          {lang === 'ko' ? '예상 애드센스 광고 수익 모뮬레이터' : 'AdSense Earnings Simulator'}
        </h2>
        <p className="text-sm text-slate-300">
          {lang === 'ko'
            ? '일일 방문자수, 클릭률(CTR), 클릭당 단가(CPC) 수치를 조절하여 월간/연간 예상 달러 및 원화 수익을 계산해 보세요.'
            : 'Adjust daily pageviews, CTR, and CPC sliders to project your monthly and annual AdSense revenue.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs Controls */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>{lang === 'ko' ? '트래픽 & 단가 매개변수 설정' : 'Traffic & CPC Parameters'}</span>
            </h3>

            {/* Currency Switcher */}
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold">
              <button
                onClick={() => setCurrency('KRW')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  currency === 'KRW' ? 'bg-purple-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                ₩ 원화 (KRW)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  currency === 'USD' ? 'bg-purple-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                $ 달러 (USD)
              </button>
            </div>
          </div>

          {/* Industry Niche Presets */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-400 block">
              💡 {lang === 'ko' ? '분야별 평균 수치 프리셋 선택' : 'Select Industry Niche Preset'}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                onClick={() => applyPreset(2.5, 0.85)}
                className="p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-purple-500/50 text-xs text-slate-300 hover:text-white transition-all text-left"
              >
                <span className="font-bold block text-purple-400">IT / 테크</span>
                <span className="text-[10px] text-slate-500">CTR 2.5% | $0.85</span>
              </button>
              <button
                onClick={() => applyPreset(2.2, 1.80)}
                className="p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-purple-500/50 text-xs text-slate-300 hover:text-white transition-all text-left"
              >
                <span className="font-bold block text-emerald-400">금융 / 경제</span>
                <span className="text-[10px] text-slate-500">CTR 2.2% | $1.80</span>
              </button>
              <button
                onClick={() => applyPreset(3.0, 0.45)}
                className="p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-purple-500/50 text-xs text-slate-300 hover:text-white transition-all text-left"
              >
                <span className="font-bold block text-amber-400">쇼핑 / 정보</span>
                <span className="text-[10px] text-slate-500">CTR 3.0% | $0.45</span>
              </button>
              <button
                onClick={() => applyPreset(1.8, 0.25)}
                className="p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-purple-500/50 text-xs text-slate-300 hover:text-white transition-all text-left"
              >
                <span className="font-bold block text-blue-400">일상 / 블로그</span>
                <span className="text-[10px] text-slate-500">CTR 1.8% | $0.25</span>
              </button>
            </div>
          </div>

          {/* Slider 1: Pageviews */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-300 flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-emerald-400" />
                {lang === 'ko' ? '일일 페이지 조회수 (Pageviews)' : 'Daily Pageviews'}
              </span>
              <span className="text-emerald-400 font-mono text-sm">{pageviews.toLocaleString()} 회</span>
            </div>
            <input
              type="range"
              min="500"
              max="100000"
              step="500"
              value={pageviews}
              onChange={(e) => setPageviews(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>500</span>
              <span>25,000</span>
              <span>50,000</span>
              <span>100,000+</span>
            </div>
          </div>

          {/* Slider 2: CTR */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-300 flex items-center gap-1.5">
                <MousePointerClick className="w-4 h-4 text-purple-400" />
                {lang === 'ko' ? '광고 클릭률 (CTR)' : 'Ad Click-Through Rate (CTR)'}
              </span>
              <span className="text-purple-400 font-mono text-sm">{ctr.toFixed(1)} %</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="8.0"
              step="0.1"
              value={ctr}
              onChange={(e) => setCtr(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>0.5% (낮음)</span>
              <span>2.0% (평균)</span>
              <span>5.0% (상위)</span>
              <span>8.0%</span>
            </div>
          </div>

          {/* Slider 3: CPC */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-300 flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-amber-400" />
                {lang === 'ko' ? '클릭당 평균 단가 (CPC)' : 'Cost Per Click (CPC)'}
              </span>
              <span className="text-amber-400 font-mono text-sm">$ {cpc.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.05"
              max="3.00"
              step="0.05"
              value={cpc}
              onChange={(e) => setCpc(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>$0.05</span>
              <span>$0.50</span>
              <span>$1.50</span>
              <span>$3.00+</span>
            </div>
          </div>
        </div>

        {/* Right Calculated Results Output */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 flex flex-col justify-between shadow-xl">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
              {lang === 'ko' ? '예상 시뮬레이션 산출 결과' : 'Projected Earnings Summary'}
            </span>

            {/* Monthly Big Earnings Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950/40 border border-purple-500/30 text-center space-y-2 shadow-inner">
              <span className="text-xs font-bold text-purple-300 uppercase tracking-widest block">
                {lang === 'ko' ? '🗓️ 월 예상 수익 (30일 기준)' : '🗓️ Estimated Monthly Revenue'}
              </span>
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-purple-300 font-mono">
                {formatCurrency(monthlyUsd)}
              </div>
              <span className="text-xs text-slate-400 block">
                ({lang === 'ko' ? `일일 약 ${dailyClicks.toLocaleString()}회 광고 클릭 기준` : `Based on ~${dailyClicks.toLocaleString()} daily ad clicks`})
              </span>
            </div>

            {/* Other Metrics Breakdown */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <span className="text-[11px] text-slate-400 block">일 예상 수익 (Daily)</span>
                <span className="text-base font-bold text-emerald-400 font-mono">
                  {formatCurrency(dailyUsd)}
                </span>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <span className="text-[11px] text-slate-400 block">연 예상 수익 (Annual)</span>
                <span className="text-base font-bold text-purple-400 font-mono">
                  {formatCurrency(yearlyUsd)}
                </span>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <span className="text-[11px] text-slate-400 block">계산된 Page RPM</span>
                <span className="text-base font-bold text-amber-400 font-mono">
                  {formatCurrency(pageRpmUsd)} / 1,000pv
                </span>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <span className="text-[11px] text-slate-400 block">일 예상 클릭수</span>
                <span className="text-base font-bold text-blue-400 font-mono">
                  {dailyClicks.toLocaleString()} 회
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800/80 text-xs text-slate-400 space-y-1">
            <span className="font-bold text-slate-300 block">📌 참고 사항:</span>
            <p>
              {lang === 'ko'
                ? '본 계산 결과는 사용자가 입력한 통계치를 바탕으로 한 추정치이며 실제 광고주의 유찰 및 수입 금액을 보장하지 않습니다. 환율은 $1 = ₩1,380 기준입니다.'
                : 'Projections are mathematical estimates based on selected inputs and do not guarantee future ad revenues. Exchange rate benchmarked at $1 = ₩1,380.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
