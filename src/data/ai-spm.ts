import type { AICapability, AITool, ValueProp, Feature } from '@/types';

export const aiCapabilities: AICapability[] = [
  {
    id: 'pattern-recognition',
    title: 'Pattern Recognition',
    description: 'AI identifies risk patterns across thousands of projects in seconds—patterns that would take humans weeks to spot.',
    icon: 'Brain',
    examples: ['Schedule compression traps', 'Resource bottleneck indicators', 'Cost escalation triggers'],
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics',
    description: 'Move from reactive firefighting to proactive intervention with AI-powered forecasting.',
    icon: 'TrendingUp',
    examples: ['Milestone slip probability', 'Budget overrun risk scoring', 'Resource conflict prediction'],
  },
  {
    id: 'natural-language',
    title: 'Natural Language Analysis',
    description: 'Extract insights from status reports, emails, and meeting notes that humans miss.',
    icon: 'MessageSquare',
    examples: ['Sentiment analysis in status reports', 'Risk language detection', 'Stakeholder concern tracking'],
  },
  {
    id: 'automated-reporting',
    title: 'Automated Intelligence',
    description: 'Generate executive-ready insights without manual data wrangling.',
    icon: 'FileText',
    examples: ['Auto-generated health dashboards', 'Anomaly detection alerts', 'Trend analysis reports'],
  },
];

export const aiTools: AITool[] = [
  {
    id: 'plan-smell-test',
    name: 'Plan Smell Test',
    description: 'Upload a schedule and get instant AI analysis of potential issues, unrealistic assumptions, and hidden risks.',
    icon: 'Search',
    status: 'available',
  },
  {
    id: 'risk-scan',
    name: 'Risk Scan',
    description: 'Automated analysis of project documentation to identify risks human reviewers commonly miss.',
    icon: 'Shield',
    status: 'available',
  },
  {
    id: 'intelligence-audit',
    name: 'Plan Intelligence Audit',
    description: 'Comprehensive AI-powered assessment combining schedule analysis, resource modeling, and risk scoring.',
    icon: 'Sparkles',
    status: 'available',
  },
  {
    id: 'predictive-platform',
    name: 'Predictive Platform',
    description: 'Full-featured AI platform for continuous project intelligence. Coming Q1 2025.',
    icon: 'Rocket',
    status: 'coming-soon',
  },
];

export const painPoints: ValueProp[] = [
  {
    id: 'data-overload',
    title: 'Drowning in Data',
    description: 'Teams spend 60% of their time collecting and formatting data instead of analyzing it.',
    icon: 'Database',
  },
  {
    id: 'reactive-mode',
    title: 'Always Reactive',
    description: 'By the time issues are visible in reports, it\'s often too late to prevent impact.',
    icon: 'AlertTriangle',
  },
  {
    id: 'hidden-patterns',
    title: 'Hidden Patterns',
    description: 'Human analysts can\'t process the volume of data needed to spot emerging risks.',
    icon: 'Eye',
  },
  {
    id: 'manual-reporting',
    title: 'Manual Reporting',
    description: 'Executive dashboards require hours of manual effort that could be automated.',
    icon: 'Clock',
  },
];

export const whyToddForAI: Feature[] = [
  {
    id: 'spm-expertise',
    title: '25+ Years SPM Experience',
    description: 'Deep domain expertise to know which problems AI can actually solve—and which it can\'t.',
    icon: 'Award',
  },
  {
    id: 'ai-implementation',
    title: 'AI Implementation Track Record',
    description: 'Proven success deploying AI solutions in complex enterprise environments.',
    icon: 'Cpu',
  },
  {
    id: 'vendor-agnostic',
    title: 'Vendor Agnostic',
    description: 'No vendor relationships cloud my recommendations. Your success is the only agenda.',
    icon: 'Scale',
  },
  {
    id: 'practical-approach',
    title: 'Practical, Not Theoretical',
    description: 'Focus on implementations that deliver measurable ROI, not science experiments.',
    icon: 'Target',
  },
];

export const aiServices: Feature[] = [
  {
    id: 'ai-readiness',
    title: 'AI Readiness Assessment',
    description: 'Evaluate your SPM maturity and identify the highest-impact AI opportunities for your organization.',
    icon: 'ClipboardCheck',
    href: '/contact?service=ai-readiness',
  },
  {
    id: 'ai-strategy',
    title: 'AI Strategy Development',
    description: 'Build a practical roadmap for AI adoption that aligns with your business goals and existing systems.',
    icon: 'Map',
    href: '/contact?service=ai-strategy',
  },
  {
    id: 'pilot-implementation',
    title: 'Pilot Implementation',
    description: 'Guided implementation of targeted AI solutions with measurable success criteria.',
    icon: 'Rocket',
    href: '/contact?service=ai-pilot',
  },
  {
    id: 'ai-governance',
    title: 'AI Governance Framework',
    description: 'Establish policies, processes, and controls for responsible AI use in project management.',
    icon: 'Shield',
    href: '/contact?service=ai-governance',
  },
];

export const stats = {
  experienceYears: 25,
  projectsAnalyzed: '500+',
  aiImplementations: 12,
  clientSatisfaction: '98%',
};
