import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  GlassCard,
  GithubIcon,
  SectionHeader,
  Tag,
} from "@/components/ui";
import { getAllProjects, type ProjectStatus } from "@/lib/projects";

const STATUS_TONE: Record<ProjectStatus, "signal" | "warn" | "default"> = {
  Complete: "signal",
  "In progress": "warn",
  Archived: "default",
};

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  } catch {
    return iso;
  }
}

export async function Projects() {
  const projects = await getAllProjects();

  if (projects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="container-mc scroll-mt-20 py-24 sm:py-32">
      <SectionHeader
        index="02"
        eyebrow="Projects"
        title="Things I've built"
        description="A few projects I've shipped or am still poking at. Each has a writeup with what I built, what I learned, and what I'd do differently."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <article
            key={project.slug}
            className="group relative h-full"
          >
            <GlassCard
              interactive
              className="flex h-full flex-col gap-5 transition-transform duration-300 group-hover:-translate-y-0.5"
            >
              <header className="flex items-start justify-between gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Tag tone={STATUS_TONE[project.status]}>{project.status}</Tag>
              </header>

              <div className="space-y-2">
                <h3 className="font-display text-2xl leading-tight tracking-tight text-ink sm:text-[1.75rem]">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="outline-none before:absolute before:inset-0 before:rounded-[inherit] focus-visible:underline"
                  >
                    {project.title}
                  </Link>
                </h3>
                <p className="text-[15px] leading-relaxed text-ink-soft">
                  {project.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.stack.slice(0, 6).map((tech) => (
                  <Tag key={tech} mono={false} tone="default">
                    {tech}
                  </Tag>
                ))}
                {project.stack.length > 6 && (
                  <Tag mono={false} tone="default">
                    +{project.stack.length - 6}
                  </Tag>
                )}
              </div>

              <div className="mt-auto flex items-center justify-between gap-3 pt-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute-soft">
                  {formatDate(project.date)}
                </span>
                <div className="relative z-10 flex items-center gap-3">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="text-mute transition-colors hover:text-ink"
                    >
                      <GithubIcon className="h-[18px] w-[18px]" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="text-mute transition-colors hover:text-ink"
                    >
                      <ExternalLink className="h-[18px] w-[18px]" />
                    </a>
                  )}
                  <span
                    aria-hidden
                    className="pointer-events-none font-mono text-[11px] uppercase tracking-[0.18em] text-accent/80 transition-colors group-hover:text-accent"
                  >
                    read more →
                  </span>
                </div>
              </div>
            </GlassCard>
          </article>
        ))}
      </div>
    </section>
  );
}
