# Levers + KB Cards Merge Design

**Date:** 2026-02-07
**Status:** Approved
**Author:** Claude + Todd

## Problem

Two competing systems exist:
1. **8 Pillars** at `/learn/framework` - 929 KB cards with saturated colors
2. **8 Levers** at `/levers` - Playbook content with slate colors

They use different names, different colors, and don't link to each other.

## Solution

Merge them: Levers become the master, KB cards become deep-dive content within each lever.

## URL Structure

```
/levers                    → Index page (8 lever grid)
/levers/[slug]             → Lever detail + KB cards for that lever
/learn/framework           → Redirect to /levers
/learn                     → Link updated to point to /levers
```

## Lever-to-Pillar Mapping

| Lever Slug | Lever Name | Header | Color | Old Pillar Key |
|------------|------------|--------|-------|----------------|
| incentive-architecture | Incentive Architecture | Strategy | #A39080 | STRATEGY_DESIGN |
| compliance-guardrails | Compliance Guardrails | Legal | #7E8A9A | LEGAL_REGULATORY |
| capacity-coverage | Capacity & Coverage | Planning | #6B8A9E | SALES_PLANNING |
| systems-spine | Systems Spine | Technology | #6A9A9A | TECHNOLOGY_PLATFORMS |
| payout-engine | Payout Engine | Operations | #7A9A85 | ICM |
| signal-forecast | Signal & Forecast | Analytics | #8A7E9A | SALES_INTELLIGENCE |
| controls-evidence | Controls & Evidence | Governance | #9A7E7E | GOVERNANCE_COMPLIANCE |
| enablement-loop | Enablement Loop | Enablement | #9A9070 | IMPLEMENTATION_CHANGE |

## Lever Detail Page Structure

Each `/levers/[slug]` page will have:

1. **Hero** - Category badge, name, tagline
2. **What It Is** - Description
3. **When to Pull** - Trigger conditions
4. **Common Failures** - What goes wrong
5. **Fast Wins** - Quick improvements
6. **Playbook** - Moves, Blast Radius, Scoreboard, Artifacts
7. **Knowledge Base** (NEW) - Filtered KB cards for this lever
8. **Evidence Questions** - Self-scoring section
9. **Maturity Ladder** - 1-5 progression
10. **Navigation** - Prev/Next lever links

## Files to Create

### `src/lib/levers.ts`
Single source of truth for all lever configuration, imported by:
- Homepage lever grid
- Levers index page
- Lever detail pages

## Files to Modify

### `src/app/levers/[slug]/page.tsx`
- Import KB cards data from `spm-kb-cards.json`
- Filter by `oldPillarKey` mapping
- Add collapsible "Knowledge Base" section
- Reuse card grid and modal UI

### `src/app/levers/page.tsx`
- Import lever config from shared source

### `src/app/(home)/page.tsx`
- Import lever config from shared source

### `src/app/(main)/learn/framework/page.tsx`
- Replace with Next.js redirect to `/levers`

### `src/app/(main)/learn/page.tsx`
- Change "The 8 Pillars" → "The 8 Levers"
- Update href from `/learn/framework` to `/levers`

### `src/app/globals.css`
- Remove `--pillar-*` CSS variables
- Add `--lever-*` CSS variables with slate palette

## Color System

Retire saturated pillar colors, use slate-based lever colors:

```css
--lever-strategy: #A39080;    /* warm taupe */
--lever-legal: #7E8A9A;       /* steel blue */
--lever-planning: #6B8A9E;    /* slate blue */
--lever-technology: #6A9A9A;  /* muted teal */
--lever-operations: #7A9A85;  /* sage */
--lever-analytics: #8A7E9A;   /* dusty lavender */
--lever-governance: #9A7E7E;  /* dusty rose */
--lever-enablement: #9A9070;  /* olive gold */
```

## Data

`src/data/spm-kb-cards.json` remains unchanged. The pillar key in each card's metadata maps to levers via the `oldPillarKey` field in lever config.

## Testing

1. Visit `/levers` - Should show 8 lever grid
2. Click any lever - Should show playbook + KB cards section
3. Visit `/learn/framework` - Should redirect to `/levers`
4. Visit `/learn` - "The 8 Levers" link should go to `/levers`
5. KB card colors should use slate palette
6. Search/filter in KB section should work within each lever
