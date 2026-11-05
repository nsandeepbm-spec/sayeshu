import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { engagementScopes } from "@/lib/data/capabilities";

export function EngagementScopes() {
  return (
    <section className="border-b border-line bg-canvas py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Engagement models" title="Choose the scope that fits." className="mb-14" />

        <ul className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {engagementScopes.map((scope) => (
            <li key={scope.title}>
              <Link
                href={scope.href}
                className="group relative flex h-75 flex-col justify-between overflow-hidden border border-line p-7 text-white"
              >
                <Image
                  src={scope.image}
                  alt={scope.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-night via-night/70 to-transparent" />

                <span className="relative z-10 flex h-9 w-9 items-center justify-center border border-white/20 bg-night/40 text-sm font-semibold text-accent-bright transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                  ↗
                </span>
                <div className="relative z-10">
                  <span className="mb-2 block text-micro font-semibold uppercase tracking-eyebrow text-accent-bright">
                    {scope.tag}
                  </span>
                  <h3 className="font-display text-xl font-bold leading-snug text-white">{scope.title}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-small text-steel">
          Deliverables, acceptance criteria, testing responsibilities and role boundaries are defined before execution.
        </p>
      </Container>
    </section>
  );
}
