import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { aiReadyRows } from "@/lib/data/solutions";
import { images } from "@/lib/images";

export function SolutionsAiReady() {
  return (
    <section className="relative w-full overflow-hidden border-y border-night-line bg-night py-20 text-white lg:py-24">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <div className="relative aspect-4/3 w-full overflow-hidden border border-night-line bg-night-raised">
            <Image
              src={images.serverHallLong}
              alt="High-density server corridor with blue and white indicator lights in a dark data centre"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-night via-transparent to-transparent opacity-80" />
            <div className="absolute inset-x-5 bottom-5 flex flex-wrap items-center justify-between gap-2 border border-night-line bg-night/90 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-2.5 w-2.5 animate-pulse bg-accent" />
                <span className="text-tiny font-medium uppercase tracking-wider text-white">
                  Pod status: normal (80kW/rack)
                </span>
              </div>
              <span className="text-tiny text-night-soft">PUE 1.08 TARGET</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:col-span-6">
          <Eyebrow tone="accent" className="mb-3">
            AI-Ready Infrastructure
          </Eyebrow>
          <h2 className="mb-4 font-display section-title font-bold text-white">
            Built for High-Density Computing.
          </h2>
          <p className="mb-8 text-body leading-relaxed text-night-soft">
            Modern AI workloads demand power density, thermal dissipation, and networking topologies that conventional
            enterprise data centres were never designed to support.
          </p>
          <dl className="flex flex-col border-t border-night-line">
            {aiReadyRows.map((row) => (
              <div
                key={row.title}
                className="flex flex-col gap-2 border-b border-night-line py-4 sm:flex-row sm:items-baseline sm:gap-4"
              >
                <dt className="flex shrink-0 items-center gap-2 text-small font-bold text-white sm:w-56">
                  <span aria-hidden="true" className="h-1.5 w-1.5 bg-accent" />
                  {row.title}
                </dt>
                <dd className="text-small leading-5 text-night-soft">{row.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
