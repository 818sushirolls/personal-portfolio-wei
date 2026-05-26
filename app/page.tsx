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

function Placeholder({
  id,
  index,
  eyebrow,
  title,
  description,
}: PlaceholderProps) {
  return (
    <section id={id} className="container-mc scroll-mt-20 py-24 sm:py-32">
      <SectionHeader
        index={index}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <GlassCard className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute">
          {/* lowercase, friendly, never finished-looking */}
          building this section next
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute-soft">
          coming soon
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
          title="Briefing"
          description="A short intro, the path I took to get here, and the kind of work I like doing."
        />
        <Placeholder
          id="missions"
          index="02"
          eyebrow="Projects"
          title="Missions"
          description="Featured projects across software, ML, and aerospace simulations. Each has its own writeup page."
        />
        <Placeholder
          id="logbook"
          index="03"
          eyebrow="Engineering Logbook"
          title="Logbook"
          description="An archive of older technical work, reports, and notes. Dated, so it reads as a running journal."
        />
        <Placeholder
          id="systems"
          index="04"
          eyebrow="Skills"
          title="Onboard systems"
          description="The toolkit I reach for, organized by subsystem rather than as a list of bullet points."
        />
        <Placeholder
          id="ground-control"
          index="05"
          eyebrow="Contact"
          title="Ground control"
          description="The best ways to get in touch."
        />
      </main>
    </>
  );
}
