# Build Brief

## Goal

This website positions Mario Wangen as a senior software engineer focused on AI Infrastructure, MLOps, GenAI systems and production AI.

## Design Direction

- Stripe / Linear / Vercel inspired
- Evidence dashboard, not classic portfolio
- Light mode as default, dark mode available
- Recent insights are prominent because technical writing is part of the hiring signal
- Internal project/insight detail views first; external GitHub/LinkedIn links second

## V1 Content Flow

Homepage → project / insight drawer → proof links.

The recruiter should not leave the site too early. The website frames the narrative; GitHub and LinkedIn provide external evidence.

## Next Improvements

1. Add real GitHub, LinkedIn and demo URLs in `src/data/content.ts`.
2. Add actual CV PDF to `public/Mario-Wangen-CV.pdf`.
3. Replace placeholder GitHub link in `profile.github`.
4. Add screenshot images per project.
5. Add real article pages if you want routes instead of drawers.
6. Deploy on Vercel, Netlify or Cloudflare Pages.
