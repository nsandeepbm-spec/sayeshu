import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceLines } from "@/lib/data/capabilities";

export function ServiceLines() {
  return (
    <section className="border-b border-line bg-canvas py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow="What we deliver" title="Three service lines. One engineering team." className="mb-14" />

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {serviceLines.map((line) => (
            <li
              key={line.number}
              className="group relative flex min-h-130 flex-col justify-end overflow-hidden border border-line p-8 text-white"
            >
              <Image
                src={line.image}
                alt={line.imageAlt}
                fill
                sizes="(min-width: 768px) 30vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-night via-night/80 to-transparent" />

              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-display text-5xl font-bold leading-none tracking-tight text-white/30 transition-colors group-hover:text-accent-bright">
                    {line.number}
                  </span>
                  <span className="text-tiny font-semibold uppercase tracking-eyebrow text-accent-bright">
                    Service line
                  </span>
                </div>
                <h3 className="mb-3 font-display text-2xl font-bold text-white">{line.title}</h3>
                <p className="mb-6 text-body leading-relaxed text-night-soft">{line.text}</p>
                <ul className="space-y-2 border-t border-white/15 pt-5">
                  {line.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-small text-line-warm">
                      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
