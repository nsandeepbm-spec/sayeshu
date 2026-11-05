import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { foundations } from "@/lib/data/company";

export function Foundation() {
  return (
    <section className="w-full border-b border-line py-20 lg:py-24">
      <Container>
        <Eyebrow tone="ink" className="mb-5">
          Our foundation
        </Eyebrow>
        <h2 className="mb-12 font-display text-3xl font-bold tracking-heading text-night">
          Built on a clear engineering foundation.
        </h2>
        <ol className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
          {foundations.map((item, index) => (
            <li key={item} className="flex flex-col border-t border-line-strong pt-4">
              <span className="mb-2 text-2xl font-bold leading-none text-mist">{String(index + 1).padStart(2, "0")}</span>
              <p className="text-base font-medium leading-relaxed text-night">{item}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
