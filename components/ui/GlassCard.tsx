import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "strong";
  interactive?: boolean;
  bare?: boolean;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  function GlassCard(
    { className, variant = "default", interactive = false, bare = false, children, ...rest },
    ref
  ) {
    return (
      <div
        ref={ref}
        className={cn(
          variant === "strong" ? "glass-strong" : "glass",
          !bare && "p-6",
          interactive && "ring-accent scanline-hover transition-colors",
          className
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
