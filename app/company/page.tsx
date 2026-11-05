import type { Metadata } from "next";
import { AboutSection } from "@/components/company/AboutSection";
import { Foundation } from "@/components/company/Foundation";
import { StandardsText } from "@/components/company/StandardsText";
// import { TeamGrid } from "@/components/company/TeamGrid";
import { ValuesGrid } from "@/components/company/ValuesGrid";
import { WhyDark } from "@/components/company/WhyDark";
import { CompanyHero } from "@/components/company/CompanyHero";

export const metadata: Metadata = {
  title: "Company",
  description:
    "SAYESHU is a specialised AI data centre engineering and consultancy practice bringing power, cooling, compute, networking and performance together.",
  alternates: { canonical: "/company" },
};

export default function CompanyPage() {
  return (
    <>
      <CompanyHero />
      <AboutSection />
      <ValuesGrid />
      <WhyDark />
      <Foundation />
      {/* Leadership / team portraits — restore when real names and photos are ready */}
      {/* <TeamGrid /> */}
      <StandardsText />
    </>
  );
}
