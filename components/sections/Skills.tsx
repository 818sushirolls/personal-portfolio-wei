"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Cpu, Brain, Network, CloudCog } from "lucide-react";
import { GlassCard, SectionHeader } from "@/components/ui";

interface Subsystem {
  id: string;
  code: string;
  system: string;
  role: string;
  description: string;
  status: "NOMINAL" | "ACTIVE" | "ONLINE";
  icon: ReactNode;
  skills: string[];
}

const SUBSYSTEMS: Subsystem[] = [
  {
    id: "propulsion",
    code: "SYS · 01",
    system: "Propulsion",
    role: "Backend Engineering",
    description:
      "The thrust behind any product — services, schemas, and APIs that hold up under load.",
    status: "NOMINAL",
    icon: <Cpu size={16} strokeWidth={1.5} />,
    skills: ["Python", "C++", "FastAPI", "Flask", "PostgreSQL", "SQL", "REST APIs"],
  },
  {
    id: "guidance",
    code: "SYS · 02",
    system: "Guidance",
    role: "Machine Learning",
    description:
      "Models that aim the product correctly — pipelines, evaluation, and honest baselines.",
    status: "ACTIVE",
    icon: <Brain size={16} strokeWidth={1.5} />,
    skills: ["scikit-learn", "NumPy", "pandas", "Jupyter", "ML Pipelines"],
  },
  {
    id: "comms",
    code: "SYS · 03",
    system: "Communications",
    role: "Tooling & Collaboration",
    description:
      "How a team stays in sync — version control, shells, and a workflow that scales.",
    status: "ONLINE",
    icon: <Network size={16} strokeWidth={1.5} />,
    skills: ["Git", "GitHub", "Linux", "Bash", "VS Code", "Code Review"],
  },
  {
    id: "infrastructure",
    code: "SYS · 04",
    system: "Infrastructure",
    role: "Cloud & DevOps",
    description:
      "What it runs on — containers, cloud services, and the build pipelines around them.",
    status: "NOMINAL",
    icon: <CloudCog size={16} strokeWidth={1.5} />,
    skills: ["AWS", "Docker", "CI/CD", "GitHub Actions", "Vercel"],
  },
];

const STATUS_COLOR: Record<Subsystem["status"], string> = {
  NOMINAL: "text-signal",
  ACTIVE: "text-accent",
  ONLINE: "text-warn",
};

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
    <section id="systems" className="container-mc scroll-mt-20 py-24 sm:py-32">
      <motion.div {...enter(0)}>
        <SectionHeader
          index="MISSION · 04"
          eyebrow="Onboard Systems"
          title="Skills, by subsystem."
          description="The toolkit I reach for — organized like the spacecraft we read about, not like a bullet-point resume."
        />
      </motion.div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-6">
        {SUBSYSTEMS.map((sys, i) => (
          <motion.div key={sys.id} {...enter(0.05 + i * 0.06)}>
            <GlassCard
              interactive
              className="group flex h-full flex-col gap-5 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-md border border-[color:var(--hairline-strong)] bg-panel-strong text-accent">
                    {sys.icon}
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                      {sys.code}
                    </p>
                    <h3 className="font-display text-xl tracking-tight text-ink">
                      {sys.system}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start">
                  <span
                    className={`relative flex h-1.5 w-1.5 ${STATUS_COLOR[sys.status]}`}
                  >
                    <span
                      aria-hidden
                      className={`absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-50`}
                    />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
                  </span>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.22em] ${STATUS_COLOR[sys.status]}`}
                  >
                    {sys.status}
                  </span>
                </div>
              </div>

              <p className="text-sm text-mute">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent/80">
                  {sys.role}
                </span>{" "}
                — {sys.description}
              </p>

              <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
                {sys.skills.map((s) => (
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
