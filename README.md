# Synexes

A Turborepo monorepo for an AI-powered healthcare technology platform.

## Workspace Structure

```
synexes/
├── apps/
│   ├── frontend/   → Next.js 15 dashboard (port 3000)
│   ├── landing/    → Next.js 15 marketing site (port 3001)
│   ├── backend/    → Express API gateway (port 4000)
│   └── worker/     → BullMQ background jobs
└── packages/
    ├── db/         → Drizzle ORM + PostgreSQL schemas
    ├── schema/     → Shared Zod validation
    ├── ui/         → Shared shadcn/ui component library
    └── config/     → Shared TS/ESLint/Prettier configs
```

## Prerequisites

- **Node.js** ≥ 20
- **pnpm** ≥ 10
- **Docker** (for PostgreSQL + Redis)

## Getting Started

```bash
# 1. Install dependencies
pnpm install

# 2. Start infrastructure
docker compose up -d

# 3. Copy environment variables
cp .env.example .env

# 4. Push database schema
pnpm db:push

# 5. Start all services in dev mode
pnpm dev
```

## Available Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start all apps in development mode |
| `pnpm build` | Build all packages and applications |
| `pnpm lint` | Lint all packages |
| `pnpm format` | Format all files with Prettier |
| `pnpm db:generate` | Generate Drizzle migrations |
| `pnpm db:migrate` | Run database migrations |
| `pnpm db:push` | Push schema directly to database |
| `pnpm db:studio` | Open Drizzle Studio |

## Tech Stack

- **Frontend:** Next.js 15, React 19, Tailwind CSS, Framer Motion
- **Backend:** Express 5, Zod, Helmet, CORS
- **Worker:** BullMQ, Google Generative AI, pdf-parse
- **Database:** PostgreSQL 16 + pgvector, Drizzle ORM
- **Cache/Queue:** Redis 7
- **Auth:** Supabase
- **Storage:** AWS S3
- **Analytics:** PostHog
- **Monitoring:** Sentry
