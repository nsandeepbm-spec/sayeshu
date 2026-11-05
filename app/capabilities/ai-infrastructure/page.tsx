import type { Metadata } from "next";
import { AiInfraCta } from "@/components/capabilities/ai-infrastructure/AiInfraCta";
import { AiInfraEcosystem } from "@/components/capabilities/ai-infrastructure/AiInfraEcosystem";
import { AiInfraGpu } from "@/components/capabilities/ai-infrastructure/AiInfraGpu";
import { AiInfraHero } from "@/components/capabilities/ai-infrastructure/AiInfraHero";
import { AiInfraStack } from "@/components/capabilities/ai-infrastructure/AiInfraStack";
import { AiInfraWorkloads } from "@/components/capabilities/ai-infrastructure/AiInfraWorkloads";

export const metadata: Metadata = {
  title: "AI Infrastructure",
  description:
    "SAYESHU engineers AI data centre infrastructure — accelerator hardware, rack architecture, networking, storage and facility power and cooling for training and inference workloads.",
  alternates: { canonical: "/capabilities/ai-infrastructure" },
};

export default function AiInfrastructurePage() {
  return (
    <>
      <AiInfraHero />
      <AiInfraStack />
      <AiInfraGpu />
      <AiInfraWorkloads />
      <AiInfraEcosystem />
      <AiInfraCta />
    </>
  );
}
