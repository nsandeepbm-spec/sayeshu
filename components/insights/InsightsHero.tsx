import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/lib/images";

/** Insights hero: same photographic composition as the homepage. */
export function InsightsHero() {
  return (
    <PageHero
      label="Insights"
      title={
        <>
          Perspectives on the infrastructure{" "}
          <br className="hidden sm:block" />
          behind AI.
        </>
      }
      description="Engineering thinking on power, cooling, GPU infrastructure and performance."
      image={images.serverAisleBlue}
      imageAlt="Blue-lit server aisle inside a modern data centre"
    >
      <div className="mt-9 flex flex-wrap items-center gap-4">
        <ButtonLink href="#articles" icon="arrow-right">
          Read the latest
        </ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Discuss a Project
        </ButtonLink>
      </div>
    </PageHero>
  );
}
