import { AuditCriterion } from '../types';

export const AUDIT_CRITERIA: AuditCriterion[] = [
  {
    id: 'crit-content-quantity',
    category: 'content',
    title: {
      ko: '콘텐츠 분량 및 글 개수 (20개 이상 추천)',
      en: 'Content Volume (20+ Quality Articles)'
    },
    description: {
      ko: '사이트에 전문성 있는 글이 최소 15~20개 이상 게시되어 있는지 점검합니다.',
      en: 'Checks whether the site has at least 15-20 original, substantive posts published.'
    },
    weight: 20,
    mandatoryForAdsense: true,
    recommendation: {
      ko: '글 하나당 최소 1,000자 이상, 총 15~20개 이상의 발행된 글을 보유해야 "가치있는 인벤토리: 콘텐츠 부족" 거절을 방지합니다.',
      en: 'Aim for 1,000+ words per article with at least 15-20 published posts to pass "Low Value Content" checks.'
    }
  },
  {
    id: 'crit-privacy-policy',
    category: 'legal',
    title: {
      ko: '개인정보처리방침 (AdSense DART 쿠키 명시)',
      en: 'Privacy Policy Page (With DART Cookie Clause)'
    },
    description: {
      ko: '개인정보처리방침에 Google 애드센스 쿠키 및 맞춤형 광고 관련 조항이 명시되어 있는지 확인합니다.',
      en: 'Verifies if Privacy Policy includes required Google AdSense third-party cookie notices.'
    },
    weight: 25,
    mandatoryForAdsense: true,
    recommendation: {
      ko: '푸터에 개인정보처리방침 링크를 생성하고 "Google 및 제3자 판매자가 쿠키를 사용하여 사용자의 이전 방문 기록을 바탕으로 광고를 게재합니다"라는 내용을 기재하세요.',
      en: 'Add a footer link to Privacy Policy stating that Google and third-party vendors use cookies for personalized ads.'
    }
  },
  {
    id: 'crit-contact-info',
    category: 'legal',
    title: {
      ko: '문의하기 / 연락처 이메일 게시',
      en: 'Contact Us Page or Contact Email'
    },
    description: {
      ko: '방문자가 웹사이트 운영자에게 연락할 수 있는 메일 주소나 문의 양식이 공개되어 있는지 확인합니다.',
      en: 'Ensures users can reach out to site owner via a clear contact page or email.'
    },
    weight: 15,
    mandatoryForAdsense: true,
    recommendation: {
      ko: '소개 또는 푸터 영역에 명확한 문의 메일주소(예: ju9896012@gmail.com)를 기재하세요.',
      en: 'Publish a clear contact email address (e.g. ju9896012@gmail.com) in your footer or contact page.'
    }
  },
  {
    id: 'crit-navigation',
    category: 'ux',
    title: {
      ko: '명확한 상단 헤더 메뉴 및 카테고리 링크',
      en: 'Clear Main Header & Category Navigation'
    },
    description: {
      ko: '사용자가 주요 카테고리로 쉽게 이동할 수 있는 GNB 메뉴 및 404 에러 링크 제거 여부를 점검합니다.',
      en: 'Checks for active navigation links and absence of broken 404 links or empty placeholders.'
    },
    weight: 15,
    mandatoryForAdsense: true,
    recommendation: {
      ko: '메뉴에 빈 카테고리나 "준비 중" 페이지가 없어야 합니다. 클릭 시 모든 링크가 정해진 목적지로 정확히 연결되어야 합니다.',
      en: 'Remove empty "Under Construction" categories. Ensure all menu links point to valid content pages.'
    }
  },
  {
    id: 'crit-ssl-https',
    category: 'tech',
    title: {
      ko: 'HTTPS 보안 프로토콜 적용',
      en: 'HTTPS SSL Security Protocol'
    },
    description: {
      ko: '웹사이트 주소가 보안 연결인 `https://`로 작동하는지 점검합니다.',
      en: 'Ensures the website runs securely over https:// with an active SSL certificate.'
    },
    weight: 15,
    mandatoryForAdsense: true,
    recommendation: {
      ko: 'HTTP 연결은 애드센스 심사 시 보안 에러를 유발합니다. 무료 SSL(Let\'s Encrypt 또는 Cloudflare)을 적용하세요.',
      en: 'Non-secure HTTP triggers review warnings. Install a free SSL certificate via Cloudflare or Let\'s Encrypt.'
    }
  },
  {
    id: 'crit-mobile-responsive',
    category: 'ux',
    title: {
      ko: '모바일 반응형 웹 디자인 지원',
      en: 'Mobile Responsive Web Design'
    },
    description: {
      ko: '스마트폰 및 태블릿 화면에서도 콘텐츠와 메뉴가 깨지지 않고 정상 출력되는지 점검합니다.',
      en: 'Ensures site layout adapts seamlessly across mobile, tablet, and desktop screens.'
    },
    weight: 10,
    mandatoryForAdsense: false,
    recommendation: {
      ko: '트래픽의 70% 이상이 모바일에서 발생하므로 Viewport meta 태그와 반응형 CSS 레이아웃을 사용해야 합니다.',
      en: 'Over 70% of traffic is mobile. Ensure meta viewport tag and responsive fluid CSS are implemented.'
    }
  }
];
