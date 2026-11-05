import { Container } from "@/components/ui/Container";

const locations = [
  "51.5145° N, 0.0827° W // London office",
  "1.2801° N, 103.8540° E // Singapore hub",
] as const;

export function LocationsBand() {
  return (
    <section
      aria-label="Global advisory locations"
      className="blueprint-grid relative w-full overflow-hidden border-y border-night-line bg-night-deep py-6 text-night-label"
    >
      <Container className="relative flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <span aria-hidden="true" className="h-3 w-3 shrink-0 bg-accent" />
          <div className="flex flex-col">
            <span className="text-tiny font-semibold uppercase tracking-widest text-night-soft">
              Global advisory locations
            </span>
            <span className="text-xs tracking-wide text-white">MISSION-CRITICAL ENGINEERING COVERAGE</span>
          </div>
        </div>
        <ul className="flex flex-wrap items-center gap-4 text-xs text-night-soft">
          {locations.map((location) => (
            <li key={location} className="flex items-center gap-2 border border-night-line bg-night-panel/60 px-3 py-1">
              <span aria-hidden="true" className="h-1.5 w-1.5 bg-success" />
              <span className="uppercase">{location}</span>
            </li>
          ))}
          <li className="hidden items-center gap-2 border border-night-line bg-night-panel/60 px-3 py-1 xl:flex">
            <span className="font-bold text-accent-bright">LATENCY OPTIMIZED</span>
            <span>{"// ISO/IEC 22237 ALIGNED"}</span>
          </li>
        </ul>
      </Container>
    </section>
  );
}
