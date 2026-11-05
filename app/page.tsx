import type { Metadata } from "next";
import { AiReadiness } from "@/components/home/AiReadiness";
import { ApproachTimeline } from "@/components/home/ApproachTimeline";
import { ExpertiseOverview } from "@/components/home/ExpertiseOverview";
import { FeatureStrip } from "@/components/home/FeatureStrip";
import { Hero } from "@/components/home/Hero";
import { WhySayeshu } from "@/components/home/WhySayeshu";
import { StandardsStrip } from "@/components/ui/StandardsStrip";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.name} | ${siteConfig.tagline}` },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <ExpertiseOverview />
      <AiReadiness />
      <ApproachTimeline />
      <WhySayeshu />
      <StandardsStrip />
    </>
  );
}
