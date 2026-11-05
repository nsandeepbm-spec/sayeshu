import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Breadcrumb } from "./Breadcrumb";
import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";

type PageHeroProps = {
  /** Eyebrow label, also used for the breadcrumb leaf. */
  label: string;
  title: ReactNode;
  description: ReactNode;
  image: string;
  imageAlt: string;
  /** Hide the breadcrumb (homepage). */
  breadcrumb?: boolean;
  /** `tall` is used by the homepage hero. */
  size?: "default" | "tall";
  children?: ReactNode;
};

/**
 * Shared photographic hero: copy on the left, image dissolving in from the right
 * (65% width on desktop, full-bleed + scrim on mobile). Used by Home and the light
 * inner pages (Solutions, Projects, Insights, Company, Contact). Expertise keeps a
 * dedicated dark technical hero.
 */
export function PageHero({
  label,
  title,
  description,
  image,
  imageAlt,
  breadcrumb = true,
  size = "default",
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate flex items-center overflow-hidden border-b border-line bg-canvas",
        size === "tall" ? "min-h-150 lg:min-h-210 xl:min-h-225" : "min-h-125 lg:min-h-140",
      )}
    >
      <div className="absolute inset-y-0 right-0 -z-20 w-full lg:w-13/20">
        <Image
          src={image}
          alt={imageAlt}
          fill
          preload
          loading="eager"
          sizes="(min-width: 1024px) 65vw, 100vw"
          className="object-cover object-center"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-canvas/85 lg:hidden" />
      <div aria-hidden="true" className="hero-fade absolute inset-0 -z-10 hidden lg:block" />

      <Container className="py-16 lg:py-20">
        <div className="max-w-140">
          {breadcrumb && <Breadcrumb label={label} className="rise mb-6" />}
          <Eyebrow tone="ink" rule="after" className="rise mb-5">
            {label}
          </Eyebrow>
          <h1 className="rise rise-1 font-display text-headline font-bold leading-headline tracking-tight text-ink md:text-5xl lg:text-headline-lg">
            {title}
          </h1>
          <p className="rise rise-2 mt-5 max-w-xl text-base leading-relaxed text-steel-dark lg:text-lead lg:leading-relaxed">
            {description}
          </p>
          {children && <div className="rise rise-3">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
