import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { lifecycleMatrix, lifecyclePhases } from "@/lib/data/capabilities";

export function ProjectLifecycle() {
  return (
    <section className="border-b border-line bg-canvas py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Across the project lifecycle"
          title="Where we support your project."
          description="End-to-end involvement ensuring technical integrity from initial feasibility through sustained commercial operations."
          className="mb-14"
        />

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {lifecyclePhases.map((phase) => (
            <li
              key={phase.number}
              className="group flex flex-col overflow-hidden border border-line bg-white transition-colors hover:border-ink"
            >
              <div className="relative h-47.5 w-full overflow-hidden bg-night">
                <Image
                  src={phase.image}
                  alt={phase.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-display text-base font-bold text-accent-text">{phase.number}</span>
                  <span aria-hidden="true" className="text-small font-semibold text-accent-text">
                    {phase.terminal ? "✓" : "→"}
                  </span>
                </div>
                <h3 className="mb-2 font-display text-lg font-bold leading-snug text-ink">{phase.title}</h3>
                <p className="text-small leading-relaxed text-steel">{phase.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 overflow-x-auto border border-line bg-white">
          <table className="w-full min-w-200 border-collapse text-left">
            <thead>
              <tr className="border-b border-line bg-canvas-hover">
                <th className="w-70 px-6 py-4 text-small font-semibold uppercase tracking-wider text-ink">
                  Disciplines / Phases
                </th>
                {lifecycleMatrix.columns.map((column) => (
                  <th
                    key={column}
                    className="border-l border-line px-4 py-4 text-center text-small font-semibold text-ink"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-body">
              {lifecycleMatrix.rows.map((row) => (
                <tr key={row.discipline} className="transition-colors hover:bg-canvas/50">
                  <td className="px-6 py-4 font-semibold text-ink">{row.discipline}</td>
                  {row.marks.map((marked, index) => (
                    <td key={`${row.discipline}-${index}`} className="border-l border-line px-4 py-4 text-center">
                      {marked ? (
                        <span aria-label="Supported" className="inline-block h-3.5 w-3.5 bg-ink" />
                      ) : (
                        <span className="sr-only">Not marked</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex flex-col justify-between gap-2 text-small text-steel sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="inline-block h-3 w-3 bg-ink" />
            <span>Supported capability</span>
          </div>
          <p>Scope is defined for each project.</p>
        </div>
      </Container>
    </section>
  );
}
