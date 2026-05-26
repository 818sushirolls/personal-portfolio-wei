import { Rocket, FileDown, ArrowRight } from "lucide-react";
import {
  Button,
  GlassCard,
  GithubIcon,
  LinkedinIcon,
  SectionHeader,
  Tag,
  TelemetryLine,
} from "@/components/ui";

export const metadata = {
  title: "Component Lab",
  robots: { index: false, follow: false },
};

export default function LabPage() {
  return (
    <main id="main" className="min-h-screen telemetry-grid">
      <div className="container-mc py-16 sm:py-24 space-y-20">
        <header className="space-y-3">
          <span className="eyebrow">// COMPONENT LAB</span>
          <h1 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
            Mission Control — Design System
          </h1>
          <p className="max-w-2xl text-ink-soft">
            Internal showcase of design tokens, glass surfaces, and primitives.
            Not indexed. Will be removed before final ship.
          </p>
        </header>

        {/* Color tokens */}
        <section className="space-y-6">
          <SectionHeader
            index="LAB · 01"
            eyebrow="Tokens"
            title="Palette"
            description="Deep-space dark theme with cyan accent and amber warning tones."
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6">
            {[
              ["bg", "var(--bg)"],
              ["panel", "var(--panel)"],
              ["panel-strong", "var(--panel-strong)"],
              ["ink", "var(--ink)"],
              ["mute", "var(--mute)"],
              ["accent", "var(--accent)"],
              ["warn", "var(--warn)"],
              ["signal", "var(--signal)"],
              ["danger", "var(--danger)"],
            ].map(([name, value]) => (
              <GlassCard key={name} bare className="overflow-hidden">
                <div
                  className="h-16 w-full"
                  style={{ background: value as string }}
                />
                <div className="flex items-center justify-between px-3 py-2 text-[11px] font-mono">
                  <span className="text-ink">{name}</span>
                  <span className="text-mute">{value}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-6">
          <SectionHeader
            index="LAB · 02"
            eyebrow="Typography"
            title="Type stack"
            description="Space Grotesk for display, Inter for body, JetBrains Mono for telemetry."
          />
          <GlassCard className="space-y-6">
            <div>
              <p className="eyebrow mb-2">Display — Space Grotesk</p>
              <p className="font-display text-5xl tracking-tight text-ink">
                Trajectory of a systems engineer.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-2">Body — Inter</p>
              <p className="text-base text-ink-soft max-w-2xl leading-relaxed">
                Software engineer with an aerospace systems background, building
                backend services, ML pipelines, and tooling for engineering teams.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-2">Mono — JetBrains Mono</p>
              <p className="font-mono text-sm text-mute">
                T-00:42:18 · MISSION 03 · ALT 12.4 km · VEL 2,840 m/s
              </p>
            </div>
          </GlassCard>
        </section>

        {/* Buttons */}
        <section className="space-y-6">
          <SectionHeader
            index="LAB · 03"
            eyebrow="Buttons"
            title="Actions"
            description="Three variants × three sizes."
          />
          <GlassCard className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm" iconLeft={<Rocket size={14} />}>
                Launch
              </Button>
              <Button size="md" iconRight={<ArrowRight size={16} />}>
                Continue
              </Button>
              <Button size="lg" iconLeft={<FileDown size={16} />}>
                Download Resume
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="secondary" size="sm">
                Secondary
              </Button>
              <Button variant="secondary" iconLeft={<GithubIcon size={16} />}>
                GitHub
              </Button>
              <Button
                variant="secondary"
                size="lg"
                iconLeft={<LinkedinIcon size={16} />}
              >
                LinkedIn
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="ghost" size="sm">
                Ghost sm
              </Button>
              <Button variant="ghost">Ghost md</Button>
              <Button variant="ghost" size="lg">
                Ghost lg
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button as="a" href="#" variant="primary">
                Anchor as primary
              </Button>
              <Button as="a" href="#" variant="secondary">
                Anchor as secondary
              </Button>
            </div>
          </GlassCard>
        </section>

        {/* Tags */}
        <section className="space-y-6">
          <SectionHeader
            index="LAB · 04"
            eyebrow="Tags"
            title="Status chips"
          />
          <GlassCard className="flex flex-wrap items-center gap-2">
            <Tag>Default</Tag>
            <Tag tone="accent">Accent</Tag>
            <Tag tone="signal">Mission Complete</Tag>
            <Tag tone="warn">In Flight</Tag>
            <Tag tone="danger">Aborted</Tag>
            <Tag mono={false}>Not mono</Tag>
          </GlassCard>
        </section>

        {/* Glass cards */}
        <section className="space-y-6">
          <SectionHeader
            index="LAB · 05"
            eyebrow="Surfaces"
            title="Glass panels"
            description="Default + strong variants. Interactive panels add a subtle hover ring + scanline."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <GlassCard>
              <p className="eyebrow mb-3">Default surface</p>
              <p className="text-ink">Standard panel</p>
              <p className="mt-1 text-sm text-mute">
                Used for most content blocks.
              </p>
            </GlassCard>
            <GlassCard variant="strong">
              <p className="eyebrow mb-3">Strong surface</p>
              <p className="text-ink">Elevated panel</p>
              <p className="mt-1 text-sm text-mute">Used for hero / featured.</p>
            </GlassCard>
            <GlassCard interactive>
              <p className="eyebrow mb-3">Interactive</p>
              <p className="text-ink">Hover to see ring + scanline</p>
              <p className="mt-1 text-sm text-mute">Used for project cards.</p>
            </GlassCard>
          </div>
        </section>

        {/* Telemetry lines */}
        <section className="space-y-6">
          <SectionHeader
            index="LAB · 06"
            eyebrow="Decorations"
            title="Telemetry lines"
            description="Use as section delimiters or metadata rows."
          />
          <GlassCard className="space-y-4">
            <TelemetryLine label="Mission" value="03 / SIGNAL ACQUIRED" />
            <TelemetryLine label="Altitude" value="12.4 km" />
            <TelemetryLine label="Velocity" value="2,840 m/s" />
            <TelemetryLine align="right" label="Status" value="NOMINAL" />
          </GlassCard>
        </section>

        {/* Telemetry grid bg */}
        <section className="space-y-6">
          <SectionHeader
            index="LAB · 07"
            eyebrow="Background"
            title="Telemetry grid"
          />
          <GlassCard bare className="telemetry-grid h-48 p-6">
            <p className="eyebrow">overlay sample</p>
            <p className="mt-2 text-ink">
              Subtle grid lines used behind hero + section headers.
            </p>
          </GlassCard>
        </section>
      </div>
    </main>
  );
}
