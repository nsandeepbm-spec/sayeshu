import type { Metadata } from "next";
import { EngagementStages } from "@/components/projects/EngagementStages";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { ProjectsHero } from "@/components/projects/ProjectsHero";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "The types of engagements SAYESHU supports across AI, HPC, hyperscale and enterprise data centres, from feasibility through commissioning and optimisation.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <EngagementStages />
      <ProjectsExplorer />
    </>
  );
}
