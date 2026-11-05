import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilityNavItems } from "@/lib/data/capabilityPages";
import { images } from "@/lib/images";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "SAYESHU engineering capabilities across power, cooling, engineering approach and standards for AI-ready data centres.",
  alternates: { canonical: "/capabilities" },
};

const featured = [
  {
    label: "AI Infrastructure",
    href: "/capabilities/ai-infrastructure",
    text: "Accelerators, racks, networking, storage and facility infrastructure for AI workloads.",
    image: images.aiInfraHero,
  },
  {
    label: "GPU Performance",
    href: "/capabilities/gpu-performance",
    text: "Useful compute output, inference metrics and energy efficiency.",
    image: images.gpuPerfHero,
  },
] as const;

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        label="Capabilities"
        title="Capabilities built for AI-ready infrastructure."
        description="Focused engineering across power, cooling, delivery approach and assurance — alongside dedicated AI infrastructure and GPU performance practices."
        image={images.serverHallLong}
        imageAlt="Long enterprise AI data centre server aisle"
      >
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <ButtonLink href="/contact" icon="arrow-up-right">
            Discuss a Project
          </ButtonLink>
          <ButtonLink href="/solutions" variant="secondary">
            Our Solutions
          </ButtonLink>
        </div>
      </PageHero>

      <section className="border-b border-line bg-canvas py-16 lg:py-20">
        <Container>
          <SectionHeading eyebrow="Core pages" title="Choose a capability." className="mb-10" />
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {featured.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative flex min-h-56 flex-col justify-end overflow-hidden border border-line p-6 text-white"
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-night via-night/70 to-transparent" />
                  <div className="relative z-10">
                    <h3 className="font-display text-xl font-bold">{item.label}</h3>
                    <p className="mt-2 max-w-md text-small text-night-soft">{item.text}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilityNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex h-full flex-col border border-line bg-white p-6 transition-colors hover:border-ink hover:bg-stone",
                  )}
                >
                  <h3 className="font-display text-lg font-bold text-ink">{item.label}</h3>
                  {item.text && <p className="mt-2 text-small leading-relaxed text-steel">{item.text}</p>}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
