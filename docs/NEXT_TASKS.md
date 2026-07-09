# Next Tasks

## Task 1 — Make sure the app runs
Run:
```bash
npm install
npm run dev
```

If the page is blank:
- open browser dev tools
- check console errors
- fix import/runtime errors first
- especially verify icon imports from `lucide-react`

## Task 2 — Improve homepage hierarchy
Make Recent Insights a first-class section, not a small afterthought.

Possible layout:
- Hero top-left
- Builder index / stats top-right
- Featured Projects as main wide grid
- Recent Insights as prominent horizontal or vertical feature panel
- Capability Matrix below
- Skills / Timeline lower

## Task 3 — Strengthen content model
Move all display data into structured files.

Suggested files:
```text
src/data/projects.ts
src/data/insights.ts
src/data/skills.ts
src/data/profile.ts
src/data/timeline.ts
```

## Task 4 — Add internal detail pages or routed views
For each project:
- Problem
- What I built
- Architecture
- Stack
- What it proves
- Related insights
- External proof links

For each insight:
- Core idea
- Why it matters
- Technical breakdown
- Related skills
- Related projects
- Original LinkedIn link

## Task 5 — Deployment readiness
Before deployment:
- add meta title/description
- favicon placeholder
- responsive mobile layout
- verify build with `npm run build`
- add Vercel config only if necessary
