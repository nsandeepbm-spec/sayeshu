import { CapabilityPage, capabilityMetadata } from "@/lib/capabilityPage";

export const metadata = capabilityMetadata("power-energy");

export default function PowerEnergyPage() {
  return <CapabilityPage slug="power-energy" />;
}
