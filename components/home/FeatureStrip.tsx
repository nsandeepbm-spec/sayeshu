import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";

const features: ReadonlyArray<{ icon: IconName; title: string; text: string }> = [
  { icon: "cpu", title: "AI & GPU Infrastructure", text: "High-density rack architectures" },
  { icon: "layers", title: "End-to-End Engineering", text: "From feasibility to commissioning" },
  { icon: "leaf", title: "Energy Efficient Design", text: "PUE optimisation & heat reuse" },
  { icon: "droplet", title: "Liquid Cooling Systems", text: "Direct-to-chip & immersion" },
  { icon: "server", title: "Hyperscale Facilities", text: "Mission-critical resilience" },
];

export function FeatureStrip() {
  return (
    <section aria-label="Capabilities at a glance" className="w-full border-b border-line bg-white">
      <Container>
        {/* gap-px over a line-coloured background draws 1px hairline dividers between cells */}
        <ul className="grid grid-cols-1 gap-px border-x border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature, index) => (
            <li
              key={feature.title}
              className={`group bg-white p-6 transition-colors hover:bg-canvas ${
                index === features.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center border border-line bg-white text-ink transition-colors group-hover:border-ink">
                <Icon name={feature.icon} size={20} />
              </div>
              <h3 className="text-base font-bold leading-tight tracking-tight text-ink">{feature.title}</h3>
              <p className="mt-1.5 text-small leading-snug text-steel">{feature.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
