import { Chapter } from '../types';

export const CHAPTERS: Chapter[] = [
  {
    id: 'ch1-preparation',
    number: 1,
    title: {
      ko: '1장: 웹사이트 개발 및 애드센스 승인 조건 준비',
      en: 'Chapter 1: Website Development & AdSense Prerequisites'
    },
    subtitle: {
      ko: '애드센스 승인을 통과하기 위한 웹사이트 핵심 요건과 가치 있는 콘텐츠 제작법',
      en: 'Core website requirements and valuable content creation to pass AdSense review'
    },
    summary: {
      ko: '구글 애드센스는 단순히 웹사이트가 존재한다고 승인해 주지 않습니다. 유용한 콘텐츠, 명확한 탐색 구조, 최적화된 반응형 웹 및 필수 법적 정책 페이지가 준비되어 있어야 합니다.',
      en: 'Google AdSense does not approve sites just for being online. You need original content, clear navigation, mobile responsiveness, and mandatory policy pages.'
    },
    readTime: {
      ko: '약 7분 읽기',
      en: '7 min read'
    },
    icon: 'Layout',
    steps: [
      {
        number: 1,
        title: {
          ko: '독자적이고 유용한 고품질 콘텐츠 작성',
          en: 'Publish Unique & High-Value Content'
        },
        description: {
          ko: '‘가치 있는 인벤토리: 콘텐츠 없음’ 또는 ‘콘텐츠 부족’ 거절을 방지하려면 최소 15~20개 이상의 1,000자 이상 독창적인 글이 필요합니다.',
          en: 'To avoid "Valuable Inventory: No content" rejections, write at least 15–20 original posts with 1,000+ words each.'
        },
        detail: {
          ko: '단순 복사글이나 생성형 AI로 성의 없이 양산된 글은 구글 서치 콘솔 및 애드센스 정책에 의해 즉시 감지됩니다. 특정 주제(엔지니어링, 경제, 가이드 등)에 집중된 전문성 있는 글을 작성하세요.',
          en: 'Copied or low-quality AI-generated spam is detected by Google search algorithms. Focus on specialized topics with clear insights, structure, and original examples.'
        },
        proTip: {
          ko: '각 글에 소제목(H2, H3), 이미지 설명(alt 태그), 목록(bullet points)을 활용하면 읽기 쉽고 SEO 점수가 높아집니다.',
          en: 'Use headings (H2, H3), alt tags on images, and bullet points to improve readability and SEO scores.'
        },
        warning: {
          ko: '타인의 글을 무단 불펌하거나 저작권 침해 이미지/음원을 사용할 경우 즉시 계정 정지 대상이 됩니다.',
          en: 'Plagiarizing text or using copyrighted images/audio leads to immediate rejection or account suspension.'
        },
        visualType: 'dashboard'
      },
      {
        number: 2,
        title: {
          ko: '사이트 탐색 구조 및 UI/UX 단순화',
          en: 'Structure Site Navigation & User Experience'
        },
        description: {
          ko: '상단 네비게이션 바(GNB), 카테고리, 푸터 메뉴가 명확해야 ‘사이트 동작: 탐색’ 거절을 피할 수 있습니다.',
          en: 'Clear global navigation bar, categories, and footer links prevent "Site Behavior: Navigation" rejections.'
        },
        detail: {
          ko: '방문자가 원하는 정보를 2회 클릭 이내에 찾을 수 있어야 합니다. 작동하지 않는 데드 링크(404 에러)나 ‘준비 중인 페이지’가 없도록 깔끔하게 정돈하세요.',
          en: 'Users should reach desired info within 2 clicks. Eliminate broken 404 links or "Under Construction" placeholder pages.'
        },
        codeSnippet: `<!-- ✅ Example of clean semantic navigation structure -->
<header class="site-header">
  <nav aria-label="Main Navigation">
    <ul class="nav-list">
      <li><a href="/">홈 (Home)</a></li>
      <li><a href="/guides">가이드 (Guides)</a></li>
      <li><a href="/tools">도구 (Tools)</a></li>
      <li><a href="/about">소개 (About)</a></li>
    </ul>
  </nav>
</header>`,
        codeLanguage: 'html',
        visualType: 'code'
      },
      {
        number: 3,
        title: {
          ko: '필수 법적 정책 페이지 필수 게시 (가장 중요!)',
          en: 'Publish Mandatory Legal & Policy Pages (Critical!)'
        },
        description: {
          ko: '개인정보처리방침(Privacy Policy), 이용약관, 소개 및 문의하기 페이지가 반드시 푸터에 연결되어 있어야 합니다.',
          en: 'Privacy Policy, Terms of Service, About, and Contact Us must be directly linked in the site footer.'
        },
        detail: {
          ko: '개인정보처리방침에는 "Google AdSense 및 제3자 쿠키(DART 쿠키)를 사용하여 사용자 맞춤형 광고를 제공합니다"라는 문구가 명시되어야 합니다. 문의 메일주소(ju9896012@gmail.com)도 명확히 기재하세요.',
          en: 'The Privacy Policy must explicitly state that Google and third-party vendors use cookies (including DART cookies) to serve personalized ads based on user visits. Include contact email ju9896012@gmail.com.'
        },
        proTip: {
          ko: '본 웹사이트 하단의 [개인정보처리방침] 메뉴를 참고하시면 애드센스 표준 정책 양식을 확인하실 수 있습니다.',
          en: 'Refer to the Privacy Policy link at the bottom of this website for an AdSense-compliant standard template.'
        },
        visualType: 'policy'
      }
    ]
  },
  {
    id: 'ch2-account-setup',
    number: 2,
    title: {
      ko: '2장: 구글 애드센스 가입 및 웹사이트 신청',
      en: 'Chapter 2: Creating AdSense Account & Submitting Site'
    },
    subtitle: {
      ko: '애드센스 계정 생성, 사이트 URL 등록 및 소유권 확인 심사 과정',
      en: 'Setting up Google AdSense account, registering domain, and site ownership review'
    },
    summary: {
      ko: '구글 계정으로 애드센스에 가입한 후 도메인을 등록하고, 사이트의 `<head>` 태그 내에 구글 지급인 코드(Publisher Code)를 삽입하여 심사를 요하는 과정입니다.',
      en: 'Sign up with a Google account, add your domain URL, and insert the Publisher verification script into your site header.'
    },
    readTime: {
      ko: '약 5분 읽기',
      en: '5 min read'
    },
    icon: 'UserCheck',
    steps: [
      {
        number: 1,
        title: {
          ko: '구글 애드센스 계정 가입 및 지급 정보 입력',
          en: 'Sign Up for AdSense & Provide Payment Info'
        },
        description: {
          ko: 'Google 계정으로 adsense.google.com에 접속하여 수입을 지급받을 국가 및 개인/사업자 정보를 작성합니다.',
          en: 'Visit adsense.google.com with your Google account and fill in billing country and payment details.'
        },
        detail: {
          ko: '지급받을 수취인 이름은 추후 영문 통장 명의 및 본인 인증 정보와 정확히 일치해야 나중에 $100 달성 시 외화 입금 문제가 발생하지 않습니다.',
          en: 'Ensure your payee name matches your bank account and ID exactly to prevent payout issues once reaching the $100 threshold.'
        },
        visualType: 'dashboard'
      },
      {
        number: 2,
        title: {
          ko: '사이트 URL 등록 및 도메인 연결',
          en: 'Add Your Site Domain'
        },
        description: {
          ko: '자신의 최상위 도메인(예: example.com) 또는 지원되는 서브도메인을 등록합니다.',
          en: 'Register your root domain (e.g. example.com) or supported platform subdomain.'
        },
        detail: {
          ko: '2차 도메인(개인 도메인)을 사용할 경우 `www` 포함 및 미포함 연결 모두 정상 동작하는지 CNAME / A 레코드를 미리 점검하세요.',
          en: 'If using custom domain, verify both root and www DNS records (A and CNAME records) are correctly configured with SSL/HTTPS enabled.'
        },
        proTip: {
          ko: 'HTTP가 아닌 HTTPS(보안 연결)가 설정되어 있어야 보안 심사를 무사히 통과할 수 있습니다.',
          en: 'Ensure HTTPS SSL certificate is active. Non-secure HTTP sites face approval friction.'
        },
        visualType: 'flow'
      }
    ]
  },
  {
    id: 'ch3-code-integration',
    number: 3,
    title: {
      ko: '3장: 애드센스 연동 코드 적용 및 웹사이트 구현',
      en: 'Chapter 3: Script Integration & Code Implementation'
    },
    subtitle: {
      ko: 'HTML5, React, Next.js, Vue 등 웹 프레임워크별 스크립트 연결 방법',
      en: 'How to insert script tags across HTML5, React, Next.js, and modern web frameworks'
    },
    summary: {
      ko: '구글에서 발급된 클라이언트 ID(`ca-pub-xxxxxxxxxxxxxxxx`)가 포함된 `<script>` 태그를 웹사이트 전역에 로드하는 기술적인 구현 가이드입니다.',
      en: 'Technical implementation guide for embedding the client script tag containing ca-pub-xxxxxxxxxxxxxxxx across your application.'
    },
    readTime: {
      ko: '약 8분 읽기',
      en: '8 min read'
    },
    icon: 'Code',
    steps: [
      {
        number: 1,
        title: {
          ko: '기본 HTML5 / index.html 헤더 스크립트 작성',
          en: 'Standard HTML5 `<head>` Script Insertion'
        },
        description: {
          ko: '`<head>`와 `</head>` 사이 최상단에 비동기(async) 방식으로 구글 애드센스 JS 라이브러리를 로드합니다.',
          en: 'Load the Google AdSense JS library asynchronously inside the `<head>` tag of your index.html file.'
        },
        detail: {
          ko: '`crossorigin="anonymous"` 속성을 지정하여 스크립트 교차 출처 에러를 방지하세요.',
          en: 'Use `crossorigin="anonymous"` to avoid cross-origin script exceptions in modern browsers.'
        },
        codeSnippet: `<!-- index.html <head> 내부 -->
<script async 
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456"
  crossorigin="anonymous">
</script>`,
        codeLanguage: 'html',
        visualType: 'code'
      },
      {
        number: 2,
        title: {
          ko: 'React / SPA 프레임워크 전용 AdSense 컴포넌트 구현',
          en: 'React / SPA Reusable Ad Component'
        },
        description: {
          ko: '리액트 컴포넌트 생명주기에 맞춰 안전하게 광고 수동 호출(`adsbygoogle.push({})`)을 처리합니다.',
          en: 'Safely trigger `adsbygoogle.push({})` inside React component hooks without duplicate rendering bugs.'
        },
        detail: {
          ko: 'SPA(단일 페이지 애플리케이션)에서는 페이지가 라우팅될 때 기존 광고 슬롯이 중복 푸시되지 않도록 `try-catch` 블록으로 예외 처리하는 것이 좋습니다.',
          en: 'In Single Page Apps, wrap the push call in try-catch to handle client-side route changes seamlessly.'
        },
        codeSnippet: `import React, { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdUnitProps {
  client: string; // 'ca-pub-xxxxxxxxxxxxxxxx'
  slot: string;   // '1234567890'
  format?: 'auto' | 'fluid' | 'rectangle';
  responsive?: boolean;
}

export const AdSenseUnit: React.FC<AdUnitProps> = ({
  client,
  slot,
  format = 'auto',
  responsive = true
}) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense push error:', err);
    }
  }, []);

  return (
    <div className="my-6 flex justify-center overflow-hidden min-h-[90px]">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
};`,
        codeLanguage: 'typescript',
        visualType: 'code'
      },
      {
        number: 3,
        title: {
          ko: '자동 광고(Auto Ads) vs 수동 광고 단위(Manual Ads) 선택',
          en: 'Auto Ads vs Manual Ad Units Choice'
        },
        description: {
          ko: '초보자는 구글 AI가 자동으로 최적의 위치에 광고를 노출하는 "자동 광고" 설정을 추천합니다.',
          en: 'For beginners, Auto Ads uses Google AI to automatically place optimal ads across your layout.'
        },
        detail: {
          ko: '자동 광고를 활성화하면 별도의 HTML 광고 코드를 본문에 일일이 넣지 않아도 헤더 태그 하나만으로 전면 광고, 앵커 광고, 사이드바 광고 등이 자동으로 배치됩니다.',
          en: 'Enabling Auto Ads automatically injects anchor ads, vignette full-page ads, and in-feed units with zero layout editing.'
        },
        visualType: 'placement'
      }
    ]
  },
  {
    id: 'ch4-adstxt-setup',
    number: 4,
    title: {
      ko: '4장: ads.txt 파일 생성 및 크롤러 손실 방지',
      en: 'Chapter 4: ads.txt Setup & Crawler Risk Prevention'
    },
    subtitle: {
      ko: '‘수익 손실 위험 - ads.txt 파일을 찾을 수 없음’ 경고 해결 가이드',
      en: 'Solving "Earnings at risk - You need to fix ads.txt issues" warning'
    },
    summary: {
      ko: '`ads.txt`(Authorized Digital Sellers) 파일은 내 사이트의 광고 공간을 판매할 권한이 있는 대행사를 구글 크롤러에게 인증해 주는 파일입니다.',
      en: 'An ads.txt file explicitly identifies who is authorized to sell ads on your website, protecting your ad revenue from fraud.'
    },
    readTime: {
      ko: '약 4분 읽기',
      en: '4 min read'
    },
    icon: 'FileText',
    steps: [
      {
        number: 1,
        title: {
          ko: 'ads.txt 한 줄 규격 작성',
          en: 'ads.txt Standard Format Line'
        },
        description: {
          ko: '자신의 퍼블리셔 ID를 적용하여 표준 레코드를 생성합니다.',
          en: 'Create the authorized Google seller record with your Publisher ID.'
        },
        detail: {
          ko: '구글 애드센스의 표준 레코드 형식은 `google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0` 입니다.',
          en: 'The standardized Google seller line format is `google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0`.'
        },
        codeSnippet: `# Google AdSense Authorized Seller
google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0`,
        codeLanguage: 'text',
        visualType: 'adstxt'
      },
      {
        number: 2,
        title: {
          ko: '루트 경로(/ads.txt) 게시 및 확인법',
          en: 'Host at Root Path (/ads.txt)'
        },
        description: {
          ko: '웹 서버의 가장 최상위 public 루트 디렉터리에 `ads.txt`로 업로드합니다.',
          en: 'Place the ads.txt file directly inside your web server’s root `/public` folder.'
        },
        detail: {
          ko: '브라우저 주소창에 `https://yourdomain.com/ads.txt`로 접속했을 때 텍스트가 바로 출력되어야 구글 애드센스 크롤러가 성공적으로 인식합니다.',
          en: 'Visiting https://yourdomain.com/ads.txt in your browser must directly display the plain text content without redirects.'
        },
        proTip: {
          ko: '본 사이트의 [ads.txt 생성기] 도구를 활용하시면 클릭 한 번으로 내 ID가 들어간 완벽한 ads.txt를 다운로드할 수 있습니다.',
          en: 'Use the interactive [ads.txt Generator] tool on this website to generate and download your formatted file instantly.'
        },
        visualType: 'adstxt'
      }
    ]
  },
  {
    id: 'ch5-revenue-optimization',
    number: 5,
    title: {
      ko: '5장: 광고 배치 전략 및 수익(RPM/CTR) 최적화',
      en: 'Chapter 5: Ad Placement Strategy & Revenue Optimization'
    },
    subtitle: {
      ko: '사용자 경험을 해치지 않으면서 클릭률(CTR)과 eCPM을 극대화하는 노하우',
      en: 'Maximizing CTR and eCPM while maintaining excellent page UX'
    },
    summary: {
      ko: '무작정 광고를 많이 넣는다고 수익이 늘지 않습니다. 클릭률이 높은 골든 존(Golden Zone)을 파악하고 모바일 반응형에 최적화된 배치가 핵심입니다.',
      en: 'Adding too many ads degrades UX and reduces RPM. Focus on golden placement zones, high viewability, and mobile layout flow.'
    },
    readTime: {
      ko: '약 6분 읽기',
      en: '6 min read'
    },
    icon: 'TrendingUp',
    steps: [
      {
        number: 1,
        title: {
          ko: '가장 수익률이 높은 3대 골든 스팟',
          en: 'Top 3 Golden Ad Placement Zones'
        },
        description: {
          ko: '1) 본문 상단(제목 직후), 2) 본문 중간 삽입, 3) 글 하단 결론 직후입니다.',
          en: '1) Below article header, 2) In-article mid-content, 3) End of article before comments.'
        },
        detail: {
          ko: '특히 본문 상단 반응형 사각형(300x250 또는 반응형 디스플레이) 광고는 시선이 가장 먼저 닿는 곳으로 전체 수익의 40~50% 이상을 차지합니다.',
          en: 'Top in-article responsive square or leaderboard ads account for 40-50% of total revenue due to instant viewability.'
        },
        visualType: 'placement'
      },
      {
        number: 2,
        title: {
          ko: 'CTR(클릭률)과 RPM 수치 이해 및 목표 설정',
          en: 'Understanding CTR, CPC, and Page RPM Goals'
        },
        description: {
          ko: 'RPM(페이지 1,000회 노출당 예상 수익) = (예상 수익 / 페이지 조회수) * 1000',
          en: 'Page RPM = (Estimated earnings / Number of page views) * 1,000'
        },
        detail: {
          ko: '일반적인 IT/블로그 분야의 평균 CTR은 1.5% ~ 3.5%, CPC(클릭당 단가)는 $0.20 ~ $1.50 수준입니다. 금융/학술/비즈니스 키워드는 CPC가 $3.00 이상으로 높아집니다.',
          en: 'Average content site CTR ranges from 1.5% to 3.5%, with CPC between $0.20 and $1.50+. High-value finance/tech niches reach $3.00+ CPC.'
        },
        proTip: {
          ko: '본 사이트의 [수익 계산기] 메뉴에서 내 목표 방문자수별 예상 달러/원화 수입을 실시간으로 계산해보세요.',
          en: 'Try our interactive [Revenue Calculator] tool to project daily and monthly earnings in USD or KRW.'
        },
        visualType: 'dashboard'
      }
    ]
  },
  {
    id: 'ch6-policy-troubleshooting',
    number: 6,
    title: {
      ko: '6장: 애드센스 거절 사유 해결 및 정책 센터 관리',
      en: 'Chapter 6: AdSense Rejections & Policy Violations Troubleshooting'
    },
    subtitle: {
      ko: '‘가치있는 인벤토리’, ‘사이트 동작’ 등 단골 거절 사유 극복 방안 및 무효 클릭 예방',
      en: 'Overcoming common rejection reasons and preventing invalid traffic bans'
    },
    summary: {
      ko: '애드센스 신청 후 거절 통보를 받더라도 낙담할 필요 없습니다. 구글이 지적하는 정책 위반 항목을 수정하고 바로 재신청하면 승인받을 수 있습니다.',
      en: 'Getting rejected is common. Identify the specific policy feedback, fix content or structural bugs, and request re-review.'
    },
    readTime: {
      ko: '약 7분 읽기',
      en: '7 min read'
    },
    icon: 'ShieldAlert',
    steps: [
      {
        number: 1,
        title: {
          ko: '‘가치 있는 인벤토리: 콘텐츠 부족’ 해결책',
          en: 'Fixing "Valuable Inventory: Low Value Content"'
        },
        description: {
          ko: '글의 개수가 적거나 각 글의 내용이 너무 짧을 때 발생하는 대표적인 거절 원인입니다.',
          en: 'Occurs when site has too few posts or articles lack thorough depth.'
        },
        detail: {
          ko: '해결책: 글의 개수를 20개 이상으로 늘리고, 글마다 최소 1,200자 이상의 알찬 내용과 직접 만든 설명 이미지, 관련 도표를 추가하세요.',
          en: 'Solution: Expand post count to 20+, ensure each article exceeds 1,200 words, add custom diagrams, and remove empty categories.'
        },
        visualType: 'policy'
      },
      {
        number: 2,
        title: {
          ko: '자체 클릭 및 무효 트래픽(Invalid Clicks) 엄금',
          en: 'Strict Prohibition of Self-Clicks & Invalid Traffic'
        },
        description: {
          ko: '자신의 사이트에 게재된 광고를 스스로 클릭하거나 지인에게 클릭을 부탁하면 계정이 즉시 30일 정지되거나 영구 박탈됩니다.',
          en: 'Never click your own ads or ask friends to click. Google AI detects IP, cookie patterns, and revokes accounts.'
        },
        detail: {
          ko: '구글의 무효 트래픽 감지 AI 시스템은 클릭 유도 문구("광고 클릭해 주세요", "후원하기")나 봇/자동 프로그램 트래픽을 엄격히 처벌합니다.',
          en: 'Google uses advanced AI to track click behavior. Phrases like "Click ads to support us" violate policies immediately.'
        },
        warning: {
          ko: '‘광고를 눌러주세요’라는 유도 문구는 100% 애드센스 계정 영구 정지 사유입니다.',
          en: 'Encouraging ad clicks with wording like "Please click ads" guarantees permanent account ban.'
        },
        visualType: 'policy'
      }
    ]
  }
];
