# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

- **portfolio** (`artifacts/portfolio/`) — Audiovisual artist portfolio website at `/`
  - React + Vite, Framer Motion, wouter routing, Tailwind CSS v4
  - Pages: Landing (cosmic planet nav), Bio, Works/Gallery, Work Detail, Music, Contact
  - Planet navigation: 5 animated orbiting planets represent 5 audiovisual artworks
  - Dark cosmic aesthetic with starfield and grain overlay
  - Streaming platform links: Spotify, Apple Music, SoundCloud, Bandcamp, YouTube Music

- **api-server** (`artifacts/api-server/`) — Express API server at `/api`

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

## File Structure (Portfolio)

```
artifacts/portfolio/src/
  data/works.ts          — 5 artworks with planet metadata (color, size, orbit)
  components/
    Navbar.tsx           — Fixed top navbar with hamburger mobile menu
    PlanetNav.tsx        — Cosmic planet navigation (desktop + mobile fallback)
  pages/
    Landing.tsx          — Hero + cosmic planet nav
    Bio.tsx              — Artist bio with portrait
    Works.tsx            — 2-column artwork grid
    WorkDetail.tsx       — Individual artwork detail view
    Music.tsx            — Streaming platform links
    Contact.tsx          — Contact form + social links
  assets/images/         — AI-generated artwork thumbnails + bio portrait
  index.css              — Dark cosmic theme variables
  App.tsx                — Router + page transitions
```

## Manual Documentation

See `PORTFOLIO_MANUAL.md` for the full website structure, customization guide, and technical reference.

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
