# GitHub Copilot Instructions for this repository ✅

## Purpose
Provide immediate, actionable context so an AI coding agent can be productive quickly in this repository.

## Big picture (what this project is) 🔧
- This is a **Next.js (app router)** TypeScript project created with `create-next-app` (see `package.json` showing `next@16.x`).
- UI is implemented in the `app/` directory (server components by default). Key entry points:
  - `app/layout.tsx` — global layout, fonts (`next/font/google`) and base CSS imports.
  - `app/page.tsx` — home page component and example usage of `next/image`.
- Static assets live in `public/` and are referenced with paths like `/next.svg`.

## How to run / build / lint ⚙️
- Dev server: `npm run dev` → open http://localhost:3000
- Build: `npm run build` then `npm run start` to serve the production build
- Lint: `npm run lint` (runs `eslint` as configured in `eslint.config.mjs`)

## Key patterns & conventions to follow 📐
- App directory patterns: components in `app/` are treated as **server components** by default. Add the top-line `"use client"` to make a component a client component if it requires hooks or browser APIs.
- Styling: Tailwind + PostCSS is used. Tailwind is imported in `app/globals.css` via `@import "tailwindcss"` and the repo uses CSS variables for color theming (`--background`, `--foreground`) with a `prefers-color-scheme` media query.
- Fonts: `next/font` is used in `app/layout.tsx` to expose font CSS variables (`--font-geist-sans`, `--font-geist-mono`) and applied on `body`.
- Images: prefer `next/image` for images served from `public/`, e.g. `src="/next.svg"` as shown in `app/page.tsx`.
- Eslint: uses `eslint-config-next` + TypeScript rules. `eslint.config.mjs` overrides default ignores (see `globalIgnores`), so linting often ignores `.next`, `out`, `build`, and `next-env.d.ts`.

## What is NOT present (important to know) ⚠️
- There are **no tests** or test runner configuration in the repo at the moment — expect to add test tooling if required.
- No explicit API routes are present (no `app/api/*` folder). Any new server endpoints should follow Next's route handler pattern (`app/api/.../route.ts`).

## Helpful examples from the codebase ✏️
- Use of server/component boundary: `app/layout.tsx` (server) → sets up fonts + global CSS; `app/page.tsx` shows UI with Tailwind classes and `next/image`.
- Styling and theme variables are defined in `app/globals.css` with dark mode handled via `@media (prefers-color-scheme: dark)`.

## Quick guidance for common AI tasks 🤖
- When generating components, place them under `app/` and prefer server components unless the UI needs client-side interactivity.
- If adding JS/TS files, follow TypeScript: `*.tsx` for React components with typed `children` where applicable (see `RootLayout` prop typing in `app/layout.tsx`).
- Before creating PRs: run `npm run dev` to verify the UI and `npm run lint` to catch style issues.

## Design system & MUI (new) 🎨
- This project now uses **MUI** for major UI structure and components. The client-side wrapper `app/providers/Providers.tsx` sets up `ThemeProvider` + `CssBaseline` and is included in `app/layout.tsx`.
- Reusable MUI components live in `app/components/` (examples: `NavBar.tsx`, `Footer.tsx`, `DishCard.tsx`, `Cart.tsx`).
- **Client vs Server:** MUI providers and interactive components (e.g., `Cart.tsx`) are `"use client"` (client components). Keep layout and most pages as server components where possible for faster SSR.
- Styling guidance: prefer MUI `sx` prop for component-specific styles; keep Tailwind only for small utilities if needed.
- Install note: run `npm install` after pulling these changes to install `@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled`, and `zustand`.
- Performance: prefer server components for static content and use `next/dynamic` with `{ ssr: false }` for client-only interactive pieces (like `Cart.tsx`) to reduce initial bundle size.
- State: we use `zustand` (see `app/store/useCartStore.ts`) for a small, persistent client-side cart store (persisted to `localStorage`).

---

If any of these points are unclear or you'd like extra examples (e.g., a client component template or an example of `sx` usage), tell me which parts to expand and I'll iterate. 🔁
