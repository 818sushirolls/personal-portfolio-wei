"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";
import { Button, GithubIcon, LinkedinIcon } from "@/components/ui";

const Starfield = dynamic(() => import("@/components/three/Starfield"), {
  ssr: false,
  loading: () => null,
});

const NAME = "Emily Wei";
const TAGLINE = "Software engineer with a soft spot for aerospace.";
const SUBROLE = "Backend · ML · Systems";
const INTRO =
  "I write backend services, ML pipelines, and the tooling around them. Outside of work I'm into rockets, sci-fi, and any kind of system where the software has to track something physical.";

export function Hero() {
  const reduced = useReducedMotion();

  const fade = reduced
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <section
      id="launchpad"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Starfield className="h-full w-full" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
        <div className="absolute inset-x-0 bottom-[28%] h-px bg-gradient-to-r from-transparent via-[color:var(--accent)]/25 to-transparent" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-0 telemetry-grid opacity-40" />

      <div className="container-mc relative z-10 flex w-full flex-col items-start gap-7 py-24 sm:py-32">
        <motion.div
          {...fade}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex items-center gap-3"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-mute">
            Currently · open to new-grad roles
          </span>
        </motion.div>

        <motion.h1
          {...fade}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-[3.25rem] font-medium leading-[0.98] tracking-tight text-ink sm:text-7xl md:text-8xl"
        >
          {NAME}
        </motion.h1>

        <motion.p
          {...fade}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="-mt-1 max-w-2xl font-display text-2xl italic leading-snug text-ink-soft sm:text-3xl"
        >
          {TAGLINE}
        </motion.p>

        <motion.p
          {...fade}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="font-mono text-[11px] uppercase tracking-[0.32em] text-mute"
        >
          {SUBROLE}
        </motion.p>

        <motion.p
          {...fade}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
        >
          {INTRO}
        </motion.p>

        <motion.div
          {...fade}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center gap-3 pt-1"
        >
          <Button as="a" href="/resume.pdf" iconLeft={<FileDown size={16} />}>
            Download resume
          </Button>
          <Button
            as="a"
            href="https://github.com/818sushirolls"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            iconLeft={<GithubIcon size={16} />}
          >
            GitHub
          </Button>
          <Button
            as="a"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            iconLeft={<LinkedinIcon size={16} />}
          >
            LinkedIn
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#briefing"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 group flex flex-col items-center gap-2 text-mute transition-colors hover:text-accent"
        initial={reduced ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.span
          aria-hidden
          animate={reduced ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} strokeWidth={1.5} />
        </motion.span>
      </motion.a>
    </section>
  );
}
