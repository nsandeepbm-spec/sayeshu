import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/lib/images";

export function AiInfraHero() {
  return (
    <PageHero
      label="AI Infrastructure"
      title="Infrastructure engineered for AI workloads."
      description="AI computing requires more than high-performance accelerators. It requires a coordinated infrastructure architecture capable of supporting demanding power, cooling, networking and storage requirements."
      image={images.aiInfraHero}
      imageAlt="High-density AI data centre server hall with GPU compute racks and structured cabling"
    >
      <div className="mt-9 flex flex-wrap items-center gap-4">
        <ButtonLink href="/contact" icon="arrow-up-right">
          Discuss AI Infrastructure
        </ButtonLink>
        <ButtonLink href="/capabilities" variant="secondary">
          All capabilities
        </ButtonLink>
      </div>
    </PageHero>
  );
}
