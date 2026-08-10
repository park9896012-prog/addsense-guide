import React, { useState } from 'react';
import { Language } from '../types';
import { AUDIT_CRITERIA } from '../data/auditData';
import { 
  CheckSquare, 
  Square, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  RefreshCw,
  Mail
} from 'lucide-react';

interface InteractiveAuditToolProps {
  lang: Language;
}

export const InteractiveAuditTool: React.FC<InteractiveAuditToolProps> = ({ lang }) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'crit-ssl-https': true,
    'crit-mobile-responsive': true,
  });

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const resetAll = () => {
    setCheckedItems({});
  };

  const totalScore = AUDIT_CRITERIA.reduce((sum, item) => {
    return sum + (checkedItems[item.id] ? item.weight : 0);
  }, 0);

  const passedCount = AUDIT_CRITERIA.filter(item => checkedItems[item.id]).length;

  let scoreStatus = {
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    title: { ko: '🟢 승인 준비 완료 (준비율 90% 이상)', en: '🟢 Excellent Readiness (90%+ Score)' },
    message: {
      ko: '축하합니다! 필수 애드센스 심사 요건 및 정책 규정을 거의 충족했습니다. 자신 있게 구글 애드센스 승인을 신청하세요.',
      en: 'Great job! Your website satisfies core AdSense policy requirements. You are ready to apply for review.'
    }
  };

  if (totalScore < 60) {
    scoreStatus = {
      color: 'text-red-400 bg-red-500/10 border-red-500/30',
      title: { ko: '🔴 승인 거절 위험 높음 (준비율 60% 미만)', en: '🔴 High Rejection Risk (Below 60%)' },
      message: {
        ko: '필수 법적 페이지나 콘텐츠 분량이 부족하여 애드센스 신청 시 거절될 가능성이 높습니다. 아래 보완 사항을 해결해 주세요.',
        en: 'Critical requirements like Privacy Policy or article volume are missing. Address recommendations below before applying.'
      }
    };
  } else if (totalScore < 90) {
    scoreStatus = {
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      title: { ko: '🟡 보완 필요 (준비율 60%~89%)', en: '🟡 Needs Optimization (60%-89%)' },
      message: {
        ko: '기본적인 골격은 갖추어졌으나, 추가적인 콘텐츠 보완이나 정책 문구 추가 후 신청하는 것을 권장합니다.',
        en: 'Good progress. Polish missing items to increase your first-attempt approval odds.'
      }
    };
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10 text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>{lang === 'ko' ? '애드센스 정책 100% 통과 자가 진단' : 'AdSense Policy Readiness Audit'}</span>
        </div>
        <h2 className="text-3xl font-black text-white">
          {lang === 'ko' ? '웹사이트 애드센스 승인 적합도 자가 진단' : 'Website AdSense Approval Readiness Checker'}
        </h2>
        <p className="text-sm text-slate-300">
          {lang === 'ko'
            ? '내 웹사이트의 현재 상태를 아래 항목에 따라 체크하고 예상 승인 가능 점수와 맞춤형 보완 가이드를 확인하세요.'
            : 'Check off your site’s current readiness to calculate your score and view actionable fix recommendations.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Audit Checklist Items */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-sm font-bold text-white">
              {lang === 'ko' ? '승인 심사 체크리스트 항목' : 'AdSense Review Criteria'} ({passedCount}/{AUDIT_CRITERIA.length})
            </span>
            <button
              onClick={resetAll}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{lang === 'ko' ? '전체 초기화' : 'Reset All'}</span>
            </button>
          </div>

          <div className="space-y-3">
            {AUDIT_CRITERIA.map((criterion) => {
              const isChecked = !!checkedItems[criterion.id];

              return (
                <div
                  key={criterion.id}
                  onClick={() => toggleItem(criterion.id)}
                  className={`p-4 rounded-xl border transition-all duration-150 cursor-pointer ${
                    isChecked
                      ? 'bg-slate-900 border-emerald-500/50 shadow-md'
                      : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <button className="mt-0.5 text-emerald-400 shrink-0">
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-600" />
                      )}
                    </button>

                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className={`text-sm font-bold ${isChecked ? 'text-white' : 'text-slate-300'}`}>
                          {criterion.title[lang]}
                        </h4>
                        <div className="flex items-center gap-1.5 shrink-0">
                          {criterion.mandatoryForAdsense && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-red-500/10 text-red-400 border border-red-500/20">
                              {lang === 'ko' ? '필수' : 'Required'}
                            </span>
                          )}
                          <span className="text-xs font-mono font-bold text-emerald-400 bg-slate-800 px-2 py-0.5 rounded">
                            +{criterion.weight}점
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed">
                        {criterion.description[lang]}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Real-time Score Meter & Custom Recommendations */}
        <div className="lg:col-span-5 space-y-6">
          {/* Score Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl">
            <div className="text-center space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {lang === 'ko' ? '예상 승인 적합도 점수' : 'Estimated Readiness Score'}
              </span>
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 font-mono">
                {totalScore} <span className="text-2xl text-slate-500">/ 100</span>
              </div>
            </div>

            {/* Score Progress Gauge */}
            <div className="space-y-1.5">
              <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    totalScore >= 90
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                      : totalScore >= 60
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-400'
                      : 'bg-gradient-to-r from-red-500 to-rose-400'
                  }`}
                  style={{ width: `${totalScore}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-[11px] font-mono text-slate-500">
                <span>0%</span>
                <span>60% (Minimum)</span>
                <span>100%</span>
              </div>
            </div>

            {/* Score Message Banner */}
            <div className={`p-4 rounded-xl border text-xs leading-relaxed ${scoreStatus.color}`}>
              <h4 className="font-bold mb-1 text-sm">{scoreStatus.title[lang]}</h4>
              <p>{scoreStatus.message[lang]}</p>
            </div>
          </div>

          {/* Actionable Recommendations List */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h4 className="font-bold text-white text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'ko' ? '우선 보완 추천 사항' : 'Recommended Actions'}</span>
            </h4>

            <div className="space-y-3">
              {AUDIT_CRITERIA.filter(item => !checkedItems[item.id]).map((item) => (
                <div key={item.id} className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1">
                  <div className="flex items-center justify-between text-amber-400 font-semibold">
                    <span>⚠️ {item.title[lang]}</span>
                    <span className="text-[10px] text-slate-500">+{item.weight} pts</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {item.recommendation[lang]}
                  </p>
                </div>
              ))}

              {AUDIT_CRITERIA.every(item => checkedItems[item.id]) && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-center text-xs text-emerald-300">
                  🎉 모든 승인 항목을 완벽하게 만족합니다! 구글 애드센스 사이트 심사를 신청해 보세요.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
