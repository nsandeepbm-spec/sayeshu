import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { practiceAreas } from "@/lib/data/solutions";

export function PracticeAreas() {
  return (
    <section className="w-full border-b border-line py-20 lg:py-24">
      <Container>
        <SectionHeading className="mb-14" eyebrow="Service engagement models" title="Structured Practice Areas" />
        <ul className="grid grid-cols-1 border border-line bg-white md:grid-cols-3">
          {practiceAreas.map((area, index) => (
            <li
              key={area.number}
              className={`flex flex-col justify-between border-line p-8 transition-colors duration-150 hover:bg-canvas-hover lg:p-10 ${
                index < practiceAreas.length - 1 ? "border-b md:border-b-0 md:border-r" : ""
              }`}
            >
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xl font-bold tracking-wider text-accent-text">{area.number}</span>
                  <span className="flex h-10 w-10 items-center justify-center bg-stone text-ink">
                    <Icon name={area.icon} size={22} />
                  </span>
                </div>
                <h3 className="mb-4 text-xl font-bold tracking-tight text-ink">{area.title}</h3>
                <p className="mb-8 text-body leading-relaxed text-steel-deep">{area.text}</p>
              </div>
              <div className="border-t border-line pt-6">
                <Link
                  href="/expertise"
                  className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-eyebrow text-ink transition-colors hover:text-accent-text"
                >
                  Learn more
                  <Icon name="arrow-right" size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
