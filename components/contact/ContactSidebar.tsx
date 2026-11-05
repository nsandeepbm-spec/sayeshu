import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { siteConfig } from "@/lib/site";

const steps = [
  {
    title: "We review your requirements",
    text: "Our multidisciplinary engineering team audits your site, power and thermal criteria against tier benchmarks.",
  },
  {
    title: "We arrange a technical discussion",
    text: "A focused 45-minute working session with relevant discipline leads (Power, Cooling, Compute, or Commissioning).",
  },
  {
    title: "We propose a scope and engagement model",
    text: "A transparent statement of work, delivery milestones, team allocation, and deliverables matrix.",
  },
] as const;

function Card({ eyebrow, aside, title, children }: { eyebrow: string; aside: ReactNode; title: string; children: ReactNode }) {
  return (
    <section className="border border-outline bg-white p-6 sm:p-8">
      <div className="mb-6 flex items-center justify-between gap-4 border-b border-outline pb-3">
        <h2 className="text-tiny font-semibold uppercase tracking-widest text-steel-deep">{eyebrow}</h2>
        {aside}
      </div>
      <h3 className="mb-6 font-display text-xl font-bold uppercase tracking-tight text-ink">{title}</h3>
      {children}
    </section>
  );
}

function ContactRow({ icon, label, children }: { icon: IconName; label: string; children: ReactNode }) {
  return (
    <li className="flex items-start gap-4 border border-outline/60 bg-canvas p-3">
      <Icon name={icon} size={20} className="mt-1 shrink-0 text-accent-text" />
      <div className="flex flex-col">
        <span className="text-tiny font-semibold uppercase tracking-wider text-steel-deep">{label}</span>
        {children}
      </div>
    </li>
  );
}

export function ContactSidebar() {
  return (
    <div className="flex flex-col gap-10 lg:col-span-5">
      <Card
        eyebrow="Direct channels // Advisory desk"
        aside={<span aria-hidden="true" className="h-2 w-2 shrink-0 bg-accent" />}
        title="Contact Details"
      >
        <ul className="flex flex-col gap-4">
          <ContactRow icon="mail" label="Technical Inquiries">
            <a
              href={`mailto:${siteConfig.advisoryEmail}`}
              className="break-all text-xs font-bold text-ink transition-colors hover:text-accent-text"
            >
              {siteConfig.advisoryEmail}
            </a>
          </ContactRow>
          <ContactRow icon="phone" label="Direct Phone">
            <a
              href={siteConfig.phoneHref}
              className="text-xs font-bold text-ink transition-colors hover:text-accent-text"
            >
              {siteConfig.phone}
            </a>
          </ContactRow>
          <ContactRow icon="building" label="Principal Engineering Office">
            <address className="mt-0.5 text-small not-italic leading-tight text-ink">
              Level 14, 100 Bishopsgate, London EC2N 4AG, United Kingdom
            </address>
          </ContactRow>
          <ContactRow icon="building-2" label="APAC Engineering Hub">
            <address className="mt-0.5 text-small not-italic leading-tight text-ink">
              Marina Bay Financial Centre, Tower 2, Singapore 018983
            </address>
          </ContactRow>
        </ul>

        <div className="mt-6 border-l-2 border-accent bg-info-tint p-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase text-ink">
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-accent" />
            SLA Response Commitment
          </div>
          <p className="mt-1 text-small leading-5 text-steel-deep">
            Standard engineering response time: within 24–48 business hours with an allocated principal lead.
          </p>
        </div>
      </Card>

      <Card
        eyebrow="Engagement protocol"
        aside={<span className="text-xs font-bold text-accent-text">STAGE 01 – 03</span>}
        title="What happens next"
      >
        <ol className="relative flex flex-col gap-6 pl-6 before:absolute before:bottom-3 before:left-2.75 before:top-2 before:w-px before:bg-outline before:content-['']">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-7.5 top-0 flex h-5 w-5 items-center justify-center text-micro font-bold ${
                  index === 0 ? "bg-ink text-white" : "border border-outline bg-canvas text-ink"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4 className="text-lg font-bold uppercase leading-snug text-ink">{step.title}</h4>
              <p className="mt-1 text-small leading-normal text-steel-deep">{step.text}</p>
            </li>
          ))}
        </ol>
      </Card>
    </div>
  );
}
