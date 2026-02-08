import { leverConfig, leverOrder } from "@/lib/levers";

export const maturityLevels = [
  { value: 0, label: "Not Started", description: "We haven't addressed this" },
  { value: 1, label: "Ad Hoc", description: "We do this inconsistently" },
  { value: 2, label: "Defined", description: "We have a documented process" },
  { value: 3, label: "Managed", description: "We measure and improve this" },
  { value: 4, label: "Optimized", description: "This is a strength for us" },
];

// Quiz questions mapped to levers - using shared lever config for colors and icons
const leverQuestions: Record<string, string[]> = {
  "incentive-architecture": [
    "We have a documented pay philosophy",
    "Plan design starts with business objectives, not last year's plan",
    "We benchmark compensation against market data",
  ],
  "compliance-guardrails": [
    "We review plans against state wage law requirements",
    "Plan documents meet legal standards",
    "Clawback and forfeiture rules are clearly defined",
  ],
  "capacity-coverage": [
    "We have documented territory design criteria and review them annually",
    "Quota setting follows a defined methodology with clear inputs",
    "Capacity planning is tied to headcount and coverage models",
  ],
  "systems-spine": [
    "Our ICM system integrates cleanly with CRM and finance",
    "We evaluate vendors against defined requirements",
    "Data flows are documented and validated",
  ],
  "payout-engine": [
    "Compensation plans have clear definitions for all key terms",
    "Commission calculations are automated with audit trails",
    "Reps can independently verify their own paycheck accuracy",
  ],
  "signal-forecast": [
    "We have dashboards that show real-time attainment and forecasts",
    "Analytics inform territory and quota decisions",
    "We track leading indicators, not just lagging results",
  ],
  "controls-evidence": [
    "Exception requests follow a documented approval workflow",
    "Plan changes have version control and effective dates",
    "We can answer audit questions in under 5 minutes",
  ],
  "enablement-loop": [
    "Plan rollouts include training and manager enablement",
    "We track plan comprehension and adoption",
    "Change communications are planned and documented",
  ],
};

// Build pillars array from shared lever config (maintains compatibility with existing quiz logic)
export const pillars = leverOrder.map((slug) => {
  const lever = leverConfig[slug];
  return {
    id: lever.id.toUpperCase(), // e.g., "strategy" → "STRATEGY"
    name: lever.name,
    color: lever.color,
    icon: lever.icon,
    questions: leverQuestions[slug],
    learnLink: `/levers/${slug}`,
  };
});

export const tierBadges = [
  { min: 0, max: 25, label: "Foundational", color: "#dc2626", description: "Significant gaps across most levers" },
  { min: 26, max: 50, label: "Developing", color: "#ea580c", description: "Some processes in place, many opportunities" },
  { min: 51, max: 75, label: "Mature", color: "#ca8a04", description: "Solid foundation with room to optimize" },
  { min: 76, max: 100, label: "Advanced", color: "#16a34a", description: "Strong SPM practice across levers" },
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
