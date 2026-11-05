import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/lib/images";

/** Contact hero: same photographic composition as the homepage. */
export function ContactHero() {
  return (
    <PageHero
      label="Discuss a Project"
      title={
        <>
          Let&apos;s engineer your{" "}
          <br className="hidden sm:block" />
          next facility.
        </>
      }
      description="Tell us about your requirements and we will respond with the right engagement approach within 24–48 business hours."
      image={images.glassAtrium}
      imageAlt="Glass atrium of a contemporary engineering headquarters"
    >
      <div className="mt-9 flex flex-wrap items-center gap-4">
        <ButtonLink href="#enquiry" icon="arrow-right">
          Start an enquiry
        </ButtonLink>
        <ButtonLink href="/expertise" variant="secondary">
          Explore expertise
        </ButtonLink>
      </div>
    </PageHero>
  );
}
