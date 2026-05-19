# Voxora

> **AI-native SaaS** for **generative voice** — **neural text-to-speech**, **zero-shot voice cloning**, and **multimodal** (text → audio) workflows in a **production-grade**, **multi-tenant** web app.

**Voxora** is a full-stack **Generative AI** product that turns plain text into natural, expressive speech. Use **foundation-model**-powered **TTS inference** with built-in voices or **custom voice clones** from a short sample — built for creators and teams with **org-scoped** workspaces, **generation history**, and **human-in-the-loop** control over sampling parameters.

**Keywords:** Generative AI · Voice AI · Speech synthesis · Multimodal AI · Zero-shot voice cloning · GPU inference · Serverless ML · MLOps · AI-native SaaS · Full-stack AI · API-first AI · Cloud-native · Real-time AI · Synthetic speech · Production AI · B2B AI platform · Type-safe AI APIs · AI observability · Responsible AI guardrails

## AI capabilities

| Capability | Implementation |
|------------|----------------|
| **Generative AI (audio)** | Neural TTS + voice cloning via Chatterbox on Modal |
| **Zero-shot voice cloning** | Clone a speaker from a short reference clip (no fine-tuning required) |
| **Multimodal pipeline** | Text prompt in → synthesized WAV out |
| **Inference tuning** | Temperature, top-p, top-k, repetition penalty (sampling / decoding controls) |
| **Model serving** | GPU-accelerated FastAPI service on **serverless** Modal workers |
| **AI orchestration** | Next.js app coordinates auth, storage, DB, and remote inference API |
| **Type-safe AI integration** | OpenAPI → TypeScript client (`openapi-fetch`, `sync-api`) |
| **AI guardrails** | Per-org rate limits, max text length, upload validation |
| **AI observability** | Sentry for errors and production monitoring |
| **Synthetic media workflow** | Generate → persist to object storage → stream playback in UI |

## Features

- **Neural text-to-speech** — **Real-time AI** speech generation with adjustable inference hyperparameters
- **Voice library** — 20+ **pre-built** system voices across use-case categories (podcast, narration, meditation, etc.)
- **Zero-shot voice cloning** — Upload or record a sample to create **org-scoped** custom voices
- **Generation history** — Audit and replay past **AI outputs** per organization
- **Multi-tenant B2B SaaS** — Workspaces via Clerk **organizations**
- **Usage limits & responsible AI** — Per-org caps on generations and custom voices (`src/constants/constraints.ts`)
- **AI-native UX** — Voice preview, waveform playback (WaveSurfer), in-browser recording
- **Marketing site** — Public landing page with sign-up funnel

## Tech stack

