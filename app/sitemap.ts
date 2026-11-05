import type { MetadataRoute } from "next";
import { capabilityPages } from "@/lib/data/capabilityPages";
import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/capabilities",
  ...capabilityPages.map((page) => `/capabilities/${page.slug}`),
  "/expertise",
  "/solutions",
  "/projects",
  "/insights",
  "/company",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/capabilities/") ? 0.6 : 0.7,
  }));
}
