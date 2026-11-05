import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CapabilityDetail } from "@/components/capabilities/CapabilityDetail";
import { getCapabilityPage } from "@/lib/data/capabilityPages";

/** Shared metadata + page body for static capability routes (no `params` / Instant issues). */
export function capabilityMetadata(slug: string): Metadata {
  const page = getCapabilityPage(slug);
  if (!page) return {};
  return {
    title: page.label,
    description: page.description,
    alternates: { canonical: `/capabilities/${page.slug}` },
  };
}

export function CapabilityPage({ slug }: { slug: string }) {
  const page = getCapabilityPage(slug);
  if (!page) notFound();
  return <CapabilityDetail page={page} />;
}
