# IntelligentSPM - The SPM Clearing House

> Created: January 25, 2026
> Status: Approved
> Version: 2.0

## Vision

**IntelligentSPM is "The Clearing House for SPM"** - an independent authority that sits above vendors, consultants, and practitioners.

### Core Differentiators
- **No vendor agenda** - We don't sell software
- **No consultant spin** - We tell you what's broken
- **30 years of expertise** - The Toddfather's brain, available 24/7
- **AI-powered analysis** - Not just content, but active tools
- **Community** - The Syndicate network of SPM professionals

### What Makes It a "Clearing House"
1. **Knowledge Hub** - 929 KB cards, 17 policies, glossary
2. **Tool Suite** - 4 healthchecks that actually analyze your stuff
3. **Content Pipeline** - Blog → Newsletter → Podcast → Video
4. **Vendor Intelligence** - Honest scorecards, not sponsored reviews
5. **Expert Access** - AskSPM RAG + The Toddfather direct

### Target Audiences
- Comp analysts drowning in spreadsheets
- Sales ops leaders fighting fires
- CFOs/CROs wondering why comp is a mess
- Vendors wanting honest market intel (paid tier)

---

## Site Structure

```
app/
├── (home)/                      # 4 rotating heroes
│
├── healthcheck/                 # The 4 Hero Tools
│   ├── spm/                     # SPM Healthcheck (8 pillar quiz)
│   ├── comp-plan/               # Upload plan → AI analysis
│   ├── governance/              # Upload policy → gap analysis
│   └── askspm/                  # AskSPM LLM/RAG
│
├── learn/                       # Reference Material
│   ├── spm-101/                 # SPM basics (929 KB cards)
│   ├── framework/               # 8 pillars drill-down
│   ├── policies/                # 17 SCP policies
│   └── glossary/                # Terms
│
├── vendors/                     # Vendor Intelligence
│   ├── magic-wave/              # Annual analyst report
│   ├── sit-down/                # Vendor guide
│   └── scorecards/              # Individual vendor reviews
│
├── content/                     # Blog/Podcast/Video
│   ├── blog/                    # Written content
│   ├── podcast/                 # Audio episodes
│   └── videos/                  # Toddfather avatar videos
│
├── syndicate/                   # The Syndicate newsletter
│
├── toddfather/                  # Personal brand
│   ├── about/                   # Bio, story
│   ├── speaking/                # Speaking topics
│   └── contact/                 # Book The Toddfather
│
└── api/
    ├── newsletter/              # Resend integration
    ├── healthcheck/             # AI analysis endpoints
    └── content/                 # CRUD + metrics
```

---

## Vendor Intelligence Suite

### 1. The Magic Wave (Annual Report)
- SPM vendor landscape analysis
- Quadrant-style positioning (cheeky combo of Gartner + Forrester)
- Honest strengths/weaknesses
- "Where they break" section (unique to us)
- Release as PDF + interactive web version

### 2. The Sit-Down (Vendor Guide)
- Comprehensive vendor comparison
- When you need to "sit down" before picking a vendor
- Decision framework
- Implementation reality checks

### 3. Vendor Scorecards (Ongoing)
- Individual vendor deep-dives
- Ratings, gotchas, best/worst use cases
- Updated as vendors ship/break things

---

## Content Pipeline

### Flow (Blog-First)
```
Blog Post (written by The Toddfather)
    ↓ published
Newsletter (The Syndicate subscribers get it first)
    ↓ recorded
Podcast Episode (audio version)
    ↓ if popular (4 tracking methods)
Video (Toddfather avatar via HeyGen)
```

### Popularity Tracking (All 4 Methods)
1. **Manual selection** - You pick what deserves video treatment
2. **Play count / downloads** - Raw numbers
3. **Engagement** - Comments, shares, saves
4. **Hybrid score** - Weighted combo of all three

### The Syndicate Newsletter
- Weekly SPM reality digest
- "Office Hours with The Toddfather" segment
- Early access to Magic Wave drafts
- Network of SPM professionals
- Resend integration

---

## Social Distribution Engine

Custom-built tool integrated with blog system to auto-distribute content.

### Target Platforms

**Social (short-form):**
| Platform | Content Type |
|----------|--------------|
| Twitter/X | Thread from blog + link |
| LinkedIn | Post with key insights |
| Instagram | Quote cards, carousel |
| TikTok | Video clips from popular content |
| YouTube Shorts | Video clips from popular content |

