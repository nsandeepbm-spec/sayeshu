import type { IconName } from "@/components/ui/Icon";

export type Discipline = {
  id: string;
  number: string;
  /** Short label used by the deep-dive tabs. */
  tabLabel: string;
  title: string;
  /** One-line summary for the overview card. */
  summary: string;
  icon: IconName;
  tags: readonly string[];
  /** Highlighted (dark, double-width) cards in the overview grid. */
  featured?: { badge: string };
  /** Deep-dive panel copy. */
  description: string;
  scope: readonly string[];
  deliverables: readonly string[];
  standard: string;
};

export const disciplines: readonly Discipline[] = [
  {
    id: "design-development",
    number: "01",
    tabLabel: "Design & Development",
    title: "Data Centre Design & Development",
    summary: "From initial planning through design development and execution support.",
    icon: "ruler",
    tags: ["Site feasibility", "Master planning", "Retrofit"],
    description:
      "Establishing the design basis early so that site, capacity, resilience and phasing decisions hold up through detailed design and delivery.",
    scope: [
      "Site selection and feasibility",
      "Master planning and phasing",
      "Capacity and load planning",
      "Architectural and structural coordination",
      "MEP design coordination",
      "Retrofit and expansion strategy",
      "BIM coordination",
      "Procurement and execution support",
    ],
    deliverables: [
      "Feasibility studies and design-basis reports",
      "Master plan and capacity roadmap",
      "Concept and detailed design packages",
      "Risk register and interface matrix",
      "Technical specifications for procurement",
    ],
    standard: "STANDARD: TIA-942 / UPTIME TIER",
  },
  {
    id: "ai-gpu",
    number: "02",
    tabLabel: "AI & GPU",
    title: "AI Data Centre & GPU Infrastructure",
    summary: "Specialised infrastructure for AI training, inference and GPU-intensive workloads.",
    icon: "cpu",
    tags: ["GPU cluster sizing", "Rack architecture", "HGX / DGX"],
    featured: { badge: "Core specialisation" },
    description:
      "Matching rack density, power delivery and cooling to the selected accelerator platform, and planning clusters that can grow without rework.",
    scope: [
      "GPU cluster sizing and density studies",
      "Rack and pod architecture",
      "HGX / DGX platform integration",
      "Power and cooling envelope matching",
      "Cluster topology and cable pathways",
      "Capacity and growth planning",
      "Hardware-neutral reference designs",
      "Vendor interface coordination",
    ],
    deliverables: [
      "GPU cluster sizing and density report",
      "Rack and row layout drawings",
      "Power and cooling demand schedules",
      "Network and cabling topology",
      "Equipment schedules and bills of materials",
    ],
    standard: "REFERENCE: OEM HGX / DGX SPECIFICATIONS",
  },
  {
    id: "electrical-power",
    number: "03",
    tabLabel: "Electrical & Power",
    title: "Electrical Infrastructure & Power Efficiency",
    summary: "Power availability and distribution for high-density AI facilities.",
    icon: "zap",
    tags: ["Switchgear", "UPS", "Busway"],
    description:
      "Delivering resilient, efficient power from the utility interconnect to the rack, sized for the step change in AI load density.",
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
    standard: "STANDARD: IEC / IEEE ALIGNED",
  },
  {
    id: "liquid-cooling",
    number: "04",
    tabLabel: "Liquid Cooling",
    title: "Liquid Cooling & Thermal Engineering",
    summary: "A core area of our AI infrastructure offering.",
    icon: "thermometer",
    tags: ["Direct-to-chip", "CDUs", "CFD"],
    featured: { badge: "Thermal dynamics" },
    description:
      "Engineering heat exchange boundaries directly at high-density accelerator junctions, eliminating convective thermal resistance.",
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
    standard: "STANDARD: ASHRAE W1–W5",
  },
  {
    id: "performance",
    number: "05",
    tabLabel: "Performance",
    title: "GPU Utilisation & AI Performance Engineering",
    summary: "Useful computing output depends on more than installed hardware.",
    icon: "gauge",
    tags: ["Workload profiling", "Inference throughput", "Optimisation"],
    description:
      "Measuring and improving the useful output of installed GPUs by finding the power, thermal, network and software constraints that hold it back.",
    scope: [
      "Workload profiling",
      "Inference throughput analysis",
      "Training efficiency review",
      "Utilisation and bottleneck analysis",
      "Power-to-performance benchmarking",
      "Thermal throttling diagnostics",
      "Capacity optimisation",
      "Energy per unit of output",
    ],
    deliverables: [
      "Utilisation baseline report",
      "Bottleneck and constraint analysis",
      "Optimisation roadmap",
      "Benchmark and test methodology",
      "Performance dashboard specification",
    ],
    standard: "METRICS: TOKENS/S · LATENCY · ENERGY/OUTPUT",
  },
  {
    id: "networking",
    number: "06",
    tabLabel: "Networking",
    title: "Networking, Storage & AI Cluster Architecture",
    summary: "Networks and storage sized for the intended workloads.",
    icon: "network",
    tags: ["Ethernet", "InfiniBand", "Optical cabling"],
    description:
      "Planning low-latency fabrics and storage tiers that keep accelerators fed, with physical pathways engineered alongside the logical design.",
    scope: [
      "Ethernet and InfiniBand fabric design",
      "RoCE planning",
      "Leaf-spine and rail-optimised topologies",
      "Optical cabling and pathways",
      "Storage architecture and sizing",
      "Bandwidth and oversubscription modelling",
      "Latency analysis",
      "Structured cabling standards",
    ],
    deliverables: [
      "Fabric topology design",
      "Cabling and pathway drawings",
      "Storage sizing and tiering plan",
      "Bandwidth and oversubscription analysis",
      "Test and acceptance criteria",
    ],
    standard: "STANDARD: TIA-942 / ISO/IEC 11801",
  },
  {
    id: "operations",
    number: "07",
    tabLabel: "Operations",
    title: "Software Infrastructure, Monitoring & Operations",
    summary: "Infrastructure software that keeps AI facilities manageable.",
    icon: "terminal",
    tags: ["Kubernetes", "Telemetry", "DCIM"],
    description:
      "Giving operators the visibility and tooling to run dense AI infrastructure safely, from facility telemetry through to cluster scheduling.",
    scope: [
      "Kubernetes and scheduler infrastructure",
      "Telemetry and observability",
      "DCIM and BMS integration",
      "Alerting and capacity dashboards",
      "Operational runbooks",
      "Automation and tooling",
      "Access and zoning design",
      "Lifecycle management",
    ],
    deliverables: [
      "Monitoring architecture",
      "DCIM / BMS integration specification",
      "Operational runbooks",
      "Dashboard definitions",
      "Handover and training documentation",
    ],
    standard: "FRAMEWORK: ISO/IEC 30134 KPIs",
  },
  {
    id: "assurance",
    number: "08",
    tabLabel: "Assurance",
    title: "Standards, Compliance & Engineering Assurance",
    summary: "A project-specific engineering framework.",
    icon: "shield-check",
    tags: ["ASHRAE", "ISO/IEC", "OCP"],
    description:
      "Defining the standards that apply to each project and verifying design and build against them, with independent review where it adds value.",
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
    standard: "ALIGNED: ISO/IEC 22237 · ASHRAE · OCP",
  },
];

export const performanceMeasures = [
  "Tokens per second",
  "Time to first token",
  "Latency under load",
  "Concurrent request capacity",
  "Energy per unit of output",
] as const;
