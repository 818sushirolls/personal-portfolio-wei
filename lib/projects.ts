import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "projects");

export type ProjectStatus = "Complete" | "In progress" | "Archived";

export interface ProjectFrontmatter {
  title: string;
  summary: string;
  stack: string[];
  repo?: string;
  demo?: string;
  cover?: string;
  status: ProjectStatus;
  date: string;
  order?: number;
  featured?: boolean;
}

export interface Project extends ProjectFrontmatter {
  slug: string;
  body: string;
}

async function readMdx(file: string): Promise<Project> {
  const fullPath = path.join(CONTENT_DIR, file);
  const raw = await fs.readFile(fullPath, "utf-8");
  const { data, content } = matter(raw);
  const slug = file.replace(/\.mdx$/, "");
  const fm = data as ProjectFrontmatter;
  return { ...fm, slug, body: content };
}

export async function getAllProjects(): Promise<Project[]> {
  let files: string[] = [];
  try {
    files = await fs.readdir(CONTENT_DIR);
  } catch {
    return [];
  }
  const mdxFiles = files.filter((f) => f.endsWith(".mdx"));
  const projects = await Promise.all(mdxFiles.map(readMdx));
  return projects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order;
    }
    if (a.order !== undefined) return -1;
    if (b.order !== undefined) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getProjectBySlug(
  slug: string
): Promise<Project | null> {
  try {
    return await readMdx(`${slug}.mdx`);
  } catch {
    return null;
  }
}

export async function getProjectSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(CONTENT_DIR);
    return files
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => f.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}
