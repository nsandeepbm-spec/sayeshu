import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { whyPoints } from "@/lib/data/company";

export function WhyDark() {
  return (
    <section className="w-full border-b border-white/10 bg-night py-20 text-white lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col lg:col-span-5">
            <Eyebrow tone="dark" className="mb-6">
              Why SAYESHU
            </Eyebrow>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-heading text-white lg:text-4xl">
              Engineered for Performance, Efficiency and Scale.
            </h2>
          </div>
          <ul className="flex flex-col divide-y divide-white/10 border-y border-white/10 lg:col-span-7">
            {whyPoints.map((point) => (
              <li key={point} className="flex items-center gap-4 py-5">
                <Icon name="check" size={18} className="shrink-0 text-accent-bright" />
                <span className="text-base font-medium tracking-tight text-white/90">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
