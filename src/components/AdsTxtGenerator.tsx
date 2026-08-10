import React, { useState } from 'react';
import { Language } from '../types';
import { 
  FileCode, 
  Copy, 
  Check, 
  Download, 
  AlertTriangle, 
  HelpCircle, 
  CheckCircle2,
  Server
} from 'lucide-react';

interface AdsTxtGeneratorProps {
  lang: Language;
}

export const AdsTxtGenerator: React.FC<AdsTxtGeneratorProps> = ({ lang }) => {
  const [pubId, setPubId] = useState<string>('pub-1234567890123456');
  const [copied, setCopied] = useState<boolean>(false);

  // Clean raw ID input
  const cleanId = pubId.trim();
  const formattedPubId = cleanId.startsWith('pub-') ? cleanId : `pub-${cleanId}`;

  const adsTxtContent = `# Google AdSense Authorized Digital Sellers (ads.txt)
# Generated for: ${formattedPubId}
# Place this file at: https://yourdomain.com/ads.txt
google.com, ${formattedPubId}, DIRECT, f08c47fec0942fa0`;

  const isValidFormat = /^pub-\d{16}$/.test(formattedPubId);

  const handleCopy = () => {
    navigator.clipboard.writeText(adsTxtContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([adsTxtContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'ads.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10 text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
          <FileCode className="w-4 h-4" />
          <span>{lang === 'ko' ? '구글 공식 ads.txt 자동 생성기' : 'Official Google ads.txt Generator'}</span>
        </div>
        <h2 className="text-3xl font-black text-white">
          {lang === 'ko' ? 'ads.txt 파일 자동 생성 및 다운로드' : 'Instant ads.txt Generator & Installer'}
        </h2>
        <p className="text-sm text-slate-300">
          {lang === 'ko'
            ? '‘수익 손실 위험 - ads.txt 파일을 찾을 수 없음’ 애드센스 경고를 해결하기 위한 올바른 규격의 ads.txt를 1초 만에 생성하세요.'
            : 'Resolve the "Earnings at risk - You need to fix ads.txt issues" AdSense alert in seconds.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Input & Preview */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-white block">
              {lang === 'ko' ? '내 퍼블리셔 ID (Publisher ID) 입력' : 'Enter Your Google Publisher ID'}
            </label>
            <div className="relative">
              <input
                type="text"
                value={pubId}
                onChange={(e) => setPubId(e.target.value)}
                placeholder="pub-1234567890123456"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm font-mono text-emerald-400 focus:outline-none focus:border-emerald-500"
              />
            </div>
            <p className="text-xs text-slate-400">
              💡 {lang === 'ko' ? '애드센스 로그인 > 계정 > 설정 > 계정 정보에서 ‘pub-’로 시작하는 16자리 숫자 ID를 확인하실 수 있습니다.' : 'Find your 16-digit pub- ID under AdSense > Account > Settings > Account Information.'}
            </p>
          </div>

          {/* Format Validation Status */}
          {!isValidFormat ? (
            <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-300 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                {lang === 'ko'
                  ? '입력 형식을 점검해 주세요. 일반적으로 `pub-` 뒤에 16자리 숫자가 들어갑니다. (예: pub-1234567890123456)'
                  : 'Check input format. AdSense Publisher IDs typically consist of `pub-` followed by 16 digits.'}
              </span>
            </div>
          ) : (
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{lang === 'ko' ? '올바른 퍼블리셔 ID 형식입니다.' : 'Valid Google Publisher ID format.'}</span>
            </div>
          )}

          {/* Generated File Output Preview */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-300">
              <span>{lang === 'ko' ? '생성된 ads.txt 소스코드 미리보기' : 'Generated ads.txt File Preview'}</span>
              <span className="text-slate-500 font-mono">path: /public/ads.txt</span>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-xs text-amber-300 leading-relaxed overflow-x-auto relative group">
              <pre>{adsTxtContent}</pre>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              onClick={handleCopy}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">복사 완료!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>내용 복사하기 (Copy)</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>ads.txt 파일 다운로드</span>
            </button>
          </div>
        </div>

        {/* Right Host Guide */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5">
          <h3 className="font-bold text-white text-base flex items-center gap-2 pb-3 border-b border-slate-800">
            <Server className="w-4 h-4 text-amber-400" />
            <span>{lang === 'ko' ? '프레임워크별 게시 방법' : 'Deployment Instructions'}</span>
          </h3>

          <div className="space-y-4 text-xs text-slate-300">
            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <span className="font-bold text-emerald-400 block">1) React / Vite 프로젝트</span>
              <p className="text-slate-400 leading-relaxed">
                다운로드한 `ads.txt` 파일을 프로젝트 최상위 <code className="text-amber-300">/public/ads.txt</code> 경로에 복사하세요. 빌드 시 자동으로 루트에 포함됩니다.
              </p>
            </div>

            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <span className="font-bold text-blue-400 block">2) Express / Node.js 서버</span>
              <p className="text-slate-400 leading-relaxed">
                서버 라우트에 <code className="text-amber-300">app.use(express.static('public'))</code>를 설정하거나 <code className="text-amber-300">app.get('/ads.txt', ...)</code>로 직접 텍스트 응답을 서빙하세요.
              </p>
            </div>

            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <span className="font-bold text-purple-400 block">3) 정상 배치 동작 확인 법</span>
              <p className="text-slate-400 leading-relaxed">
                웹 브라우저 주소창에 <code className="text-amber-300">https://yourdomain.com/ads.txt</code>로 접속하여 생성된 텍스트가 바로 출력되는지 점검하세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
