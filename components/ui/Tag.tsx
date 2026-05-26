import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Tone = "default" | "accent" | "warn" | "signal" | "danger";

const toneStyles: Record<Tone, string> = {
  default:
    "border-[color:var(--hairline-strong)] text-mute hover:text-ink-soft hover:border-[color:var(--accent)]/40",
  accent:
    "border-[color:var(--accent)]/30 text-accent bg-[color:var(--accent)]/5",
  warn: "border-[color:var(--warn)]/30 text-warn bg-[color:var(--warn)]/5",
  signal:
    "border-[color:var(--signal)]/30 text-signal bg-[color:var(--signal)]/5",
  danger:
    "border-[color:var(--danger)]/30 text-danger bg-[color:var(--danger)]/5",
};

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
  mono?: boolean;
}

export function Tag({
  className,
  tone = "default",
  mono = true,
  children,
  ...rest
}: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[11px] leading-none transition-colors",
        mono && "font-mono uppercase tracking-wider",
        toneStyles[tone],
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
