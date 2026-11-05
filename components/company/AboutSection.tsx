import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IsometricSchematic } from "./IsometricSchematic";

export function AboutSection() {
  return (
    <section className="w-full border-b border-line py-20 lg:py-24">
      <Container>
        <Eyebrow tone="ink" className="mb-8">
          About SAYESHU
        </Eyebrow>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col lg:col-span-6">
            <h2 className="mb-6 font-display text-3xl font-bold tracking-heading text-night lg:text-4xl">
              A specialised consultancy for the AI era.
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-steel">
              <p>
                We see an opportunity to build SAYESHU into a specialised consultancy serving the evolving requirements
                of data centres and AI computing infrastructure.
              </p>
              <p>
                Our focus is on identifying infrastructure constraints early and coordinating decisions that affect the
                performance, cost and reliability of the completed facility.
              </p>
            </div>
          </div>
          <div className="aspect-16/10 w-full lg:col-span-6">
            <IsometricSchematic />
          </div>
        </div>
      </Container>
    </section>
  );
}
