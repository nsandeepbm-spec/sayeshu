export const performanceFactors = [
  "GPU utilisation",
  "CPU and memory bottlenecks",
  "Network throughput",
  "Storage performance",
  "Cooling and power constraints",
  "Workload scheduling",
] as const;

export const inferenceMetrics = [
  {
    metric: "Tokens per second",
    measures: "Generated output throughput",
  },
  {
    metric: "Time to first token",
    measures: "Initial response delay",
  },
  {
    metric: "Latency",
    measures: "Response time",
  },
  {
    metric: "Concurrent requests",
    measures: "Simultaneous workload capacity",
  },
  {
    metric: "Energy per token",
    measures: "Energy required for output",
  },
  {
    metric: "GPU utilisation",
    measures: "Accelerator activity",
  },
] as const;
