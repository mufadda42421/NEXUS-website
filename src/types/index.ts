export interface FeatureItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  badge?: string;
  colSpan?: string;
  details: string[];
}

export interface ProviderItem {
  id: string;
  name: string;
  category: string;
  description: string;
  models: string[];
  latency: string;
  badge?: string;
}

export interface InstallStep {
  step: number;
  title: string;
  instruction: string;
  tip?: string;
  actionSnippet?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'privacy';
}

export interface DemoTask {
  id: string;
  label: string;
  prompt: string;
  pageUrl: string;
  pageTitle: string;
  steps: {
    title: string;
    description: string;
    codeSnippet?: string;
    status: 'pending' | 'running' | 'done';
  }[];
  finalOutput: {
    summary: string;
    keyPoints: string[];
    actionTaken: string;
  };
}
