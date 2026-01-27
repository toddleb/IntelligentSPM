# Governance Healthcheck 4-Quadrant Redesign

**Date:** January 27, 2026
**Applies to:** Governance Healthcheck Results View

---

## Overview

Replace the scrolling analytics dashboard with a compact 4-quadrant card layout. Focus purely on the 17 SCP policies - find gaps, show status, provide action plan.

---

## Layout: 4-Quadrant Card

All results visible at once. No scrolling within results.

```
┌─────────────────────────────────────┬─────────────────────────────────────┐
│         COVERAGE SCORE              │         POLICY BREAKDOWN            │
│                                     │                                     │
│   "X of 17" circular visual         │   17 policies listed                │
│   Tier badge                        │   Status: ● found ○ gap             │
│   Coverage percentage               │   Compact list format               │
│                                     │                                     │
├─────────────────────────────────────┼─────────────────────────────────────┤
│         RISK SNAPSHOT               │         ACTION PLAN                 │
│                                     │                                     │
│   Immediate: X (red)                │   Top 3 priority gaps               │
│   Priority: X (amber)               │   Brief recommendation              │
│   Monitor: X (blue)                 │   CTA button                        │
│                                     │                                     │
└─────────────────────────────────────┴─────────────────────────────────────┘
```

---

## Quadrant 1: Coverage Score (Top Left)

**Visual:** Circular progress ring showing X of 17 policies covered

**Content:**
- Large number: "7 of 17"
- Percentage: "41%"
- Tier badge based on score:
  - 0-25%: Foundational (red)
  - 26-50%: Developing (amber)
  - 51-75%: Mature (yellow/lime)
  - 76-100%: Advanced (green)

**Styling:** Glass card, lime green theme, animated count-up

---

## Quadrant 2: Policy Breakdown (Top Right)

**Visual:** Compact list of all 17 SCP policies

**Content:**
- Policy name with status indicator
- ● Green dot = evidenced
- ◐ Yellow dot = partial
- ○ Red dot = not found (gap)

**Layout:** 2-column list to fit all 17 policies

```
● Plan Document        ○ Clawback Provisions
● Plan Communication   ○ Dispute Resolution
◐ Eligibility          ● Payment Mechanics
...
```

---

## Quadrant 3: Risk Snapshot (Bottom Left)

**Visual:** Three horizontal bars or badges

**Content:**
- Immediate: X (red) - "Needs urgent action"
- Priority: X (amber) - "Address within 30 days"
- Monitor: X (blue) - "Track but not critical"

**Total:** Sum shown as "X total gaps"

---

## Quadrant 4: Action Plan (Bottom Right)

**Visual:** Compact action list

**Content:**
- Top 3 gaps with urgency badges
- One-sentence recommendation
- CTA button based on score:
  - Low: "Request Full Audit" (red)
  - Medium: "Get Expert Help" (amber)
  - High: "Schedule Review" (lime)

---

## Bottom Section: Consulting CTA

Below the 4-quadrant card, a full-width consulting pitch:

**Headline:** "Gaps Like These Cost Companies $1.25M+ Annually"

**Pain Points:**
- Windfall overpayments (single deals exceeding $500K)
- State wage law violations
- Commission disputes with no resolution process

**Deliverables:**
- Compensation Review Board charter
- 18 finalized policies
- 10 operational procedures
- International compliance framework

**Proof:** "Typical ROI: 2.8x in Year 1 | Risk reduction: 40-60%"

**CTA Button:** "Schedule a Governance Assessment"

---

## Color Scheme

| Element | Color | Hex |
|---------|-------|-----|
| Theme (Governance) | Lime Green | #A3E635 |
| Immediate | Red | #DC2626 |
| Priority | Amber | #F59E0B |
| Monitor | Blue | #3B82F6 |
| Evidenced | Green | #10B981 |
| Partial | Yellow | #EAB308 |
| Gap | Red | #DC2626 |
| Background | Navy | #0F172A |
| Card | Slate | #1E293B |

---

## Tier Badges

| Score | Tier | Color |
|-------|------|-------|
| 0-25% | Foundational | #DC2626 (red) |
| 26-50% | Developing | #F59E0B (amber) |
| 51-75% | Mature | #A3E635 (lime) |
| 76-100% | Advanced | #10B981 (green) |
