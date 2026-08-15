# EchoBloom Website

Production-ready marketing site for EchoBloom Foundation, implemented from the IPMD Work Figma file with a React frontend and Express API.

## Stack

- **Client:** React 18, TypeScript, Vite, React Router, Tailwind CSS v4
- **Server:** Express, Prisma, PostgreSQL, Multer, Zod

## Getting Started

### Prerequisites

- Node.js 20+
- Docker (PostgreSQL runs in a container — no local PostgreSQL installation needed)

### Install

```bash
npm install
```

### Environment

Copy `.env.example` to `.env` (root) and `server/.env`, then update values as needed:

```bash
cp .env.example .env
cp .env.example server/.env
```

The default `DATABASE_URL` (`postgresql://postgres:postgres@localhost:5432/echobloom?schema=public`) works out of the box with the included Docker Compose setup.

### Database

Start PostgreSQL via Docker and push the Prisma schema in one command:

```bash
npm run db:setup
```

Or manage the database container manually:

```bash
# Start PostgreSQL container
npm run db:up

# Push Prisma schema
npm run db:push --workspace server

# Generate Prisma Client
npm run db:generate --workspace server

# Stop PostgreSQL container (data persists in Docker volume)
npm run db:down
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
