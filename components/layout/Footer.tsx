import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { contactCta, navItems, siteConfig } from "@/lib/site";
import { Logo } from "./Logo";

const expertiseLinks = [
  "Data Centre Design & Development",
  "AI & GPU Infrastructure",
  "Electrical & Power",
  "Liquid Cooling & Thermal",
  "GPU Utilisation & Performance",
  "Networking & Storage",
  "Software & Operations",
  "Standards & Commissioning",
] as const;

function ColumnTitle({ children }: { children: string }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span aria-hidden="true" className="h-0.5 w-3 bg-accent" />
      <h2 className="text-xs font-semibold uppercase tracking-wider text-white">{children}</h2>
    </div>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center border border-white/20 text-xs font-bold text-night-text transition-colors hover:border-white hover:text-white"
    >
      {children}
    </a>
  );
}

export function Footer() {
  const { social } = siteConfig;
  const hasSocial = Boolean(social.linkedin || social.x);

  return (
    <footer className="mt-auto w-full border-t border-white/10 bg-night text-white">
      <Container>
        {/* Closing call to action */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 py-12 md:flex-row md:items-center">
          <h2 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
            Have a project in mind?
          </h2>
          <ButtonLink href={contactCta.href} variant="inverse" icon="arrow-up-right">
            {contactCta.label}
          </ButtonLink>
        </div>

        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="dark" height={36} />
            <p className="mb-3 mt-4 text-sm leading-relaxed text-night-text">
              Engineering the infrastructure behind intelligence.
            </p>
            <p className="text-xs font-medium uppercase tracking-widest text-night-text">
              Power / Cooling / Compute / Performance
            </p>
          </div>

          <div className="lg:col-span-3">
            <ColumnTitle>Expertise</ColumnTitle>
            <ul className="space-y-2 text-sm text-night-text">
              {expertiseLinks.map((label) => (
                <li key={label}>
                  <Link href="/expertise" className="block transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <ColumnTitle>Company</ColumnTitle>
            <ul className="space-y-2 text-sm text-night-text">
              {navItems
                .map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="block transition-colors hover:text-white">
                      {item.label === "Company" ? "About SAYESHU" : item.label}
                    </Link>
                  </li>
                ))}
              <li>
                <Link href="/expertise" className="block transition-colors hover:text-white">
                  Expertise
                </Link>
              </li>
              <li>
                <Link href={contactCta.href} className="block transition-colors hover:text-white">
                  {contactCta.label}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <ColumnTitle>Contact</ColumnTitle>
            <ul className="space-y-3 text-sm text-night-text">
              <li className="flex items-center gap-2.5">
                <Icon name="mail" size={18} className="shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="break-all transition-colors hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="phone" size={18} className="shrink-0" />
                <a href={siteConfig.phoneHref} className="transition-colors hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="building" size={18} className="shrink-0" />
                <span>{siteConfig.locations}</span>
              </li>
            </ul>
            {hasSocial && (
              <div className="mt-5 flex items-center gap-2">
                {social.linkedin && (
                  <SocialLink href={social.linkedin} label="SAYESHU on LinkedIn">
                    in
                  </SocialLink>
                )}
                {social.x && (
                  <SocialLink href={social.x} label="SAYESHU on X">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </SocialLink>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-xs text-night-text">
          © {siteConfig.copyrightYear} {siteConfig.legalName}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
