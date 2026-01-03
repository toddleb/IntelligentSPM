export interface SPMConcept {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SPMProblem {
  id: string;
  title: string;
  symptoms: string[];
  causes: string[];
  solution: string;
  icon: string;
}

export interface SPMBestPractice {
  id: string;
  title: string;
  description: string;
  tips: string[];
  icon: string;
}

export const whatIsSPM = {
  headline: 'What is SPM?',
  definition:
    'Sales Performance Management (SPM) is the discipline of designing, implementing, and optimizing incentive compensation programs that drive sales behavior and business outcomes.',
  scope: [
    {
      id: 'plan-design',
      title: 'Plan Design',
      description:
        'Creating compensation structures, quotas, and incentive mechanisms that align sales behavior with business goals.',
      icon: 'PenTool',
    },
    {
      id: 'implementation',
      title: 'Implementation',
      description:
        'Translating plan designs into operational systems that calculate, track, and pay incentives accurately.',
      icon: 'Settings',
    },
    {
      id: 'governance',
      title: 'Governance',
      description:
        'Establishing processes for plan changes, exception handling, disputes, and ongoing management.',
      icon: 'Shield',
    },
    {
      id: 'analytics',
      title: 'Analytics',
      description:
        'Measuring plan effectiveness, identifying trends, and providing insights for continuous improvement.',
      icon: 'BarChart3',
    },
  ],
};

export const whySPMMatters = [
  {
    id: 'revenue',
    title: 'Drives Revenue',
    description:
      'Well-designed comp plans directly impact sales behavior and revenue outcomes.',
    stat: '15-25%',
    statLabel: 'revenue lift from optimized plans',
    icon: 'TrendingUp',
  },
  {
    id: 'retention',
    title: 'Retains Talent',
    description:
      'Fair, transparent compensation is the #1 factor in rep satisfaction and retention.',
    stat: '3x',
    statLabel: 'lower turnover with good plans',
    icon: 'Users',
  },
  {
    id: 'cost',
    title: 'Controls Cost',
    description:
      'SPM ensures you pay for results, not just activity—protecting margins.',
    stat: '20%',
    statLabel: 'reduction in overpayments',
    icon: 'Wallet',
  },
  {
    id: 'compliance',
    title: 'Ensures Compliance',
    description:
      'Proper SPM reduces legal risk from wage disputes and misclassification.',
    stat: '80%',
    statLabel: 'of disputes are avoidable',
    icon: 'Scale',
  },
];

export const commonProblems: SPMProblem[] = [
  {
    id: 'complexity',
    title: 'Plan Complexity',
    symptoms: [
      'Reps can\'t explain their own plan',
      'Comp team spends weeks on calculations',
      'Constant disputes and exceptions',
    ],
    causes: [
      'Too many components added over time',
      'Trying to solve behavior issues with comp',
      'Lack of plan governance',
    ],
    solution:
      'Simplify to 3-5 core metrics with clear thresholds. Complexity rarely improves outcomes.',
    icon: 'Puzzle',
  },
  {
    id: 'misalignment',
    title: 'Behavior Misalignment',
    symptoms: [
      'Reps gaming the system',
      'Sandbagging deals',
      'Focus on easy wins over strategic accounts',
    ],
    causes: [
      'Metrics that reward wrong behaviors',
      'Poor quota setting',
      'Threshold/accelerator design issues',
    ],
    solution:
      'Design plans around desired behaviors, not just outcomes. Test scenarios before launch.',
    icon: 'Target',
  },
  {
    id: 'data-quality',
    title: 'Data Quality Issues',
    symptoms: [
      'Manual adjustments every period',
      'Discrepancies between systems',
      'No single source of truth',
    ],
    causes: [
      'Siloed systems',
      'Manual data entry',
      'Lack of data governance',
    ],
    solution:
      'Establish clear data ownership and automated integrations. Trust but verify.',
    icon: 'Database',
  },
  {
    id: 'trust',
    title: 'Trust Deficit',
    symptoms: [
      'Reps verify every calculation',
      'High dispute volume',
      'Compensation seen as adversarial',
    ],
    causes: [
      'Historical errors',
      'Lack of transparency',
      'Poor communication',
    ],
    solution:
      'Build trust through visibility, accuracy, and consistent communication.',
    icon: 'ShieldAlert',
  },
];

export const bestPractices: SPMBestPractice[] = [
  {
    id: 'simplicity',
    title: 'Design for Simplicity',
    description:
      'The best plans are ones reps can explain in 30 seconds. Complexity is the enemy of motivation.',
    tips: [
      'Limit to 3-5 core metrics',
      'Use clear, consistent thresholds',
      'Avoid "Swiss army knife" plans',
      'Test with focus groups before launch',
    ],
    icon: 'Zap',
  },
  {
    id: 'alignment',
    title: 'Align to Strategy',
    description:
      'Comp plans are a strategic tool, not an administrative function. Design from business goals backward.',
    tips: [
      'Start with desired behaviors, not metrics',
      'Weight components by strategic priority',
      'Review alignment annually',
      'Get sales leadership buy-in early',
    ],
    icon: 'Compass',
  },
  {
    id: 'fairness',
    title: 'Ensure Fairness',
    description:
      'Perceived fairness matters as much as actual fairness. Reps who feel cheated disengage.',
    tips: [
      'Use objective, measurable criteria',
      'Apply rules consistently',
      'Document and communicate exceptions',
      'Provide clear dispute resolution',
    ],
    icon: 'Scale',
  },
  {
    id: 'governance',
    title: 'Establish Governance',
    description:
      'Plans drift without governance. Establish clear ownership and change management processes.',
    tips: [
      'Define plan owner and approval chain',
      'Document all plan changes',
      'Regular effectiveness reviews',
      'Exception tracking and analysis',
    ],
    icon: 'ClipboardCheck',
  },
];

export const aiTransformation = {
  headline: 'How AI is Changing SPM',
  description:
    'AI isn\'t replacing SPM expertise—it\'s amplifying it. Here\'s how AI transforms each aspect of compensation management.',
  capabilities: [
    {
      id: 'plan-analysis',
      title: 'Plan Analysis',
      before: 'Manual review, limited scenarios',
      after: 'AI-powered simulation, loophole detection, complexity scoring',
      icon: 'Search',
    },
    {
      id: 'quota-setting',
      title: 'Quota Setting',
      before: 'Spreadsheet models, gut feel',
      after: 'Predictive models, territory-level optimization',
      icon: 'Target',
    },
    {
      id: 'performance-insights',
      title: 'Performance Insights',
      before: 'Backward-looking reports',
      after: 'Real-time anomaly detection, predictive alerts',
      icon: 'BarChart3',
    },
    {
      id: 'dispute-resolution',
      title: 'Dispute Resolution',
      before: 'Case-by-case manual review',
      after: 'Pattern recognition, automated triage, precedent matching',
      icon: 'MessageSquare',
    },
  ],
};
