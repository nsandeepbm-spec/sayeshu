import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/lib/images";

/** Solutions hero: same photographic composition as the homepage. */
export function SolutionsHero() {
  return (
    <PageHero
      label="Our Solutions"
      title="Engineering solutions for AI-ready infrastructure."
      description="Complete design engagements, focused technical assessments, independent design reviews or optimisation of existing infrastructure."
      image={images.liquidCoolingPipework}
      imageAlt="Liquid cooling pipework and manifolds inside an AI data centre"
    >
      <div className="mt-9 flex flex-wrap items-center gap-4">
        <ButtonLink href="/contact" icon="arrow-up-right">
          Discuss a Project
        </ButtonLink>
        <ButtonLink href="#engagement" variant="secondary">
          See how we engage
        </ButtonLink>
      </div>
    </PageHero>
  );
}
