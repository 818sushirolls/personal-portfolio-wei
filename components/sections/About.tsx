"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GlassCard, SectionHeader, Tag, TelemetryLine } from "@/components/ui";

interface TimelinePoint {
  year: string;
  label: string;
  detail: string;
}

const TIMELINE: TimelinePoint[] = [
  {
    year: "Earlier",
    label: "Aerospace + Mechanical foundations",
    detail: "Propulsion, fluid mechanics, CAD, and design coursework.",
  },
  {
    year: "Then",
    label: "Computer Science + Math",
    detail: "Algorithms, systems, ML, and applied math.",
  },
  {
    year: "Now",
    label: "Software for engineering teams",
    detail: "Backend services, ML pipelines, and tooling — built to last.",
  },
];

const DISCIPLINES = [
  "Computer Science",
  "Aerospace",
  "Mechanical",
  "Mathematics",
];

export function About() {
  const reduced = useReducedMotion();

  const fadeInUp = (delay = 0) =>
    reduced
      ? { initial: { opacity: 1 }, whileInView: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.5, delay },
        };

  return (
    <section id="briefing" className="container-mc scroll-mt-20 py-24 sm:py-32">
      <motion.div {...fadeInUp(0)}>
        <SectionHeader
          index="MISSION · 01"
          eyebrow="Mission Briefing"
          title="An aerospace engineer who builds software."
          description="I came up through propulsion, fluid mechanics, and CAD before falling into systems software and ML. Today I write backend services and tooling that engineering teams depend on — and I keep one foot in aerospace whenever I can."
        />
      </motion.div>

      <div className="mt-12 grid gap-6 lg:grid-cols-5">
        <motion.div {...fadeInUp(0.05)} className="lg:col-span-3">
          <GlassCard className="h-full space-y-5">
            <span className="eyebrow text-accent">// PROFILE</span>
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              My favorite engineering is the kind that crosses boundaries — a
              backend that mirrors a physical control system, an ML pipeline
              that respects the limits of the data feeding it, a piece of
              tooling that turns a slow loop into a fast one.
            </p>
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              I&apos;m a recent graduate with an interdisciplinary background and a
              real interest in software for engineering and aerospace
              applications. Simulations, telemetry, ground-station tooling,
              flight data — anything where the code has to track something
              real.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {DISCIPLINES.map((d) => (
                <Tag key={d} mono={false} tone="default">
                  {d}
                </Tag>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        <motion.div {...fadeInUp(0.12)} className="lg:col-span-2">
          <GlassCard variant="strong" className="h-full space-y-4">
            <span className="eyebrow text-warn">// TRAJECTORY</span>
            <ol className="relative space-y-5 pl-6">
              <span
                aria-hidden
                className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[color:var(--accent)]/40 via-[color:var(--hairline-strong)] to-transparent"
              />
              {TIMELINE.map((p, i) => (
                <li key={p.label} className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-6 top-1.5 h-3.5 w-3.5 rounded-full border border-[color:var(--accent)]/50 bg-bg"
                  >
                    <span className="absolute inset-1 rounded-full bg-accent" />
                  </span>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                    {p.year}
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-ink">
                    {p.label}
                  </p>
                  <p className="mt-0.5 text-sm text-mute">{p.detail}</p>
                  {i < TIMELINE.length - 1 && (
                    <span className="block h-0.5" aria-hidden />
                  )}
                </li>
              ))}
            </ol>
            <TelemetryLine label="Looking for" value="ENGINEERING ROLES · NEW GRAD" />
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
