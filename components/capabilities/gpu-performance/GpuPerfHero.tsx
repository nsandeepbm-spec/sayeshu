import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/lib/images";

export function GpuPerfHero() {
  return (
    <PageHero
      label="GPU Performance"
      title="More useful compute from every unit of energy."
      description="Infrastructure performance is not defined by installed GPU capacity alone. It is defined by how effectively the complete system converts power, hardware and data into useful computing output."
      image={images.gpuPerfHero}
      imageAlt="High-performance AI computing cluster with dense GPU servers and precision cooling"
    >
      <div className="mt-9 flex flex-wrap items-center gap-4">
        <ButtonLink href="/contact" icon="arrow-up-right">
          Discuss Performance Engineering
        </ButtonLink>
        <ButtonLink href="/capabilities" variant="secondary">
          All capabilities
        </ButtonLink>
      </div>
    </PageHero>
  );
}
