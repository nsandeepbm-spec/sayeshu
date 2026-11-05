import { images } from "@/lib/images";

export type InsightCategory =
  | "power-efficiency"
  | "liquid-cooling"
  | "gpu-infrastructure"
  | "ai-performance"
  | "networking"
  | "standards-compliance";

export const insightCategories: ReadonlyArray<{ id: InsightCategory; label: string }> = [
  { id: "power-efficiency", label: "Power & Efficiency" },
  { id: "liquid-cooling", label: "Liquid Cooling" },
  { id: "gpu-infrastructure", label: "GPU Infrastructure" },
  { id: "ai-performance", label: "AI Performance" },
  { id: "networking", label: "Networking" },
  { id: "standards-compliance", label: "Standards & Compliance" },
];

export type Insight = {
  slug: string;
  category: InsightCategory;
  title: string;
  /** ISO date (yyyy-mm-dd). */
  date: string;
  readMinutes: number;
  topic: string;
  image: string;
  imageAlt: string;
};

export const insights: readonly Insight[] = [
  {
    slug: "how-rack-power-density-shapes-electrical-architecture",
    category: "power-efficiency",
    title: "How rack power density shapes electrical architecture",
    date: "2026-09-28",
    readMinutes: 6,
    topic: "Grid load dynamics",
    image: images.powerSwitchgear,
    imageAlt: "Electrical switchgear and UPS panels",
  },
  {
    slug: "what-really-drives-gpu-utilisation",
    category: "ai-performance",
    title: "Beyond installed hardware: what really drives GPU utilisation",
    date: "2026-09-19",
    readMinutes: 7,
    topic: "Compute efficiency",
    image: images.gpuClusterNeon,
    imageAlt: "GPU server rack clusters",
  },
  {
    slug: "measuring-inference",
    category: "ai-performance",
    title: "Measuring inference: tokens per second, latency and energy per output",
    date: "2026-09-04",
    readMinutes: 5,
    topic: "Inference telemetry",
    image: images.gpuRacksCloseup,
    imageAlt: "Enterprise GPU server racks",
  },
  {
    slug: "ethernet-or-infiniband",
    category: "networking",
    title: "Ethernet or InfiniBand for AI clusters?",
    date: "2026-08-22",
    readMinutes: 8,
    topic: "Fabric topologies",
    image: images.serverAisleBlue,
    imageAlt: "Modern enterprise server aisle in perspective",
  },
  {
    slug: "retrofitting-existing-facilities-for-ai",
    category: "gpu-infrastructure",
    title: "Retrofitting existing facilities for AI workloads",
    date: "2026-08-11",
    readMinutes: 6,
    topic: "Brownfield conversion",
    image: images.engineersDataHall,
    imageAlt: "Engineers reviewing drawings in a data hall",
  },
  {
    slug: "commissioning-an-ai-data-centre",
    category: "standards-compliance",
    title: "Commissioning an AI data centre: from systems testing to sustained load",
    date: "2026-07-30",
    readMinutes: 9,
    topic: "Commissioning QA",
    image: images.hyperscaleAerial,
    imageAlt: "Aerial view of a hyperscale data centre campus",
  },
  {
    slug: "pue-beyond-the-headline-number",
    category: "power-efficiency",
    title: "PUE beyond the headline number: what to measure in liquid-cooled halls",
    date: "2026-07-14",
    readMinutes: 7,
    topic: "Efficiency metrics",
    image: images.serverHallLong,
    imageAlt: "Long data hall aisle with rows of server racks",
  },
  {
    slug: "rear-door-heat-exchangers-vs-direct-to-chip",
    category: "liquid-cooling",
    title: "Rear-door heat exchangers or direct-to-chip? Choosing a path to 100kW racks",
    date: "2026-06-26",
    readMinutes: 8,
    topic: "Hybrid cooling",
    image: images.cduManifold,
    imageAlt: "Liquid cooling distribution manifold",
  },
  {
    slug: "reading-ashrae-guidelines-for-liquid-cooled-hardware",
    category: "standards-compliance",
    title: "Reading ASHRAE thermal guidelines for liquid-cooled hardware",
    date: "2026-06-05",
    readMinutes: 6,
    topic: "Thermal guidelines",
    image: images.glassAtrium,
    imageAlt: "Quiet modern glass-fronted facility corridor",
  },
];

export const featuredInsight = {
  category: "liquid-cooling" as InsightCategory,
  title: "Designing liquid cooling for high-density AI racks",
  summary:
    "Practical considerations for direct-to-chip deployment, coolant distribution units, secondary fluid loops, and facility water integration at scale.",
  date: "2026-10-14",
  readMinutes: 8,
  author: { initials: "SK", name: "Dr. S. Kulkarni", role: "Principal Thermal Systems" },
  image: images.liquidCoolingPipework,
  imageAlt: "Stainless steel liquid cooling manifold and secondary distribution loop",
};

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

/** Deterministic (UTC) formatting so server and client always render the same string. */
export function formatInsightDate(isoDate: string): string {
  return dateFormatter.format(new Date(`${isoDate}T00:00:00Z`));
}
