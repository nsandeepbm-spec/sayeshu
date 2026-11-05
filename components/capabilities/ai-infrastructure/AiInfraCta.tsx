import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { images } from "@/lib/images";

export function AiInfraCta() {
  return (
    <section className="relative isolate overflow-hidden border-b border-night-border bg-night py-20 text-white lg:py-24">
      <Image
        src={images.aiInfraHero}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover opacity-25 grayscale"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-night/80" />

      <Container className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <Eyebrow tone="accent" className="mb-4">
            Next steps
          </Eyebrow>
          <h2 className="font-display text-feature font-bold tracking-heading text-white lg:text-feature-lg">
            Planning an AI computing facility?
          </h2>
          <p className="mt-4 text-lead leading-relaxed text-night-text">
            Let&apos;s discuss your accelerator platform, capacity and infrastructure requirements.
          </p>
        </div>
        <ButtonLink href="/contact" variant="inverse" icon="arrow-up-right">
          Talk to an AI Infrastructure Consultant
        </ButtonLink>
      </Container>
    </section>
  );
}
