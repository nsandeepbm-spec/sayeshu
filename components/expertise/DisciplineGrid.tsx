import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { disciplines, type Discipline } from "@/lib/data/disciplines";

function DisciplineCard({ discipline, wide }: { discipline: Discipline; wide: boolean }) {
  const featured = Boolean(discipline.featured);

  return (
    <li className={cn("flex", wide && "lg:col-span-2")}>
      <Link
        href="/solutions"
        className={cn(
          "group flex w-full flex-col justify-between border p-6 transition-colors duration-200",
          featured
            ? "border-white/10 bg-night text-white lg:p-8"
            : "border-line bg-white text-ink hover:border-white/10 hover:bg-night hover:text-white",
        )}
      >
        <div>
          <div className={cn("flex items-start justify-between", featured ? "mb-8" : "mb-6")}>
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "flex items-center justify-center border transition-colors",
                  featured
                    ? "h-9 w-9 border-white/20 bg-night-raised text-white"
                    : "h-8 w-8 border-ink bg-stone text-ink group-hover:border-white/40 group-hover:bg-night-raised group-hover:text-white",
                )}
              >
                <Icon name={discipline.icon} size={featured ? 20 : 18} />
              </span>
              {discipline.featured && (
                <span className="border border-white/10 bg-night-raised px-2.5 py-1 text-tiny font-medium uppercase tracking-widest text-accent-bright">
                  {discipline.featured.badge}
                </span>
              )}
            </div>
            <span
              aria-hidden="true"
              className={cn(
                "font-bold opacity-20",
                featured ? "text-4xl text-white" : "text-3xl text-ink group-hover:text-white",
              )}
            >
              {discipline.number}
            </span>
          </div>

          <h3
            className={cn(
              "mb-2 font-bold tracking-tight",
              featured ? "mb-3 font-display text-2xl text-white" : "text-xl leading-snug",
            )}
          >
            {discipline.title}
          </h3>
          <p
            className={cn(
              "mb-6 leading-relaxed",
              featured ? "max-w-xl text-body text-night-text" : "text-small text-steel group-hover:text-night-text",
            )}
          >
            {discipline.summary}
          </p>
        </div>

        <div>
          <ul className="mb-5 flex flex-wrap gap-1.5">
            {discipline.tags.map((tag) => (
              <li
                key={tag}
                className={cn(
                  "border px-2 py-1 text-tiny font-medium uppercase tracking-wider",
                  featured
                    ? "border-white/20 bg-night-raised px-2.5 text-line"
                    : "border-line bg-canvas text-steel group-hover:border-white/20 group-hover:bg-transparent group-hover:text-line",
                )}
              >
                {tag}
              </li>
            ))}
          </ul>
          <span
            className={cn(
              "flex items-center gap-2 text-xs font-semibold uppercase tracking-wider",
              featured ? "border-t border-white/10 pt-4 text-accent-bright" : "text-accent-text group-hover:text-ink",
            )}
          >
            Learn more
            <Icon name="arrow-right" size={14} />
          </span>
        </div>
      </Link>
    </li>
  );
}

export function DisciplineGrid() {
  return (
    <>
      <section id="disciplines" className="w-full border-b border-line py-16 lg:py-20">
        <Container>
          <SectionHeading
            layout="centered"
            eyebrow="What we engineer"
            title="Eight disciplines. One coordinated approach."
            description="Power, cooling, compute, networking and performance, engineered together."
          />
        </Container>
      </section>

      <section aria-label="Disciplines" className="w-full border-b border-line py-16 lg:py-20">
        <Container>
          <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {disciplines.map((discipline, index) => (
              <DisciplineCard
                key={discipline.id}
                discipline={discipline}
                wide={Boolean(discipline.featured) || index >= disciplines.length - 2}
              />
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
