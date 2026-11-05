import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";

const standards = [
  { name: "NVIDIA Ready", note: "Architecture validated" },
  { name: "Uptime Institute", note: "Tier III / IV concurrency" },
  { name: "ISO Standards", note: "9001 · 14001 · 50001" },
  { name: "ASHRAE TC 9.9", note: "Thermal guidelines A1–W4" },
  { name: "TIA-942 Standard", note: "Telecommunications rated" },
] as const;

export function StandardsStrip() {
  return (
    <section className="w-full bg-canvas py-16">
      <Container className="text-center">
        <Eyebrow rule="both" className="mb-8 justify-center">
          Aligned with global standards
        </Eyebrow>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {standards.map((standard, index) => (
            <li
              key={standard.name}
              className={`flex flex-col items-center justify-center border border-line bg-white px-4 py-5 transition-colors hover:border-ink ${
                index === standards.length - 1 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <span className="text-sm font-bold uppercase tracking-wider text-ink">{standard.name}</span>
              <span className="mt-1 text-micro font-medium text-steel">{standard.note}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
