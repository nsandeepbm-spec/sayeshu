import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { typicalDeliverables } from "@/lib/data/solutions";

export function Deliverables() {
  const half = Math.ceil(typicalDeliverables.length / 2);
  const columns = [typicalDeliverables.slice(0, half), typicalDeliverables.slice(half)];

  return (
    <section className="w-full border-b border-line py-20 lg:py-24">
      <Container>
        <SectionHeading
          layout="split"
          className="mb-14"
          eyebrow="Engineering artifacts"
          title="Typical Deliverables"
          description="Structured, execution-grade documentation produced in accordance with strict international data centre frameworks."
        />

        <div className="grid grid-cols-1 gap-x-12 border-y border-line bg-white px-6 py-6 md:grid-cols-2 lg:px-10">
          {columns.map((column, columnIndex) => (
            <ul
              key={columnIndex}
              className={`flex flex-col divide-y divide-line ${columnIndex === 1 ? "border-t border-line md:border-t-0" : ""}`}
            >
              {column.map((item) => (
                <li key={item} className="flex items-start gap-4 py-4">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-ink text-white">
                    <Icon name="check" size={12} strokeWidth={3} />
                  </span>
                  <span className="text-body leading-6 text-ink">{item}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="mt-6 flex flex-col justify-between gap-2 text-xs text-steel sm:flex-row sm:items-center">
          <p>* Final deliverables and engineering responsibilities are defined for each project.</p>
          <span className="font-semibold uppercase tracking-wider text-accent-text">ISO 9001 / IEEE standard aligned</span>
        </div>
      </Container>
    </section>
  );
}
