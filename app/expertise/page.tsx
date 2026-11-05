import type { Metadata } from "next";
import { DisciplineGrid } from "@/components/expertise/DisciplineGrid";
import { DisciplineTabs } from "@/components/expertise/DisciplineTabs";
import { PerformanceMeasures } from "@/components/expertise/PerformanceMeasures";
import { ExpertiseHero } from "@/components/expertise/ExpertiseHero";
import { disciplines } from "@/lib/data/disciplines";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Eight engineering disciplines — design, AI & GPU infrastructure, power, liquid cooling, performance, networking, operations and assurance — delivered as one coordinated approach.",
  alternates: { canonical: "/expertise" },
};

export default function ExpertisePage() {
  return (
    <>
      <ExpertiseHero />
      <DisciplineGrid />
      <DisciplineTabs
        disciplines={disciplines}
        initialIndex={disciplines.findIndex((discipline) => discipline.id === "liquid-cooling")}
      />
      <PerformanceMeasures />
    </>
  );
}
