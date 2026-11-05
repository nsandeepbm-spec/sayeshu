import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { mosaicTiles } from "@/lib/data/capabilities";

export function CapabilityMosaic() {
  return (
    <section className="border-b border-line bg-stone py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Core competencies"
          title="Capability Mosaic"
          description="Comprehensive technical depth across every discipline required for modern AI computing campuses and critical facilities."
          className="mb-14"
        />

        <ul className="grid grid-cols-1 gap-3 md:grid-cols-4">
          {mosaicTiles.map((tile) => (
            <li
              key={tile.number}
              className={cn(
                "group relative flex flex-col justify-end overflow-hidden border border-line p-7 text-white",
                tile.span === "wide" && "md:col-span-2 min-h-85",
                tile.span === "standard" && "min-h-85",
                tile.span === "half" && "md:col-span-2 min-h-80",
              )}
            >
              <Image
                src={tile.image}
                alt={tile.imageAlt}
                fill
                sizes={tile.span === "standard" ? "(min-width: 768px) 25vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-night via-night/75 to-transparent" />
              <div className="relative z-10">
                <span className="mb-2 block font-display text-lg font-bold text-accent-bright">{tile.number}</span>
                <h3
                  className={cn(
                    "mb-2 font-display font-bold text-white",
                    tile.span === "standard" ? "text-xl" : "text-card-title",
                  )}
                >
                  {tile.title}
                </h3>
                <p
                  className={cn(
                    "text-night-soft",
                    tile.span === "standard" ? "text-small" : "max-w-125 text-small leading-relaxed",
                  )}
                >
                  {tile.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
