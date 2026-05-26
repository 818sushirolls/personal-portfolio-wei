import { Nav } from "@/components/layout/Nav";
import { Hero } from "@/components/sections/Hero";
import { GlassCard, SectionHeader } from "@/components/ui";

interface PlaceholderProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description: string;
}

function Placeholder({ id, index, eyebrow, title, description }: PlaceholderProps) {
  return (
    <section id={id} className="container-mc scroll-mt-20 py-24 sm:py-32">
      <SectionHeader
        index={`MISSION · ${index}`}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <GlassCard className="mt-10 flex items-center justify-between gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute">
          // SECTION SCAFFOLDED — CONTENT INCOMING
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-warn">
          T-MINUS · NEXT WAYPOINT
        </span>
      </GlassCard>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />

        <Placeholder
          id="briefing"
          index="01"
          eyebrow="About"
          title="Mission briefing"
          description="A short personal intro and the systems-thinking background behind this portfolio."
        />
        <Placeholder
          id="missions"
          index="02"
          eyebrow="Projects"
          title="Missions"
          description="Selected projects across software, ML, and aerospace simulations — each with its own writeup."
        />
        <Placeholder
          id="logbook"
          index="03"
          eyebrow="Engineering Logbook"
          title="Mission archive"
          description="Reports, CAD, simulations, and engineering notes, dated and indexed."
        />
        <Placeholder
          id="systems"
          index="04"
          eyebrow="Skills"
          title="Onboard systems"
          description="Skills laid out as spacecraft subsystems — propulsion, guidance, comms, infrastructure."
        />
        <Placeholder
          id="ground-control"
          index="05"
          eyebrow="Contact"
          title="Ground control"
          description="Open a channel — contact form, email, GitHub, LinkedIn."
        />
      </main>
    </>
  );
}
