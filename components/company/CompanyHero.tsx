import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/lib/images";

/** Company hero: same photographic composition as the homepage. */
export function CompanyHero() {
  return (
    <PageHero
      label="Company"
      title={
        <>
          Engineering the infrastructure{" "}
          <br className="hidden sm:block" />
          behind intelligence.
        </>
      }
      description="SAYESHU is a specialised AI data centre engineering and consultancy practice bringing power, cooling, compute, networking and performance together through one coordinated engineering approach."
      image={images.engineersDataHall}
      imageAlt="Engineers reviewing technical schematics in a data hall"
    >
      <div className="mt-9 flex flex-wrap items-center gap-4">
        <ButtonLink href="/contact" icon="arrow-up-right">
          Discuss a Project
        </ButtonLink>
        <ButtonLink href="/expertise" variant="secondary">
          Our expertise
        </ButtonLink>
      </div>
    </PageHero>
  );
}
