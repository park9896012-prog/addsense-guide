import { TermDefinition } from '../types';

export const GLOSSARY_TERMS: TermDefinition[] = [
  {
    term: 'Page RPM',
    abbr: 'RPM',
    definition: {
      ko: '페이지 1,000회 노출당 수입. (예상 수입 / 페이지 조회수) × 1,000 으로 계산되는 웹사이트 수익성의 핵심 지표입니다.',
      en: 'Page Revenue Per Mille. Estimated earnings per 1,000 pageviews = (Earnings / Page views) × 1,000.'
    },
    example: {
      ko: '페이지 조회수가 10,000회이고 수입이 $30라면, RPM은 $3.00 입니다.',
      en: 'If you earn $30 from 10,000 pageviews, your Page RPM is $3.00.'
    }
  },
  {
    term: 'Click-Through Rate',
    abbr: 'CTR',
    definition: {
      ko: '광고 클릭률. (광고 클릭 수 / 광고 노출 수) × 100 으로 계산됩니다.',
      en: 'Ratio of ad clicks to total ad impressions. (Clicks / Impressions) × 100.'
    },
    example: {
      ko: '광고가 1,000회 노출되고 20회 클릭되었다면 CTR은 2.0% 입니다.',
      en: '1,000 ad impressions with 20 clicks equals a 2.0% CTR.'
    }
  },
  {
    term: 'Cost Per Click',
    abbr: 'CPC',
    definition: {
      ko: '광고 1회 클릭당 광고주가 지불하고 퍼블리셔가 얻는 단가입니다. 광고 주제, 키워드 경쟁도, 방문자 국가에 따라 크게 달라집니다.',
      en: 'Amount earned each time a user clicks an ad. Depends on advertiser competition, niche, and country.'
    },
    example: {
      ko: 'IT/금융 분야는 클릭당 $1.00~$3.00 이상, 일상 블로그는 $0.10~$0.30 수준입니다.',
      en: 'Tech/finance niches command $1.00–$3.00+ CPC, while casual blogs average $0.10–$0.30.'
    }
  },
  {
    term: 'ads.txt',
    abbr: 'ads.txt',
    definition: {
      ko: 'Authorized Digital Sellers의 약자로, 웹사이트 소유자가 디지털 광고 공간을 판매하도록 승인한 판매자를 명시하는 대화형 텍스트 파일입니다.',
      en: 'Authorized Digital Sellers file listing entities authorized to sell ad inventory on your site to prevent ad fraud.'
    }
  },
  {
    term: 'Invalid Traffic',
    abbr: 'IVT',
    definition: {
      ko: '무효 트래픽. 인위적으로 클릭수를 올리거나 봇 트래픽, 본인 클릭, 지인 동려 클릭 등 정당하지 않은 광고 상호작용입니다.',
      en: 'Non-genuine traffic including self-clicks, click rings, automated bots, or deceptive layouts.'
    }
  },
  {
    term: 'Auto Ads',
    abbr: 'Auto Ads',
    definition: {
      ko: '구글 AI가 웹사이트 구조를 분석하여 가장 적절한 위치와 타이밍에 광고를 자동으로 삽입해주는 애드센스 기능입니다.',
      en: 'Google machine learning feature that automatically places and optimizes ads across your layout.'
    }
  }
];