**Content Platforms (long-form republish):**
| Platform | Strategy |
|----------|----------|
| Substack | Mirror of Syndicate for discovery (free tier, links back) |
| Medium | Republish blogs 1 week after original (SEO boost, canonical link) |
| Reddit | Manual, selective - r/sales, r/salesops when relevant |

### Flow
```
Blog publishes
    ↓
Auto-generate social snippets (title + hook + link)
    ↓
Queue to: Twitter, LinkedIn, Instagram
    ↓
Manual approve or auto-post (configurable)
    ↓
Track engagement metrics back to content
```

### APIs Required
- Twitter/X API (free tier or Basic $100/mo)
- LinkedIn API (free via Marketing API)
- Instagram via Meta Business API
- TikTok API (for video uploads)
- YouTube Data API (for Shorts)

### Priority
**MEDIUM** - Build after core tools are live, before video content ramps up.

---

## First 4 Content Pieces

| # | Title | Type |
|---|-------|------|
| 1 | **SPM 101: What the Vendors Won't Tell You** | Foundation piece |
| 2 | **Your Comp Oversight Is Held Together with Duct Tape** | Governance Part 1 - Agitation |
| 3 | **Why SPM Governance Is Everyone's Problem and No One's Job** | Governance Part 2 - Reality |
| 4 | **From Chaos to Control: SPM Governance That Works** | Governance Part 3 - Solutions (SGM reveal) |

### Additional Blog Topics (14 more)

| # | Topic | AI/Intelligence Hook |
|---|-------|---------------------|
| 5 | Why Accelerators Break Forecasting | AI detects deal stuffing patterns |
| 6 | The Quiet Way Draws Destroy Trust | Intelligent monitoring spots abuse |
| 7 | Clawbacks Done Right | AI-powered recovery tracking |
| 8 | SPIFs Are Dopamine, Not Strategy | Intelligence shows SPIF ROI |
| 9 | Quota Relief: The Math Problem | AI scenario modeling |
| 10 | Territory Changes Mid-Quarter | Intelligent rebalancing |
| 11 | Capacity Planning Reality | AI-driven capacity models |
| 12 | Auditability Is Not Bureaucracy | AI audit trails |
| 13 | Disputes Are Design Failures | Intelligent dispute prediction |
| 14 | Where AI Helps (and Hurts) SPM | Core thesis piece |
| 15 | Human Override Is Not Optional | Governance layer AI needs |
| 16 | AI Finds Patterns, Not Causes | Intelligence vs understanding |
| 17 | Comp Plans Are Constraints | Intelligent constraint modeling |
| 18 | The Crediting Problem | AI-powered crediting resolution |

---

## 4 Hero Healthchecks

### 1. SPM Healthcheck (Teal)
- Quiz on current state against 8 pillars
- Returns pillar scores + recommendations
- Self-assessment tool

### 2. Comp Plan Healthcheck (Purple - AI)
- Upload plan document
- GPT-4o analyzes, scores, reviews
- Returns suggestions in card format
- Port from thetoddfather repo

### 3. Governance Healthcheck (Lime)
- Upload governance/policy document
- Gap analysis against 17 SCP policies
- Returns governance gaps + recommendations
- Port from sgm-sparcc-demo

### 4. AskSPM (Orange)
- Try the Toddfather LLM/RAG
- Query against 929 KB cards
- CTA to contact for custom tool

---

## Content Sources & Porting

| Source | Content | Destination |
|--------|---------|-------------|
| **sgm-sparcc-demo** | 929 KB cards (8 pillars) | `/learn/framework/` |
| **sgm-sparcc-demo** | 17 SCP policies (JSON + MD) | `/learn/policies/` |
| **sgm-sparcc-demo** | Gap analysis logic | `/healthcheck/governance/` |
| **thetoddfather** | Plan Check AI (GPT-4o) | `/healthcheck/comp-plan/` |
| **thetoddfather** | Glossary terms (8+) | `/learn/glossary/` |
| **thetoddfather** | Vendor scorecards (4) | `/vendors/scorecards/` |
| **thetoddfather** | Newsletter (Resend) | `/syndicate/` |
| **thetoddfather** | Bio content | `/toddfather/` |
| **thetoddfather** | Video gen (HeyGen) | `/content/videos/` |
| **aicr** | Tech stack, auth patterns | Foundation |

