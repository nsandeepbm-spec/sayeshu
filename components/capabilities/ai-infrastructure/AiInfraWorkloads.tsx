import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workloadModes } from "@/lib/data/aiInfrastructure";

export function AiInfraWorkloads() {
  return (
    <section className="border-b border-line bg-canvas py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Training and inference"
          title="Different workloads. Different infrastructure demands."
          className="mb-12"
        />
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {workloadModes.map((mode) => (
            <li key={mode.title} className="border border-line bg-white p-8 lg:p-10">
              <span aria-hidden="true" className="mb-5 block h-0.5 w-8 bg-accent" />
              <h3 className="font-display text-2xl font-bold text-ink">{mode.title}</h3>
              <p className="mt-4 text-body leading-relaxed text-steel-dark">{mode.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
