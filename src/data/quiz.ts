import type { QuizQuestion } from "@/types";

export const quizQuestions: QuizQuestion[] = [
  // Clarity (3 questions)
  {
    id: "clarity-1",
    category: "clarity",
    question: "Can a new rep explain how their payout is calculated in 2 minutes or less?",
  },
  {
    id: "clarity-2",
    category: "clarity",
    question: "Is your plan document less than 10 pages?",
  },
  {
    id: "clarity-3",
    category: "clarity",
    question: "Can reps predict their payout within 10% accuracy before the official statement?",
  },

  // Complexity (3 questions)
  {
    id: "complexity-1",
    category: "complexity",
    question: "Do you have fewer than 5 different plan components or accelerators?",
  },
  {
    id: "complexity-2",
    category: "complexity",
    question: "Can you calculate a sample payout in a spreadsheet in under 15 minutes?",
  },
  {
    id: "complexity-3",
    category: "complexity",
    question: "Have you gone a full year without adding new exceptions to the plan?",
  },

  // Disputes (3 questions)
  {
    id: "disputes-1",
    category: "disputes",
    question: "Do fewer than 5% of reps raise payout disputes each period?",
  },
  {
    id: "disputes-2",
    category: "disputes",
    question: "Are most disputes resolved within 5 business days?",
  },
  {
    id: "disputes-3",
    category: "disputes",
    question: "Do you have a clear, documented dispute resolution process?",
  },

  // Exceptions (3 questions)
  {
    id: "exceptions-1",
    category: "exceptions",
    question: "Are exception requests handled the same way every time?",
  },
  {
    id: "exceptions-2",
    category: "exceptions",
    question: "Do fewer than 10% of deals require manual adjustments?",
  },
  {
    id: "exceptions-3",
    category: "exceptions",
    question: "Is there a documented approval chain for exceptions?",
  },

  // Governance (3 questions)
  {
    id: "governance-1",
    category: "governance",
    question: "Is there a formal annual plan review process?",
  },
  {
    id: "governance-2",
    category: "governance",
    question: "Can you produce an audit trail for any payout in under 10 minutes?",
  },
  {
    id: "governance-3",
    category: "governance",
    question: "Do you have documented change control for plan modifications?",
  },
];

export const categoryLabels: Record<string, string> = {
  clarity: "Clarity",
  complexity: "Complexity",
  disputes: "Disputes",
  exceptions: "Exceptions",
  governance: "Governance",
};

export const categoryDescriptions: Record<string, { good: string; bad: string }> = {
  clarity: {
    good: "Your plan is understandable. Reps can predict their pay.",
    bad: "Reps don't understand how they get paid. This breeds distrust.",
  },
  complexity: {
    good: "Your plan is manageable. You can operate it at scale.",
    bad: "Your plan is over-engineered. Complexity creates loopholes.",
  },
  disputes: {
    good: "Disputes are rare and handled well. Low friction.",
    bad: "Disputes are eating your time and credibility.",
  },
  exceptions: {
    good: "Exceptions are controlled. Consistent handling.",
    bad: "Exceptions are ad-hoc. Every deal is a negotiation.",
  },
  governance: {
    good: "You have controls. The plan is auditable.",
    bad: "No controls. You're flying blind.",
  },
};
