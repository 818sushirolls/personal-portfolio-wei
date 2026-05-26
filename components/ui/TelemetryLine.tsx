import { cn } from "@/lib/cn";

interface TelemetryLineProps {
  label?: string;
  value?: string;
  align?: "left" | "right";
  className?: string;
}

export function TelemetryLine({
  label,
  value,
  align = "left",
  className,
}: TelemetryLineProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-mute-soft",
        align === "right" && "flex-row-reverse",
        className
      )}
    >
      {label && <span className="text-mute">{label}</span>}
      <span aria-hidden className="h-px flex-1 bg-[color:var(--hairline-strong)]" />
      {value && <span className="text-ink-soft">{value}</span>}
    </div>
  );
}
