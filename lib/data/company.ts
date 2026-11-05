import type { IconName } from "@/components/ui/Icon";
import { images } from "@/lib/images";

export const values: ReadonlyArray<{ number: string; icon: IconName; title: string; text: string }> = [
  {
    number: "01",
    icon: "zap",
    title: "Power",
    text: "Reliable, efficient power distribution engineered for high-density racks.",
  },
  {
    number: "02",
    icon: "droplet",
    title: "Cooling",
    text: "Liquid and hybrid cooling designed around the selected hardware.",
  },
  {
    number: "03",
    icon: "cpu",
    title: "Compute",
    text: "GPU infrastructure sized and configured for the intended workloads.",
  },
  {
    number: "04",
    icon: "gauge",
    title: "Performance",
    text: "Useful computing output measured, analysed and optimised.",
  },
];

export const whyPoints = [
  "Specialist AI data centre expertise",
  "Optimised power usage and lower PUE",
  "NVIDIA-aligned GPU infrastructure design",
  "Liquid cooling and high-density deployment",
  "End-to-end consultancy and project delivery",
] as const;

export const foundations = [
  "Defined service delivery and specialist partners",
  "Documented team qualifications and experience",
  "Standards, design tools and technical review processes",
  "Defined deliverables, responsibilities and acceptance requirements",
  "Resources for GPU infrastructure and liquid cooling",
  "Practical methodology for design, commissioning and validation",
] as const;

export type TeamMember = {
  role: string;
  focus: string;
  image: string;
  imageAlt: string;
  /** Add the person's name and profile URL here when ready; both are optional. */
  name?: string;
  linkedin?: string;
};

export const team: readonly TeamMember[] = [
  {
    role: "Infrastructure Engineering Lead",
    focus: "Facility strategy and engineering governance",
    image: images.teamInfrastructure,
    imageAlt: "Portrait of the senior infrastructure engineering leader",
  },
  {
    role: "Principal Systems Architect",
    focus: "Data centre design and master planning",
    image: images.teamPrincipal,
    imageAlt: "Portrait of the data centre principal systems architect",
  },
  {
    role: "Director, AI Compute & Thermal",
    focus: "GPU infrastructure and liquid cooling",
    image: images.teamThermal,
    imageAlt: "Portrait of the AI compute and thermal engineering director",
  },
  {
    role: "Director, Operations & Delivery",
    focus: "Commissioning, handover and operations",
    image: images.teamOperations,
    imageAlt: "Portrait of the operations and engineering delivery director",
  },
];
