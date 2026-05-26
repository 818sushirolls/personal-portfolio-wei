import Link from "next/link";
import { Button, GlassCard, TelemetryLine } from "@/components/ui";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Signal Lost",
};

export default function NotFound() {
  return (
    <main
      id="main"
      className="flex min-h-screen items-center justify-center px-5 telemetry-grid"
    >
      <GlassCard variant="strong" className="max-w-md space-y-5 text-center">
        <span className="eyebrow text-warn">// SIGNAL LOST · 404</span>
        <h1 className="font-display text-5xl tracking-tight">
          Telemetry interrupted.
        </h1>
        <p className="text-ink-soft">
          The page you requested is outside the current orbital path. Reset
          course and return to base.
        </p>
        <TelemetryLine label="Last known signal" value="UNREACHABLE" />
        <div className="flex justify-center pt-1">
          <Button as="a" href="/" iconLeft={<ArrowLeft size={16} />}>
            Return to launchpad
          </Button>
        </div>
        <Link
          href="/lab"
          className="block pt-1 text-xs text-mute hover:text-accent"
        >
          or visit /lab
        </Link>
      </GlassCard>
    </main>
  );
}