| Layer | Technology |
|-------|------------|
| **AI / ML inference** | [Chatterbox](https://github.com/resemble-ai/chatterbox) (**foundation model** TTS) on [Modal](https://modal.com) — **GPU**, **serverless ML**, FastAPI |
| **GenAI integration** | OpenAPI client, typed paths, `npm run sync-api` |
| Framework | [Next.js 16](https://nextjs.org) (App Router, React 19) — **full-stack AI app** |
| Language | TypeScript (end-to-end type safety) |
| Styling | Tailwind CSS v4, [shadcn/ui](https://ui.shadcn.com) (Radix) |
| Auth & tenancy | [Clerk](https://clerk.com) — **multi-tenant** users + organizations |
| API layer | [tRPC](https://trpc.io) v11 + [TanStack Query](https://tanstack.com/query) |
| Database | PostgreSQL + [Prisma](https://www.prisma.io) 7 |
| **AI asset storage** | Cloudflare R2 (S3-compatible) — generated audio + voice samples |
| **Voice / audio UI** | [WaveSurfer.js](https://wavesurfer.xyz), RecordRTC |
| Validation & env | Zod, [@t3-oss/env-nextjs](https://env.t3.gg) |
| URL state | [nuqs](https://nuqs.47ng.com) |
| **AI observability** | [Sentry](https://sentry.io) |
| Forms | TanStack Form |

## Architecture

**Cloud-native AI architecture** — decoupled **inference service** (Python/GPU) and **AI application layer** (TypeScript/edge-friendly Next.js).

```
┌─────────────┐     ┌──────────────────────────┐     ┌─────────────────┐
│   Browser   │────▶│  Next.js (Vercel)         │────▶│   PostgreSQL    │
│  React UI   │     │  tRPC · REST · AI orch.  │     │   (Prisma)      │
└─────────────┘     └────────────┬─────────────┘     └─────────────────┘
                                 │
              ┌──────────────────┼──────────────────┐
              ▼                  ▼                  ▼
        ┌──────────┐      ┌───────────┐      ┌──────────────────┐
        │  Clerk   │      │ Cloudflare│      │ Modal · GPU      │
        │  (auth)  │      │ R2 (audio)│      │ Chatterbox TTS   │
        └──────────┘      └───────────┘      │ model serving    │
                                               └──────────────────┘
```

- **Next.js** — **AI-native** frontend + **API gateway**: tRPC (`/api/trpc`), REST (`/api/voices`, `/api/audio`), audio proxy from R2.
- **Chatterbox on Modal** — **Scalable inference** / **model deployment** on **serverless GPUs**. See [`docs/chatterbox-tts.md`](./docs/chatterbox-tts.md) and [`chatterbox_tts.py`](./chatterbox_tts.py).
- **OpenAPI contract** — **Type-safe AI API** codegen via `npm run sync-api` → `src/types/chatterbox-api.d.ts`.

## Skills demonstrated (for recruiters)

**AI / ML:** Generative AI · Voice AI · Speech synthesis · Neural TTS · Zero-shot voice cloning · Multimodal AI · Model inference · GPU inference · Serverless ML · MLOps fundamentals · Synthetic media · Prompt-to-audio · Inference hyperparameters · Production AI systems

**Engineering:** Full-stack TypeScript · AI-native SaaS · Multi-tenant architecture · API-first design · OpenAPI integration · tRPC · PostgreSQL · Object storage (S3/R2) · Cloud deployment (Vercel + Modal) · Real-time UX · Error monitoring · Rate limiting / AI guardrails · React Server Components · Modern React (19)

## Project structure

```
src/
├── app/
│   ├── (marketing)/          # Public landing / GTM
│   ├── (auth)/                 # Sign-in, sign-up, org selection
│   └── (features)/             # Authenticated AI product
│       ├── dashboard/
│       ├── text-to-speech/     # GenAI TTS workspace
│       └── voices/             # Voice library & cloning
├── components/                 # Shared UI (shadcn)
├── trpc/                       # AI app API (voices, generations)
├── lib/                        # DB, R2, Chatterbox client, env
└── constants/                  # Guardrails, sidebar, voice categories

prisma/                         # Schema & migrations
scripts/
├── seed-system-voices.ts       # Seed voices → DB + R2
└── sync-api.ts                 # Regenerate OpenAPI types from inference API
docs/chatterbox-tts.md          # Modal GPU / model serving guide
chatterbox_tts.py               # Python inference service (FastAPI + Modal)
```

## Prerequisites

- Node.js 20+
- PostgreSQL database
- [Clerk](https://clerk.com) application (**Organizations** enabled — multi-tenant)
- Cloudflare R2 bucket (AI-generated assets)
- Deployed **Chatterbox inference API** on Modal (or compatible OpenAPI endpoint)

## Environment variables

Create a `.env` file in the project root.

### Required (validated by `src/lib/environment.ts`)

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `APP_URL` | Public app URL (e.g. `localhost:3000` or production domain) |
| `R2_ACCOUNT_ID` | Cloudflare account ID |
| `R2_ACCESS_KEY_ID` | R2 API token access key |
| `R2_SECRET_ACCESS_KEY` | R2 API token secret |
| `R2_BUCKET_NAME` | R2 bucket name |
| `CHATTERBOX_API_URL` | Base URL of the **inference API** (Modal) |
| `CHATTERBOX_API_KEY` | API key for `X-Api-Key` header |

### Clerk (read automatically by `@clerk/nextjs`)

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key |
| `CLERK_SECRET_KEY` | Clerk secret key |

Configure Clerk redirect URLs for `/sign-in`, `/sign-up`, and org flows (`/org-selection`, `/dashboard`).

### Optional

| Variable | Description |
|----------|-------------|
| `SKIP_ENV_VALIDATION` | Skip env validation (e.g. CI/Docker builds) |
| Sentry DSN / auth token | **AI observability** — `@sentry/nextjs` (`next.config.ts`) |

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up the database

```bash
npx prisma migrate deploy
# or for local dev:
npx prisma migrate dev
```

Prisma client is generated to `src/generated/prisma` on `postinstall`.

### 3. Seed system voices

Place voice audio files under `scripts/system-voices/` (one folder per voice name), then:

```bash
npx tsx scripts/seed-system-voices.ts
```

Canonical system voice names: `src/constants/voice-scoping.ts`.

### 4. Sync inference API types (optional)

After deploying or updating the Modal **model serving** endpoint:

```bash
npm run sync-api
```

### 5. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

- `/` — Marketing page (redirects signed-in users to dashboard or org selection)
- `/dashboard` — Home
- `/text-to-speech` — **Generative voice** workspace
- `/voices` — Voice library & **voice cloning**

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run sync-api` | Sync OpenAPI spec → **type-safe AI client** types |

## Usage limits (AI guardrails)

Defaults in `src/constants/constraints.ts`:

- Max text length per generation: **500** characters
- Max generations per org: **2**
- Max custom voices per org: **4**

Enforced in tRPC (`generations.create`) and the voice creation API — **responsible AI** / cost control at the application layer.

## Deploying the inference backend (MLOps)

The **GPU inference service** is separate from this Next.js app. Deploy `chatterbox_tts.py` to Modal and set `CHATTERBOX_API_URL` / `CHATTERBOX_API_KEY`.

See **[docs/chatterbox-tts.md](./docs/chatterbox-tts.md)** — R2 mount, secrets, **model serving**, and API usage.

## Deploying the web app

**Cloud-native** deployment on **Vercel** (or any Node host supporting Next.js 16).

1. Set all environment variables.
2. Run **database migrations** on production Postgres.
3. **Seed** system voices to production R2 + DB.
4. Configure Clerk production + allowed origins.

Sentry: `withSentryConfig` in `next.config.ts` (project: `voxora`).

## License

Private side project. All rights reserved.
