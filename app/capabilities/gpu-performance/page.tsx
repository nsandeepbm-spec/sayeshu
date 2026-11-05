import type { Metadata } from "next";
import { GpuPerfCta } from "@/components/capabilities/gpu-performance/GpuPerfCta";
import { GpuPerfFactors } from "@/components/capabilities/gpu-performance/GpuPerfFactors";
import { GpuPerfFramework } from "@/components/capabilities/gpu-performance/GpuPerfFramework";
import { GpuPerfHero } from "@/components/capabilities/gpu-performance/GpuPerfHero";
import { GpuPerfInference } from "@/components/capabilities/gpu-performance/GpuPerfInference";

export const metadata: Metadata = {
  title: "GPU Performance & Compute Efficiency",
  description:
    "SAYESHU connects infrastructure efficiency to useful AI output — GPU utilisation, inference metrics, energy per token and system-level performance engineering.",
  alternates: { canonical: "/capabilities/gpu-performance" },
};

export default function GpuPerformancePage() {
  return (
    <>
      <GpuPerfHero />
      <GpuPerfFactors />
      <GpuPerfInference />
      <GpuPerfFramework />
      <GpuPerfCta />
    </>
  );
}
