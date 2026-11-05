import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { capabilityDisciplines } from "@/lib/data/capabilities";
import { images } from "@/lib/images";

/** Hero plus the four-discipline thumbnail strip from the Stitch capabilities design. */
export function CapabilitiesHero() {
  return (
    <div className="border-b border-line bg-canvas">
      <PageHero
        label="Capabilities"
        title="Capabilities built for AI-ready infrastructure."
        description="From site feasibility to sustained workload performance, we bring power, cooling, compute, networking and performance together through one coordinated engineering approach."
        image={images.powerSwitchgear}
        imageAlt="Modern data centre electrical and mechanical plant room"
      >
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <ButtonLink href="/solutions" icon="arrow-right">
            Our Solutions
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Discuss a Project
          </ButtonLink>
        </div>
      </PageHero>

      <div className="border-t border-line bg-stone/80">
        <div className="mx-auto grid max-w-360 grid-cols-1 gap-4 px-6 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          {capabilityDisciplines.map((item) => (
            <Link
              key={item.number}
              href={item.href}
              className="group flex items-center gap-4 border border-line bg-white p-3.5 transition-colors hover:border-ink"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden bg-night">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="64px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <span className="block text-micro font-semibold uppercase tracking-wider text-accent-text">
                  {item.number} / Discipline
                </span>
                <span className="mt-0.5 block font-display text-small font-bold leading-tight text-ink">
                  {item.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
