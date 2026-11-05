import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { team } from "@/lib/data/company";

export function TeamGrid() {
  return (
    <section className="w-full border-b border-line py-20 lg:py-24">
      <Container>
        <Eyebrow tone="ink" className="mb-5">
          Leadership
        </Eyebrow>
        <h2 className="mb-12 font-display text-3xl font-bold tracking-heading text-night">
          The team behind the engineering.
        </h2>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <li key={member.role} className="flex flex-col">
              <div className="relative aspect-square w-full overflow-hidden border border-line-strong bg-stone-deep">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-3 flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold leading-snug text-night">{member.name ?? member.role}</h3>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name ?? member.role} on LinkedIn`}
                    className="mt-1 text-steel transition-colors hover:text-night"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                    </svg>
                  </a>
                )}
              </div>
              <p className="text-sm text-steel">{member.name ? member.role : member.focus}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
