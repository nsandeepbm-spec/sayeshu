import { CapabilityPage, capabilityMetadata } from "@/lib/capabilityPage";

export const metadata = capabilityMetadata("cooling-thermal");

export default function CoolingThermalPage() {
  return <CapabilityPage slug="cooling-thermal" />;
}
