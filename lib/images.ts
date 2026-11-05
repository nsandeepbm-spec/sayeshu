/** Central registry of site photography (all files live in /public/images). */
export const images = {
  dataCentreExterior: "/images/data-centre-hero.jpg",
  serverHallLong: "/images/server-hall-long.jpg",
  serverAisleBlue: "/images/server-aisle-blue.jpg",
  gpuRacksCloseup: "/images/gpu-racks-closeup.jpg",
  gpuClusterNeon: "/images/gpu-cluster-neon.jpg",
  liquidCoolingPipework: "/images/liquid-cooling-pipework.jpg",
  cduManifold: "/images/cdu-manifold.jpg",
  hyperscaleAerial: "/images/hyperscale-aerial.jpg",
  powerSwitchgear: "/images/power-switchgear.jpg",
  engineersDataHall: "/images/engineers-data-hall.jpg",
  glassAtrium: "/images/glass-atrium.jpg",
  teamPrincipal: "/images/team-principal-architect.jpg",
  teamThermal: "/images/team-thermal-director.jpg",
  teamOperations: "/images/team-operations-director.jpg",
  teamInfrastructure: "/images/team-infrastructure-lead.jpg",
  aiInfraHero: "/images/ai-infra-hero.jpg",
  aiInfraStack: "/images/ai-infra-stack.jpg",
  aiInfraGpuRack: "/images/ai-infra-gpu-rack.jpg",
  aiInfraNetworking: "/images/ai-infra-networking.jpg",
  gpuPerfHero: "/images/gpu-perf-hero.jpg",
  gpuPerfMonitoring: "/images/gpu-perf-monitoring.jpg",
  gpuPerfDiagram: "/images/gpu-perf-diagram.jpg",
} as const;

export type ImageKey = keyof typeof images;
