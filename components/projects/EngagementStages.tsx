import { Container } from "@/components/ui/Container";
import { engagementStages } from "@/lib/data/projects";

export function EngagementStages() {
  return (
    <section aria-label="Project stages" className="w-full border-y border-line bg-white">
      <Container>
        <ol className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {engagementStages.map((stage) => (
            <li key={stage.number} className="flex flex-col gap-1 bg-white py-6 sm:px-6 lg:first:pl-0 lg:last:pr-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-accent-text">{stage.number}.</span>
                <h2 className="text-base font-semibold uppercase tracking-wider text-night-raised">{stage.title}</h2>
              </div>
              <p className="text-small leading-snug text-steel-deep">{stage.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
