# personal-portfolio-wei

* This is the source for emilywei.dev (or something). *

I'm Emily, a recently graduated software engineer. Most of what I love about
engineering came from the same place: rockets, sci-fi, and the kind of
hardware that gets to fly. I studied propulsion, fluid mechanics, and CAD
along the way, and ended up writing software because the problems I cared
about kept showing up in code. The site is themed loosely around such.

Live: _coming soon on Vercel_

## Sections

- **Hero.** Name, what I do, links to GitHub, LinkedIn, and resume.
- **About.** Background in CS, aerospace, and math, plus the kinds of systems
  I like building.
- **Projects.** Featured work (ML pipelines, backend services, aerospace
  experiments). Each one has its own writeup page.
- **Logbook.** Markdown-driven archive of older technical work. Reports, CAD
  renders, simulations, presentations, engineering notes. Each entry is dated
  so the archive reads as a running journal.
- **Toolkit.** The tools and tech I reach for most often, grouped by area.
- **Contact.** How to get in touch.

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
