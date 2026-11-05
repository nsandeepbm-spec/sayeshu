import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/lib/images";

/** Projects hero: same photographic composition as the homepage. */
export function ProjectsHero() {
  return (
    <PageHero
      label="Projects"
      title={
        <>
          Engineering that moves from{" "}
          <br className="hidden sm:block" />
          concept to commissioning.
        </>
      }
      description="The types of engagements we support across AI, HPC, hyperscale and enterprise data centres."
      image={images.hyperscaleAerial}
      imageAlt="Elevated aerial photograph of a hyperscale AI data centre campus"
    >
      <div className="mt-9 flex flex-wrap items-center gap-4">
        <ButtonLink href="/contact" icon="arrow-up-right">
          Discuss a Project
        </ButtonLink>
        <ButtonLink href="/solutions" variant="secondary">
          Our solutions
        </ButtonLink>
      </div>
    </PageHero>
  );
}
