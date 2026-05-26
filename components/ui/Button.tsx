import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all duration-200 select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-bg hover:bg-[color:var(--accent)] hover:brightness-110 shadow-[0_0_0_1px_rgba(122,215,255,0.3),0_8px_24px_-12px_rgba(122,215,255,0.5)] hover:shadow-[0_0_0_1px_rgba(122,215,255,0.5),0_12px_28px_-10px_rgba(122,215,255,0.6)]",
  secondary:
    "bg-panel text-ink border border-[color:var(--hairline-strong)] hover:border-[color:var(--accent)] hover:bg-panel-strong hover:text-ink",
  ghost:
    "text-ink-soft hover:text-ink hover:bg-white/5 border border-transparent",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-sm",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  children?: ReactNode;
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };
type AnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };

export type Props = ButtonProps | AnchorProps;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  function Button(props, ref) {
    const {
      variant = "primary",
      size = "md",
      iconLeft,
      iconRight,
      className,
      children,
      ...rest
    } = props;
    const cls = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

    if ((props as AnchorProps).as === "a") {
      const { as: _as, ...anchorRest } = rest as AnchorProps;
      void _as;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={cls}
          {...anchorRest}
        >
          {iconLeft}
          {children}
          {iconRight}
        </a>
      );
    }

    const { as: _as, ...buttonRest } = rest as ButtonProps;
    void _as;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cls}
        {...buttonRest}
      >
        {iconLeft}
        {children}
        {iconRight}
      </button>
    );
  }
);
