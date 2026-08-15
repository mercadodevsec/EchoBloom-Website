# EchoBloom Website

Production-ready marketing site for EchoBloom Foundation, implemented from the IPMD Work Figma file with a React frontend and Express API.

## Stack

- **Client:** React 18, TypeScript, Vite, React Router, Tailwind CSS v4
- **Server:** Express, Prisma, PostgreSQL, Multer, Zod

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL database

### Install

```bash
npm install
```

### Environment

Copy `.env.example` to `.env` and update values:

```bash
cp .env.example .env
```

### Database

```bash
npm run db:generate --workspace server
npm run db:push --workspace server
```

### Development

Run API and client together:

```bash
npm run dev:all
```

Or separately:

```bash
npm run dev:server
npm run dev
```

- Client: http://localhost:5173
- API: http://localhost:3001

## Scripts

- `npm run build` — build client and server
- `npm run test` — Vitest unit tests
- `npm run test:e2e` — Playwright smoke tests

## Routes

- `/`
- `/about`
- `/programs`
- `/programs/creative-art-sessions`
- `/impact`
- `/artworks`
- `/contact`
- `/contact/success`
- `/intern`
- `/intern/:slug`

## Visual QA

See [VISUAL_QA.md](./VISUAL_QA.md) for Figma comparison checklist.
