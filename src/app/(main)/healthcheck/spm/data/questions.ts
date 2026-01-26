import {
  TargetIcon,
  StackIcon,
  BarChartIcon,
  LockClosedIcon,
  GearIcon,
  MixerHorizontalIcon,
  RocketIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";

export const maturityLevels = [
  { value: 0, label: "Not Started", description: "We haven't addressed this" },
  { value: 1, label: "Ad Hoc", description: "We do this inconsistently" },
  { value: 2, label: "Defined", description: "We have a documented process" },
  { value: 3, label: "Managed", description: "We measure and improve this" },
  { value: 4, label: "Optimized", description: "This is a strength for us" },
];

export const pillars = [
  {
    id: "SP",
    name: "Sales Planning",
    color: "#2563eb",
    icon: TargetIcon,
    questions: [
      "We have documented territory design criteria and review them annually",
      "Quota setting follows a defined methodology with clear inputs",
      "Capacity planning is tied to headcount and coverage models",
    ],
    learnLink: "/learn/spm-101",
  },
  {
    id: "ICM",
    name: "ICM",
    color: "#16a34a",
    icon: StackIcon,
    questions: [
      "Compensation plans have clear definitions for all key terms",
      "Commission calculations are automated with audit trails",
      "Reps can independently verify their own paycheck accuracy",
    ],
    learnLink: "/learn/spm-101",
  },
  {
    id: "SI",
    name: "Sales Intelligence",
    color: "#9333ea",
    icon: BarChartIcon,
    questions: [
      "We have dashboards that show real-time attainment and forecasts",
      "Analytics inform territory and quota decisions",
      "We track leading indicators, not just lagging results",
    ],
    learnLink: "/learn/spm-101",
  },
  {
    id: "GC",
    name: "Governance",
    color: "#dc2626",
    icon: LockClosedIcon,
    questions: [
      "Exception requests follow a documented approval workflow",
      "Plan changes have version control and effective dates",
      "We can answer audit questions in under 5 minutes",
    ],
    learnLink: "/healthcheck/governance",
  },
  {
    id: "TP",
    name: "Technology",
    color: "#0891b2",
    icon: GearIcon,
    questions: [
      "Our ICM system integrates cleanly with CRM and finance",
      "We evaluate vendors against defined requirements",
      "Data flows are documented and validated",
    ],
    learnLink: "/vendors",
  },
  {
    id: "SD",
    name: "Strategy",
    color: "#ea580c",
    icon: MixerHorizontalIcon,
    questions: [
      "We have a documented pay philosophy",
      "Plan design starts with business objectives, not last year's plan",
      "We benchmark compensation against market data",
    ],
    learnLink: "/learn/framework",
  },
  {
    id: "IC",
    name: "Implementation",
    color: "#ca8a04",
    icon: RocketIcon,
    questions: [
      "Plan rollouts include training and manager enablement",
      "We track plan comprehension and adoption",
      "Change communications are planned and documented",
    ],
    learnLink: "/learn/spm-101",
  },
  {
    id: "LR",
    name: "Legal",
    color: "#4f46e5",
    icon: ReaderIcon,
    questions: [
      "We review plans against state wage law requirements",
      "Plan documents meet legal standards",
      "Clawback and forfeiture rules are clearly defined",
    ],
    learnLink: "/learn/policies",
  },
];

export const tierBadges = [
  { min: 0, max: 25, label: "Foundational", color: "#dc2626", description: "Significant gaps across most pillars" },
  { min: 26, max: 50, label: "Developing", color: "#ea580c", description: "Some processes in place, many opportunities" },
  { min: 51, max: 75, label: "Mature", color: "#ca8a04", description: "Solid foundation with room to optimize" },
  { min: 76, max: 100, label: "Advanced", color: "#16a34a", description: "Strong SPM practice across pillars" },
];

export function getTierBadge(percentage: number) {
  return tierBadges.find((t) => percentage >= t.min && percentage <= t.max) || tierBadges[0];
}

export function calculatePillarScore(answers: Record<string, number>, pillarId: string): number {
  let total = 0;
  for (let i = 0; i < 3; i++) {
    const key = `${pillarId}-${i}`;
    total += answers[key] ?? 0;
  }
  return total;
}

export function calculateOverallScore(answers: Record<string, number>): number {
  let total = 0;
  pillars.forEach((pillar) => {
    total += calculatePillarScore(answers, pillar.id);
  });
  return total;
}

export function calculatePercentage(answers: Record<string, number>): number {
  const score = calculateOverallScore(answers);
  const maxScore = pillars.length * 3 * 4; // 8 pillars × 3 questions × 4 max
  return Math.round((score / maxScore) * 100);
}
