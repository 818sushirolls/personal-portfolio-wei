"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GlassCard, SectionHeader, Tag, TelemetryLine } from "@/components/ui";

interface TimelinePoint {
  period: string;
  label: string;
  detail: string;
}

const TIMELINE: TimelinePoint[] = [
  {
    period: "first",
    label: "Aerospace and mechanical foundations",
    detail: "Propulsion, fluid mechanics, CAD, and design coursework.",
  },
  {
    period: "then",
    label: "Computer science and math",
    detail: "Algorithms, systems, ML, applied math.",
  },
  {
    period: "now",
    label: "Software for engineering teams",
    detail: "Backend services, ML pipelines, and tooling for technical work.",
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
    <section
      id="about"
      className="container-mc scroll-mt-20 py-24 sm:py-32"
    >
      <motion.div {...fadeInUp(0)}>
        <SectionHeader
          index="01"
          eyebrow="About"
          title="About me"
          description="I'm Emily, a recently graduated software engineer who grew up loving rockets and sci-fi. I studied propulsion, fluid mechanics, and CAD, and ended up writing software because the problems I cared about kept showing up in code."
        />
      </motion.div>

      <div className="mt-12 grid gap-6 lg:grid-cols-5">
        <motion.div {...fadeInUp(0.05)} className="lg:col-span-3">
          <GlassCard className="h-full space-y-5">
            <span className="eyebrow text-accent">about</span>
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              My favorite engineering is the kind that crosses boundaries. A
              backend that mirrors a physical control system. An ML pipeline
              that respects the data feeding it. Tooling that turns a slow loop
              into a fast one.
            </p>
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              I&apos;m most interested in software for engineering and aerospace
              applications. Simulations, telemetry, ground-station tooling,
              flight data, anything where the code has to track something
              physical. Bonus points if there&apos;s a launch involved.
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
            <span className="eyebrow text-warn">how I got here</span>
            <ol className="relative space-y-5 pl-6">
              <span
                aria-hidden
                className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[color:var(--accent)]/40 via-[color:var(--hairline-strong)] to-transparent"
              />
              {TIMELINE.map((p) => (
                <li key={p.label} className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-6 top-1.5 h-3.5 w-3.5 rounded-full border border-[color:var(--accent)]/50 bg-bg"
                  >
                    <span className="absolute inset-1 rounded-full bg-accent" />
                  </span>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                    {p.period}
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-ink">
                    {p.label}
                  </p>
                  <p className="mt-0.5 text-sm text-mute">{p.detail}</p>
                </li>
              ))}
            </ol>
            <TelemetryLine label="status" value="open to work" />
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
