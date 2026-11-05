import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { performanceFactors } from "@/lib/data/gpuPerformance";

export function GpuPerfFactors() {
  return (
    <section className="border-b border-line bg-canvas py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="What influences performance?"
          title="Performance is a system-level outcome."
          className="mb-12"
        />
        <ul className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {performanceFactors.map((factor, index) => (
            <li key={factor} className="flex items-start gap-4 bg-canvas p-6 sm:p-8">
              <span className="font-display text-lg font-bold text-accent-text">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-lg font-bold leading-snug text-ink">{factor}</h3>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
