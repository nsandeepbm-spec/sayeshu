import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

const phases = [
  {
    title: "Assess Requirements",
    text: "Workload profiling, power envelope definition, site suitability & grid capacity auditing.",
    deliverable: "Audit report",
  },
  {
    title: "Concept & Feasibility",
    text: "Thermodynamic modelling, CFD simulations, PUE benchmarking and preliminary Capex sizing.",
    deliverable: "CFD model v1.0",
  },
  {
    title: "Detailed Engineering",
    text: "Multi-disciplinary MEP engineering, BIM structural coordination & cooling plant schematics.",
    deliverable: "BIM LOD-400",
  },
  {
    title: "Build & Integration",
    text: "Procurement technical advisory, vendor management, pre-fabrication QC & onsite execution.",
    deliverable: "QA/QC matrix",
  },
  {
    title: "Commission & Handover",
    text: "Level 1-5 integrated systems testing, IST load bank validation & operational SLA readiness.",
    deliverable: "IST sign-off",
  },
] as const;

export function ApproachTimeline() {
  return (
    <section className="w-full border-b border-line py-20">
      <Container>
        <SectionHeading
          layout="split"
          className="mb-12"
          eyebrow="Methodology & Lifecycle"
          title="A structured engineering process."
          description="Rigorous milestone checkpoints ensure design intent translates directly to verified field performance."
        />

        <ol className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {phases.map((phase, index) => {
            const isLast = index === phases.length - 1;
            return (
              <li
                key={phase.title}
                className="group flex flex-col justify-between border border-line bg-white p-6 transition-colors hover:border-ink"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between border-b border-line pb-3">
                    <span className="text-xs font-bold tracking-wide text-accent-text">
                      PHASE {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon name={isLast ? "check" : "arrow-right"} size={16} className="text-steel" />
                  </div>
                  <h3 className="text-base font-bold tracking-tight text-ink">{phase.title}</h3>
                  <p className="mt-2 text-small leading-relaxed text-steel">{phase.text}</p>
                </div>
                <p className="mt-6 border-t border-line/60 pt-6 text-tiny font-medium uppercase tracking-wide text-steel">
                  Deliverable: {phase.deliverable}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
