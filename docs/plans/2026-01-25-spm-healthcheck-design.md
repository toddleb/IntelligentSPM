# SPM Healthcheck Design Document

**Date:** January 25, 2026
**Status:** Approved

## Overview

An interactive 8-pillar SPM maturity assessment. 24 questions (3 per pillar), gated by corporate email or LinkedIn connect, with comprehensive results in a 4-quadrant layout.

## Gate Screen

### Layout
- Headline: "Assess Your SPM Program"
- Subhead: "24 questions. 10 minutes. Know where you stand."
- Two entry options:
  1. Email input (corporate only, blocks personal domains)
  2. "Connect on LinkedIn" button (links to The Toddfather profile)
- Small print: "Corporate email required. Results sent to your inbox."

### Validation
- Reuse personal domain blocklist from Syndicate signup
- Same error messaging pattern

## Quiz Flow

### Structure
- 8 sections (one per pillar), 3 questions each
- One question per screen (mobile-friendly)
- Progress indicator: current pillar icon + overall % complete
- Pillar color theme changes as user progresses through sections

### Navigation
- "Back" and "Next" buttons
- Can navigate to any completed section via progress dots
- Auto-save to localStorage (resume on refresh)

### Question Format
Statement presented, user selects maturity level:
- **Not Started** (0) - "We haven't addressed this"
- **Ad Hoc** (1) - "We do this inconsistently"
- **Defined** (2) - "We have a documented process"
- **Managed** (3) - "We measure and improve this"
- **Optimized** (4) - "This is a strength for us"

## Questions by Pillar

### Sales Planning (SP)
1. "We have documented territory design criteria and review them annually"
2. "Quota setting follows a defined methodology with clear inputs"
3. "Capacity planning is tied to headcount and coverage models"

### ICM (Incentive Compensation Management)
1. "Compensation plans have clear definitions for all key terms"
2. "Commission calculations are automated with audit trails"
3. "Reps can independently verify their own paycheck accuracy"

### Sales Intelligence (SI)
1. "We have dashboards that show real-time attainment and forecasts"
2. "Analytics inform territory and quota decisions"
3. "We track leading indicators, not just lagging results"

### Governance (GC)
1. "Exception requests follow a documented approval workflow"
2. "Plan changes have version control and effective dates"
3. "We can answer audit questions in under 5 minutes"

### Technology (TP)
1. "Our ICM system integrates cleanly with CRM and finance"
2. "We evaluate vendors against defined requirements"
3. "Data flows are documented and validated"

### Strategy (SD)
1. "We have a documented pay philosophy"
2. "Plan design starts with business objectives, not last year's plan"
3. "We benchmark compensation against market data"

### Implementation (IC)
1. "Plan rollouts include training and manager enablement"
2. "We track plan comprehension and adoption"
3. "Change communications are planned and documented"

### Legal (LR)
1. "We review plans against state wage law requirements"
2. "Plan documents meet legal standards"
3. "Clawback and forfeiture rules are clearly defined"

## Results Page

### Header
- "Your SPM Healthcheck Results"
- Date completed
- Share/download PDF button (future)

### 4-Quadrant Layout

```
+---------------------------+---------------------------+
|     SPIDER CHART          |    OVERALL SCORE          |
|                           |                           |
| Radar showing 8 pillars   | Large score: "67/100"     |
| Scale 0-4 per axis        | Tier badge with label     |
| Filled area = scores      | Top/bottom pillar callout |
|                           |                           |
+---------------------------+---------------------------+
|     BAR CHART             |    PILLAR CARDS           |
|                           |                           |
| Horizontal bars           | Expandable cards          |
| Color: red/yellow/green   | Score per pillar          |
| Sorted lowest-first       | Key findings              |
| Score out of 12           | 1-2 action items          |
|                           | "Learn more" link         |
+---------------------------+---------------------------+
```

### Scoring

**Per Pillar:**
- Max score: 12 (3 questions × 4 points max)
- Percentage: score / 12 × 100

**Overall:**
- Max score: 96 (8 pillars × 12)
- Displayed as: score / 96 × 100 = percentage

**Tier Badges:**
- 0-25%: Foundational (red)
- 26-50%: Developing (orange)
- 51-75%: Mature (yellow)
- 76-100%: Advanced (green)

### Below Quadrants
- Primary CTA: "Book a Toddfather Review" (orange)
- Secondary CTA: "Join The Syndicate"
- Link: "Retake Assessment"

## Technical Implementation

### State Management
```typescript
interface HealthcheckState {
  email: string;
  currentPillar: number; // 0-7
  currentQuestion: number; // 0-2 within pillar
  answers: Record<string, number>; // "SP-1": 3, "ICM-2": 2, etc.
  completed: boolean;
  completedAt?: string;
}
```

### localStorage
- Key: `spm-healthcheck-progress`
- Save on each answer
- Clear on completion or explicit restart

### Charts
- Spider chart: Use SVG or a lightweight chart library (recharts)
- Bar chart: Can be pure CSS/Tailwind

### Data Persistence (Future)
- Save results to database for analytics
- Track completion rates, average scores
- Email results summary via Resend

## File Structure

```
src/app/(main)/healthcheck/spm/
├── page.tsx                 # Metadata wrapper
├── spm-content.tsx          # Main component (replace current)
├── components/
│   ├── GateScreen.tsx       # Email/LinkedIn gate
│   ├── QuizQuestion.tsx     # Single question display
│   ├── QuizProgress.tsx     # Progress indicator
│   ├── ResultsQuadrant.tsx  # 4-quadrant results
│   ├── SpiderChart.tsx      # Radar visualization
│   └── PillarCard.tsx       # Expandable pillar result
└── data/
    └── questions.ts         # Question data
```

## Pillar Metadata

```typescript
const pillars = [
  { id: "SP", name: "Sales Planning", color: "#2563eb", icon: TargetIcon },
  { id: "ICM", name: "ICM", color: "#16a34a", icon: StackIcon },
  { id: "SI", name: "Sales Intelligence", color: "#9333ea", icon: BarChartIcon },
  { id: "GC", name: "Governance", color: "#dc2626", icon: LockClosedIcon },
  { id: "TP", name: "Technology", color: "#0891b2", icon: GearIcon },
  { id: "SD", name: "Strategy", color: "#ea580c", icon: MixerHorizontalIcon },
  { id: "IC", name: "Implementation", color: "#ca8a04", icon: RocketIcon },
  { id: "LR", name: "Legal", color: "#4f46e5", icon: ReaderIcon },
];
```
