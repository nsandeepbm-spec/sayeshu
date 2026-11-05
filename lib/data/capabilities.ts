import { images } from "@/lib/images";

export const capabilityDisciplines = [
  {
    number: "01",
    title: "Power Infrastructure",
    image: images.powerSwitchgear,
    imageAlt: "Electrical switchgear panels in a data centre plant room",
    href: "/expertise#disciplines",
  },
  {
    number: "02",
    title: "Liquid Cooling",
    image: images.cduManifold,
    imageAlt: "Liquid cooling distribution manifold and pipework",
    href: "/expertise#disciplines",
  },
  {
    number: "03",
    title: "GPU & Compute",
    image: images.gpuClusterNeon,
    imageAlt: "High-density GPU server rack clusters",
    href: "/expertise#disciplines",
  },
  {
    number: "04",
    title: "Networking Fabric",
    image: images.serverAisleBlue,
    imageAlt: "Data centre server aisle with structured networking",
    href: "/expertise#disciplines",
  },
] as const;

export const serviceLines = [
  {
    number: "01",
    title: "Data Centre Engineering",
    text: "Feasibility, master planning, facility design, electrical and mechanical engineering coordination, and infrastructure development.",
    items: ["Site feasibility", "Master planning", "Facility design", "Infrastructure development"],
    image: images.hyperscaleAerial,
    imageAlt: "Hyperscale data centre campus from above",
  },
  {
    number: "02",
    title: "AI Infrastructure Engineering",
    text: "GPU clusters, high-density rack architecture, liquid cooling, networking, storage and next-generation accelerated computing platforms.",
    items: ["GPU cluster sizing", "Rack architecture", "Liquid cooling", "Networking and storage"],
    image: images.gpuRacksCloseup,
    imageAlt: "Close-up of enterprise GPU server racks",
  },
  {
    number: "03",
    title: "Performance & Lifecycle Consulting",
    text: "Energy efficiency, GPU utilisation, infrastructure assessments, commissioning, operational readiness and capacity optimisation.",
    items: ["Energy efficiency", "GPU utilisation", "Commissioning", "Capacity optimisation"],
    image: images.engineersDataHall,
    imageAlt: "Engineers reviewing systems in a data hall",
  },
] as const;

export const mosaicTiles = [
  {
    number: "01",
    title: "Data Centre Design & Development",
    text: "Comprehensive civil, structural, architectural and spatial master planning engineered to accommodate hyperscale density and rapid scalability.",
    image: images.dataCentreExterior,
    imageAlt: "Modern enterprise AI data centre exterior",
    span: "wide" as const,
  },
  {
    number: "02",
    title: "AI & GPU Infrastructure",
    text: "Accelerated computing compute clusters, power delivery, and thermal tolerances.",
    image: images.gpuClusterNeon,
    imageAlt: "GPU cluster racks with accent lighting",
    span: "standard" as const,
  },
  {
    number: "03",
    title: "Electrical & Power",
    text: "Substation interconnects, busways, UPS topologies, and microgrid redundancy.",
    image: images.powerSwitchgear,
    imageAlt: "Electrical switchgear and UPS plant",
    span: "standard" as const,
  },
  {
    number: "04",
    title: "Liquid Cooling & Thermal",
    text: "Direct-to-chip CDU loops, secondary fluid networks, and adiabatic rejection.",
    image: images.liquidCoolingPipework,
    imageAlt: "Stainless steel liquid cooling pipework",
    span: "standard" as const,
  },
  {
    number: "05",
    title: "GPU Utilisation & Performance",
    text: "Workload scheduling, profiling, power capping, and real-time telemetry analytics.",
    image: images.gpuRacksCloseup,
    imageAlt: "High-density accelerator racks",
    span: "standard" as const,
  },
  {
    number: "06",
    title: "Networking & Storage",
    text: "Low-latency non-blocking fabrics, InfiniBand and RoCE v2 networks, parallel file systems, and optical interconnect architectures.",
    image: images.serverHallLong,
    imageAlt: "Long enterprise server aisle",
    span: "wide" as const,
  },
  {
    number: "07",
    title: "Software & Operations",
    text: "Kubernetes orchestrations, automated workload distribution, DCIM integration, and environmental sensor intelligence.",
    image: images.serverAisleBlue,
    imageAlt: "Blue-lit server aisle operations view",
    span: "half" as const,
  },
  {
    number: "08",
    title: "Standards & Assurance",
    text: "Commissioning protocols, Tier compliance verification, ASHRAE thermal audits, and third-party vendor design certification.",
    image: images.glassAtrium,
    imageAlt: "Quiet modern glass atrium workspace",
    span: "half" as const,
  },
] as const;

