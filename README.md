# Mario AI Control Center

A React + TypeScript portfolio dashboard for Mario Wangen's AI Infrastructure / MLOps positioning.

## Run locally

```bash
npm install
npm run dev
```

Vite will print the local URL. If ports 5173/5174 are busy, open the exact URL shown in the terminal, for example:

```text
http://localhost:5175/
```

## If you see a blank page

1. Stop the dev server with `Ctrl + C`.
2. Delete old installs/caches:

```bash
rmdir /s /q node_modules
rmdir /s /q .vite
rmdir /s /q node_modules\.vite
```

If `.vite` does not exist, that is fine.

3. Reinstall and start again:

```bash
npm install
npm run dev
```

4. Open the exact URL Vite prints.

## Edit content

Most portfolio content lives here:

```text
src/data/content.ts
```

Update projects, insights, skills, links and stats there.

## Stack

- React
- TypeScript
- Vite
- Lucide icons
- Plain CSS, no Tailwind setup required
