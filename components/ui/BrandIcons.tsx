import type { SVGProps } from "react";

interface BrandIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function GithubIcon({ size = 18, ...rest }: BrandIconProps) {
  return (
    <svg width={size} height={size} aria-hidden="true" {...baseProps} {...rest}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5a13.38 13.38 0 0 0-7 0C7 2 6 2 6 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 5 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18, ...rest }: BrandIconProps) {
  return (
    <svg width={size} height={size} aria-hidden="true" {...baseProps} {...rest}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function XIcon({ size = 18, ...rest }: BrandIconProps) {
  return (
    <svg width={size} height={size} aria-hidden="true" {...baseProps} {...rest}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
