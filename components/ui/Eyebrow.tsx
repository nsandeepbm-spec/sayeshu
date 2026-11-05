import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  /** `light`: steel text, `ink`: full-contrast text on light surfaces, `dark`/`accent`: for dark bands. */
  tone?: "light" | "ink" | "dark" | "accent";
  /** Where the accent rule sits relative to the label. */
  rule?: "before" | "after" | "both" | "none";
  className?: string;
};

/** Section eyebrow: uppercase, wide tracking, paired with a 2px accent rule. */
export function Eyebrow({ children, tone = "light", rule = "before", className }: EyebrowProps) {
  const bar = <span aria-hidden="true" className="h-0.5 w-8 shrink-0 bg-accent" />;
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {(rule === "before" || rule === "both") && bar}
      <span
        className={cn(
          "text-tiny font-semibold uppercase leading-3.5 tracking-eyebrow sm:text-xs",
          tone === "light" && "text-steel",
          tone === "ink" && "text-ink",
          tone === "dark" && "text-night-text",
          tone === "accent" && "text-accent-bright",
        )}
      >
        {children}
      </span>
      {(rule === "after" || rule === "both") && bar}
    </div>
  );
}
