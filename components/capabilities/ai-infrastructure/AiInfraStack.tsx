import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aiStackLayers } from "@/lib/data/aiInfrastructure";
import { images } from "@/lib/images";

export function AiInfraStack() {
  return (
    <section className="border-b border-line bg-canvas py-20 lg:py-24">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The AI infrastructure stack"
              title="A complete architecture for accelerated computing."
              className="mb-8"
            />
            <ol className="space-y-0 border border-line bg-white">
              {aiStackLayers.map((layer, index) => (
                <li
                  key={layer.number}
                  className={index === 0 ? "border-b border-line p-5" : "border-b border-line p-5 last:border-b-0"}
                >
                  <div className="flex items-start gap-4">
                    <span className="font-display text-lg font-bold text-accent-text">{layer.number}</span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink">{layer.title}</h3>
                      <p className="mt-1 text-small leading-relaxed text-steel">{layer.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative min-h-100 overflow-hidden border border-line bg-stone lg:col-span-7 lg:min-h-140">
            <Image
              src={images.aiInfraStack}
              alt="Layered isometric illustration of an AI data centre architecture stack"
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
