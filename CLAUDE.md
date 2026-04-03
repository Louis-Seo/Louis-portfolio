# Project: Design System Portfolio

## Project Intent

- This project is a portfolio-oriented design system site, not an internal engineering docs site.
- It should present the designer as a system-oriented product designer with strong design-to-development thinking.
- When a matching Figma frame exists, Figma MCP is the source of truth.
- The output should feel like a premium portfolio case-study site, not a generic documentation template.

## Structure

- Turborepo monorepo (pnpm workspace)
- `apps/docs` — design system and portfolio site (port 3001)
- `apps/dashboard` — dashboard app (port 3000)
- `packages/design-system` — React component library
- `packages/tokens` — CSS design tokens
- `packages/config` — shared config

## Commands

- Dev: `pnpm dev`
- Build: `pnpm build`
- Lint: `pnpm lint`

## Tech Stack

- Next.js 15
- React 19
- TypeScript 5.7
- CSS Modules
- CSS Custom Properties
- Pretendard Variable

## Conventions

- Prefer existing design-system components before creating new UI
- Use design tokens only; no hardcoded colors, spacing, radius, or typography
- Add `"use client"` only when interactivity, hooks, browser APIs, or event handlers are required
- Support dark mode with `[data-theme="dark"]`
- Prefer semantic variables such as `--text-primary`, `--surface-base`
- Keep layouts modular, reusable, and easy to extend
- Avoid ad-hoc UI that conflicts with the design system

## Figma / MCP Rules

- Use Figma MCP as the source of truth when a corresponding frame exists
- Do not redesign, reinterpret, or restructure Figma frames unless explicitly requested
- Prioritize faithful implementation over interpretation
- Match spacing, hierarchy, alignment, sizing, and component placement as closely as possible
- Treat Figma-to-code work as implementation, not design exploration
- If a matching frame/node is unclear, identify the ambiguity first instead of guessing

## Verification Rules

- Do not report implementation status only
- Verify rendered results visually before reporting completion
- Compare rendered UI against Figma when applicable
- Report visible mismatches clearly
- Prefer visual verification status over implementation summary
- If the rendered result differs from Figma, explain what is different and what still needs adjustment

## Execution Workflow

- Always make a short plan before editing
- Define the target page, exact section, relevant Figma frame/node, and expected output first
- Break large tasks into smaller section-level tasks
- Implement one section at a time, then verify before moving on
- When using Figma MCP, identify the exact matching frame/node before coding
- Prefer minimal, focused edits over large rewrites
- Report which file(s) were changed and what was updated

## Anti-Loop Rules

- Do not repeatedly call Figma context tools for the same area without implementation progress
- Avoid broad exploration across many similar frames unless explicitly requested
- If exploration is taking too long, stop and narrow the task scope
- For large pages, implement and verify one section at a time
- If needed, confirm the exact target node/frame before continuing

## Routes

- `/foundation/[slug]`
- `/components/[slug]`
- `/portfolio`
