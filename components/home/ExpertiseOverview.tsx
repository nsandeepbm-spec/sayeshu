import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { images } from "@/lib/images";

const modules = [
  {
    code: "MOD-01",
    title: "Data Centre Design & Engineering",
    text: "Architectural and spatial layout tailored for high compute density and uncompromised airflow management.",
    spec: "CFD fluid optimized",
    image: images.serverAisleBlue,
    alt: "Enterprise AI data centre server aisle with dark racks and blue LED lighting",
  },
  {
    code: "MOD-02",
    title: "AI & GPU Infrastructure",
    text: "Thermal envelope & electrical delivery specifically matched for multi-megawatt GPU superclusters.",
    spec: "100kW+ thermal envelope",
    image: images.gpuClusterNeon,
    alt: "High-density AI GPU server rack clusters with green indicator lights",
  },
  {
    code: "MOD-03",
    title: "Liquid Cooling Design",
    text: "Closed-loop CDU distribution manifolds and direct-to-chip secondary loop thermal engineering.",
    spec: "DLC & immersion ready",
    image: images.cduManifold,
    alt: "Stainless steel liquid cooling manifold and pipework with chrome fittings",
  },
  {
    code: "MOD-04",
    title: "Power & Infrastructure",
    text: "Substation interconnects, 2N UPS fault-tolerant redundancy, and microgrid generator switchgear.",
    spec: "2N + 1 architecture",
    image: images.powerSwitchgear,
    alt: "Industrial electrical switchgear panels and UPS systems inside a secure power room",
  },
] as const;

export function ExpertiseOverview() {
  return (
    <section id="expertise" className="w-full border-b border-line py-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="flex flex-col justify-between lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>Our Expertise</Eyebrow>
              <h2 className="mt-4 font-display section-title font-bold text-ink">
                From concept to commissioning.
              </h2>
              <p className="mt-4 text-body leading-relaxed text-steel">
                A complete engineering partnership for modern, AI-ready data centres. We synthesize mechanical,
                electrical, and structural disciplines into high-availability environments.
              </p>
              <div className="mt-8 border-t border-line pt-8">
                <ButtonLink href="/solutions" icon="arrow-right">
                  Our Solutions
                </ButtonLink>
              </div>
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8">
            {modules.map((module) => (
              <li key={module.code} className="flex">
                <Link
                  href="/expertise"
                  className="group flex w-full flex-col border border-line bg-white transition-colors hover:border-ink"
                >
                  <div className="relative aspect-16/10 overflow-hidden bg-night-raised">
                    <Image
                      src={module.image}
                      alt={module.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-102"
                    />
                    <span className="absolute left-3 top-3 bg-night-raised/90 px-2 py-0.5 text-micro font-medium tracking-wider text-white">
                      {module.code}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-ink">{module.title}</h3>
                      <p className="mt-2 text-small leading-5 text-steel">{module.text}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-line pt-4 text-tiny font-medium uppercase tracking-wide text-steel">
                      <span>{module.spec}</span>
                      <span className="text-accent-text">+ Specs</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
