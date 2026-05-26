"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Server, Brain, Wrench, Cloud } from "lucide-react";
import { GlassCard, SectionHeader } from "@/components/ui";

interface Toolset {
  id: string;
  code: string;
  title: string;
  description: string;
  icon: ReactNode;
  skills: string[];
}

const TOOLSETS: Toolset[] = [
  {
    id: "backend",
    code: "01",
    title: "Backend",
    description:
      "Services, APIs, and the schemas behind them. The parts of an app that need to stay up.",
    icon: <Server size={18} strokeWidth={1.5} />,
    skills: [
      "Python",
      "C++",
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "SQL",
      "REST APIs",
    ],
  },
  {
    id: "ml",
    code: "02",
    title: "Machine learning",
    description:
      "Models and pipelines. I care a lot about data quality and honest baselines.",
    icon: <Brain size={18} strokeWidth={1.5} />,
    skills: ["scikit-learn", "NumPy", "pandas", "Jupyter", "ML Pipelines"],
  },
  {
    id: "tooling",
    code: "03",
    title: "Tooling",
    description:
      "The dev workflow I rely on day to day. Version control, the shell, and code review.",
    icon: <Wrench size={18} strokeWidth={1.5} />,
    skills: ["Git", "GitHub", "Linux", "Bash", "VS Code", "Code Review"],
  },
  {
    id: "cloud",
    code: "04",
    title: "Cloud",
    description:
      "Containers, cloud services, and the build pipelines that move code into them.",
    icon: <Cloud size={18} strokeWidth={1.5} />,
    skills: ["AWS", "Docker", "CI/CD", "GitHub Actions", "Vercel"],
  },
];

export function Skills() {
  const reduced = useReducedMotion();

  const enter = (delay = 0) =>
    reduced
      ? { initial: { opacity: 1 }, whileInView: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.45, delay },
        };

  return (
    <section
      id="toolkit"
      className="container-mc scroll-mt-20 py-24 sm:py-32"
    >
      <motion.div {...enter(0)}>
        <SectionHeader
          index="04"
          eyebrow="Toolkit"
          title="Tools and tech I use"
          description="The things I reach for most often. Not exhaustive, just the ones I'm comfortable being productive in."
        />
      </motion.div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-6">
        {TOOLSETS.map((set, i) => (
          <motion.div key={set.id} {...enter(0.05 + i * 0.06)}>
            <GlassCard
              interactive
              className="group flex h-full flex-col gap-5 p-6"
            >
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-[color:var(--hairline-strong)] bg-panel-strong text-accent">
                  {set.icon}
                </span>
                <div className="flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                    {set.code}
                  </p>
                  <h3 className="font-display text-2xl tracking-tight text-ink">
                    {set.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-mute">
                {set.description}
              </p>

              <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
                {set.skills.map((s) => (
                  <li
                    key={s}
                    className="inline-flex items-center rounded-md border border-[color:var(--hairline)] bg-panel/60 px-2 py-1 font-mono text-[11px] text-ink-soft transition-colors group-hover:border-[color:var(--hairline-strong)] hover:border-[color:var(--accent)]/40 hover:text-ink"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
