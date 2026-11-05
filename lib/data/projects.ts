import { images } from "@/lib/images";

export type ProjectCategory = "ai" | "hyperscale" | "enterprise" | "liquid-cooling" | "retrofit";

export const projectCategories: ReadonlyArray<{ id: ProjectCategory; label: string }> = [
  { id: "ai", label: "AI Data Centres" },
  { id: "hyperscale", label: "Hyperscale" },
  { id: "enterprise", label: "Enterprise" },
  { id: "liquid-cooling", label: "Liquid Cooling" },
  { id: "retrofit", label: "Retrofit & Upgrade" },
];

export type Project = {
  number: string;
  category: ProjectCategory;
  kicker: string;
  status: string;
  title: string;
  summary: string;
  tags: readonly string[];
  image: string;
  imageAlt: string;
};

export const projects: readonly Project[] = [
  {
    number: "01",
    category: "ai",
    kicker: "AI Infrastructure",
    status: "Active engagement",
    title: "AI Data Centre Design",
    summary: "Greenfield design from site feasibility to detailed engineering.",
    tags: ["120MW campus", "NVIDIA Blackwell ready", "Tier IV"],
    image: images.dataCentreExterior,
    imageAlt: "Greenfield AI data centre exterior at sunset",
  },
  {
    number: "02",
    category: "ai",
    kicker: "Silicon & Power",
    status: "Validated",
    title: "GPU Cluster Infrastructure",
    summary: "Rack architecture, power density and network design for GPU clusters.",
    tags: ["100kW+ / rack", "InfiniBand fabric", "RoCEv2"],
    image: images.gpuClusterNeon,
    imageAlt: "High-density GPU cluster rack architecture",
  },
  {
    number: "03",
    category: "liquid-cooling",
    kicker: "Thermal Dynamics",
    status: "Active engagement",
    title: "Liquid Cooling Integration",
    summary: "Direct-to-chip cooling, CDUs and facility water loops.",
    tags: ["Direct-to-chip DLC", "CDUs", "<1.15 PUE"],
    image: images.cduManifold,
    imageAlt: "Stainless steel liquid cooling manifold and CDU pipework",
  },
  {
    number: "04",
    category: "hyperscale",
    kicker: "Hyperscale Campus",
    status: "Validated",
    title: "Hyperscale Facility Planning",
    summary: "Master planning and capacity assessment for large-scale facilities.",
    tags: ["Hyperscale masterplan", "250MW substation", "OCP spec"],
    image: images.hyperscaleAerial,
    imageAlt: "Aerial view of a hyperscale data centre campus",
  },
  {
    number: "05",
    category: "retrofit",
    kicker: "Facility Retrofit",
    status: "Active engagement",
    title: "Existing Facility AI-Readiness Study",
    summary: "Audit, capacity assessment and retrofit planning.",
    tags: ["Brownfield retrofit", "Air-to-liquid conversion", "CFD auditing"],
    image: images.powerSwitchgear,
    imageAlt: "Medium-voltage switchgear and UPS electrical room in a data centre",
  },
  {
    number: "06",
    category: "enterprise",
    kicker: "Assurance & IST",
    status: "Validated",
    title: "Commissioning & Performance Validation",
    summary: "Integrated systems testing and sustained workload validation.",
    tags: ["Level 1-5 IST", "72h full load bank", "ASHRAE TC 9.9"],
    image: images.serverAisleBlue,
    imageAlt: "Engineer carrying out integrated systems testing in a data hall",
  },
];

export const engagementStages = [
  {
    number: "01",
    title: "Feasibility & Design",
    text: "Site analysis, power capacity, architectural & engineering conceptualisation",
  },
  {
    number: "02",
    title: "Engineering & Integration",
    text: "BIM LOD-400, electrical single-lines, mechanical CFD & DLC pipelines",
  },
  {
    number: "03",
    title: "Commissioning",
    text: "Level 1-5 integrated systems testing, IST load banking & burn-in",
  },
  {
    number: "04",
    title: "Optimisation",
    text: "Continuous PUE reduction, workload telemetry & thermal balancing",
  },
] as const;
