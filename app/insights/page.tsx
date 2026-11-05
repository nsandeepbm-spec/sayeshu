import type { Metadata } from "next";
import { FeaturedInsight } from "@/components/insights/FeaturedInsight";
import { InsightsExplorer } from "@/components/insights/InsightsExplorer";
import { NewsletterBand } from "@/components/insights/NewsletterBand";
import { InsightsHero } from "@/components/insights/InsightsHero";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Engineering thinking on power, cooling, GPU infrastructure and AI performance from the SAYESHU team.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <InsightsHero />
      <FeaturedInsight />
      <InsightsExplorer />
      <NewsletterBand />
    </>
  );
}
