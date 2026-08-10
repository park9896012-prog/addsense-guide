import { FaqItem } from '../types';

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'approval',
    question: {
      ko: '애드센스 승인 심사는 보통 얼마나 걸리나요?',
      en: 'How long does Google AdSense approval usually take?'
    },
    answer: {
      ko: '보통 1일에서 2주일 정도 소요됩니다. 드물게 구글 시스템 크롤링 상황에 따라 최대 4주까지 걸릴 수 있습니다.',
      en: 'Typically takes 1 to 14 days. On rare occasions depending on crawler status, it can take up to 4 weeks.'
    },
    solution: {
      ko: '심사 기간 동안 사이트에 2~3일에 하나씩 꾸준히 고품질 글을 계속 추가해주면 심사 속도가 빨라지는 경향이 있습니다.',
      en: 'Adding 1-2 new articles during the review period demonstrates active maintenance and speeds up crawler review.'
    }
  },
  {
    id: 'faq-2',
    category: 'rejection',
    question: {
      ko: '‘가치있는 인벤토리: 콘텐츠 부족’으로 거절당했어요. 어떻게 해야 하나요?',
      en: 'My site was rejected for "Valuable Inventory: Low Value Content". What should I do?'
    },
    answer: {
      ko: '이 거절 사유는 글 개수가 적거나, 글 길이가 짧거나, 다른 사이트의 글과 유사한 내용이 많을 때 발생합니다.',
      en: 'This happens when article count is low, content length is short, or articles lack depth compared to indexed web sources.'
    },
    solution: {
      ko: '1) 비공개나 임시저장 글을 게시로 전환하세요. 2) 1,500자 이상의 고품질 글 5~10개를 추가하세요. 3) 빈 카테고리를 삭제하세요. 4) 수정 후 바로 재신청하세요.',
      en: '1) Publish draft posts. 2) Add 5–10 comprehensive articles (1,500+ words). 3) Delete empty categories. 4) Re-submit for review.'
    }
  },
  {
    id: 'faq-3',
    category: 'rejection',
    question: {
      ko: '‘사이트 동작: 탐색’ 거절 원인과 해결법은 무엇인가요?',
      en: 'What causes "Site Behavior: Navigation" rejection and how to fix it?'
    },
    answer: {
      ko: '메뉴 링크를 눌렀을 때 페이지가 열리지 않거나(404 에러), "준비 중인 페이지"가 연결되어 있거나, 드롭다운 메뉴가 먹통일 때 발생합니다.',
      en: 'Occurs when header links lead to 404 broken pages, "Under Construction" pages, or mobile menus fail to open properly.'
    },
    solution: {
      ko: '모든 상단/하단 메뉴의 링크가 실제 콘텐츠가 있는 정식 페이지로 이동하는지 하나하나 점검하고 수정하세요.',
      en: 'Verify that every link in your header and footer navigates to a fully published page with functional content.'
    }
  },
  {
    id: 'faq-4',
    category: 'revenue',
    question: {
      ko: '애드센스 정산 기준 금액과 지급 받는 날짜는 언제인가요?',
      en: 'What is the AdSense payout threshold and monthly payment schedule?'
    },
    answer: {
      ko: '누적 수익이 최소 $100(미화 100 달러)를 달성하면 익월 21일~26일 사이에 지정한 은행 계좌로 외화 송금됩니다.',
      en: 'Once your accumulated balance reaches $100 USD, payments are dispatched between the 21st and 26th of the following month.'
    },
    solution: {
      ko: '최초 $10 달성 시 구글에서 주소 확인용 PIN 번호 우편물이 발송되며, $100 달성 전 은행 SWIFT 코드 및 외화 통장 정보를 등록해야 합니다.',
      en: 'When earnings reach $10, Google mails a physical PIN verification letter. Register your bank SWIFT code before reaching $100.'
    }
  },
  {
    id: 'faq-5',
    category: 'policy',
    question: {
      ko: 'ads.txt 경고가 계속 뜨는데 왜 그런가요?',
      en: 'Why does the ads.txt earnings at risk warning keep popping up?'
    },
    answer: {
      ko: '구글 크롤러가 `yourdomain.com/ads.txt` 파일에 접근할 수 없거나, 게시자 ID 번호에 오타가 있는 경우입니다.',
      en: 'This happens if Google crawler cannot access yourdomain.com/ads.txt or if your Publisher ID contains a typo.'
    },
    solution: {
      ko: '본 사이트의 [ads.txt 생성기]를 활용하여 pub-XXXXXXXXXXXXXXXX ID를 정확히 복사해 최상위 public 루트에 업로드하세요. 감지까지 며칠 걸릴 수 있습니다.',
      en: 'Use our [ads.txt Generator] tool to copy the exact code, host it at public root, and wait 2–4 days for Google crawler cache refresh.'
    }
  }
];
