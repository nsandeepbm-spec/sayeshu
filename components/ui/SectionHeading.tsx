import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  /** `split` puts the description to the right of the title on wide screens. */
  layout?: "stacked" | "split" | "centered";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  layout = "stacked",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  const heading = (
    <div className={cn(layout === "centered" && "flex flex-col items-center text-center")}>
      <Eyebrow tone={tone} rule={layout === "centered" ? "both" : "before"}>
        {eyebrow}
      </Eyebrow>
      <h2
        className={cn(
          "section-title mt-4 font-display font-bold",
          dark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
    </div>
  );

  if (!description) {
    return <div className={className}>{heading}</div>;
  }

  const copy = (
    <p
      className={cn(
        "text-body leading-6",
        layout === "centered" ? "mx-auto mt-4 max-w-xl text-center" : "max-w-md",
        dark ? "text-night-text" : "text-steel",
      )}
    >
      {description}
    </p>
  );

  if (layout === "split") {
    return (
      <div className={cn("flex flex-col justify-between gap-6 md:flex-row md:items-end", className)}>
        {heading}
        {copy}
      </div>
    );
  }

  return (
    <div className={className}>
      {heading}
      {copy}
    </div>
  );
}
