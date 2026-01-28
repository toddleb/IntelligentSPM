# IntelligentSPM

## What is this?

IntelligentSPM is a Sales Performance Management (SPM) knowledge platform featuring:
- **AskSPM**: RAG-powered Q&A using 929 SPM domain knowledge cards
- **Document Analysis**: Policy gap analysis via sda-core (when available)
- **Auth System**: NextAuth 5.0 with magic link and resend integration

**Production URL**: https://intelligentspm.com

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        IntelligentSPM                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐      │
│  │   AskSPM     │    │   Analyze    │    │    Auth      │      │
│  │   (RAG)      │    │  (Optional)  │    │  (NextAuth)  │      │
│  └──────┬───────┘    └──────┬───────┘    └──────────────┘      │
│         │                   │                                    │
│         ▼                   ▼                                    │
│  ┌──────────────────────────────────────┐                       │
│  │         AI Providers                  │                       │
│  │  Gateway > Ollama > OpenAI (fallback) │                       │
│  └──────────────────────────────────────┘                       │
│                        │                                         │
│                        ▼                                         │
│  ┌──────────────────────────────────────┐                       │
│  │    Neon PostgreSQL + pgvector        │                       │
│  │    (929 embedded knowledge chunks)    │                       │
│  └──────────────────────────────────────┘                       │
└─────────────────────────────────────────────────────────────────┘
```

## Key Directories

- `src/app/` - Next.js app router pages and API routes
- `src/lib/services/` - Business logic (AskSPM, embeddings, analysis gate)
- `src/lib/db/` - Prisma client and database utilities
- `src/data/` - SPM knowledge cards JSON
- `prisma/` - Database schema and migrations
- `scripts/` - Ingestion and maintenance scripts

## Key Files

- `src/lib/services/askspm.service.ts` - RAG pipeline implementation
- `src/lib/services/embedding.service.ts` - Embedding generation (Gateway/Ollama/OpenAI)
- `src/app/api/askspm/route.ts` - AskSPM API endpoint
- `src/app/api/analyze/route.ts` - Document analysis endpoint
- `prisma/schema.prisma` - Database schema with pgvector

## Commands

```bash
pnpm dev    # Start development server
pnpm build  # Build for production
pnpm lint   # Run ESLint
```

## Environment Variables

### Required
- `DATABASE_URL` - Neon PostgreSQL connection string
- `NEXTAUTH_SECRET` - Auth encryption key
- `NEXTAUTH_URL` - Application URL

### AI Providers (Priority Order)
- `AICR_GATEWAY_URL` - AICR AI Gateway URL (preferred)
- `AICR_API_KEY` - AICR API key for gateway
- `OLLAMA_BASE_URL` - Ollama server (default: http://localhost:11434)
- `OPENAI_API_KEY` - OpenAI API key (fallback)

### Optional
- `OLLAMA_MODEL` - Ollama chat model (default: llama3)
- `OPENAI_CHAT_MODEL` - OpenAI chat model (default: gpt-4o-mini)
- `GATEWAY_CHAT_MODEL` - Gateway chat model (default: gpt-4o-mini)
- `USE_OPENAI_EMBEDDINGS` - Set to 'true' to use OpenAI for embeddings
- `RESEND_API_KEY` - Resend API key for magic link emails

## AI Provider Priority

The system tries AI providers in this order:

1. **AICR Gateway** (if configured) - Centralized AI with metering/audit
2. **Ollama** (if available) - Free local inference
3. **OpenAI** (fallback) - Cloud inference

## Knowledge Base

The SPM knowledge base contains 929 cards covering:
- Sales Performance Management fundamentals
- Incentive Compensation Management (ICM)
- Sales Governance policies
- Territory and Quota Management
- Commission calculations

Cards are embedded using nomic-embed-text (768 dimensions) and stored in pgvector.

### Re-ingesting Knowledge Base

```bash
npx tsx scripts/ingest-spm-cards.ts
```

## Dependencies

- **@aicr/sda-core** (optional) - Document analysis engine
  - Listed as optional dependency
  - Dynamically imported in analyze route
  - Not available on Vercel (local file reference)

## Vercel Deployment

Deployed via Vercel with:
- Build command: `pnpm exec prisma generate && pnpm run build`
- Node.js: 20.x-22.x

The sda-core package is not available on Vercel due to local file dependency.
Analysis endpoint returns 503 when sda-core is unavailable.
