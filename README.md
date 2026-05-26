# personal-portfolio-wei

This is the source for emilywei.dev (or wherever this ends up living). It's a
personal site, not a template.

I'm Emily, a recently graduated software engineer. Most of what I love about
engineering came from the same place rockets, sci-fi, and the kind of
hardware that gets to fly. I studied propulsion, fluid mechanics, and CAD
along the way, and ended up writing software because the problems I cared
about kept showing up in code. The site is themed loosely around mission
control, mostly because that's the world I grew up reading about.

Live: _coming soon on Vercel_

## Sections

- **Launch Pad.** Hero with name, what I do, links to GitHub, LinkedIn, and
  resume.
- **Briefing.** Quick about-me. Background in CS, aerospace, and math, plus the
  kinds of systems I like building.
- **Missions.** Featured projects (ML pipelines, backend services, aerospace
  experiments). Each one has its own writeup page.
- **Logbook.** Markdown-driven archive of older technical work. Reports, CAD
  renders, simulations, presentations, engineering notes. Each entry is dated
  so the archive reads as a running journal.
- **Systems.** Skills laid out as spacecraft subsystems (propulsion = backend,
  guidance = ML, comms = APIs, infra = cloud).
- **Ground Control.** Contact form, email, socials.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 with a custom deep-space token palette
- Framer Motion for tasteful, scroll-driven motion
- React Three Fiber for the hero starfield (dynamically imported, so the rest
  of the app stays light)
- Local MDX for the logbook and project writeups, with frontmatter dates so I
  control the timeline
- Deployed on Vercel

## Running it locally

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
pnpm start
```

If you're on Windows with the project inside a OneDrive-synced folder and you
hit AES-GCM cipher errors during install, junction `node_modules` to a path
outside OneDrive. There's a known intermittent Node 22 OpenSSL bug that fires
when OneDrive races with package extraction. The dev and build scripts use
Webpack rather than Turbopack so cross-volume `node_modules` symlinks resolve
cleanly.

## Adding a logbook post

Drop a new MDX file into `content/logbook/` with frontmatter:

```mdx
---
title: "Two-stage solid motor static fire"
date: 2024-09-20
tags: [propulsion, experiment, report]
summary: "Test stand notes from a static fire of the Mk-II solid motor."
cover: "/assets/logbook/mk2-static-fire/cover.jpg"
---
```

The post sorts itself into the right spot on the timeline. PDFs, slides, CAD
renders (`.glb` via `<model-viewer>`), code blocks, and KaTeX math are all
supported in the body.

## License

[MIT](LICENSE). Feel free to read the source, fork it, take the visual ideas.
The writing and the project content belong to me, but the scaffolding is
yours to use.
