import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { technologyPanels } from "@/lib/data/capabilities";
import { images } from "@/lib/images";

export function TechnologyFocus() {
  return (
    <section className="relative isolate overflow-hidden border-b border-night-border bg-night py-20 text-white lg:py-24">
      <Image
        src={images.serverAisleBlue}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover opacity-20 grayscale"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-night/90" />

      <Container>
        <SectionHeading
          tone="dark"
          eyebrow="Technology focus"
          title="Platforms and technologies we engineer around."
          className="mb-14"
        />

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {technologyPanels.map((panel) => (
            <li key={panel.number} className="border border-white/12 bg-white/4 p-8">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-small font-semibold uppercase tracking-wider text-white">{panel.title}</h3>
                <span className="font-mono text-tiny text-accent-bright">{panel.number}</span>
              </div>
              <ul className="space-y-4 text-small leading-relaxed text-night-text">
                {panel.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-small text-night-muted">
          Platform-specific designs follow applicable manufacturer documentation and the selected hardware configuration.
        </p>
      </Container>
    </section>
  );
}
