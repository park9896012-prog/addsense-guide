import React from 'react';
import { Language, ActiveView } from '../types';
import { Lock, FileText, AlertCircle, X, Mail } from 'lucide-react';

interface PolicyPageModalProps {
  view: 'privacy' | 'terms' | 'disclaimer';
  lang: Language;
  onClose: () => void;
}

export const PolicyPageModal: React.FC<PolicyPageModalProps> = ({ view, lang, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {view === 'privacy' && (
          <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg border-b border-slate-800 pb-3">
              <Lock className="w-5 h-5" />
              <span>{lang === 'ko' ? '개인정보처리방침 (Privacy Policy)' : 'Privacy Policy'}</span>
            </div>

            <p className="text-slate-400">
              최종 수정일: 2026년 8월 10일
            </p>

            <section className="space-y-2">
              <h4 className="font-bold text-white text-sm">1. 개요 및 수집 항목</h4>
              <p>
                구글 애드센스 연동 가이드 웹사이트(이하 "본 사이트")는 방문자의 개인정보 보호를 최우선으로 생각하며, 「개인정보 보호법」 및 Google AdSense 게시자 정책을 준수합니다.
              </p>
            </section>

            <section className="space-y-2 p-4 bg-slate-950 rounded-xl border border-slate-800">
              <h4 className="font-bold text-emerald-400 text-sm">2. Google AdSense 및 쿠키(Cookie) 관련 조항 (필수 공개)</h4>
              <ul className="list-disc pl-4 space-y-1 text-slate-300">
                <li>Google을 포함한 제3자 판매자는 쿠키를 사용하여 방문자의 이전 웹사이트 방문 기록을 바탕으로 맞춤형 광고를 제공합니다.</li>
                <li>Google의 DART 쿠키 사용을 통해 Google 및 파트너사는 방문자의 본 사이트 및 인터넷상의 다른 사이트 방문을 기반으로 광고를 게재할 수 있습니다.</li>
                <li>방문자는 <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" className="text-emerald-400 underline">Google 맞춤설정 광고 설정</a>을 방문하여 맞춤형 광고 게재를 거부할 수 있습니다.</li>
                <li>또한 <a href="http://www.aboutads.info" target="_blank" rel="noreferrer" className="text-emerald-400 underline">www.aboutads.info</a>를 방문하여 제3자 판매자의 맞춤형 광고 쿠키 사용을 차단하실 수 있습니다.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h4 className="font-bold text-white text-sm">3. 개인정보의 보유 및 이용 기간</h4>
              <p>
                방문자가 이메일 문의(ju9896012@gmail.com)를 통해 전달한 성명 및 메일 주소는 문의 답변 목적 달성 후 지체 없이 파기됩니다.
              </p>
            </section>

            <section className="space-y-2">
              <h4 className="font-bold text-white text-sm">4. 개인정보 보호책임자 및 문의처</h4>
              <p>
                개인정보 처리방침 관련 문의사항은 아래 책임자 메일로 언제든지 연락주시기 바랍니다.
              </p>
              <div className="p-3 bg-slate-950 rounded-lg text-emerald-400 font-mono font-bold flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>ju9896012@gmail.com</span>
              </div>
            </section>
          </div>
        )}

        {view === 'terms' && (
          <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
            <div className="flex items-center gap-2 text-blue-400 font-bold text-lg border-b border-slate-800 pb-3">
              <FileText className="w-5 h-5" />
              <span>{lang === 'ko' ? '이용약관 (Terms of Service)' : 'Terms of Service'}</span>
            </div>

            <section className="space-y-2">
              <h4 className="font-bold text-white text-sm">1. 목적</h4>
              <p>
                본 약관은 구글 애드센스 연동 가이드 사이트에서 제공하는 가이드, 자가 진단 도구, ads.txt 생성기 및 수익 계산기 서비스의 이용 조건과 운영자와 이용자의 권리·의무를 규정함을 목적으로 합니다.
              </p>
            </section>

            <section className="space-y-2">
              <h4 className="font-bold text-white text-sm">2. 지식재산권</h4>
              <p>
                본 사이트에서 제공되는 모든 가이드 문서, 디자인, 소스코드 예제 및 소프트웨어 도구에 대한 저작권은 본 서비스에 귀속됩니다.
              </p>
            </section>

            <section className="space-y-2">
              <h4 className="font-bold text-white text-sm">3. 서비스 문의</h4>
              <p>
                이용약관 관련 제반 사항은 운영자 메일 <code className="text-emerald-400">ju9896012@gmail.com</code>으로 문의하실 수 있습니다.
              </p>
            </section>
          </div>
        )}

        {view === 'disclaimer' && (
          <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-lg border-b border-slate-800 pb-3">
              <AlertCircle className="w-5 h-5" />
              <span>{lang === 'ko' ? '수익 및 보증 면책조항 (Earnings Disclaimer)' : 'Earnings Disclaimer'}</span>
            </div>

            <section className="space-y-2 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-200">
              <h4 className="font-bold text-amber-400 text-sm">수익 보장 불가 안내</h4>
              <p>
                본 사이트에서 제공하는 [애드센스 실시간 수익 계산기] 및 예상 수익 시뮬레이션 결과는 사용자가 입력한 예상 트래픽과 가상의 CPC/CTR 매개변수를 바탕으로 계산된 단순 추정치입니다.
              </p>
              <p>
                실제 구글 애드센스 광고 수익은 광고주 입찰 단가, 방문자의 국가, 트래픽 유입 경로, 계절성 및 구글 정책에 따라 크게 변동될 수 있으며, 본 사이트는 특정 수입 금액이나 애드센스 승인을 법적으로 보장하지 않습니다.
              </p>
            </section>
          </div>
        )}

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
          >
            {lang === 'ko' ? '닫기' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
