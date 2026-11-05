import { Container } from "@/components/ui/Container";
import { performanceMeasures } from "@/lib/data/disciplines";

export function PerformanceMeasures() {
  return (
    <section aria-label="AI performance measures" className="w-full border-b border-line bg-stone/60 py-6">
      <Container>
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <div className="flex shrink-0 items-center gap-2.5">
            <span aria-hidden="true" className="h-2 w-2 bg-accent" />
            <h2 className="text-xs font-bold uppercase tracking-label text-ink">AI Performance Measures</h2>
          </div>
          <ul className="flex flex-wrap items-center gap-2.5">
            {performanceMeasures.map((measure) => (
              <li
                key={measure}
                className="border border-line bg-white px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-ink"
              >
                {measure}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
