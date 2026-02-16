# FSD Mental Health Safety Benchmark — Showcase Website

Showcase website for the FSD Mental Health Safety Benchmark project. This is a project overview page only — the benchmark platform itself is a separate artefact.

## Tech Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- Framer Motion (scroll animations)
- Static export (no server required)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → http://localhost:3000

# Build static site
npm run build
# → outputs to out/
```

## Editing Content

All editable text lives in `src/content/`. Edit these files to update the site without touching component code:

| File | What it controls |
|---|---|
| `src/content/site.ts` | Hero text, section headings, SEO metadata, impact cards, footer |
| `src/content/milestones.ts` | Project timeline entries and status badges |
| `src/content/updates.ts` | Chronological update feed (add new entries at top) |
| `src/content/outputs.ts` | Artefact cards (report, deck, methodology, code) |

Search for `TODO:` across the codebase to find all placeholder text that needs replacing.

### Key placeholders to update

- **Benchmark URL**: `src/content/site.ts` → `benchmarkUrl` field
- **Repository URL**: `src/content/site.ts` → `repositoryUrl` field
- **Contact email**: `src/content/site.ts` → `footer.contactEmail` field
- **Copyright holder**: `src/content/site.ts` → `footer.copyrightHolder` field

### Adding a new update

Open `src/content/updates.ts` and add a new entry at the top of the array:

```typescript
{
  date: "2026-03-01",
  title: "Your update title",
  body: "Description of what happened.",
  tag: "milestone", // "release" | "milestone" | "paper" | "data"
},
```

### Adding a new milestone

Open `src/content/milestones.ts` and add a new entry to the array:

```typescript
{
  date: "Apr 2026",
  title: "Milestone title",
  description: "What this milestone covers.",
  status: "planned", // "done" | "active" | "planned"
},
```

## Design Tokens

All colours and theme tokens are defined in `src/app/globals.css` under the `@theme` block. The palette matches the project deck:

- `fsd-blue-soft` (#8DAAC2) — subtle backgrounds
- `fsd-orange` (#ED7D31) — accent borders, badges
- `fsd-blue-deep` (#4472C4) — primary buttons, links
- `fsd-green` (#70AD47) — success/done states
- `fsd-amber` (#FFC000) — highlight accent
- `fsd-charcoal` (#333333) — body text

## Project Structure

```
src/
├── app/            # Next.js App Router (layout, page, globals)
├── components/     # React components
│   └── ui/         # Reusable primitives (Card, Badge, Button, etc.)
├── content/        # Editable data files
├── hooks/          # Custom React hooks
└── lib/            # Constants and utilities
```

## Deployment

The site builds to static HTML. Deploy the `out/` directory to any static host (GitHub Pages, Netlify, Vercel, or serve locally).
