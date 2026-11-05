import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CapabilityPage } from "@/lib/data/capabilityPages";
import { capabilityNavItems } from "@/lib/data/capabilityPages";
import { cn } from "@/lib/cn";
import Link from "next/link";

/** Simple capability subpage: hero, focus points, scope and a short CTA. */
export function CapabilityDetail({ page }: { page: CapabilityPage }) {
  return (
    <>
      <PageHero
        label={page.label}
        title={page.title}
        description={page.description}
        image={page.image}
        imageAlt={page.imageAlt}
      >
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <ButtonLink href="/contact" icon="arrow-up-right">
            Discuss a Project
          </ButtonLink>
          <ButtonLink href="/capabilities" variant="secondary">
            All capabilities
          </ButtonLink>
        </div>
      </PageHero>

      <section className="border-b border-line bg-canvas py-16 lg:py-20">
        <Container>
          <p className="max-w-3xl text-lead leading-relaxed text-steel-dark">{page.intro}</p>

          {page.highlights.length > 0 && (
            <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
              {page.highlights.map((item) => (
                <li key={item.title} className="border border-line bg-white p-6">
                  <span aria-hidden="true" className="mb-4 block h-0.5 w-8 bg-accent" />
                  <h2 className="mb-2 font-display text-lg font-bold text-ink">{item.title}</h2>
                  <p className="text-small leading-relaxed text-steel">{item.text}</p>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>

      {(page.scope.length > 0 || page.deliverables.length > 0) && (
        <section className="border-b border-line bg-stone py-16 lg:py-20">
          <Container>
            <SectionHeading eyebrow="How we engage" title="Scope and deliverables." className="mb-10" />
            <div className="grid gap-4 lg:grid-cols-2">
              {page.scope.length > 0 && (
                <div className="border border-line bg-white p-8">
                  <h2 className="mb-5 font-display text-xl font-bold text-ink">Typical scope</h2>
                  <ul className="space-y-3">
                    {page.scope.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-body text-steel-dark">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {page.deliverables.length > 0 && (
                <div className="border border-line bg-white p-8">
                  <h2 className="mb-5 font-display text-xl font-bold text-ink">Example deliverables</h2>
                  <ul className="space-y-3">
                    {page.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-body text-steel-dark">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      <section className="border-b border-line bg-canvas py-12 lg:py-16">
        <Container>
          <div className="flex flex-col gap-6 border border-line bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-tiny font-semibold uppercase tracking-eyebrow text-accent-text">Related capabilities</p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {capabilityNavItems
                  .filter((item) => item.href !== `/capabilities/${page.slug}`)
                  .map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn("text-small font-medium text-ink transition-colors hover:text-accent-text")}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <ButtonLink href="/contact" icon="arrow-up-right" className="shrink-0">
              Discuss a Project
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
