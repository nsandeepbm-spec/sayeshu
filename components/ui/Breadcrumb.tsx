import Link from "next/link";
import { cn } from "@/lib/cn";

type BreadcrumbProps = {
  /** Label of the current page. */
  label: string;
  /** `dark` is for heroes that sit on a night background or photograph. */
  tone?: "light" | "dark";
  className?: string;
};

/** Home / Current page trail shown at the top of every inner-page hero. */
export function Breadcrumb({ label, tone = "light", className }: BreadcrumbProps) {
  const dark = tone === "dark";
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center gap-2 text-xs tracking-wider", dark ? "text-night-text" : "text-steel", className)}
    >
      <Link href="/" className={cn("transition-colors", dark ? "hover:text-white" : "hover:text-ink")}>
        Home
      </Link>
      <span aria-hidden="true">/</span>
      <span aria-current="page" className={cn("font-semibold", dark ? "text-white" : "text-ink")}>
        {label}
      </span>
    </nav>
  );
}
