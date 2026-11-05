import Image from "next/image";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { images } from "@/lib/images";

const stats = [
  { value: "08", label: "Engineering disciplines" },
  { value: "100kW+", label: "Rack density engineered" },
  { value: "<1.15", label: "PUE design target" },
  { value: "L1–L5", label: "Commissioning scope" },
] as const;

/** Expertise hero: dark technical band, blueprint grid and a metrics strip. */
export function ExpertiseHero() {
  return (
    <section className="relative isolate overflow-hidden bg-night text-white">
      <div className="absolute inset-y-0 right-0 -z-30 w-full lg:w-7/12">
        <Image
          src={images.serverHallLong}
          alt="Long enterprise AI data centre server aisle with rows of black racks"
          fill
          preload
          loading="eager"
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover object-center"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-night/80 lg:hidden" />
      <div aria-hidden="true" className="hero-fade-night absolute inset-0 -z-20 hidden lg:block" />
      <div aria-hidden="true" className="blueprint-grid absolute inset-0 -z-10 opacity-70" />

      <Container className="pt-14 lg:pt-20">
        <div className="max-w-140 pb-14 lg:pb-24">
          <Breadcrumb label="Our Expertise" tone="dark" className="rise mb-6" />
          <Eyebrow tone="accent" className="rise rise-1 mb-5">
            Our Expertise
          </Eyebrow>
          <h1 className="rise rise-2 font-display text-headline font-bold leading-headline tracking-tight text-white md:text-5xl lg:text-headline-lg">
            From concept to commissioning.
          </h1>
          <p className="rise rise-3 mt-5 max-w-xl text-base leading-relaxed text-night-soft lg:text-lead">
            A complete engineering partnership for modern, AI-ready data centres — bringing power, cooling, compute,
            networking and performance together through one coordinated engineering approach.
          </p>
          <div className="rise rise-4 mt-9 flex flex-wrap items-center gap-4">
            <ButtonLink href="#disciplines" variant="inverse" icon="arrow-right">
              Explore the disciplines
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline-inverse">
              Discuss a Project
            </ButtonLink>
          </div>
        </div>

        <dl className="grid grid-cols-2 border-t border-night-line bg-night/70 backdrop-blur-sm lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-1 border-night-line px-1 py-6 lg:px-6 ${
                index % 2 === 1 ? "border-l pl-6" : ""
              } ${index >= 2 ? "border-t lg:border-t-0" : ""} ${index > 0 ? "lg:border-l" : "lg:pl-0"}`}
            >
              <dd className="font-display text-3xl font-bold tracking-tight text-white">{stat.value}</dd>
              <dt className="text-tiny font-semibold uppercase tracking-label text-night-text">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
