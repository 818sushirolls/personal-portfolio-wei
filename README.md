# personal-portfolio-wei

Hey, I'm Wei. This is the source for my personal site — a place to show what
I've been building and learning across software, aerospace, and ML systems.

The site is themed around mission control: a dark, telemetry-inspired UI with
a cinematic launch-pad hero, a "missions" view of my projects, and an
engineering logbook for older coursework, reports, CAD, and notes I want to
keep around.

Live: _coming soon on Vercel_

## What's in here

- **Launch Pad** — hero with name, what I do, links to GitHub / LinkedIn /
  resume.
- **Mission Briefing** — quick about-me: CS + aerospace + math background and
  the kinds of systems I like building.
- **Missions** — featured projects (ML pipelines, backend services, aerospace
  experiments), each with its own writeup page.
- **Engineering Logbook** — markdown-driven archive for deeper technical work:
  propulsion reports, fluid mechanics, CAD renders, simulations, presentations,
  and engineering reflections. Each entry is dated, so the archive reads as a
  running journal of how my thinking has evolved.
- **Systems** — skills laid out as spacecraft subsystems (propulsion = backend,
  guidance = ML, comms = APIs, infra = cloud).
- **Ground Control** — contact form + email + socials.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 with a custom deep-space token palette
- Framer Motion for tasteful, scroll-driven motion
- React Three Fiber for the hero starfield (dynamically imported, so the rest
  of the app stays light)
- Local MDX for the logbook + project writeups, with frontmatter dates so I
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
outside OneDrive — there's a known intermittent Node 22 OpenSSL bug that hits
when OneDrive races with package extraction. The dev/build scripts use
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

The post will sort itself into the right spot on the timeline. PDFs, slides,
CAD renders (`.glb` via `<model-viewer>`), code blocks, and KaTeX math are all
supported in the body.

## Why this site exists

I wanted a single place that reads like an engineer's notebook rather than a
resume site. The aerospace work I did during school is a real part of how I
think about software, and I wanted both sides of that visible without one
crowding out the other.

## License

[MIT](LICENSE) — feel free to read the source, fork it, take the visual ideas.
The writing and the project content belong to me, but the scaffolding is
yours to use.
