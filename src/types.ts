export type Language = 'ko' | 'en';

export interface TranslationText {
  ko: string;
  en: string;
}

export interface StepItem {
  number: number;
  title: Record<Language, string>;
  description: Record<Language, string>;
  detail: Record<Language, string>;
  codeSnippet?: string;
  codeLanguage?: string;
  visualType?: 'flow' | 'code' | 'dashboard' | 'adstxt' | 'placement' | 'policy';
  proTip?: Record<Language, string>;
  warning?: Record<Language, string>;
}

export interface Chapter {
  id: string;
  number: number;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  summary: Record<Language, string>;
  readTime: Record<Language, string>;
  icon: string; // Lucide icon name string key
  steps: StepItem[];
}

export interface AuditCriterion {
  id: string;
  category: 'content' | 'legal' | 'tech' | 'ux';
  title: Record<Language, string>;
  description: Record<Language, string>;
  weight: number; // percentage or points
  mandatoryForAdsense: boolean;
  recommendation: Record<Language, string>;
}

export interface FaqItem {
  id: string;
  question: Record<Language, string>;
  answer: Record<Language, string>;
  category: 'approval' | 'rejection' | 'revenue' | 'policy';
  solution?: Record<Language, string>;
}

export interface TermDefinition {
  term: string;
  abbr?: string;
  definition: Record<Language, string>;
  example?: Record<Language, string>;
}

export type ActiveView = 'home' | 'chapters' | 'audit' | 'calculator' | 'adstxt' | 'heatmap' | 'faq' | 'glossary' | 'privacy' | 'terms' | 'disclaimer' | 'contact';
