import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="border-b border-line bg-canvas">
      <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
        <Eyebrow tone="ink">Error 404</Eyebrow>
        <h1 className="mt-5 max-w-2xl font-display text-display font-bold leading-headline tracking-tight text-ink md:text-5xl">
          This page is off the drawing.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-steel-dark">
          The page you are looking for does not exist or has moved. Use the navigation above, or head back to the
          homepage.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <ButtonLink href="/" icon="arrow-right">
            Back to homepage
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Discuss a Project
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
