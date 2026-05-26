import Link from "next/link";
import { Button, GlassCard, TelemetryLine } from "@/components/ui";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <main
      id="main"
      className="flex min-h-screen items-center justify-center px-5 telemetry-grid"
    >
      <GlassCard variant="strong" className="max-w-md space-y-5 text-center">
        <span className="eyebrow text-warn">404 · signal lost</span>
        <h1 className="font-display text-5xl tracking-tight">
          Off course.
        </h1>
        <p className="text-ink-soft">
          That page isn&apos;t somewhere I&apos;ve been yet, or it drifted off
          orbit. Head back to the launchpad and try again.
        </p>
        <TelemetryLine label="last known signal" value="unreachable" />
        <div className="flex justify-center pt-1">
          <Button as="a" href="/" iconLeft={<ArrowLeft size={16} />}>
            Back to home
          </Button>
        </div>
        <Link
          href="/lab"
          className="block pt-1 text-xs text-mute hover:text-accent"
        >
          or peek at /lab
        </Link>
      </GlassCard>
    </main>
  );
}
