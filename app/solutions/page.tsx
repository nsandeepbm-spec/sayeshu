import type { Metadata } from "next";
import { Deliverables } from "@/components/solutions/Deliverables";
import { EngagementModels } from "@/components/solutions/EngagementModels";
import { PracticeAreas } from "@/components/solutions/PracticeAreas";
import { SolutionsAiReady } from "@/components/solutions/SolutionsAiReady";
import { SolutionsProcess } from "@/components/solutions/SolutionsProcess";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Complete design engagements, focused technical assessments, independent design reviews and optimisation of existing AI data centre infrastructure.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <PracticeAreas />
      <EngagementModels />
      <SolutionsAiReady />
      <SolutionsProcess />
      <Deliverables />
    </>
  );
}
