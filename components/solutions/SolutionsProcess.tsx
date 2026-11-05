import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processPhases } from "@/lib/data/solutions";

export function SolutionsProcess() {
  return (
    <section className="w-full border-b border-line py-20 lg:py-24">
      <Container>
        <SectionHeading className="mb-14" eyebrow="Methodology & lifecycle" title="A structured engineering process." />

        <ol className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {processPhases.map((phase, index) => {
            const number = String(index + 1).padStart(2, "0");
            const isLast = index === processPhases.length - 1;
            return (
              <li
                key={phase.title}
                className={`group flex flex-col justify-between bg-white p-6 transition-colors hover:bg-canvas-hover ${
                  isLast ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-accent-text">{number}</span>
                    <span aria-hidden="true" className="hidden text-sm text-steel lg:inline-block">
                      {isLast ? "■" : "→"}
                    </span>
                  </div>
                  <h3 className="mb-3 text-base font-bold leading-tight tracking-tight text-ink">{phase.title}</h3>
                  <p className="text-small leading-5 text-steel">{phase.text}</p>
                </div>
                <p className="mt-6 border-t border-line/60 pt-3 text-micro font-medium uppercase text-steel">
                  {`Phase ${number} // ${phase.tag}`}
                </p>
              </li>
            );
          })}
        </ol>

        <p className="mt-6 flex items-center gap-3 text-xs text-steel">
          <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-accent" />
          Deliverables, acceptance criteria, testing responsibilities and role boundaries are defined before execution.
        </p>
      </Container>
    </section>
  );
}
