# Copilot Instructions for AI Agents

## Project Overview
- This is a Next.js app (see [README.md](../../README.md)), using the `/app` directory for routing and page components.
- Bootstrapped with `create-next-app`. No custom server or API routes are present by default.
- Main entry point: [app/page.tsx](../../app/page.tsx). Global styles: [app/globals.css](../../app/globals.css).

## Architecture & Patterns
- Pages and layouts are in `/app`. Each file in `/app` is either a route or a shared layout.
- Use React Server Components and Next.js conventions for file-based routing.
- Fonts are loaded and optimized via `next/font` (see [README.md](../../README.md)).
- No custom backend logic or API endpoints are present unless added in `/app` or `/pages/api`.

## Developer Workflows
- **Start dev server:** `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`).
- **Edit main page:** Change [app/page.tsx](../../app/page.tsx) and see live updates.
- **Global styles:** Edit [app/globals.css](../../app/globals.css).
- **Build for production:** `npm run build`.
- **Preview production build:** `npm run start` after building.
- **No test scripts or test setup detected.**

## Conventions & Integration
- Use TypeScript for all code in `/app`.
- Use CSS modules or global CSS for styling.
- External dependencies managed via `package.json`.
- No custom lint, formatting, or CI rules detected beyond Next.js defaults.
- No custom AI agent rules, conventions, or integration points found in the codebase.

## Examples
- To add a new page, create a file in `/app` (e.g., `/app/about.tsx`).
- To update global styles, edit [app/globals.css](../../app/globals.css).
- To use a new font, configure it in your page/layout using `next/font`.

## References
- [README.md](../../README.md) for setup and deployment.
- [Next.js Documentation](https://nextjs.org/docs) for advanced features.

---
If any conventions or workflows are unclear, please ask for clarification or provide feedback to improve these instructions.