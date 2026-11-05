import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <PageHero
      size="tall"
      breadcrumb={false}
      label="AI Data Centre Engineering & Consultancy"
      title={
        <>
          Engineering the <br className="hidden sm:block" />
          infrastructure <br className="hidden sm:block" />
          behind intelligence
        </>
      }
      description="We design and engineer data centre infrastructure for the next generation of computing — integrating power, cooling, GPU systems and performance into one coordinated engineering approach."
      image={images.dataCentreExterior}
      imageAlt="Modern enterprise AI data centre with a concrete and black louvred facade at sunset"
    >
      <div className="mt-9 flex flex-wrap items-center gap-4">
        <ButtonLink href="/expertise" icon="arrow-right">
          Explore Our Capabilities
        </ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Discuss a Project
        </ButtonLink>
      </div>
    </PageHero>
  );
}