---

## 8 SPM Pillars (from SGM)

| Pillar | Color | Description |
|--------|-------|-------------|
| Sales Planning | #2563eb (blue) | Territory, quota, capacity |
| ICM | #16a34a (green) | Plans, payments, statements |
| Sales Intelligence | #9333ea (purple) | Analytics, forecasting, AI |
| Governance & Compliance | #dc2626 (red) | SOX, 409A, controls |
| Technology & Platforms | #0891b2 (cyan) | Vendors, integrations |
| Strategy & Design | #ea580c (orange) | Pay philosophy, design |
| Implementation & Change | #ca8a04 (yellow) | Change, training |
| Legal & Regulatory | #4f46e5 (indigo) | Wage laws, compliance |

---

## Design System

### Fonts
System fonts (clean, modern, fast):
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Background Dark | `#0F172A` | Page backgrounds |
| Background Light | `#1E293B` | Cards, sections |
| Teal | `#38BDF8` | "SPM" in logo, primary CTAs |
| Orange | `#FF8737` | "Toddfather", accents, AskSPM |
| AI Purple (Primary) | `#8241C8` | AI badges, Comp Plan Healthcheck |
| AI Purple (Dark) | `#58108E` | AI backgrounds |
| Lime | `#A3E635` | Success, Governance Healthcheck |
| Hot Pink | `#EA1B85` | Errors, problems, agitation |
| Text Primary | `#E2E8F0` | Headlines |
| Text Muted | `#94A3B8` | Secondary text |

### Key Rule
**Purple = AI** - All AI-related features use the purple palette.

---

## Rollout Plan

### Phase 1: Foundation (This Week)
| Priority | Task | Status |
|----------|------|--------|
| HIGH | Homepage with 8 pillars | ✅ Done |
| HIGH | Fix AskSPM typo | ✅ Done |
| HIGH | Design system (fonts, colors) | ✅ Done |
| HIGH | Blog infrastructure (MDX + tracking) | Pending |
| HIGH | First blog: "SPM 101: What the Vendors Won't Tell You" | Pending |

### Phase 2: Governance Series + SGM Launch (Next 3 Weeks)
| Week | Content |
|------|---------|
| Week 1 | Blog #2: "Your Comp Oversight Is Duct Tape" |
| Week 2 | Blog #3: "Everyone's Problem, No One's Job" |
| Week 3 | Blog #4: "From Chaos to Control" + SGM soft launch |

### Phase 3: Tools (1 per week after blogs stabilize)
| Week | Feature | Priority |
|------|---------|----------|
| 4 | SPM Healthcheck (8-pillar quiz) | HIGH |
| 5 | AskSPM RAG | HIGH |
| 6 | Comp Plan Healthcheck (port from thetoddfather) | HIGH |
| 7 | Governance Healthcheck (port gap analysis from SGM) | HIGH |
| 8 | The Syndicate newsletter | HIGH |
| 9 | Social Distribution Engine | MEDIUM |
| 10+ | Magic Wave, The Sit-Down, Vendor Scorecards | LOW |

---

## The Toddfather Bio (from thetoddfather repo)

> The Toddfather is the authoritative voice on Sales Performance Management (SPM) - cutting through vendor marketing, consultant frameworks, and implementation theater to deliver the reality of what works and what breaks.
>
> With 30 years of experience across every SPM platform, comp structure, and governance model, The Toddfather has seen it all: the rollout disasters, the "best practice" failures, the vendor promises that vaporize post-contract.
>
> This isn't another thought leadership brand. It's a clearing house for SPM truth - where comp professionals, revenue leaders, and governance teams get the real story before they make million-dollar mistakes.

### The Toddfather Promise
- No vendor spin.
- No consultant theater.
- No "best practice" bullshit.
- Just the truth about what works, what breaks, and why.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (from aicr) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS |
| Email | Resend (newsletter) |
| AI Analysis | GPT-4o |
| Video Gen | HeyGen (later phase) |
| Database | PostgreSQL via Prisma |

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Syndicate subscribers | 1,000 in 90 days |
| Blog posts published | 4 in first month |
| Healthcheck uses | 100/week by month 2 |
| Magic Wave downloads | 500 in first year |

---

*Design approved: January 25, 2026*
