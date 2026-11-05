import { capabilityNavItems } from "@/lib/data/capabilityPages";

export const siteConfig = {
  name: "SAYESHU",
  legalName: "SAYESHU AI Data Centre Engineering & Consultancy",
  tagline: "AI Data Centre Engineering & Consultancy",
  description:
    "SAYESHU designs and engineers AI-ready data centre infrastructure — power, cooling, GPU systems and performance, delivered as one coordinated engineering approach.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sayeshu.com",
  email: "info@sayeshu.com",
  advisoryEmail: "advisory@sayeshu.com",
  phone: "+44 (0) 20 7946 0880",
  phoneHref: "tel:+442079460880",
  locations: "London · Singapore",
  // Static on purpose: reading the current date during prerender is not allowed with Cache Components.
  copyrightYear: 2026,
  /** Add full profile URLs to show the icons in the footer. Empty values are hidden. */
  social: {
    linkedin: "",
    x: "",
  },
} as const;

export type NavChild = {
  label: string;
  href: string;
  number?: string;
  text?: string;
};

export type NavItem = {
  label: string;
  href: string;
  /** When present, the header renders a horizontal mega-menu under the bar. */
  children?: readonly NavChild[];
};

export const navItems: readonly NavItem[] = [
  { label: "Solutions", href: "/solutions" },
  {
    label: "Capabilities",
    href: "/capabilities",
    children: [...capabilityNavItems],
  },
  { label: "AI Infrastructure", href: "/capabilities/ai-infrastructure" },
  { label: "GPU Performance", href: "/capabilities/gpu-performance" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Company", href: "/company" },
];

export const contactCta = { label: "Discuss a Project", href: "/contact" } as const;

export const standardsBodies = ["NVIDIA", "UPTIME INSTITUTE", "ISO", "ASHRAE", "TIA"] as const;
