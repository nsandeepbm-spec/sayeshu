import type { IconName } from "@/components/ui/Icon";

export const practiceAreas: ReadonlyArray<{ number: string; icon: IconName; title: string; text: string }> = [
  {
    number: "01",
    icon: "building-2",
    title: "Data Centre Engineering",
    text: "Feasibility, master planning, facility design, electrical and mechanical engineering coordination, and infrastructure development.",
  },
  {
    number: "02",
    icon: "cpu",
    title: "AI Infrastructure Engineering",
    text: "GPU clusters, high-density rack architecture, liquid cooling, networking, storage and next-generation accelerated computing platforms.",
  },
  {
    number: "03",
    icon: "sliders",
    title: "Performance & Lifecycle Consulting",
    text: "Energy efficiency, GPU utilisation, infrastructure assessments, commissioning, operational readiness and capacity optimisation.",
  },
];

export const engagementModels: ReadonlyArray<{
  mode: string;
  icon: IconName;
  title: string;
  text: string;
  tag: string;
}> = [
  {
    mode: "01",
    icon: "ruler",
    title: "Complete Design Engagement",
    text: "Full lifecycle partnership from concept through commissioning, acting as your primary technical authority and engineering design lead.",
    tag: "End-to-end",
  },
  {
    mode: "02",
    icon: "chart",
    title: "Focused Technical Assessment",
    text: "Targeted evaluation of power distribution, direct liquid cooling dynamics, or InfiniBand cluster topology to resolve specific friction points.",
    tag: "Specialised audit",
  },
  {
    mode: "03",
    icon: "shield-check",
    title: "Independent Design Review",
    text: "Rigorous third-party validation, peer review of engineering drawings, code compliance audits, and architectural risk mitigation before capital allocation.",
    tag: "Peer validation",
  },
  {
    mode: "04",
    icon: "gauge",
    title: "Optimisation of Existing Infrastructure",
    text: "Facility retrofits, density upgrades for accelerators, PUE reduction strategies, and systematic thermal tuning of active data halls.",
    tag: "Retrofit & PUE",
  },
];

export const aiReadyRows = [
  {
    title: "GPU Platforms",
    text: "Optimised for NVIDIA Blackwell, Hopper and custom ASIC cluster topologies with matched footprint and thermal envelopes.",
  },
  {
    title: "High-Density Power",
    text: "Modular busway systems and multi-megawatt pod distribution delivering up to 100kW+ per continuous rack bay.",
  },
  {
    title: "Liquid & Hybrid Cooling",
    text: "Direct-to-chip DLC, rear-door heat exchangers and immersion infrastructure engineered for extreme heat extraction.",
  },
  {
    title: "High-Performance Fabric",
    text: "Low-latency InfiniBand and RoCE fabric topology planning with structured fibre routing and non-blocking switching.",
  },
] as const;

export const processPhases = [
  {
    title: "Assess Requirements",
    text: "Compute profiles, power boundaries, site constraints, and timeline targets.",
    tag: "Audit",
  },
  {
    title: "Concept & Feasibility",
    text: "PUE modelling, capacity allocation, space layout, and high-level schematics.",
    tag: "Schematic",
  },
  {
    title: "Detailed Engineering",
    text: "Single lines, piping and thermal loops, rack topology, and procurement specs.",
    tag: "Blueprint",
  },
  {
    title: "Build & Integration",
    text: "Site engineering supervision, submittal review, vendor coordination, and QA/QC.",
    tag: "Execution",
  },
  {
    title: "Commission & Handover",
    text: "Integrated systems testing, load banking, burn-in validation, and handover.",
    tag: "Verification",
  },
] as const;

export const typicalDeliverables = [
  "Feasibility studies and design-basis reports",
  "Capacity planning and master plans",
  "Conceptual and detailed engineering packages",
  "Electrical single-line diagrams and load schedules",
  "Mechanical schematics and cooling-system designs",
  "Rack layouts, network architecture and equipment schedules",
  "Technical specifications and bills of materials",
  "Design reviews, risk registers and interface matrices",
  "Procurement and execution support documentation",
  "Commissioning plans, test reports and performance benchmarks",
  "Operational handover documentation and optimisation recommendations",
] as const;
