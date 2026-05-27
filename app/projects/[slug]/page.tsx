import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Nav } from "@/components/layout/Nav";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import {
  Button,
  GithubIcon,
  Tag,
} from "@/components/ui";
import {
  getAllProjects,
  getProjectBySlug,
  type ProjectStatus,
} from "@/lib/projects";

const STATUS_TONE: Record<ProjectStatus, "signal" | "warn" | "default"> = {
  Complete: "signal",
  "In progress": "warn",
  Archived: "default",
};

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  } catch {
    return iso;
  }
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Nav />
      <main id="main" className="container-mc py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-mute transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>back to projects</span>
          </Link>

          <header className="mt-8 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <Tag tone={STATUS_TONE[project.status]}>{project.status}</Tag>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute-soft">
                {formatDate(project.date)}
              </span>
            </div>
            <h1 className="font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
              {project.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.stack.map((tech) => (
                <Tag key={tech} mono={false} tone="default">
                  {tech}
                </Tag>
              ))}
            </div>

            {(project.repo || project.demo) && (
              <div className="flex flex-wrap gap-3 pt-2">
                {project.repo && (
                  <Button
                    as="a"
                    href={project.repo}
                    variant="secondary"
                    size="md"
                    target="_blank"
                    rel="noopener noreferrer"
                    iconLeft={<GithubIcon className="h-4 w-4" />}
                  >
                    Source
                  </Button>
                )}
                {project.demo && (
                  <Button
                    as="a"
                    href={project.demo}
                    variant="secondary"
                    size="md"
                    target="_blank"
                    rel="noopener noreferrer"
                    iconLeft={<ExternalLink className="h-4 w-4" />}
                  >
                    Live demo
                  </Button>
                )}
              </div>
            )}
          </header>

          <div className="hairline my-12" />

          <div className="prose-mc">
            <MDXRemote
              source={project.body}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>

          <div className="hairline my-12" />

          <div className="flex items-center justify-between">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-mute transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>back to projects</span>
            </Link>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute-soft">
              {project.slug}
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
