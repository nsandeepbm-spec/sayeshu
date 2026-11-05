import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { DataHallSchematic } from "./DataHallSchematic";

const advantages = [
  {
    title: "Specialist AI data centre expertise",
    text: "Custom-built methodologies tailored strictly for modern accelerated computing architectures.",
  },
  {
    title: "Optimised power usage and lower PUE",
    text: "Engineering sub-1.15 PUE targets through holistic heat recovery and dynamic airflow isolation.",
  },
  {
    title: "NVIDIA-aligned GPU infrastructure design",
    text: "Validated physical architectures matching recommended OEM thermal envelopes and connector specs.",
  },
  {
    title: "Liquid cooling and high-density deployment",
    text: "Deep domain capability in retrofitting brownfield air facilities and greenfield DLC delivery.",
  },
  {
    title: "End-to-end consultancy and project delivery",
    text: "Single point of engineering accountability from initial site diligence to live energisation.",
  },
] as const;

export function WhySayeshu() {
  return (
    <section className="w-full border-b border-line py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <figure className="relative overflow-hidden border border-line bg-white p-6 lg:col-span-6">
            <figcaption className="mb-4 flex items-center justify-between gap-4 border-b border-line pb-4 text-tiny text-steel">
              <span className="font-bold uppercase tracking-widest text-ink">Schematic: Data hall section B-B</span>
              <span className="shrink-0">SCALE: 1:50</span>
            </figcaption>
            <DataHallSchematic />
            <div className="mt-4 flex items-center justify-between gap-4 border-t border-line pt-3 text-tiny text-steel">
              <span>SYSTEM: DIRECT-TO-CHIP HYBRID</span>
              <span className="shrink-0 font-semibold text-ink">ALL SIZES IN MM</span>
            </div>
          </figure>

          <div className="lg:col-span-6">
            <Eyebrow>The SAYESHU Advantage</Eyebrow>
            <h2 className="mb-6 mt-3 font-display section-title font-bold text-ink">
              Engineered for Performance, Efficiency and Scale.
            </h2>
            <p className="mb-8 text-body leading-relaxed text-steel">
              We operate at the intersection of mechanical engineering, high-performance computing, and resilient
              electrical infrastructure.
            </p>
            <ul className="space-y-5">
              {advantages.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-ink text-white">
                    <Icon name="check" size={12} strokeWidth={3} />
                  </span>
                  <div>
                    <strong className="block text-base font-semibold text-ink">{item.title}</strong>
                    <span className="mt-0.5 block text-small leading-relaxed text-steel">{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