export const lifecyclePhases = [
  {
    number: "01",
    title: "Assess Requirements",
    text: "Workload profiling, compute capacity targets, power availability audits, and site boundary analysis.",
    image: images.glassAtrium,
    imageAlt: "Quiet planning space for requirements workshops",
    terminal: false,
  },
  {
    number: "02",
    title: "Concept & Feasibility",
    text: "Campus topology schemes, utility negotiation baselines, thermodynamic modeling, and Capex modeling.",
    image: images.engineersDataHall,
    imageAlt: "Engineers reviewing feasibility drawings",
    terminal: false,
  },
  {
    number: "03",
    title: "Detailed Engineering",
    text: "Complete MEP integration, liquid cooling manifold designs, rack busway specs, and CFD simulations.",
    image: images.cduManifold,
    imageAlt: "Detailed cooling manifold engineering",
    terminal: false,
  },
  {
    number: "04",
    title: "Build & Integration",
    text: "Contractor technical supervision, equipment staging, GPU rack deployment, and structured cabling verification.",
    image: images.dataCentreExterior,
    imageAlt: "Data centre facility under delivery",
    terminal: false,
  },
  {
    number: "05",
    title: "Commission & Handover",
    text: "Level 1–5 integrated system testing, thermal stress runs, telemetry tuning, and final operations sign-off.",
    image: images.serverHallLong,
    imageAlt: "Commissioned data hall ready for handover",
    terminal: true,
  },
] as const;

export const lifecycleMatrix = {
  columns: [
    "Assess Requirements",
    "Concept & Feasibility",
    "Detailed Engineering",
    "Build & Integration",
    "Commission & Handover",
  ],
  rows: [
    { discipline: "Power & Electrical", marks: [true, true, true, true, false] },
    { discipline: "Liquid Cooling & Thermal", marks: [true, true, true, false, true] },
    { discipline: "GPU & Compute", marks: [true, true, true, true, false] },
    { discipline: "Networking & Storage", marks: [false, true, true, true, false] },
    { discipline: "Performance & Operations", marks: [true, false, true, true, true] },
  ],
} as const;

export const technologyPanels = [
  {
    number: "01",
    title: "Compute",
    items: [
      "NVIDIA HGX and DGX systems",
      "Blackwell-based infrastructure",
      "Vera Rubin",
      "Comparable technologies from other manufacturers",
    ],
  },
  {
    number: "02",
    title: "Cooling",
    items: [
      "Direct-to-chip liquid cooling",
      "Coolant distribution units",
      "Rack manifolds",
      "Hybrid air and liquid cooling",
    ],
  },
  {
    number: "03",
    title: "Networking",
    items: [
      "High-speed Ethernet",
      "InfiniBand",
      "Optical connectivity",
      "Scale-up and scale-out architecture",
    ],
  },
  {
    number: "04",
    title: "Software & Operations",
    items: ["Kubernetes environments", "GPU scheduling", "Telemetry", "DCIM integration"],
  },
] as const;

export const engagementScopes = [
  {
    tag: "Full architecture",
    title: "Complete Design Engagement",
    image: images.dataCentreExterior,
    imageAlt: "Enterprise data centre exterior for full design engagements",
    href: "/solutions#engagement",
  },
  {
    tag: "Audit & appraisal",
    title: "Focused Technical Assessment",
    image: images.glassAtrium,
    imageAlt: "Technical assessment workshop setting",
    href: "/solutions#engagement",
  },
  {
    tag: "Third-party verification",
    title: "Independent Design Review",
    image: images.engineersDataHall,
    imageAlt: "Independent design review with engineering team",
    href: "/solutions#engagement",
  },
  {
    tag: "Brownfield retrofit",
    title: "Optimisation of Existing Infrastructure",
    image: images.serverHallLong,
    imageAlt: "Existing data hall prepared for optimisation",
    href: "/solutions#engagement",
  },
] as const;
