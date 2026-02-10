# The Intel — Unified Content Hub

> Design doc for consolidating Blog, Newsletter, and Learn into a single content page.
> Date: 2026-02-10

## Problem

IntelligentSPM has content scattered across five separate destinations: Blog, Newsletter, Learn (with sub-pages), Prompt Pack, and archived Podcast/Videos. Nobody browses five content sections. One page is more efficient.

## Solution

A single content hub at `/intel` — Apple Newsroom style. Hero feature at top, curated grid below, filter pills for content type.

## Page Structure

1. **Hero Feature** — Full-width card. Latest or hand-picked item with `featured: true`. Type badge, title, excerpt, author, date, read time.
2. **Filter Bar** — Horizontal pills: `All`, `Blog`, `Newsletter`, `Learn`. Active pill filled. Counts shown. Driven by `?type=` query param (shareable URLs).
3. **Content Grid** — 3-column (2-col tablet, 1-col mobile). Type badge, title, 2-line excerpt, date, read time. Cards link to existing detail pages.
4. **Bottom CTA** — "Join The Syndicate" signup prompt.

## Content Data — Derived, Not Duplicated

No new data file. The page imports existing sources and normalizes at render time:

- **Blog** — `blog-posts.json` → `{ type: "blog", title, excerpt, date, readTime, href: /content/blog/${id}, featured, author }`
- **Newsletter** — `newsletters.json` → `{ type: "newsletter", title, excerpt, date, readTime: "5 min", href: /newsletter/${slug}, author: "The Toddfather" }`
- **Learn** — Static array in constants → 4 items (SPM 101, Glossary, Policies, Framework), each linking to existing `/learn/*` routes. Evergreen dates so they sort to bottom.

Merged array sorted by date descending. First `featured: true` item pulled out for hero.

## Visual Design

### Type Badges
- **Blog** — Cyan (`#38BDF8`)
- **Newsletter** — Orange (`#FE9200`)
- **Learn** — Purple (`#A855F7`)

### Cards
Same card design as current blog page. Type badge replaces category badge. No view counts on grid (detail pages only). Hover lifts card.

### No Grid/List Toggle
Grid only. Simpler.

### Mobile
Hero stacks vertically. Grid single column. Filter pills scroll horizontally.

## Navigation Changes

### Header
Before: `Healthchecks | Learn | Blog | Newsletter | The Toddfather | Join The Syndicate`
After: `Healthchecks | Intel | The Toddfather | Join The Syndicate`

### Footer
Before: `Healthchecks | Learn | Blog | The Toddfather | Newsletter | Prompt Pack`
After: `Healthchecks | Intel | The Toddfather | Prompt Pack`

## Redirects (308 Permanent)

| Old Route | New Route |
|-----------|-----------|
| `/content/blog` | `/intel?type=blog` |
| `/newsletter` | `/intel?type=newsletter` |
| `/learn` | `/intel?type=learn` |

## Detail Pages — Unchanged

- `/content/blog/[slug]` — stays, "Back to Blog" → "Back to Intel" linking to `/intel`
- `/newsletter/[slug]` — stays, back link → `/intel`
- `/learn/spm-101`, `/learn/glossary`, `/learn/policies`, `/learn/framework` — stay
- `/learn/policies/[code]` — stays

## Files to Create/Modify

### Create
- `src/app/(main)/intel/page.tsx` — The unified content page
- `src/app/(main)/intel/constants.ts` — Type colors, learn items array, IntelItem type

### Modify
- `src/components/Header.tsx` (or nav component) — Replace Blog/Newsletter/Learn with Intel
- `src/components/Footer.tsx` — Replace Blog/Newsletter/Learn with Intel
- `src/app/(main)/content/blog/[slug]/page.tsx` — "Back to Blog" → "Back to Intel"
- `src/app/(main)/learn/*/page.tsx` — Back links → Intel
- `next.config.ts` — Add redirects for /content/blog, /newsletter, /learn

### Delete (after redirects confirmed working)
- Nothing deleted. Old pages stay but redirect. Detail pages still need their routes.
