import Link from "next/link";
import { Button, GlassCard, TelemetryLine } from "@/components/ui";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main
      id="main"
      className="relative flex min-h-screen items-center justify-center overflow-hidden telemetry-grid"
    >
      <div className="container-mc">
        <GlassCard variant="strong" className="mx-auto max-w-xl space-y-6">
          <span className="eyebrow">// PRE-FLIGHT · STAGE 01</span>
          <h1 className="font-display text-4xl tracking-tight sm:text-5xl">
            Mission Control
          </h1>
          <p className="text-ink-soft">
            Foundation deployed. Hero, missions, logbook, and contact arrive in
            stages 2–7. Design system live below.
          </p>
          <TelemetryLine label="Status" value="ON THE PAD" />
          <div className="flex flex-wrap gap-3 pt-2">
            <Button as="a" href="/lab" iconRight={<ArrowRight size={16} />}>
              Open Component Lab
            </Button>
            <Button
              as="a"
              href="https://github.com/818sushirolls/personal-portfolio-wei"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </div>
          <p className="pt-2 text-xs text-mute">
            <Link href="/lab" className="hover:text-accent">
              /lab
            </Link>{" "}
            shows the full design system. The launchpad hero replaces this view in
            Stage 2.
          </p>
        </GlassCard>
      </div>
    </main>
  );
}
