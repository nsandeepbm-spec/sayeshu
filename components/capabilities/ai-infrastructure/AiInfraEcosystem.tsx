import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { technologyEcosystem } from "@/lib/data/aiInfrastructure";
import { images } from "@/lib/images";

export function AiInfraEcosystem() {
  return (
    <section className="border-b border-line bg-night py-20 text-white lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              tone="dark"
              eyebrow="Technology ecosystem"
              title="The platforms we engineer around."
              className="mb-8"
            />
            <p className="mb-8 max-w-md text-body leading-relaxed text-night-text">
              We show technology categories — not unsupported partnership badges — so the conversation stays grounded in
              the architecture your facility needs.
            </p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {technologyEcosystem.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border border-white/12 bg-white/4 px-4 py-3 text-small font-medium text-night-soft"
                >
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-90 overflow-hidden border border-white/12 lg:col-span-7 lg:min-h-125">
            <Image
              src={images.aiInfraNetworking}
              alt="High-performance AI data centre networking with organised optical fibre cabling"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
