import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

/** `inverse`: solid white for dark bands. `outline-inverse`: transparent with a white outline for dark bands. */
type Variant = "primary" | "secondary" | "inverse" | "outline-inverse";

/**
 * Sizes are separate from the base so no two padding / text-size classes ever compete on one element
 * (`cn` only joins strings, it does not resolve conflicts).
 */
type Size = "default" | "compact" | "form";

const sizes: Record<Size, string> = {
  default: "px-6 py-3.5 text-sm",
  compact: "px-6 py-3 text-sm",
  form: "px-10 py-4 text-xs uppercase tracking-widest",
};

const base =
  "inline-flex select-none items-center justify-center gap-2 border font-semibold transition-colors duration-150 ease-linear disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "border-ink bg-ink text-white hover:border-night-line hover:bg-night-line",
  secondary: "border-ink bg-white text-ink hover:bg-stone",
  inverse: "border-white bg-white text-night hover:bg-stone",
  "outline-inverse": "border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10",
};

/** Class helper so native `<button>` elements can share the exact same styling. */
export function buttonStyles(variant: Variant = "primary", className?: string, size: Size = "default") {
  return cn(base, sizes[size], variants[variant], className);
}

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "children"> & {
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  children: ReactNode;
};

export function ButtonLink({ variant = "primary", size = "default", icon, className, children, ...props }: ButtonLinkProps) {
  return (
    <Link className={buttonStyles(variant, className, size)} {...props}>
      {children}
      {icon ? <Icon name={icon} size={16} /> : null}
    </Link>
  );
}

/** Text / blueprint action: eyebrow styling with an inline arrow and an accent underline. */
export function TextLink({
  className,
  children,
  ...props
}: Omit<ComponentProps<typeof Link>, "children"> & { children: ReactNode }) {
  return (
    <Link
      className={cn(
        "group inline-flex items-center gap-2 border-b border-accent pb-0.5 text-xs font-semibold uppercase tracking-link text-ink transition-colors hover:text-accent-text",
        className,
      )}
      {...props}
    >
      {children}
      <Icon name="arrow-right" size={14} className="transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
