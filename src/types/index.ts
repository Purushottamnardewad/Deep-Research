export interface ResearchStep {
  title: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
  expectedOutcome: string;
  result?: {
    content: string;
    sources: Source[];
    timestamp: string;
  };
}

export interface Source {
  title: string;
  link: string;
  snippet: string;
}

export interface ResearchReport {
  executiveSummary: string;
  sections: {
    title: string;
    content: string;
  }[];
  keyFindings: string[];
  recommendations: string[];
  futureResearch: string[];
  citations: string[];
}

export interface ResearchState {
  topic: string;
  plan: ResearchStep[];
  progress: number;
  currentStep: ResearchStep | null;
  completedSteps: ResearchStep[];
  report: ResearchReport | null;
  isActive: boolean;
}
