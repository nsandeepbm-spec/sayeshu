import { Container } from "@/components/ui/Container";
import { standardsBodies } from "@/lib/site";

export function StandardsText() {
  return (
    <section className="w-full bg-canvas py-12">
      <Container className="flex flex-col items-center text-center">
        <span className="mb-6 text-xs uppercase tracking-widest text-steel">Aligned with global standards</span>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-bold uppercase tracking-wider text-night opacity-85 md:gap-x-14 md:text-base">
          {standardsBodies.map((body) => (
            <li key={body}>{body}</li>
          ))}
        </ul>
        <p className="mt-5 text-xs text-mist">
          Where formal certification is required, the appropriate authorised organisation is engaged.
        </p>
      </Container>
    </section>
  );
}
