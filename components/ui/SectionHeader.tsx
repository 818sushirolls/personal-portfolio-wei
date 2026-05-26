import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  index?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  index,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {(eyebrow || index) && (
        <div className="flex items-center gap-3">
          {index && (
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute-soft">
              {index}
            </span>
          )}
          {index && eyebrow && (
            <span aria-hidden className="h-px w-8 bg-[color:var(--hairline-strong)]" />
          )}
          {eyebrow && (
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent/80">
              {eyebrow}
            </span>
          )}
        </div>
      )}
      <h2 className="font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
          {description}
        </p>
      )}
    </header>
  );
}
