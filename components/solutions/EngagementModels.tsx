import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { engagementModels } from "@/lib/data/solutions";

export function EngagementModels() {
  return (
    <section id="engagement" className="w-full border-b border-line py-20 lg:py-24">
      <Container>
        <SectionHeading
          layout="split"
          className="mb-14"
          eyebrow="Engagement framework"
          title="How We Engage"
          description="Flexible deployment scopes calibrated to internal capabilities, delivery schedules, and compliance objectives."
        />
        {/* gap-px over a line background draws hairline dividers that stay correct at every breakpoint */}
        <ul className="grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {engagementModels.map((model) => (
            <li key={model.mode} className="flex flex-col justify-between bg-white p-8">
              <div>
                <div className="mb-6 flex h-9 w-9 items-center justify-center border border-line bg-stone text-ink">
                  <Icon name={model.icon} size={20} />
                </div>
                <span className="mb-1 block text-micro font-medium uppercase tracking-wider text-steel">
                  Mode {model.mode}
                </span>
                <h3 className="mb-3 text-lg font-bold leading-snug tracking-tight text-ink">{model.title}</h3>
                <p className="text-small leading-relaxed text-steel-deep">{model.text}</p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-line/60 pt-4">
                <span className="text-tiny font-bold uppercase tracking-wide text-accent-text">{model.tag}</span>
                <Icon name="circle-check" size={16} className="text-steel" />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
