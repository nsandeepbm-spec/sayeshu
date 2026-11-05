import { CapabilityPage, capabilityMetadata } from "@/lib/capabilityPage";

export const metadata = capabilityMetadata("standards-assurance");

export default function StandardsAssurancePage() {
  return <CapabilityPage slug="standards-assurance" />;
}
