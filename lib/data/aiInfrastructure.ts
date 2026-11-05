export const aiStackLayers = [
  {
    number: "01",
    title: "Accelerator hardware",
    text: "GPUs, CPUs, memory and interconnects selected for the intended training or inference workload.",
  },
  {
    number: "02",
    title: "Rack architecture",
    text: "Power density, physical layout and thermal interfaces engineered around the accelerator platform.",
  },
  {
    number: "03",
    title: "Networking",
    text: "Scale-up and scale-out fabrics sized for cluster communication without becoming the bottleneck.",
  },
  {
    number: "04",
    title: "Storage",
    text: "Datasets, checkpoints and model-serving requirements planned as part of the compute architecture.",
  },
  {
    number: "05",
    title: "Facility infrastructure",
    text: "Electrical power, cooling and resilience that keep accelerated halls available under sustained load.",
  },
] as const;

export const workloadModes = [
  {
    title: "AI Training",
    text: "Large-scale accelerator clusters require high-bandwidth communication, storage throughput, power availability and sustained thermal performance.",
  },
  {
    title: "AI Inference",
    text: "Production inference environments require predictable latency, concurrent request capacity, efficient resource utilisation and workload-specific energy performance.",
  },
] as const;

export const technologyEcosystem = [
  "GPU and accelerator platforms",
  "High-speed Ethernet",
  "InfiniBand networking",
  "Enterprise storage",
  "Liquid cooling systems",
  "Workload orchestration",
] as const;
