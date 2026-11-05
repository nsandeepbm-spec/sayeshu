import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { values } from "@/lib/data/company";

export function ValuesGrid() {
  return (
    <section className="w-full border-b border-line py-20 lg:py-24">
      <Container>
        <Eyebrow tone="ink" className="mb-10">
          What we stand for
        </Eyebrow>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <li
              key={value.number}
              className="group flex flex-col justify-between border border-line-warm bg-canvas p-8 transition-colors duration-200 hover:border-transparent hover:bg-night"
            >
              <div className="mb-8 flex items-start justify-between">
                <Icon name={value.icon} size={30} className="text-steel transition-colors group-hover:text-white" />
                <span
                  aria-hidden="true"
                  className="select-none text-4xl font-light text-line-strong transition-colors group-hover:text-white/20"
                >
                  {value.number}
                </span>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold tracking-tight text-night transition-colors group-hover:text-white">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-steel transition-colors group-hover:text-white/80">
                  {value.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
