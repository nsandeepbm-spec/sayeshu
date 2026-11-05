import { images } from "@/lib/images";

export type CapabilityPage = {
  slug: string;
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  intro: string;
  highlights: readonly { title: string; text: string }[];
  scope: readonly string[];
  deliverables: readonly string[];
};

export const capabilityPages: readonly CapabilityPage[] = [
  {
    slug: "ai-infrastructure",
    label: "AI Infrastructure",
    title: "Infrastructure engineered for AI workloads.",
    description:
      "Coordinated AI data centre infrastructure across accelerators, racks, networking, storage, power and cooling.",
    image: images.aiInfraHero,
    imageAlt: "High-density AI data centre server hall with GPU compute racks",
    // Dedicated page: app/capabilities/ai-infrastructure/page.tsx
    intro: "",
    highlights: [],
    scope: [],
    deliverables: [],
  },
  {
    slug: "power-energy",
    label: "Power & Energy Engineering",
    title: "Power systems sized for high-density AI loads.",
    description:
      "Resilient electrical infrastructure from utility interconnect to the rack — switchgear, UPS, busway and efficiency.",
    image: images.powerSwitchgear,
    imageAlt: "Electrical switchgear and UPS plant in a data centre",
    intro:
      "AI facilities change the power conversation. We engineer distribution, redundancy and metering so capacity is available where accelerators need it, with efficiency treated as a design requirement.",
    highlights: [
      {
        title: "Utility to rack",
        text: "Medium-voltage interconnects, switchgear and rack-level distribution designed as one continuous path.",
      },
      {
        title: "Resilience",
        text: "N+1 and 2N architectures, UPS and generator strategies aligned to concurrency targets.",
      },
      {
        title: "Efficiency",
        text: "Metering, power quality and PUE-oriented distribution choices built into the design basis.",
      },
    ],
    scope: [
      "Utility and medium-voltage interconnect",
      "Switchgear and distribution",
      "UPS and battery systems",
      "Generators and backup power",
      "Busway and rack power distribution",
      "Redundancy architectures (N+1, 2N)",
      "Power quality and metering",
      "Efficiency and PUE optimisation",
    ],
    deliverables: [
      "Electrical single-line diagrams",
      "Load schedules and capacity models",
      "Redundancy and failure-mode analysis",
      "Equipment specifications",
      "Testing and commissioning plans",
    ],
  },
  {
    slug: "cooling-thermal",
    label: "Cooling & Thermal Engineering",
    title: "Thermal engineering for liquid-cooled AI halls.",
    description:
      "Direct-to-chip loops, CDUs, rack manifolds, facility water and CFD — engineered for accelerator heat loads.",
    image: images.liquidCoolingPipework,
    imageAlt: "Stainless steel liquid cooling pipework and manifolds",
    intro:
      "Convective air cooling alone cannot serve dense AI racks. We engineer heat exchange at the chip, through the CDU and out to facility rejection, with modelling that proves the loops before build.",
    highlights: [
      {
        title: "Direct-to-chip",
        text: "Primary and secondary loops, CDU selection and manifold design for high-density racks.",
      },
      {
        title: "Hybrid strategies",
        text: "Air and liquid combinations where halls, timelines or platforms require a staged approach.",
      },
      {
        title: "CFD validation",
        text: "Thermal modelling that tests flow, pressure drop and failure cases before equipment is frozen.",
      },
    ],
    scope: [
      "Direct-to-chip liquid cooling",
      "Coolant distribution units",
      "Rack manifolds",
      "Facility water loops",
      "Heat exchangers and heat rejection",
      "Hybrid air and liquid cooling",
      "Thermal modelling (CFD)",
      "Cooling-system integration",
    ],
    deliverables: [
      "Detailed thermal schematics and loop sizing",
      "Hydraulic flow and pressure drop analysis",
      "CDU redundancy and piping manifold specifications",
      "Computational fluid dynamics (CFD) thermal reports",
      "Commissioning and leak-detection protocol documentation",
    ],
  },
  {
    slug: "gpu-performance",
    label: "GPU Performance & Compute Efficiency",
    title: "More useful compute from every unit of energy.",
    description:
      "System-level GPU performance engineering — utilisation, inference metrics and energy efficiency for useful AI output.",
    image: images.gpuPerfHero,
    imageAlt: "High-performance AI computing cluster with dense GPU servers",
    // Dedicated page: app/capabilities/gpu-performance/page.tsx
    intro: "",
    highlights: [],
    scope: [],
    deliverables: [],
  },
  {
    slug: "engineering-approach",
    label: "Engineering Approach",
    title: "A structured path from concept to commissioning.",
    description:
      "One coordinated engineering process across assess, feasibility, detailed design, build and handover.",
    image: images.engineersDataHall,
    imageAlt: "Engineers reviewing technical drawings in a data hall",
    intro:
      "SAYESHU runs power, cooling, compute, networking and performance as one engineering programme. Each phase has clear inputs, decisions and acceptance criteria so design intent survives into operations.",
    highlights: [
      {
        title: "Single technical authority",
        text: "Disciplines are coordinated under one design basis instead of disconnected packages.",
      },
      {
        title: "Milestone checkpoints",
        text: "Feasibility, detailed engineering and commissioning gates that freeze scope with evidence.",
      },
      {
        title: "Handover ready",
        text: "Testing, telemetry and documentation prepared so operators inherit a proven facility.",
      },
    ],
    scope: [
      "Assess requirements and workload profiling",
      "Concept and feasibility studies",
      "Detailed multi-discipline engineering",
      "Build and integration support",
      "Level 1–5 commissioning",
      "Interface and risk management",
      "Vendor and contractor technical advisory",
      "Operational handover",
    ],
    deliverables: [
      "Design-basis and feasibility reports",
      "Coordinated engineering packages",
      "Interface and risk registers",
      "Commissioning plans and test scripts",
      "Handover and operations documentation",
    ],
  },
  {
    slug: "standards-assurance",
    label: "Standards & Technical Assurance",
    title: "Standards, compliance and independent assurance.",
    description:
      "Project-specific alignment to ASHRAE, ISO/IEC, OCP and Tier concurrency, with review and commissioning support.",
    image: images.glassAtrium,
    imageAlt: "Quiet modern workspace for assurance and review work",
    intro:
      "We define which standards apply to each project, verify design and build against them, and coordinate independent review or certification where it adds value — without ceremony that does not serve the facility.",
    highlights: [
      {
        title: "Standards matrix",
        text: "ASHRAE, ISO/IEC, OCP and Tier requirements mapped to the actual design scope.",
      },
      {
        title: "Independent review",
        text: "Peer review of drawings and calculations before capital is locked.",
      },
      {
        title: "Commissioning assurance",
        text: "Level 1–5 planning, scripts and evidence so acceptance is objective.",
      },
    ],
    scope: [
      "ASHRAE thermal guideline alignment",
      "ISO/IEC 22237 and EN 50600 alignment",
      "OCP and OEM specification review",
      "Uptime tier concurrency review",
      "Independent design review",
      "Commissioning planning (Levels 1–5)",
      "Risk and compliance registers",
      "Third-party certification coordination",
    ],
    deliverables: [
      "Standards and compliance matrix",
      "Independent design review report",
      "Commissioning plan and test scripts",
      "Test reports and performance benchmarks",
      "Operational handover documentation",
    ],
  },
];

export function getCapabilityPage(slug: string) {
  return capabilityPages.find((page) => page.slug === slug);
}

/** Top-level capability pages that should not also appear in the Capabilities dropdown. */
const topLevelCapabilitySlugs = new Set(["ai-infrastructure", "gpu-performance"]);

/** Dropdown items under Capabilities — dedicated top-level pages are excluded. */
export const capabilityNavItems = capabilityPages
  .filter((page) => !topLevelCapabilitySlugs.has(page.slug))
  .map((page, index) => ({
    number: String(index + 1).padStart(2, "0"),
    label: page.label,
    href: `/capabilities/${page.slug}`,
    text: page.description,
  })) as readonly { number: string; label: string; href: string; text: string }[];
