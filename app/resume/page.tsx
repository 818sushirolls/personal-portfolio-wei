import fs from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { Nav } from "@/components/layout/Nav";
import { Button, GlassCard } from "@/components/ui";

const RESUME_PUBLIC_PATH = "/resume.pdf";
const RESUME_FS_PATH = path.join(process.cwd(), "public", "resume.pdf");

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Emily Wei. View the document inline or download a copy.",
};

async function getResumeMeta() {
  try {
    const stat = await fs.stat(RESUME_FS_PATH);
    return {
      exists: true as const,
      updated: stat.mtime,
      size: stat.size,
    };
  } catch {
    return { exists: false as const };
  }
}

function formatBytes(b: number) {
  if (b < 1024) return `${b} B`;
  if (b < 1024 * 1024) return `${Math.round(b / 1024)} KB`;
  return `${(b / (1024 * 1024)).toFixed(1)} MB`;
}

function formatMonthYear(d: Date) {
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export default async function ResumePage() {
  const meta = await getResumeMeta();

  return (
    <>
      <Nav />
      <main id="main" className="container-mc py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-mute transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>back home</span>
          </Link>

          <header className="mt-8 space-y-3">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-accent/80" aria-hidden />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent/80">
                Resume
              </span>
            </div>
            <h1 className="font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
              Emily Wei
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Preview below. Hosted directly from this site (no third-party
              redirects), so you can read it before deciding to download.
            </p>
            {meta.exists && (
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute-soft">
                Updated {formatMonthYear(meta.updated)} · {formatBytes(meta.size)} · PDF
              </p>
            )}
          </header>

          <div className="hairline my-10" />

          {meta.exists ? (
            <>
              {/* Desktop / tablet inline preview */}
              <div className="hidden sm:block">
                <object
                  data={RESUME_PUBLIC_PATH}
                  type="application/pdf"
                  className="block aspect-[8.5/11] w-full rounded-md border border-[color:var(--hairline)] bg-bg-elev shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
                  aria-label="Resume preview"
                >
                  <p className="p-6 text-ink-soft">
                    Your browser can&apos;t display the embedded PDF.{" "}
                    <a
                      href={RESUME_PUBLIC_PATH}
                      className="text-accent underline"
                    >
                      Open it in a new tab
                    </a>{" "}
                    or use the download button below.
                  </p>
                </object>
              </div>

              {/* Mobile fallback */}
              <div className="sm:hidden">
                <GlassCard className="space-y-3 text-center">
                  <FileText className="mx-auto h-8 w-8 text-accent/70" aria-hidden />
                  <p className="text-sm text-ink-soft">
                    PDF previews are inconsistent on mobile. Tap below to view
                    or save the file.
                  </p>
                  <div className="flex flex-col gap-2 pt-1">
                    <Button
                      as="a"
                      href={RESUME_PUBLIC_PATH}
                      target="_blank"
                      rel="noopener noreferrer"
                      iconLeft={<FileText className="h-4 w-4" />}
                    >
                      Open PDF
                    </Button>
                    <Button
                      as="a"
                      href={RESUME_PUBLIC_PATH}
                      download
                      variant="secondary"
                      iconLeft={<Download className="h-4 w-4" />}
                    >
                      Download
                    </Button>
                  </div>
                </GlassCard>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 sm:flex-row">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute-soft">
                  resume.pdf
                </span>
                <div className="hidden flex-wrap items-center gap-3 sm:flex">
                  <Button
                    as="a"
                    href={RESUME_PUBLIC_PATH}
                    download
                    iconLeft={<Download className="h-4 w-4" />}
                  >
                    Download PDF
                  </Button>
                  <Button
                    as="a"
                    href={RESUME_PUBLIC_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    iconLeft={<FileText className="h-4 w-4" />}
                  >
                    Open in new tab
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <GlassCard className="space-y-3">
              <p className="text-ink-soft">
                The resume file isn&apos;t in place yet. Drop a PDF at{" "}
                <code className="rounded bg-white/5 px-1.5 py-0.5 text-sm">
                  public/resume.pdf
                </code>{" "}
                and refresh.
              </p>
            </GlassCard>
          )}

          <div className="hairline my-12" />

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-mute transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>back home</span>
          </Link>
        </div>
      </main>
    </>
  );
}
